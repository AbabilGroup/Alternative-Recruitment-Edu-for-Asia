import { steps } from "@/data/services";
import Button from "@/components/ui/Button";
import styles from "./Steps.module.css";

export default function Steps() {
  return (
    <section id="how-it-works" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>How it works</span>
          <h2>Five steps from first question to campus</h2>
        </div>
        <ol className={styles.route}>
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className={styles.stop}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className={styles.action}><Button href="/contact/">Start with step one</Button></div>
      </div>
    </section>
  );
}
