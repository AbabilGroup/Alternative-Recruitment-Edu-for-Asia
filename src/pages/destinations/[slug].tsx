import type { GetStaticPaths, GetStaticProps } from "next";
import { Check, CalendarDays, Stamp, BookOpenCheck, BriefcaseBusiness } from "lucide-react";
import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations, type Destination } from "@/data/destinations";
import styles from "@/styles/DestinationDetail.module.css";

type Props = { destination: Destination; others: Destination[] };

export default function DestinationDetail({ destination: d, others }: Props) {
  const facts = [
    { icon: CalendarDays, label: "Main intakes", value: d.intakes },
    { icon: Stamp, label: "Student visa", value: d.visa },
    { icon: BookOpenCheck, label: "Common tests", value: d.tests },
    { icon: BriefcaseBusiness, label: "After you graduate", value: d.afterStudy },
  ];

  return (
    <>
      <Seo title={`Study in ${d.nameInSentence}`} description={`${d.tagline}. Intakes, student visa, tests and post-study routes for Asian students planning to study in ${d.nameInSentence}.`} />
      <PageHero eyebrow="Destination guide" title={`Study in ${d.nameInSentence}`} intro={d.tagline} image={d.image}>
        <div className={styles.heroAction}><Button href={`/contact/?destination=${d.slug}`}>Discuss {d.nameInSentence} with a counsellor</Button></div>
      </PageHero>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div>
            <h2>Is {d.nameInSentence} right for you?</h2>
            <p className={styles.intro}>{d.intro}</p>
            <h3 className={styles.subhead}>Why students choose it</h3>
            <ul className={styles.reasons}>
              {d.reasons.map((r) => <li key={r}><Check size={20} />{r}</li>)}
            </ul>
            <h3 className={styles.subhead}>Popular fields of study</h3>
            <ul className={styles.tags}>
              {d.fields.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <aside className={styles.pass} aria-label={`Key facts for ${d.nameInSentence}`}>
            <div className={styles.passHead}>
              <span>Quick facts</span>
              <strong>{d.code}</strong>
            </div>
            <dl>
              {facts.map((f) => (
                <div key={f.label}>
                  <dt><f.icon size={16} />{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.caveat}>Visa, work and test rules change often and depend on your course and nationality. Always confirm the latest details with the official source. Your counsellor can help you check them.</p>
          </aside>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head"><h2>Compare other destinations</h2></div>
          <div className={styles.others}>
            {others.map((o) => <DestinationCard key={o.slug} destination={o} />)}
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: destinations.map((d) => ({ params: { slug: d.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const index = destinations.findIndex((d) => d.slug === params?.slug);
  if (index === -1) return { notFound: true };
  // The next three countries in the list, wrapping around at the end.
  const others = [1, 2, 3].map((n) => destinations[(index + n) % destinations.length]);
  return { props: { destination: destinations[index], others } };
};
