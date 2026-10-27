import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, type ReactNode } from 'react';
import { nav, site } from '@/data/site';
import { getDestination, type Destination } from '@/data/destinations';

const footerDestinations = ['malta', 'hungary', 'italy', 'poland', 'united-kingdom', 'germany', 'united-states', 'australia', 'canada']
  .map(getDestination)
  .filter((d): d is Destination => Boolean(d));

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Alternative Recruitment home">
      <span className="brand-mark">A</span>
      <span className="brand-name">
        ALTERNATIVE<small>RECRUITMENT</small>
      </span>
    </Link>
  );
}

function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route (or hash) changes.
  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    router.events.on('hashChangeStart', close);
    return () => {
      router.events.off('routeChangeStart', close);
      router.events.off('hashChangeStart', close);
    };
  }, [router.events]);

  const isActive = (href: string) => {
    const path = router.asPath.split(/[?#]/)[0];
    return href === '/' ? path === '/' : path.startsWith(href);
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="top-links">
            <Link href="/about/">Global education guidance</Link>
            <Link href="/destinations/">Explore destinations</Link>
          </div>
          <div className="top-right">
            <a href={site.phoneHref}>☎ Direct Call: {site.phone}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener">
              ◉ WhatsApp UK: {site.phone}
            </a>
            <a href={site.whatsappMalta} target="_blank" rel="noopener">
              ◉ WhatsApp Europe: {site.whatsappMaltaLabel}
            </a>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <Brand />
          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '×' : '☰'}
          </button>
          <nav className={`nav${open ? ' open' : ''}`} aria-label="Main navigation">
            {nav.map((item) =>
              item.children ? (
                <div className="dropdown" key={item.href}>
                  <Link className={`dropdown-toggle${isActive(item.href) ? ' active' : ''}`} href={item.href}>
                    {item.label}⌄
                  </Link>
                  <div className="dropdown-menu">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={isActive(item.href) ? 'active' : undefined}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <Link className="btn btn-blue nav-cta" href="/contact/">
            Free Consultation ↗
          </Link>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <Brand />
            <p>
              Transforming ambitions into global educational success with expert guidance, university admissions and
              visa support since {site.established}.
            </p>
            <Link className="btn btn-outline" href="/contact/">
              Talk to an Advisor ↗
            </Link>
          </div>
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/about/">About Us</Link>
              <Link href="/services/">Services</Link>
              <Link href="/partner-program/">Partner Program</Link>
              <Link href="/contact/">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4>Destinations</h4>
            <div className="footer-links">
              {footerDestinations.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}/`}>
                  {d.name}
                </Link>
              ))}
              <Link href="/destinations/">All destinations →</Link>
            </div>
          </div>
          <div>
            <h4>Get in Touch</h4>
            <div className="footer-links">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
              <a href={site.whatsapp} target="_blank" rel="noopener">
                WhatsApp UK: {site.phone}
              </a>
              <a href={site.whatsappMalta} target="_blank" rel="noopener">
                WhatsApp Europe: {site.whatsappMaltaLabel}
              </a>
              <Link href="/contact/">Book a consultation</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span suppressHydrationWarning>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <div className="legal">
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-of-service/">Terms of Service</Link>
            <Link href="/student-compliance-gdpr/">Student Compliance & GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  // Full <title> text, used as given. Defaults to the home page title.
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function Layout({ title, description, children }: LayoutProps) {
  const fullTitle = title || `${site.name} | ${site.tagline}`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description || site.description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description || site.description} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <a className="whatsapp-fab" href={site.whatsapp} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
        ◉
      </a>
    </>
  );
}
