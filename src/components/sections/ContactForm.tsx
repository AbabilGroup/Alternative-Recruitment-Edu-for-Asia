import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { asianCountries, site } from "@/data/site";
import { destinations } from "@/data/destinations";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [destination, setDestination] = useState("");

  // Destination pages link here with ?destination=<slug> to preselect the country.
  useEffect(() => {
    if (!router.isReady) return;
    const match = destinations.find((d) => d.slug === router.query.destination);
    if (match) setDestination(match.name);
  }, [router.isReady, router.query.destination]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await res.json();
      if (!res.ok || !result.ok) throw new Error("Send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.success} role="status">
        <h3>Thank you, we have your message.</h3>
        <p>A counsellor will reply to you by email.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>Full name<input name="name" required autoComplete="name" maxLength={120} /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" maxLength={160} /></label>
      </div>
      <div className={styles.row}>
        <label>Phone or WhatsApp<input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label>Your country
          <select name="country" required defaultValue="">
            <option value="" disabled>Select a country</option>
            {asianCountries.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>
      <div className={styles.row}>
        <label>Where would you like to study?
          <select name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Not sure yet</option>
            {destinations.map((d) => <option key={d.slug}>{d.name}</option>)}
          </select>
        </label>
        <label>Study level
          <select name="level" defaultValue="">
            <option value="">Not sure yet</option>
            <option>Foundation or diploma</option>
            <option>Bachelor&apos;s</option>
            <option>Master&apos;s</option>
            <option>PhD</option>
            <option>Language course</option>
          </select>
        </label>
      </div>
      <label>Your message<textarea name="message" rows={5} maxLength={3000} placeholder="Your subject, budget, intended start date and any questions" /></label>
      {/* Hidden from people; contact.php ignores submissions where bots fill it in. */}
      <input className={styles.trap} name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === "error" && (
        <p className={styles.error} role="alert">
          Sorry, your message could not be sent. Please try again or email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request my free consultation"}
      </button>
      <p className={styles.note}>We use your details only to respond to your enquiry. See our <Link href="/privacy/">privacy policy</Link>.</p>
    </form>
  );
}
