import Image from "next/image";
import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; intro?: string; image: string; children?: ReactNode };

export default function PageHero({ eyebrow, title, intro, image, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary-dark text-on-dark">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-overlay-strong md:bg-transparent md:bg-linear-to-r md:from-overlay-strong md:from-15% md:via-overlay md:via-60% md:to-overlay-none" />
      <div className="site-container relative py-[clamp(72px,10vw,128px)]">
        <span className="eyebrow text-accent">{eyebrow}</span>
        <h1 className="max-w-[760px]">{title}</h1>
        {intro && <p className="mt-5 max-w-[620px] text-[1.15rem] text-on-dark-muted">{intro}</p>}
        {children}
      </div>
    </section>
  );
}
