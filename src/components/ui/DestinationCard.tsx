import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/data/destinations";
import styles from "./DestinationCard.module.css";

// Styled like a boarding pass: photo on top, ticket stub with key facts below.
export default function DestinationCard({ destination: d }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${d.slug}/`} className={styles.card}>
      <div className={styles.photo}>
        <Image src={d.image} alt={d.imageAlt} fill sizes="(max-width: 700px) 100vw, 400px" className={styles.image} />
        <span className={styles.code}>{d.code}</span>
      </div>
      <div className={styles.stub}>
        <h3>{d.name}</h3>
        <p>{d.tagline}</p>
        <div className={styles.meta}>
          <span className={styles.label}>Main intakes</span>
          <span className={styles.value}>{d.intakes}</span>
        </div>
        <span className={styles.more}>View guide <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}
