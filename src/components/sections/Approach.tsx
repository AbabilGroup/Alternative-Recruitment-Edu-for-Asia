import Image from "next/image";
import { Scale, Target, Receipt, UserRound } from "lucide-react";

const points = [
  { icon: Target, title: "You first, universities second", text: "We start with your grades, budget and goals, and only then look at where to apply." },
  { icon: Scale, title: "Honest about your chances", text: "We tell you where your profile is strong and where it is not, before you spend money on applications." },
  { icon: Receipt, title: "Costs you can plan around", text: "We estimate tuition, living and visa costs for each option, so that there are fewer surprises later." },
  { icon: UserRound, title: "One counsellor throughout", text: "You work with someone who knows your case, from your first question to your departure." },
];

export default function Approach() {
  return (
    <section className="section">
      <div className="site-container grid grid-cols-1 gap-[clamp(36px,6vw,80px)] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:aspect-auto lg:min-h-[520px]">
          <Image src="/images/students-friends.webp" alt="Three students walking down a corridor with their arms around each other" fill sizes="(max-width: 900px) 100vw, 520px" className="object-cover" />
        </div>
        <div>
          <span className="eyebrow">Why alternative?</span>
          <h2>A different way of choosing where to study</h2>
          <ul className="mt-[34px] grid gap-6">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span className="grid size-[46px] flex-none place-items-center rounded-[12px] bg-primary-soft text-primary"><p.icon size={22} /></span>
                <div>
                  <h3 className="text-[1.14rem]">{p.title}</h3>
                  <p className="mt-[5px] text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
