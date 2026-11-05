import LegalPage from "@/components/ui/LegalPage";
import { site } from "@/data/site";

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" description={`The terms for using the ${site.name} website.`}>
      <p>By using this website, you agree to these terms.</p>
      <h2>General information only</h2>
      <p>The content on this website is general guidance. Admission, scholarship, visa and work rules change often and depend on your circumstances. Confirm important details with the university or the relevant authority before you act on them.</p>
      <h2>No guarantee of outcome</h2>
      <p>Universities decide on admission and scholarships, and governments decide on visas. {site.name} cannot guarantee any of these outcomes.</p>
      <h2>External websites</h2>
      <p>This website may link to other websites. We are not responsible for their content.</p>
      <h2>Contact</h2>
      <p>For questions about these terms, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
