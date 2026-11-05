import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className={styles.cta}>
      <Image src="/images/graduation.webp" alt="" fill sizes="100vw" className={styles.image} />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <h2>Ready to plan your next step?</h2>
        <p>Share your goals with a counsellor. We will help you work out your options.</p>
        <Button href="/contact/">Book a free consultation</Button>
      </div>
    </section>
  );
}
