import { steps } from "@/data/services";
import Button from "@/components/ui/Button";

export default function Steps() {
  return (
    <section id="how-it-works" className="section bg-primary text-on-dark">
      <div className="site-container">
        <div className="mb-14 max-w-[640px]">
          <span className="eyebrow text-accent">How it works</span>
          <h2>Five steps from first question to campus</h2>
        </div>
        {/* The dashed line is a flight path joining the stops: vertical on mobile, horizontal on desktop. */}
        <ol className="relative grid grid-cols-1 gap-[30px] before:absolute before:bottom-10 before:left-6 before:top-2.5 before:border-l-2 before:border-dashed before:border-on-dark-border lg:grid-cols-5 lg:gap-[26px] lg:before:bottom-auto lg:before:right-[10%] lg:before:top-6 lg:before:border-l-0 lg:before:border-t-2">
          {steps.map((s, i) => (
            <li key={s.title} className="relative pl-[70px] lg:pl-0">
              <span className="absolute left-0 top-0 grid size-[50px] place-items-center rounded-full bg-accent font-display text-[1.3rem] font-extrabold text-ink lg:static lg:mb-5">{i + 1}</span>
              <h3 className="text-[1.16rem]">{s.title}</h3>
              <p className="mt-2 text-[0.96rem] text-on-dark-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12"><Button href="/contact/">Start with step one</Button></div>
      </div>
    </section>
  );
}
