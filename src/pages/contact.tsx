import Layout from '@/components/Layout';
import { ContactForm, PageHero } from '@/components/Sections';
import { img } from '@/data/images';
import { site } from '@/data/site';

export default function Contact() {
  return (
    <Layout
      title="Contact Us | Alternative Recruitment Advisory"
      description="Have questions regarding university applications, country options, student visas, or partner programs? Our advisory team is ready to help."
    >
      <PageHero
        eyebrow="Contact us"
        title="Get in Touch with Our Global Education Advisory"
        copy="Have questions regarding university applications, country options, student visas, or partner programs? Our advisory team is ready to help."
        image={img.studentsTeamwork}
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Reach us directly</span>
            <h2>Direct Contact Channels</h2>
          </div>
          <div className="channel-grid">
            <article className="audience-card">
              <div className="audience-icon">🏢</div>
              <h3>United Kingdom Office &amp; Global Advisory</h3>
              <ul className="channel-list">
                <li>
                  <span>Phone Direct</span>
                  <a href={site.phoneHref}>{site.phone}</a>
                </li>
                <li>
                  <span>WhatsApp Student Line</span>
                  <a href={site.whatsapp} target="_blank" rel="noopener">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span>Official Email</span>
                  <a href={site.emailHref}>{site.email}</a>
                </li>
              </ul>
            </article>
            <article className="audience-card">
              <div className="audience-icon">🌍</div>
              <h3>European Union &amp; Malta Student Desk</h3>
              <ul className="channel-list">
                <li>
                  <span>WhatsApp Advisory Line</span>
                  <a href={site.whatsappMalta} target="_blank" rel="noopener">
                    {site.whatsappMaltaLabel}
                  </a>
                </li>
                <li>
                  <span>Services</span>
                  European University Admissions, Schengen Student Visa Guidance
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Write to us</span>
            <h2>Send Us a Message</h2>
            <p className="contact-copy">
              Tell us about your enquiry, whether it is about a student admission, visa guidance, our partner program or
              anything else, and the right advisor will get back to you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </Layout>
  );
}
