import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden text-center text-on-dark">
      <Image src="/images/graduation.webp" alt="" fill sizes="100vw" className="object-cover object-[center_30%]" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="site-container relative py-[clamp(80px,11vw,136px)]">
        <h2>Ready to plan your next step?</h2>
        <p className="mx-auto mb-[30px] mt-4 max-w-[540px] text-[1.15rem]">Share your goals with a counsellor. We will help you work out your options.</p>
        <Button href="/contact/">Book a free consultation</Button>
      </div>
    </section>
  );
}
