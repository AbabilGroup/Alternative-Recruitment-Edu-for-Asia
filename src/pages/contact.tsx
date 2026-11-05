import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Seo from "@/components/ui/Seo";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Seo title="Book a Free Consultation" description="Book a free study abroad consultation with Alternative Recruitment Edu. Available online for students across Asia." />
      <section className={styles.page}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Free consultation</span>
            <h1>Let&apos;s talk about your study plans</h1>
            <p>Tell us a little about yourself and what you hope to study. It helps to have your latest grades and rough budget in mind, but you don&apos;t need everything worked out yet.</p>
            <ul className={styles.contacts}>
              <li><Mail size={20} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
              {site.phone && <li><Phone size={20} /><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
              {site.whatsapp && <li><MessageCircle size={20} /><a href={`https://wa.me/${site.whatsapp}`}>Message us on WhatsApp</a></li>}
              {site.address && <li><MapPin size={20} /><span>{site.address}</span></li>}
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
