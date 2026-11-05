import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = { href: string; children: ReactNode; variant?: "accent" | "primary" | "ghost" };

export default function Button({ href, children, variant = "accent" }: Props) {
  return <Link href={href} className={`${styles.button} ${styles[variant]}`}>{children}</Link>;
}
