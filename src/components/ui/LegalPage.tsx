import type { ReactNode } from "react";
import Seo from "./Seo";

export default function LegalPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <Seo title={title} description={description} />
      <section className="section">
        <div className="site-container max-w-[760px] [&_a]:underline [&_h2]:mb-2.5 [&_h2]:mt-8 [&_h2]:text-[1.35rem] [&_p]:text-muted">
          <h1 className="mb-7 text-[clamp(2.2rem,4vw,3rem)]">{title}</h1>
          {children}
        </div>
      </section>
    </>
  );
}
