import LegalPage, { type LegalSection } from '@/components/LegalPage';

const sections: LegalSection[] = [
  {
    heading: 'Information we collect',
    body: ['When you contact us or request a consultation, we may collect the following information:'],
    list: [
      'Your name, email address and phone number',
      'Your preferred study country, intake and course interests',
      'Any information you choose to share in your message',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'We use your information to respond to your enquiry, provide study abroad guidance, and support your application where you ask us to. We do not sell your personal data.',
    ],
  },
  {
    heading: 'Sharing your information',
    body: [
      'With your consent, we may share relevant details with institutions or partners you choose to apply to. We only share what is needed to process your application.',
    ],
  },
  {
    heading: 'Data retention & security',
    body: [
      'We keep personal data only as long as needed for the purposes above or as required by law, and we take reasonable measures to protect it.',
    ],
  },
  {
    heading: 'Your rights',
    body: ['You may request access to, correction of, or deletion of your personal data at any time by contacting our team.'],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Alternative Recruitment collects, uses and protects your personal information."
      sections={sections}
    />
  );
}
