import Image from "next/image";
import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import styles from "@/styles/About.module.css";

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
        <div className={`container ${styles.story}`}>
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>Recruitment that begins with the student</h2>
            <p>Alternative Recruitment Edu guides students across Asia through decisions that shape their careers and their family finances.</p>
            <p>Choosing where to study can be confusing. Rules vary by country, advice varies by adviser, and the costs are significant. Our role is to make the options clear, so that you and your family can make the decision with confidence.</p>
          </div>
          <div className={styles.photo}>
            <Image src="/images/team.webp" alt="A team working together around a table with laptops" fill sizes="(max-width: 860px) 100vw, 560px" className={styles.image} />
          </div>
        </div>
      </section>
      <section className="section section-tinted">
        <div className="container">
          <div className="section-head"><span className="eyebrow">What guides us</span><h2>Our values</h2></div>
          <div className={styles.values}>
            {values.map((v) => <div key={v.title} className={styles.value}><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
