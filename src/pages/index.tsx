import Seo from "@/components/ui/Seo";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";
import Destinations from "@/components/sections/Destinations";
import Approach from "@/components/sections/Approach";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Steps from "@/components/sections/Steps";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Seo description="Alternative Recruitment Edu helps students across Asia choose a country, apply to universities, plan funding and prepare for student visas." />
      <Hero />
      <Numbers />
      <Destinations />
      <Approach />
      <ServicesPreview />
      <Steps />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
