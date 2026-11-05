import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import Seo from "@/components/ui/Seo";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <Seo title="Book a Free Consultation" description="Book a free study abroad consultation with Alternative Recruitment Edu. Available online for students across Asia." />
      <section className="bg-primary-dark text-on-dark">
        <div className="site-container grid grid-cols-1 items-start gap-[clamp(36px,6vw,72px)] py-[clamp(56px,8vw,96px)] lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow text-accent">Free consultation</span>
            <h1 className="text-[clamp(2.2rem,4.4vw,3.4rem)]">Let&apos;s talk about your study plans</h1>
            <p className="mt-5 text-[1.1rem] text-on-dark-muted">Tell us a little about yourself and what you hope to study. It helps to have your latest grades and rough budget in mind, but you don&apos;t need everything worked out yet.</p>
            <ul className="mt-8 grid gap-3.5 [&_a]:[overflow-wrap:anywhere] [&_a:hover]:text-accent [&_li]:flex [&_li]:items-center [&_li]:gap-3 [&_svg]:flex-none [&_svg]:text-accent">
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
