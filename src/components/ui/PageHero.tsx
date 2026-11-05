import Image from "next/image";
import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

type Props = { eyebrow: string; title: string; intro?: string; image: string; children?: ReactNode };

export default function PageHero({ eyebrow, title, intro, image, children }: Props) {
  return (
    <section className={styles.hero}>
      <Image src={image} alt="" fill priority className={styles.image} />
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
        {children}
      </div>
    </section>
  );
}
