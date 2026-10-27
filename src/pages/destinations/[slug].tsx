import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { ContactSection, DestinationCard, PageHero, regionLabel } from '@/components/Sections';
import { destinations, getDestination, type Destination } from '@/data/destinations';
import { site, wa } from '@/data/site';

interface Props {
  d: Destination;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: destinations.map((d) => ({ params: { slug: d.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  const d = params && getDestination(params.slug);
  return d ? { props: { d } } : { notFound: true };
};

export default function DestinationPage({ d }: Props) {
  const related = destinations.filter((x) => x.region === d.region && x.slug !== d.slug).slice(0, 4);

  return (
    <Layout
      title={`${d.title} | Alternative Recruitment`}
      description={`${d.summary} Get free guidance on studying in ${d.name}.`}
    >
      <PageHero
        eyebrow={regionLabel(d.region)}
        title={d.title}
        copy={d.summary}
        image={d.image}
        crumbs={[{ label: 'Study Destinations', href: '/destinations/' }, { label: d.name }]}
      >
        <div className="hero-actions">
          <Link className="btn btn-primary" href="#contact">
            Get Free Advice on {d.name} →
          </Link>
          <a className="btn btn-outline" href={wa(`I'd like to study in ${d.name}`, d.advisor)} target="_blank" rel="noopener">
            ◉ Chat with {d.advisorLabel} on WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container detail-grid">
          <div>
            <span className="eyebrow">Overview</span>
            <h2>Why study in {d.name}?</h2>
            <div className="detail-tags">
              {d.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <p>{d.overview}</p>
            <h3 style={{ marginTop: 30 }}>Key Highlights</h3>
            <ul className="check-list">
              {d.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 30 }}>How we can help</h3>
            <ul className="check-list">
              <li>Shortlisting institutions and programmes in {d.name}</li>
              <li>Checking entry requirements and intake dates</li>
              <li>Application and documentation support</li>
              <li>Interview preparation and complete visa filing support</li>
              <li>IELTS preparation and spoken English courses</li>
            </ul>
            <div className="notice">
              Entry, work and visa rules vary by country and individual circumstances, and can change. Speak with our
              advisory team for up-to-date guidance for your situation.
            </div>
          </div>
          <aside className="detail-aside">
            <h3>Plan your study in {d.name}</h3>
            <p style={{ fontSize: '.9rem' }}>
              Book a free consultation to explore courses, costs and the next steps for your application.
            </p>
            <Link className="btn btn-primary" href="#contact">
              Book Free Consultation →
            </Link>
            <a className="btn btn-light" href={site.phoneHref}>
              ☎ {site.phone}
            </a>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section destinations">
          <div className="container">
            <div className="section-head center">
              <span className="eyebrow">{regionLabel(d.region)}</span>
              <h2>Explore More Destinations</h2>
            </div>
            <div className="destination-grid">
              {related.map((r) => (
                <DestinationCard key={r.slug} d={r} />
              ))}
            </div>
            <div className="section-cta">
              <Link className="btn btn-blue" href="/destinations/">
                View All Destinations →
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactSection key={d.slug} defaultCountry={d.name} />
    </Layout>
  );
}
