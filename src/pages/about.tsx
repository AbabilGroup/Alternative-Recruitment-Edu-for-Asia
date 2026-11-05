import Image from "next/image";
import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";

const values = [
  { title: "Clarity", text: "We explain costs, requirements and risks in plain language, for students and for families." },
  { title: "Honesty", text: "We do not promise outcomes that only a university or an embassy can decide." },
  { title: "Fit", text: "A good recommendation depends on your goals and budget, not on a ranking alone." },
];

export default function AboutPage() {
  return (
    <>
      <Seo title="About" description="Alternative Recruitment Edu offers clear, student-first study abroad guidance for students and families across Asia." />
      <PageHero eyebrow="About us" title="A clearer way to study abroad from Asia" image="/images/library.webp" />
      <section className="section">
        <div className="site-container grid grid-cols-1 items-center gap-[clamp(32px,6vw,72px)] md:grid-cols-2">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Recruitment that begins with the student</h2>
            <p className="mt-[18px] text-[1.08rem] text-muted">Alternative Recruitment Edu guides students across Asia through decisions that shape their careers and their family finances.</p>
            <p className="mt-[18px] text-[1.08rem] text-muted">Choosing where to study can be confusing. Rules vary by country, advice varies by adviser, and the costs are significant. Our role is to make the options clear, so that you and your family can make the decision with confidence.</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/team.webp" alt="A team working together around a table with laptops" fill sizes="(max-width: 860px) 100vw, 560px" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="site-container">
          <div className="section-head"><span className="eyebrow">What guides us</span><h2>Our values</h2></div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map((v) => <div key={v.title} className="rounded-sm border-t-4 border-accent bg-white p-8"><h3>{v.title}</h3><p className="mt-2.5 text-muted">{v.text}</p></div>)}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
