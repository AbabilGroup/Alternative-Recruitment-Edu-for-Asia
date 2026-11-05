import type { GetStaticPaths, GetStaticProps } from "next";
import { Check, CalendarDays, Stamp, BookOpenCheck, BriefcaseBusiness } from "lucide-react";
import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import DestinationCard from "@/components/ui/DestinationCard";
import { destinations, type Destination } from "@/data/destinations";

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
        <div className="mt-7"><Button href={`/contact/?destination=${d.slug}`}>Discuss {d.nameInSentence} with a counsellor</Button></div>
      </PageHero>

      <section className="section">
        <div className="site-container grid grid-cols-1 items-start gap-[clamp(36px,6vw,72px)] lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2>Is {d.nameInSentence} right for you?</h2>
            <p className="mt-[18px] text-[1.12rem] text-muted">{d.intro}</p>
            <h3 className="mb-4 mt-[38px]">Why students choose it</h3>
            <ul className="grid gap-3">
              {d.reasons.map((r) => <li key={r} className="flex gap-3"><Check size={20} className="mt-1 flex-none text-primary-light" />{r}</li>)}
            </ul>
            <h3 className="mb-4 mt-[38px]">Popular fields of study</h3>
            <ul className="flex flex-wrap gap-[9px]">
              {d.fields.map((f) => <li key={f} className="rounded-full bg-primary-soft px-[15px] py-[7px] text-[0.92rem] font-semibold text-primary">{f}</li>)}
            </ul>
          </div>
          <aside className="overflow-hidden rounded-md bg-white shadow-card lg:sticky lg:top-[calc(var(--header-height)+20px)]" aria-label={`Key facts for ${d.nameInSentence}`}>
            <div className="flex items-center justify-between bg-primary px-6 py-[18px] text-on-dark">
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.1em]">Quick facts</span>
              <strong className="font-display text-[1.4rem] tracking-[0.08em] text-accent">{d.code}</strong>
            </div>
            <dl className="px-6 py-2">
              {facts.map((f) => (
                <div key={f.label} className="border-b border-dashed border-border py-[15px] last:border-b-0">
                  <dt className="flex items-center gap-[7px] text-[0.74rem] font-bold uppercase tracking-[0.08em] text-muted"><f.icon size={16} />{f.label}</dt>
                  <dd className="mt-[5px] text-[0.97rem] font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="bg-accent-soft px-6 py-4 text-[0.85rem]">Visa, work and test rules change often and depend on your course and nationality. Always confirm the latest details with the official source. Your counsellor can help you check them.</p>
          </aside>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="site-container">
          <div className="section-head"><h2>Compare other destinations</h2></div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
