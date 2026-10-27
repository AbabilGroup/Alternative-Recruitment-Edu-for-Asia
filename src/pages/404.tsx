import Link from 'next/link';
import Layout from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found | Alternative Recruitment">
      <section className="not-found">
        <div className="container">
          <div className="big">404</div>
          <h2>This page could not be found.</h2>
          <p>The page you’re looking for may have moved. Let’s get you back on track.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" href="/">
              Back to Home →
            </Link>
            <Link className="btn btn-light" href="/contact/">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
