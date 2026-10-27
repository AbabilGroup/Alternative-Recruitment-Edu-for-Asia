import Link from 'next/link';
import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode } from 'react';
import { img } from '@/data/images';
import { site, stats, testimonials, wa } from '@/data/site';
import { destinations, extraDestinations, regions, type Destination, type RegionId } from '@/data/destinations';
import { features } from '@/data/services';

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  image: string;
  crumbs?: Crumb[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, copy, image, crumbs = [], children }: PageHeroProps) {
  return (
    <section className="page-hero" style={{ '--bg': `url("${image}")` } as CSSProperties}>
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}>
                {' / '}
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {copy && <p className="hero-copy">{copy}</p>}
        {children}
      </div>
    </section>
  );
}

export function Stats({ heading }: { heading?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [values, setValues] = useState<number[]>(stats.map(() => 0));

  // Count-up animation begins when the stats strip enters the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setValues(stats.map((s) => Math.round(s.count * ease)));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="container">
        {heading && <h2 className="stats-heading">{heading}</h2>}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat" key={s.label}>
              <div className="stat-number">
                {values[i].toLocaleString('en-US')}
                {s.suffix}
              </div>
              <p>{s.label}</p>
              {s.note && <small style={{ fontSize: '.72rem' }}>{s.note}</small>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <div className="feature-grid">
      {features.map((f) => (
        <article className="feature" key={f.title}>
          <div className="mini-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </article>
      ))}
    </div>
  );
}

interface DestinationCardProps {
  d: Destination;
  // Home uses "Connect with …", the destinations pages use "Chat with …".
  verb?: 'Connect with' | 'Chat with';
}

export function DestinationCard({ d, verb = 'Chat with' }: DestinationCardProps) {
  return (
    <article className="destination-card">
      <Link href={`/destinations/${d.slug}/`} className="destination-image">
        <img src={d.image.replace('w=1600', 'w=700')} alt={d.alt} loading="lazy" />
        <span className="country-tag">{d.name}</span>
      </Link>
      <div className="destination-content">
        <h3>
          <Link href={`/destinations/${d.slug}/`}>{d.title}</Link>
        </h3>
        <p>{d.summary}</p>
        <div className="destination-meta">
          {d.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <a className="wa-link" href={wa(`I'd like to study in ${d.name}`, d.advisor)} target="_blank" rel="noopener">
          ◉ {verb} {d.advisorLabel} on WhatsApp →
        </a>
      </div>
    </article>
  );
}

export function regionLabel(id: RegionId): string {
  return regions.find((r) => r.id === id)?.heading ?? '';
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);
  const show = (i: number) => setCurrent((i + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[current];
  return (
    <section className="section testimonials" id="stories">
      <div className="container testimonial-wrap">
        <div className="testimonial-intro">
          <span className="eyebrow">Student stories</span>
          <div className="big-quote">“</div>
          <h2>Verified Student Feedback</h2>
          <p>Hear from students who turned their study abroad plans into university admissions with our guidance.</p>
          <div className="testimonial-controls">
            <button className="round-btn" aria-label="Previous testimonial" onClick={() => show(current - 1)}>
              ←
            </button>
            <button className="round-btn" aria-label="Next testimonial" onClick={() => show(current + 1)}>
              →
            </button>
          </div>
        </div>
        <div>
          <article
            className="testimonial-card"
            aria-live="polite"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={(e) => {
              touchX.current = e.changedTouches[0].screenX;
            }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].screenX - touchX.current;
              if (Math.abs(delta) > 45) show(current + (delta < 0 ? 1 : -1));
            }}
          >
            <div className="stars">★★★★★</div>
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="student">
              <span className="initials" aria-hidden="true">
                {initials(t.name)}
              </span>
              <div>
                <strong>— {t.name}</strong>
                <span>{t.meta}</span>
              </div>
            </div>
          </article>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot${i === current ? ' active' : ''}`}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => show(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Forms ---------- */

export const studyCountries = [
  ...destinations.map((d) => d.name),
  ...extraDestinations.map((d) => d.name),
  'Other / Not sure yet',
];

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

// Posts to /send-mail.php (public/send-mail.php), which cPanel runs with PHP.
function useMailForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modal]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    try {
      const res = await fetch('/send-mail.php', { method: 'POST', body: new FormData(form) });
      const data: { ok?: boolean } = await res.json();
      if (!res.ok || !data.ok) throw new Error();
      form.reset();
      setStatus('sent');
      setModal(true);
    } catch {
      setStatus('error');
    }
  }

  return { status, modal, closeModal: () => setModal(false), onSubmit };
}

interface FormShellProps {
  formType: 'consultation' | 'partner' | 'contact';
  title: string;
  intro: string;
  submitLabel: string;
  successTitle: string;
  successText: string;
  children: ReactNode;
}

function FormShell({ formType, title, intro, submitLabel, successTitle, successText, children }: FormShellProps) {
  const { status, modal, closeModal, onSubmit } = useMailForm();
  return (
    <>
      <form className="form-card" onSubmit={onSubmit} noValidate>
        <h3>{title}</h3>
        <p>{intro}</p>
        <input type="hidden" name="formType" value={formType} />
        <div className="form-grid">
          {children}
          {/* Honeypot field: real visitors never see or fill this in. */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
        </div>
        <button className="btn btn-primary form-submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : `${submitLabel} →`}
        </button>
        <p className="form-note">
          By submitting, you agree that our team may contact you about your enquiry. Please review our{' '}
          <Link href="/privacy-policy/" style={{ textDecoration: 'underline' }}>
            privacy policy
          </Link>
          .
        </p>
        {status === 'error' && (
          <div className="form-error" role="alert">
            Sorry, we couldn&apos;t send your request right now. Please try again, or message us on{' '}
            <a href={site.whatsapp} target="_blank" rel="noopener" style={{ textDecoration: 'underline' }}>
              WhatsApp
            </a>
            .
          </div>
        )}
      </form>
      {modal && (
        <div
          className="modal open"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${formType}-modal-title`}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="modal-box">
            <div className="modal-check">✓</div>
            <h3 id={`${formType}-modal-title`}>{successTitle}</h3>
            <p>{successText}</p>
            <button className="btn btn-blue modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ContactPoints() {
  return (
    <div className="contact-points">
      <a className="contact-point" href={site.phoneHref}>
        <div className="cp-icon">☎</div>
        <div>
          <strong>Phone Direct</strong>
          <small>{site.phone}</small>
        </div>
      </a>
      <a className="contact-point" href={site.whatsapp} target="_blank" rel="noopener">
        <div className="cp-icon">◉</div>
        <div>
          <strong>WhatsApp Advisory (UK)</strong>
          <small>{site.phone}</small>
        </div>
      </a>
      <a className="contact-point" href={site.whatsappMalta} target="_blank" rel="noopener">
        <div className="cp-icon">◉</div>
        <div>
          <strong>WhatsApp Advisory (Europe / Malta)</strong>
          <small>{site.whatsappMaltaLabel}</small>
        </div>
      </a>
      <a className="contact-point" href={site.emailHref}>
        <div className="cp-icon">✉</div>
        <div>
          <strong>Email</strong>
          <small>{site.email}</small>
        </div>
      </a>
    </div>
  );
}

interface ContactSectionProps {
  defaultCountry?: string;
}

// Student consultation form (Home, About, Services, Destinations).
export function ContactSection({ defaultCountry = '' }: ContactSectionProps) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="eyebrow">Let&apos;s plan your next step</span>
          <h2>Begin Your Study Abroad Journey</h2>
          <p className="contact-copy">
            Take the first step toward your international qualification today. Complete the form below to receive a
            personalized consultation from our senior educational advisors.
          </p>
          <ContactPoints />
        </div>
        <FormShell
          formType="consultation"
          title="Request a free consultation"
          intro="Share your study goals and our advisors will get back to you."
          submitLabel="Submit Consultation Request"
          successTitle="Thanks for reaching out!"
          successText="Your consultation request has been sent. Our advisory team will get back to you shortly."
        >
          <div className="field">
            <label htmlFor="fullName">Full Name *</label>
            <input id="fullName" name="fullName" autoComplete="name" required placeholder="Your full name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number *</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="+ country code" />
          </div>
          <div className="field">
            <label htmlFor="country">Desired Study Country *</label>
            <select id="country" name="country" required defaultValue={defaultCountry}>
              <option value="">Select a destination</option>
              {studyCountries.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="field full">
            <label htmlFor="intake">Preferred Intake</label>
            <select id="intake" name="intake" defaultValue="">
              <option value="">Choose an intake</option>
              <option>January / Winter</option>
              <option>May / Spring</option>
              <option>September / Autumn</option>
              <option>Flexible / Need advice</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your study plans, preferred course or questions..."
            />
          </div>
        </FormShell>
      </div>
    </section>
  );
}

export function PartnerForm() {
  return (
    <FormShell
      formType="partner"
      title="Register as an ARL Abroad Partner"
      intro="Tell us about your agency and student volume."
      submitLabel="Submit Partner Application"
      successTitle="Application received!"
      successText="Thank you for applying. Our agency manager will review your profile and arrange an introductory onboarding call."
    >
      <div className="field">
        <label htmlFor="agencyName">Agency / Business Name *</label>
        <input id="agencyName" name="agencyName" autoComplete="organization" required />
      </div>
      <div className="field">
        <label htmlFor="contactName">Contact Person Name *</label>
        <input id="contactName" name="fullName" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="partnerEmail">Business Email Address *</label>
        <input id="partnerEmail" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="partnerPhone">Phone / WhatsApp Number *</label>
        <input id="partnerPhone" name="phone" type="tel" autoComplete="tel" required placeholder="+ country code" />
      </div>
      <div className="field">
        <label htmlFor="operationCountry">Country of Operation *</label>
        <input id="operationCountry" name="country" autoComplete="country-name" required />
      </div>
      <div className="field">
        <label htmlFor="studentVolume">Estimated Annual Student Volume</label>
        <select id="studentVolume" name="studentVolume" defaultValue="">
          <option value="">Select a range</option>
          <option>1–25</option>
          <option>26–100</option>
          <option>101–250</option>
          <option>250+</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="businessInfo">Additional Business Information</label>
        <textarea id="businessInfo" name="message" placeholder="Your agency, markets you recruit from, programs of interest..." />
      </div>
    </FormShell>
  );
}

export function ContactForm() {
  return (
    <FormShell
      formType="contact"
      title="Send Us a Message"
      intro="Our advisory team will reply as soon as possible."
      submitLabel="Send Direct Message"
      successTitle="Message sent!"
      successText="Thank you for contacting us. Our advisory team will get back to you shortly."
    >
      <div className="field">
        <label htmlFor="cName">Full Name *</label>
        <input id="cName" name="fullName" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cEmail">Email Address *</label>
        <input id="cEmail" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field">
        <label htmlFor="cPhone">Phone Number *</label>
        <input id="cPhone" name="phone" type="tel" autoComplete="tel" required placeholder="+ country code" />
      </div>
      <div className="field">
        <label htmlFor="inquiryType">Inquiry Type *</label>
        <select id="inquiryType" name="inquiryType" required defaultValue="">
          <option value="">Select an option</option>
          <option>Student Admission</option>
          <option>Visa Guidance</option>
          <option>Partner Program</option>
          <option>General Inquiry</option>
        </select>
      </div>
      <div className="field full">
        <label htmlFor="cMessage">Your Message</label>
        <textarea id="cMessage" name="message" />
      </div>
    </FormShell>
  );
}

export function AboutIntro() {
  return (
    <div className="why-image">
      <img src={img.studentsLibrary} alt="Students studying together in a library" />
      <div className="why-note">
        <strong>{site.established}</strong>
        <span>Guiding international students for over three decades.</span>
      </div>
    </div>
  );
}
