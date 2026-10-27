import LegalPage, { type LegalSection } from '@/components/LegalPage';

const sections: LegalSection[] = [
  {
    heading: 'Our services',
    body: [
      'Alternative Recruitment provides study abroad guidance, admissions support and visa guidance. Admission decisions are made by institutions, and visa decisions are made by the relevant immigration authorities.',
    ],
  },
  {
    heading: 'Accuracy of information',
    body: [
      'We aim to keep information on this website accurate and up to date. Entry, work and visa rules vary by country and individual circumstances and may change, so please confirm details with our advisory team.',
    ],
  },
  {
    heading: 'Your responsibilities',
    body: ['When using our services, you agree to:'],
    list: [
      'Provide accurate and complete information and documents',
      'Meet application deadlines and requirements set by institutions',
      'Comply with the visa and immigration rules of your chosen destination',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'We are not responsible for decisions made by institutions or immigration authorities, or for changes to their requirements.',
    ],
  },
  {
    heading: 'Contact',
    body: ['If you have questions about these terms, please contact our team.'],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms that apply when you use the Alternative Recruitment website and services."
      sections={sections}
    />
  );
}
