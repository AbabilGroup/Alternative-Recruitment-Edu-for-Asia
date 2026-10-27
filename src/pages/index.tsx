import Link from 'next/link';
import Layout from '@/components/Layout';
import { AboutIntro, ContactSection, DestinationCard, Features, Stats, Testimonials } from '@/components/Sections';
import { img } from '@/data/images';
import { audiences } from '@/data/services';
import { destinations, type Destination } from '@/data/destinations';

const featuredSlugs = ['malta', 'hungary', 'italy', 'poland', 'united-kingdom', 'germany', 'united-states', 'australia'];
const featured = featuredSlugs
  .map((slug) => destinations.find((d) => d.slug === slug))
  .filter((d): d is Destination => Boolean(d));

export default function Home() {
  return (
    <Layout title="Alternative Recruitment | Global Student Mobility & University Admissions Consultancy">
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Your future has no borders</span>
            <h1>
              Transforming Ambitions into <span>Global Educational Success</span>
            </h1>
            <p className="hero-copy">
              Expert guidance, university admissions, and visa support for international students pursuing higher
              education across Europe, the UK, North America, and beyond.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact/">
                Book Free Student Consultation <span>→</span>
              </Link>
              <Link className="btn btn-outline" href="/partner-program/">
                Become a Recruitment Partner ↗
              </Link>
            </div>
            <div className="hero-trust">
              <div className="avatar-stack">
                <img src={img.avatar1} alt="" />
                <img src={img.avatar2} alt="" />
                <img src={img.avatar3} alt="" />
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <span>5,000+ students successfully enrolled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience" aria-labelledby="audience-title">
        <div className="container">
          <div className="section-head center audience-head">
            <span className="eyebrow">Who we help</span>
            <h2 id="audience-title">Tailored Pathways for Every Stakeholder</h2>
          </div>
          <div className="audience-grid">
            {audiences.map((a) => (
              <article className="audience-card" key={a.title}>
                <div className="audience-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <Link className="text-link" href={a.href}>
                  {a.cta} <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container why-grid">
          <AboutIntro />
          <div>
            <div className="section-head">
              <span className="eyebrow">A clearer path forward</span>
              <h2>Why Pursue Higher Education in Europe &amp; Globally?</h2>
              <p>
                Europe and leading global destinations stand at the forefront of international education, offering
                world-class academic standards, accredited qualifications, and rich cultural experiences. Institutions
                across destinations such as Malta, the UK, Germany, Hungary, Poland, and Ireland attract thousands of
                international scholars annually through cost-effective, high-quality degree offerings.
              </p>
            </div>
            <h3>Key Benefits of Studying Abroad</h3>
            <Features />
            <div style={{ marginTop: 27 }}>
              <Link className="btn btn-blue" href="/contact/">
                Start Your Visa Assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Stats heading="Impact at a Glance" />

      <section className="section destinations" id="destinations">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Find your fit</span>
            <h2>Featured Study Destinations</h2>
            <p>Prime destinations for international students, with a dedicated advisor for each region.</p>
          </div>
          <div className="destination-grid">
            {featured.map((d) => (
              <DestinationCard key={d.slug} d={d} verb="Connect with" />
            ))}
          </div>
          <div className="section-cta">
            <Link className="btn btn-blue" href="/destinations/">
              View All Study Destinations →
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
    </Layout>
  );
}
