import { destinations } from "@/data/destinations";
import { services, steps } from "@/data/services";

export default function Numbers() {
  const items = [
    { value: destinations.length, label: "study destinations" },
    { value: services.length, label: "areas of support" },
    { value: steps.length, label: "clear steps to campus" },
    { value: 1, label: "free first consultation" },
  ];
  return (
    <section className="bg-accent-soft">
      <div className="site-container grid grid-cols-1 gap-3 py-[34px] sm:grid-cols-2 sm:gap-5 md:grid-cols-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-baseline gap-2.5">
            <strong className="font-display text-[2.3rem] leading-none text-primary">{i.value}</strong>
            <span className="text-[0.95rem] font-semibold">{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
