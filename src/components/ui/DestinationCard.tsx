import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/data/destinations";

// Styled like a boarding pass: photo on top, ticket stub with key facts below.
export default function DestinationCard({ destination: d }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${d.slug}/`}
      className="group flex h-full flex-col rounded-md bg-white text-ink shadow-card transition-transform duration-[250ms] hover:-translate-y-[5px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-md">
        <Image src={d.image} alt={d.imageAlt} fill sizes="(max-width: 700px) 100vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3.5 top-3.5 rounded-[6px] bg-accent px-2.5 py-1 font-display text-[0.95rem] font-extrabold tracking-[0.08em] text-ink">{d.code}</span>
      </div>
      {/* The circles are ticket notches, filled with the page background behind the card. */}
      <div className="relative flex flex-1 flex-col border-t-2 border-dashed border-border px-[22px] pb-[22px] pt-6 before:absolute before:-left-[11px] before:-top-3 before:size-[22px] before:rounded-full before:bg-bg after:absolute after:-right-[11px] after:-top-3 after:size-[22px] after:rounded-full after:bg-bg">
        <h3>{d.name}</h3>
        <p className="mt-1.5 text-[0.96rem] text-muted">{d.tagline}</p>
        <div className="mt-4">
          <span className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted">Main intakes</span>
          <span className="text-[0.92rem] font-semibold">{d.intakes}</span>
        </div>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.93rem] font-bold text-primary-light">View guide <ArrowRight size={16} /></span>
      </div>
    </Link>
  );
}
