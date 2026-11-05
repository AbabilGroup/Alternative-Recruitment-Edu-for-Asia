import { testimonials } from "@/data/faqs";

// Renders nothing until real reviews are added to src/data/faqs.ts.
export default function Testimonials() {
  if (testimonials.length === 0) return null;
  return (
    <section className="section section-tinted">
      <div className="site-container">
        <div className="section-head">
          <span className="eyebrow">Student stories</span>
          <h2>In their own words</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-md bg-white p-[30px] shadow-card">
              <blockquote className="mb-[18px]">{t.quote}</blockquote>
              <figcaption className="text-[0.93rem] text-muted"><strong>{t.name}</strong>, {t.destination}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
