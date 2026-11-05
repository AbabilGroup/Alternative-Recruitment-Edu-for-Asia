import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";
import Button from "@/components/ui/Button";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className={`container ${styles.grid}`}>
        <div>
          <span className="eyebrow">Questions</span>
          <h2>What students usually ask first</h2>
          <p className={styles.lead}>Have a question that is not listed here? Ask a counsellor directly.</p>
          <Button href="/contact/" variant="primary">Talk to a counsellor</Button>
        </div>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary>{f.q}<ChevronDown size={20} className={styles.chevron} /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
