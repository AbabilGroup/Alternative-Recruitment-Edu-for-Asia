import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { destinations } from "@/data/destinations";
import Logo from "./Logo";

const titleClass = "mb-4 text-base tracking-normal text-on-dark";
const listClass = "grid gap-[9px] [&_a]:[overflow-wrap:anywhere] [&_a:hover]:text-accent";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-[0.95rem] text-on-dark-muted">
      <div className="site-container grid grid-cols-1 gap-11 pb-12 pt-[68px] sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.5fr_1.1fr]">
        <div>
          <Logo onDark />
          <p className="mt-[18px] max-w-[320px]">{site.tagline}. Clear advice on countries, courses, applications, funding and visas.</p>
        </div>
        <div>
          <h3 className={titleClass}>Explore</h3>
          <ul className={listClass}>
            {navLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={titleClass}>Destinations</h3>
          <ul className={`${listClass} grid-cols-2 gap-x-[18px]`}>
            {destinations.map((d) => <li key={d.slug}><Link href={`/destinations/${d.slug}/`}>{d.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={titleClass}>Contact</h3>
          <ul className={listClass}>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
            {site.whatsapp && <li><a href={`https://wa.me/${site.whatsapp}`}>WhatsApp</a></li>}
            {site.address && <li>{site.address}</li>}
            <li><Link href="/contact/">Book a consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className="site-container flex flex-wrap justify-between gap-3 border-t border-on-dark-border py-[22px] text-[0.87rem]">
        <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className="flex gap-5 [&_a:hover]:text-accent">
          <Link href="/privacy/">Privacy policy</Link>
          <Link href="/terms/">Terms of use</Link>
        </span>
      </div>
    </footer>
  );
}
