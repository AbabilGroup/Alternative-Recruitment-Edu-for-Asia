import Layout from '@/components/Layout';
import { PageHero } from '@/components/Sections';
import { img } from '@/data/images';

export interface LegalSection {
  heading: string;
  body: string[];
  list?: string[];
}

interface LegalPageProps {
  title: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <Layout title={`${title} | Alternative Recruitment`} description={intro}>
      <PageHero eyebrow="Legal" title={title} copy={intro} image={img.documents} crumbs={[{ label: title }]} />
      <section className="section">
        <div className="container legal-content">
          {sections.map((s) => (
            <div key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.list && (
                <ul>
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="notice">If you have any questions about this page, please contact our team.</p>
        </div>
      </section>
    </Layout>
  );
}
