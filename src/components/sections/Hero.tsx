import Image from "next/image";
import { ArrowRight, Plane } from "lucide-react";
import Button from "@/components/ui/Button";
import { destinations } from "@/data/destinations";

const ticketLabel = "block text-[0.7rem] font-bold uppercase tracking-[0.1em] text-muted";
const ticketValue = "whitespace-nowrap font-display text-[1.1rem]";

export default function Hero() {
  return (
    <section className="bg-primary-dark text-on-dark">
      <div className="site-container grid grid-cols-1 items-center gap-11 pb-[clamp(72px,8vw,104px)] pt-[clamp(56px,7vw,92px)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <span className="eyebrow mb-[18px] text-accent">Study abroad guidance for Asia</span>
          <h1>From Asia to the <em className="not-italic text-accent">right</em> university, not just the first offer.</h1>
          <p className="mt-[22px] max-w-[560px] text-[1.15rem] text-on-dark-muted">Alternative Recruitment Edu helps students across Asia choose a country, apply to universities, plan their funding and prepare for the visa, with advice based on what suits you.</p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Button href="/contact/">Book a free consultation <ArrowRight size={18} /></Button>
            <Button href="/#how-it-works" variant="ghost">See how it works</Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[5/4.6] overflow-hidden rounded-lg">
            <Image src="/images/hero-students.webp" alt="Four university students laughing as they walk across campus" fill priority sizes="(max-width: 960px) 100vw, 560px" className="object-cover" />
          </div>
          <div className="absolute -bottom-[30px] left-1/2 flex w-max max-w-[92%] -translate-x-1/2 items-center gap-[22px] rounded-md bg-white px-[26px] py-[15px] text-ink shadow-card">
            <div>
              <span className={ticketLabel}>From</span>
              <strong className={ticketValue}>Asia</strong>
            </div>
            <Plane size={22} className="flex-none text-accent-dark" />
            <div>
              <span className={ticketLabel}>To</span>
              <strong className={ticketValue}>{destinations.length} countries</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
