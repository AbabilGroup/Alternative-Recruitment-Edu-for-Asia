export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface Audience extends Feature {
  cta: string;
  href: string;
}

export interface Course {
  title: string;
  text: string;
}

// Home: "Why Pursue Higher Education in Europe & Globally?"
export const features: Feature[] = [
  { icon: '🏅', title: 'Internationally Recognized Degrees', text: 'Enroll in accredited programs valued by global employers.' },
  { icon: '💡', title: 'Transparent Cost Structures', text: 'Quality education with reasonable tuition fees and clear payment timelines.' },
  { icon: '🧭', title: 'Structured Visa Compliance', text: 'Clear, step-by-step guidance through embassy and immigration requisites.' },
  { icon: '🌐', title: 'Global Career Exposure', text: 'Build international networks and access post-study work opportunities.' },
];

export const audiences: Audience[] = [
  {
    icon: '🎓',
    title: 'For Ambitious Students',
    text: 'Take confident strides toward your study abroad objectives with a seamless, guided process. From selecting the right university to securing your student visa, our expert advisors are with you at every step.',
    cta: 'Explore Student Services',
    href: '/services/',
  },
  {
    icon: '🤝',
    title: 'For Recruitment Partners & Associates',
    text: 'Forge strategic partnerships with international education hubs. Gain access to application tools, promotional assets, and institutional networks to expand your agency’s reach and propel your students’ success.',
    cta: 'Join Partner Program',
    href: '/partner-program/',
  },
  {
    icon: '🏛️',
    title: 'For Educational Institutions',
    text: 'Collaborate with a certified recruitment network to diversify your campus and enroll qualified, highly motivated international students across undergraduate and postgraduate disciplines.',
    cta: 'Partner With Us',
    href: '/contact/',
  },
];

export const services: Feature[] = [
  {
    icon: '🎯',
    title: 'Personalized Academic Counseling',
    text: 'Our experienced counselors deliver individual advisory sessions for both students and parents. We evaluate academic achievements, career goals, and budget constraints to formulate a personalized educational plan.',
  },
  {
    icon: '🏛️',
    title: 'University Selection & Admission Management',
    text: 'Navigating international options is straightforward with our guidance. We match student credentials with accredited universities and appropriate degree programs across Europe, the UK, North America, and Oceania.',
  },
  {
    icon: '📝',
    title: 'Documentation & Application Auditing',
    text: 'Preparing university applications requires meticulous attention to detail. We assist in auditing academic transcripts, refining statements of purpose (SOP), organizing recommendation letters, and managing application deadlines.',
  },
  {
    icon: '🎤',
    title: 'Interview Preparation',
    text: 'We build student confidence for university admission screenings and visa interviews through realistic mock interview sessions, feedback, and communication coaching.',
  },
  {
    icon: '🧭',
    title: 'Complete Visa Filing Support',
    text: 'Securing a student visa is a critical milestone. We provide clear guidance on visa requirements, financial proof documentation, application filing, and embassy appointment scheduling.',
  },
  {
    icon: '👪',
    title: 'Parent & Student Orientation',
    text: 'We maintain open communication with parents to address financial, safety, and logistical questions, ensuring a smooth transition for the entire family.',
  },
];

export const languageCourses: Course[] = [
  { title: 'Beginners’ English Courses', text: 'Structural grammar, vocabulary expansion, and core reading/writing fundamentals.' },
  { title: 'Spoken English & Fluency', text: 'Conversational confidence building for academic lectures and everyday communication abroad.' },
  {
    title: 'IELTS Examination Preparation',
    text: 'Intensive test strategies, practice modules, and time-management techniques aimed at achieving required band scores.',
  },
];

export const partnerBenefits: Feature[] = [
  {
    icon: '🌍',
    title: 'Direct University Pipelines',
    text: 'Access 1,500+ programs across Europe, the UK, North America, and Oceania through a single partnership.',
  },
  {
    icon: '🔎',
    title: 'Application & Compliance Auditing',
    text: 'Our admissions desk pre-audits student documents to ensure fast turnaround times and high acceptance rates.',
  },
  {
    icon: '🧰',
    title: 'Promotional & Marketing Toolkits',
    text: 'Receive up-to-date institution guides, entry requirements, intake updates, and marketing materials.',
  },
  {
    icon: '💼',
    title: 'Transparent Commission Structure',
    text: 'Benefit from clear agency agreements and timely commission disbursements.',
  },
];

// About: "Our Corporate Framework"
export const framework: Feature[] = [
  {
    icon: '🚀',
    title: 'Our Motto',
    text: 'Pioneering Dreams, Connecting Realities. This principle guides our commitment to reshaping lives through structured academic counseling and global institutional partnerships.',
  },
  {
    icon: '🎯',
    title: 'Our Primary Goal',
    text: 'To fulfill student aspirations and unlock human potential worldwide. Through specialized educational consultancy, we guide ambitious candidates toward achieving their academic and professional objectives.',
  },
  {
    icon: '🌐',
    title: 'Our Institutional Vision',
    text: 'To maintain a transparent, highly compliant global network connecting schools, students, and sub-agents across international borders.',
  },
];

// About: "Core Operational Principles"
export const principles: Feature[] = [
  { icon: '🤝', title: 'Ethical Counseling', text: 'Student-first guidance tailored to individual academic profiles and financial preferences.' },
  { icon: '📑', title: 'Document Integrity', text: 'Rigorous pre-submission verification to maximize university acceptance rates.' },
  { icon: '🛡️', title: 'Compliance Standards', text: 'Strict adherence to international student visa regulations and institutional policies.' },
  { icon: '✈️', title: 'End-to-End Support', text: 'Continuous assistance from initial counseling to post-arrival orientation.' },
];
