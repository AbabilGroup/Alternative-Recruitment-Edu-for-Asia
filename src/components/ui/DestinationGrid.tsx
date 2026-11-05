import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";
import styles from "./DestinationGrid.module.css";

export default function DestinationGrid() {
  return (
    <div className={styles.grid}>
      {destinations.map((d) => <DestinationCard key={d.slug} destination={d} />)}
      <Link href="/contact/" className={styles.unsure}>
        <h3>Not sure where to go?</h3>
        <p>Tell us your budget and goals, and we will help you compare your options.</p>
        <span>Ask a counsellor <ArrowRight size={16} /></span>
      </Link>
    </div>
  );
}
