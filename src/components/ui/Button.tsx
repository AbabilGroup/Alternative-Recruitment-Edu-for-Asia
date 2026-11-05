import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  accent: "border-transparent bg-accent text-ink hover:bg-accent-dark",
  primary: "border-transparent bg-primary text-on-dark hover:bg-primary-light",
  ghost: "border-on-dark-border text-on-dark hover:border-on-dark hover:bg-on-dark-surface",
};

type Props = { href: string; children: ReactNode; variant?: keyof typeof variants };

export default function Button({ href, children, variant = "accent" }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 px-[26px] py-3.5 text-base font-bold transition-colors ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
