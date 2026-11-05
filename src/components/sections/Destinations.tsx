import DestinationGrid from "@/components/ui/DestinationGrid";

export default function Destinations() {
  return (
    <section id="destinations" className="section section-tinted">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Where you could study</span>
          <h2>Choose a destination that fits your plan</h2>
          <p>From long-haul favourites to universities closer to home. See intakes, visa types, test requirements and post-study routes for each country.</p>
        </div>
        <DestinationGrid />
      </div>
    </section>
  );
}
