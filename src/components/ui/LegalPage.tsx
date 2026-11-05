import type { ReactNode } from "react";
import Seo from "./Seo";
import styles from "./LegalPage.module.css";

export default function LegalPage({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <Seo title={title} description={description} />
      <section className="section">
        <div className={`container ${styles.body}`}>
          <h1>{title}</h1>
          {children}
        </div>
      </section>
    </>
  );
}
