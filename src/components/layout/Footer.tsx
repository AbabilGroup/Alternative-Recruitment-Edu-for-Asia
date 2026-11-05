import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { destinations } from "@/data/destinations";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo onDark />
          <p>{site.tagline}. Clear advice on countries, courses, applications, funding and visas.</p>
        </div>
        <div>
          <h3 className={styles.title}>Explore</h3>
          <ul className={styles.list}>
            {navLinks.map((l) => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Destinations</h3>
          <ul className={`${styles.list} ${styles.twoCol}`}>
            {destinations.map((d) => <li key={d.slug}><Link href={`/destinations/${d.slug}/`}>{d.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Contact</h3>
          <ul className={styles.list}>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>}
            {site.whatsapp && <li><a href={`https://wa.me/${site.whatsapp}`}>WhatsApp</a></li>}
            {site.address && <li>{site.address}</li>}
            <li><Link href="/contact/">Book a consultation</Link></li>
          </ul>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span className={styles.legal}>
          <Link href="/privacy/">Privacy policy</Link>
          <Link href="/terms/">Terms of use</Link>
        </span>
      </div>
    </footer>
  );
}
