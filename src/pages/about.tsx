import Link from 'next/link';
import Layout from '@/components/Layout';
import { AboutIntro, ContactSection, PageHero, Stats } from '@/components/Sections';
import { img } from '@/data/images';
import { framework, principles } from '@/data/services';

export default function About() {
  return (
    <Layout
      title="About Us | Alternative Recruitment – Certified Education Consultancy"
      description="Established in 1993, Alternative Recruitment bridges the gap between ambitious global students and world-class universities."
    >
      <PageHero
        eyebrow="About Alternative Recruitment"
        title="Empowering Futures Through International Education"
        copy="Established in 1993, Alternative Recruitment bridges the gap between ambitious global students and world-class universities."
        image={img.teamOffice}
        crumbs={[{ label: 'About Us' }]}
      >
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact/">
            Schedule a Consultation →
          </Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container why-grid">
          <AboutIntro />
          <div>
            <div className="section-head">
              <span className="eyebrow">Our History &amp; Heritage</span>
              <h2>From Local Roots to a Global Educational Network</h2>
              <p>
                Founded in 1993 in Raipur, Bangladesh by Amin &amp; Sons, Alternative Recruitment has grown into a
                certified education and mobility consultancy with an operational presence expanding across more than 30
                countries, including the United Kingdom.
              </p>
              <p>
                Over three decades, our organization has remained committed to a single overarching objective:
                empowering individuals worldwide through personalized, transparent, and ethical academic advisory
                services. We bridge the distance between student ambition and institutional admission, turning complex
                international processes into structured pathways to success.
              </p>
            </div>
            <blockquote className="quote">
              “An investment in knowledge pays the best interest.”
              <cite>— Benjamin Franklin</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Mission, aim &amp; values</span>
            <h2>Our Corporate Framework</h2>
          </div>
          <div className="card-grid">
            {framework.map((f) => (
              <article className="feature" key={f.title}>
                <div className="mini-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">How we work</span>
            <h2>Core Operational Principles</h2>
          </div>
          <div className="card-grid cols-4">
            {principles.map((p) => (
              <article className="feature" key={p.title}>
                <div className="mini-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
