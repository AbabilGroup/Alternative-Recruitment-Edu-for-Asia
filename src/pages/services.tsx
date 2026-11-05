import Image from "next/image";
import { Check } from "lucide-react";
import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Seo title="Services" description="University shortlisting, applications, scholarships, test preparation, visa preparation and pre-departure support for Asian students." />
      <PageHero
        eyebrow="Our services"
        title="Help with the whole journey, or just the part you need"
        intro="From choosing a course to landing at your university, here is how we can support you."
        image="/images/lecture.webp"
      />
      <section className="section">
        <div className="site-container grid gap-[clamp(56px,8vw,96px)]">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="group grid grid-cols-1 items-center gap-[clamp(32px,6vw,72px)] md:grid-cols-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg md:group-even:order-2">
                <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 860px) 100vw, 560px" className="object-cover" />
              </div>
              <div>
                <span className="mb-[18px] grid size-[50px] place-items-center rounded-[12px] bg-accent-soft text-primary"><s.icon size={24} /></span>
                <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">{s.title}</h2>
                <p className="mt-3 text-[1.08rem] text-muted">{s.summary}</p>
                <ul className="mt-5 grid gap-2.5">
                  {s.details.map((d) => <li key={d} className="flex gap-2.5"><Check size={19} className="mt-[5px] flex-none text-primary-light" />{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
