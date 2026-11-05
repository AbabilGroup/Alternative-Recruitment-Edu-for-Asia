import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import Logo from "./Logo";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
    };
  }, [router.events]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo />
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav id="site-nav" className={`${styles.nav} ${open ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>{link.label}</Link>
          ))}
          <Link href="/contact/" className={styles.cta}>Book a free consultation</Link>
        </nav>
      </div>
    </header>
  );
}
