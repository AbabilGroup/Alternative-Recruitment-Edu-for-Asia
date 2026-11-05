import Seo from "@/components/ui/Seo";
import Button from "@/components/ui/Button";
import styles from "@/styles/NotFound.module.css";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you were looking for could not be found." />
      <section className={styles.page}>
        <div className="container">
          <span className={styles.code}>404</span>
          <h1>We couldn&apos;t find that page</h1>
          <p>Try the homepage, or browse our study destinations.</p>
          <div className={styles.actions}>
            <Button href="/">Go to homepage</Button>
            <Button href="/destinations/" variant="ghost">View destinations</Button>
          </div>
        </div>
      </section>
    </>
  );
}
