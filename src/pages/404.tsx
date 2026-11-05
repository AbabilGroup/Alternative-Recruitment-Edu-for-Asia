import Seo from "@/components/ui/Seo";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you were looking for could not be found." />
      <section className="bg-primary-dark py-[clamp(80px,12vw,150px)] text-center text-on-dark">
        <div className="site-container">
          <span className="mb-2 block font-display text-[1.3rem] font-extrabold tracking-[0.1em] text-accent">404</span>
          <h1>We couldn&apos;t find that page</h1>
          <p className="mt-4 text-on-dark-muted">Try the homepage, or browse our study destinations.</p>
          <div className="mt-[30px] flex flex-wrap justify-center gap-3.5">
            <Button href="/">Go to homepage</Button>
            <Button href="/destinations/" variant="ghost">View destinations</Button>
          </div>
        </div>
      </section>
    </>
  );
}
