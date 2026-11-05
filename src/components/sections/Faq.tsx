import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import Button from "@/components/ui/Button";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="site-container grid grid-cols-1 items-start gap-[clamp(32px,6vw,72px)] md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Questions</span>
          <h2>What students usually ask first</h2>
          <p className="mb-7 mt-4 text-[1.08rem] text-muted">Have a question that is not listed here? Ask a counsellor directly.</p>
          <Button href="/contact/" variant="primary">Talk to a counsellor</Button>
        </div>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[18px] py-5 font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown size={20} className="flex-none text-primary-light transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="pb-[22px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
