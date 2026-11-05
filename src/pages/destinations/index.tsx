import Seo from "@/components/ui/Seo";
import PageHero from "@/components/ui/PageHero";
import DestinationGrid from "@/components/ui/DestinationGrid";
import FinalCta from "@/components/sections/FinalCta";

export default function DestinationsPage() {
  return (
    <>
      <Seo title="Study Destinations" description="Compare study abroad destinations for Asian students, including intakes, visa types, test requirements and post-study routes." />
      <PageHero
        eyebrow="Study destinations"
        title="Compare where you could study"
        intro="Each guide covers the main intakes, student visa, tests and post-study route, so you can start narrowing down your options."
        image="/images/campus.webp"
      />
      <section className="section section-tinted">
        <div className="container"><DestinationGrid /></div>
      </section>
      <FinalCta />
    </>
  );
}
