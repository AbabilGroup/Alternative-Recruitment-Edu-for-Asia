import Link from "next/link";
import { site } from "@/data/site";
import styles from "./Logo.module.css";

export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className={`${styles.logo} ${onDark ? styles.onDark : ""}`}>
      <span className={styles.mark} aria-hidden="true">A</span>
      <span className={styles.text}>
        {site.name}
        <span className={styles.division}>{site.division}</span>
      </span>
    </Link>
  );
}
