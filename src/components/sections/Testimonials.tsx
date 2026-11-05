import { testimonials } from "@/data/faqs";
import styles from "./Testimonials.module.css";

// Renders nothing until real reviews are added to src/data/faqs.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="section section-tinted">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Student stories</span>
          <h2>In their own words</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <blockquote>{t.quote}</blockquote>
              <figcaption><strong>{t.name}</strong>, {t.destination}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
