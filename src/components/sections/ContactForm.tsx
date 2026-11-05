import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { asianCountries, site } from "@/data/site";
import { destinations } from "@/data/destinations";

type Status = "idle" | "sending" | "sent" | "error";

const rowClass = "grid grid-cols-1 gap-[18px] sm:grid-cols-2";
const labelClass = "grid content-start gap-[7px] text-[0.92rem] font-bold";
const fieldClass = "w-full rounded-sm border border-border bg-white px-3.5 py-[13px] font-normal text-ink focus:border-primary-light focus:outline-2 focus:outline-primary-light";

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
      <div className="rounded-lg bg-success-soft px-9 py-11 text-success" role="status">
        <h3>Thank you, we have your message.</h3>
        <p className="mt-2.5">A counsellor will reply to you by email.</p>
      </div>
    );
  }

  return (
    <form className="grid gap-[18px] rounded-lg bg-white p-[clamp(24px,4vw,40px)] text-ink shadow-card" onSubmit={handleSubmit}>
      <div className={rowClass}>
        <label className={labelClass}>Full name<input className={fieldClass} name="name" required autoComplete="name" maxLength={120} /></label>
        <label className={labelClass}>Email<input className={fieldClass} name="email" type="email" required autoComplete="email" maxLength={160} /></label>
      </div>
      <div className={rowClass}>
        <label className={labelClass}>Phone or WhatsApp<input className={fieldClass} name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label className={labelClass}>Your country
          <select className={fieldClass} name="country" required defaultValue="">
            <option value="" disabled>Select a country</option>
            {asianCountries.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
      </div>
      <div className={rowClass}>
        <label className={labelClass}>Where would you like to study?
          <select className={fieldClass} name="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Not sure yet</option>
            {destinations.map((d) => <option key={d.slug}>{d.name}</option>)}
          </select>
        </label>
        <label className={labelClass}>Study level
          <select className={fieldClass} name="level" defaultValue="">
            <option value="">Not sure yet</option>
            <option>Foundation or diploma</option>
            <option>Bachelor&apos;s</option>
            <option>Master&apos;s</option>
            <option>PhD</option>
            <option>Language course</option>
          </select>
        </label>
      </div>
      <label className={labelClass}>Your message<textarea className={fieldClass} name="message" rows={5} maxLength={3000} placeholder="Your subject, budget, intended start date and any questions" /></label>
      {/* Hidden from people; contact.php ignores submissions where bots fill it in. */}
      <input className="absolute -left-[9999px] size-px" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {status === "error" && (
        <p className="rounded-sm bg-error-soft px-4 py-[13px] text-[0.95rem] text-error" role="alert">
          Sorry, your message could not be sent. Please try again or email us at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <button type="submit" className="cursor-pointer rounded-full bg-accent px-[26px] py-[15px] font-bold text-ink transition-colors hover:bg-accent-dark disabled:cursor-wait disabled:opacity-65" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Request my free consultation"}
      </button>
      <p className="text-center text-[0.85rem] text-muted">We use your details only to respond to your enquiry. See our <Link className="underline" href="/privacy/">privacy policy</Link>.</p>
    </form>
  );
}
