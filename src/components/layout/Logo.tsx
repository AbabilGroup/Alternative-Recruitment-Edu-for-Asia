import Link from "next/link";
import { site } from "@/data/site";

export default function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${onDark ? "text-on-dark" : "text-primary"}`}>
      <span
        className={`grid size-[38px] flex-none place-items-center rounded-[10px] font-display text-[1.35rem] font-extrabold ${onDark ? "bg-accent text-primary-dark" : "bg-primary text-accent"}`}
        aria-hidden="true"
      >
        A
      </span>
      <span className="flex items-center gap-[7px] font-display text-[1.08rem] font-bold leading-[1.1] tracking-[-0.01em]">
        {site.name}
        <span className="rounded-[5px] bg-accent px-[7px] py-0.5 text-[0.72rem] font-extrabold uppercase tracking-[0.04em] text-ink">{site.division}</span>
      </span>
    </Link>
  );
}
