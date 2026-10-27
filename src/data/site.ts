export interface NavLink {
  href: string;
  label: string;
}

export interface NavItem extends NavLink {
  children?: NavLink[];
}

export interface Stat {
  count: number;
  suffix: string;
  label: string;
  note?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  meta: string;
}

export type Advisor = 'uk' | 'eu';

export const site = {
  name: 'Alternative Recruitment',
  tagline: 'Global Student Mobility & University Admissions Consultancy',
  description:
    'Expert guidance, university admissions, and visa support for international students pursuing higher education across Europe, the UK, North America, and beyond.',
  phone: '+44 7467 187303',
  phoneHref: 'tel:+447467187303',
  email: 'info@alternativerecruitment.education',
  emailHref: 'mailto:info@alternativerecruitment.education',
  whatsapp: 'https://wa.me/447467187303',
  whatsappMalta: 'https://wa.me/35699792851',
  whatsappMaltaLabel: '+356 9979 2851',
  established: 1993,
};

const advisorLines: Record<Advisor, string> = {
  uk: site.whatsapp,
  eu: site.whatsappMalta,
};

// UK enquiries go to the UK line; Europe and all other destinations go to the Malta / Europe desk.
export const wa = (text: string, advisor: Advisor = 'uk'): string =>
  `${advisorLines[advisor]}?text=${encodeURIComponent(text)}`;

export const nav: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About Us' },
  { href: '/services/', label: 'Services' },
  {
    href: '/destinations/',
    label: 'Study Destinations',
    children: [
      { href: '/destinations/#europe', label: 'Europe' },
      { href: '/destinations/#uk-ireland', label: 'UK & Ireland' },
      { href: '/destinations/#north-america-oceania', label: 'North America & Oceania' },
    ],
  },
  { href: '/partner-program/', label: 'Partner Program' },
  { href: '/contact/', label: 'Contact Us' },
];

export const stats: Stat[] = [
  { count: 30, suffix: '+', label: 'Countries Represented in Our Network' },
  { count: 1500, suffix: '+', label: 'Partner Institutions & Programs' },
  { count: 5000, suffix: '+', label: 'Students Successfully Enrolled' },
  { count: 30, suffix: '+', label: 'Years of Educational Guidance', note: 'Est. 1993' },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'Alternative Recruitment played a crucial role in making my dream of studying abroad a reality. Their team’s guidance and support throughout the application process were invaluable.',
    name: 'Sibani',
    meta: 'Student from India',
  },
  {
    quote:
      'Alternative Recruitment made my dream of studying abroad real. Their guidance was gold during the application. I got into my dream university thanks to their steadfast support.',
    name: 'Adnan Ahmad',
    meta: 'Student from Bangladesh',
  },
];
