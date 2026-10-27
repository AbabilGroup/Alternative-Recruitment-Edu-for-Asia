import LegalPage, { type LegalSection } from '@/components/LegalPage';

const sections: LegalSection[] = [
  {
    heading: 'Our commitment',
    body: [
      'We are committed to ethical student recruitment and to handling personal data in line with the UK GDPR, the EU General Data Protection Regulation (GDPR) and applicable local laws.',
    ],
  },
  {
    heading: 'Ethical recruitment',
    body: ['We work to ensure that students receive clear, honest and accurate guidance. This includes:'],
    list: [
      'Accurate information about institutions, courses, costs and requirements',
      'No guarantees of admission or visa outcomes',
      'Careful checking of documents for authenticity and completeness',
      'Working only with recruitment partners who share these standards',
    ],
  },
  {
    heading: 'Lawful basis for processing',
    body: [
      'We process personal data on the basis of your consent, to take steps at your request before entering into a contract, and to meet legal obligations.',
    ],
  },
  {
    heading: 'Your GDPR rights',
    body: ['Under GDPR you have the right to:'],
    list: [
      'Access the personal data we hold about you',
      'Ask us to correct or delete your data',
      'Restrict or object to processing',
      'Data portability',
      'Withdraw consent at any time',
    ],
  },
];

export default function Compliance() {
  return (
    <LegalPage
      title="Student Compliance & GDPR"
      intro="Our commitment to ethical recruitment and responsible handling of student data."
      sections={sections}
    />
  );
}
