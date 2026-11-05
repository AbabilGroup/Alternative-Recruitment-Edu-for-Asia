import LegalPage from "@/components/ui/LegalPage";
import { site } from "@/data/site";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" description={`How ${site.name} handles the information you share through this website.`}>
      <p>This policy explains how {site.name} handles the information you share through this website.</p>
      <h2>Information we collect</h2>
      <p>When you submit our contact form, we receive your name, email address, and any phone number, country, study preferences and message you choose to include.</p>
      <h2>How we use it</h2>
      <p>We use this information to respond to your enquiry and to provide the study abroad guidance you request. We do not sell your personal information.</p>
      <h2>Sharing</h2>
      <p>If you decide to apply through us, we may share relevant details with universities or other parties involved in your application, as needed and with your knowledge.</p>
      <h2>Your choices</h2>
      <p>You can ask us to access, correct or delete your information by emailing <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
