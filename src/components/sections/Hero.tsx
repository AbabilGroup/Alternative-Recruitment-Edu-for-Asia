import Image from "next/image";
import { ArrowRight, Plane } from "lucide-react";
import Button from "@/components/ui/Button";
import { destinations } from "@/data/destinations";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Study abroad guidance for Asia</span>
          <h1>From Asia to the <em>right</em> university, not just the first offer.</h1>
          <p>Alternative Recruitment Edu helps students across Asia choose a country, apply to universities, plan their funding and prepare for the visa, with advice based on what suits you.</p>
          <div className={styles.actions}>
            <Button href="/contact/">Book a free consultation <ArrowRight size={18} /></Button>
            <Button href="/#how-it-works" variant="ghost">See how it works</Button>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.photo}>
            <Image src="/images/hero-students.webp" alt="Four university students laughing as they walk across campus" fill priority sizes="(max-width: 960px) 100vw, 560px" className={styles.image} />
          </div>
          <div className={styles.ticket}>
            <div>
              <span className={styles.label}>From</span>
              <strong>Asia</strong>
            </div>
            <Plane size={22} className={styles.plane} />
            <div>
              <span className={styles.label}>To</span>
              <strong>{destinations.length} countries</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
