import Link from "next/link";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";
import styles from "./ServicesPreview.module.css";

export default function ServicesPreview() {
  return (
    <section className="section section-tinted">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Support for every part of the process</h2>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <Link key={s.id} href={`/services/#${s.id}`} className={styles.card}>
              <span className={styles.icon}><s.icon size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
            </Link>
          ))}
        </div>
        <div className={styles.action}><Button href="/services/" variant="primary">Explore all services</Button></div>
      </div>
    </section>
  );
}
