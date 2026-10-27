import Link from 'next/link';
import Layout from '@/components/Layout';
import { PageHero, PartnerForm, Stats } from '@/components/Sections';
import { img } from '@/data/images';
import { partnerBenefits } from '@/data/services';
import { site } from '@/data/site';

export default function PartnerProgram() {
  return (
    <Layout
      title="Sub-Agent & Institutional Partner Program | ARL Abroad Partner"
      description="Join a global network of sub-agents and educational associates. Access direct university pipelines, application tools, and dedicated commission support."
    >
      <PageHero
        eyebrow="ARL Abroad Partner"
        title="Scale Your Education Agency with ARL Abroad Partner"
        copy="Join a global network of sub-agents and educational associates. Access direct university pipelines, application tools, and dedicated commission support."
        image={img.officeMeeting}
        crumbs={[{ label: 'Partner Program' }]}
      >
        <div className="hero-actions">
          <Link className="btn btn-primary" href="#partner-form">
            Apply for Partner Network →
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div className="split-media">
            <img src={img.handshake} alt="Two business partners shaking hands" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Sub-agents &amp; institutions</span>
            <h2>Why Partner with Alternative Recruitment?</h2>
            <p>
              The ARL Abroad Partner Program is designed to provide recruitment sub-agents, local counselors, and
              education associates with the tools, institutional access, and operational support necessary to scale
              student enrollments.
            </p>
            <Link className="btn btn-blue" href="#partner-form">
              Apply for Partner Network →
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Partner benefits</span>
            <h2>Partner Advantages</h2>
          </div>
          <div className="card-grid cols-4">
            {partnerBenefits.map((b) => (
              <article className="feature" key={b.title}>
                <div className="mini-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      <section className="section contact-section" id="partner-form">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Partner application</span>
            <h2>Join the ARL Partner Network</h2>
            <p className="contact-copy">
              Complete the partnership application below. Our agency manager will review your profile and arrange an
              introductory onboarding call.
            </p>
            <div className="contact-points">
              <a className="contact-point" href={site.whatsapp} target="_blank" rel="noopener">
                <div className="cp-icon">◉</div>
                <div>
                  <strong>Partner enquiries on WhatsApp</strong>
                  <small>
                    {site.phone} · {site.whatsappMaltaLabel}
                  </small>
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
          </div>
          <PartnerForm />
        </div>
      </section>
    </Layout>
  );
}
