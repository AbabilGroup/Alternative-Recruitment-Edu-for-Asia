import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/data/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationGrid() {
  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {destinations.map((d) => <DestinationCard key={d.slug} destination={d} />)}
      <Link href="/contact/" className="flex flex-col justify-center gap-3 rounded-md bg-primary p-8 text-on-dark transition-colors hover:bg-primary-light">
        <h3 className="text-[1.7rem]">Not sure where to go?</h3>
        <p className="text-on-dark-muted">Tell us your budget and goals, and we will help you compare your options.</p>
        <span className="inline-flex items-center gap-1.5 font-bold text-accent">Ask a counsellor <ArrowRight size={16} /></span>
      </Link>
    </div>
  );
}
