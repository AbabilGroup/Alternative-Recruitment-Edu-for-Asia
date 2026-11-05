import Image from "next/image";
import { Scale, Target, Receipt, UserRound } from "lucide-react";
import styles from "./Approach.module.css";

const points = [
  { icon: Target, title: "You first, universities second", text: "We start with your grades, budget and goals, and only then look at where to apply." },
  { icon: Scale, title: "Honest about your chances", text: "We tell you where your profile is strong and where it is not, before you spend money on applications." },
  { icon: Receipt, title: "Costs you can plan around", text: "We estimate tuition, living and visa costs for each option, so that there are fewer surprises later." },
  { icon: UserRound, title: "One counsellor throughout", text: "You work with someone who knows your case, from your first question to your departure." },
];

export default function Approach() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.photo}>
          <Image src="/images/students-friends.webp" alt="Three students walking down a corridor with their arms around each other" fill sizes="(max-width: 900px) 100vw, 520px" className={styles.image} />
        </div>
        <div>
          <span className="eyebrow">Why alternative?</span>
          <h2>A different way of choosing where to study</h2>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p.title}>
                <span className={styles.icon}><p.icon size={22} /></span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
