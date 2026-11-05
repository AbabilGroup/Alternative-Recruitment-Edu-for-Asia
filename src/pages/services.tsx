import Image from "next/image";
import { Check } from "lucide-react";
import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { services } from "@/data/services";
import styles from "@/styles/Services.module.css";

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" description="University shortlisting, applications, scholarships, test preparation, visa preparation and pre-departure support for Asian students." />
      <PageHero
        eyebrow="Our services"
        title="Help with the whole journey, or just the part you need"
        intro="From choosing a course to landing at your university, here is how we can support you."
        image="/images/lecture.webp"
      />
      <section className="section">
        <div className={`container ${styles.list}`}>
          {services.map((s) => (
            <article key={s.id} id={s.id} className={styles.row}>
              <div className={styles.photo}>
                <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 860px) 100vw, 560px" className={styles.image} />
              </div>
              <div>
                <span className={styles.icon}><s.icon size={24} /></span>
                <h2>{s.title}</h2>
                <p className={styles.summary}>{s.summary}</p>
                <ul className={styles.details}>
                  {s.details.map((d) => <li key={d}><Check size={19} />{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
