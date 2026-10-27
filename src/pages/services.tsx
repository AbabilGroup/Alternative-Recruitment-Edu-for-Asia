import Link from 'next/link';
import Layout from '@/components/Layout';
import { ContactSection, PageHero, Testimonials } from '@/components/Sections';
import { img } from '@/data/images';
import { languageCourses, services } from '@/data/services';

export default function Services() {
  return (
    <Layout
      title="Student Services & Guidance | Alternative Recruitment"
      description="Academic counseling, university selection, application auditing, interview preparation, visa filing support and language courses for international students."
    >
      <PageHero
        eyebrow="Student services"
        title="Step-by-Step Guidance from Application to Enrollment"
        copy="Navigating international university admissions and visa requirements demands precision. Our expert advisors manage every stage of your educational journey."
        image={img.graduation}
        crumbs={[{ label: 'Services' }]}
      >
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/contact/">
            Book a Free Advisory Session →
          </Link>
        </div>
      </PageHero>

      <section className="section bg-paper">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Your journey, step by step</span>
            <h2>Comprehensive Student Services</h2>
          </div>
          <div className="steps six">
            {services.map((s) => (
              <div className="step" key={s.title}>
                <h3>
                  {s.icon} {s.title}
                </h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="language">
        <div className="container split">
          <div className="split-media">
            <img src={img.englishClass} alt="Students in an English language class" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Language preparation courses</span>
            <h2>Language Proficiency Enhancement Center</h2>
            <p>
              Achieving required language benchmark standards is essential for university acceptance and visa issuance.
              We offer focused language modules tailored to candidate needs:
            </p>
            <ul className="check-list">
              {languageCourses.map((c) => (
                <li key={c.title}>
                  <strong>{c.title}:</strong> {c.text}
                </li>
              ))}
            </ul>
            <Link className="btn btn-blue" href="/contact/">
              Enquire About Language Classes →
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <ContactSection />
    </Layout>
  );
}
