import { destinations } from "@/data/destinations";
import { services, steps } from "@/data/services";
import styles from "./Numbers.module.css";

export default function Numbers() {
  const items = [
    { value: destinations.length, label: "study destinations" },
    { value: services.length, label: "areas of support" },
    { value: steps.length, label: "clear steps to campus" },
    { value: 1, label: "free first consultation" },
  ];
  return (
    <section className={styles.band}>
      <div className={`container ${styles.grid}`}>
        {items.map((i) => (
          <div key={i.label} className={styles.item}>
            <strong>{i.value}</strong>
            <span>{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
