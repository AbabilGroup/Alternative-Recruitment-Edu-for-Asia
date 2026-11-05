import Link from "next/link";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";

export default function ServicesPreview() {
  return (
    <section className="section section-tinted">
      <div className="site-container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Support for every part of the process</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.id}
              href={`/services/#${s.id}`}
              className="rounded-md border border-border bg-white p-[30px] text-ink transition duration-200 hover:-translate-y-[3px] hover:border-primary-light"
            >
              <span className="mb-5 grid size-[50px] place-items-center rounded-[12px] bg-accent-soft text-primary"><s.icon size={24} /></span>
              <h3>{s.title}</h3>
              <p className="mt-2.5 text-[0.98rem] text-muted">{s.summary}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center"><Button href="/services/" variant="primary">Explore all services</Button></div>
      </div>
    </section>
  );
}
