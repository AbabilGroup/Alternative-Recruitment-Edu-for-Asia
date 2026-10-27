import { px } from './images';
import type { Advisor } from './site';

export type RegionId = 'europe' | 'uk-ireland' | 'north-america-oceania';

export interface Region {
  id: RegionId;
  label: string;
  heading: string;
  intro: string;
}

export interface Destination {
  slug: string;
  name: string;
  title: string;
  region: RegionId;
  schengen: boolean;
  advisor: Advisor;
  advisorLabel: string;
  image: string;
  alt: string;
  summary: string;
  tags: string[];
  overview: string;
  highlights: string[];
}

export interface ExtraDestination {
  name: string;
  schengen: boolean;
  text: string;
}

export const regions: Region[] = [
  {
    id: 'europe',
    label: 'Schengen Europe',
    heading: 'European Destinations',
    intro: 'Accredited European degrees, English-taught programs and Schengen zone access across the Mediterranean and Central Europe.',
  },
  {
    id: 'uk-ireland',
    label: 'UK & Ireland',
    heading: 'UK & Ireland',
    intro: 'Top-ranked universities, intensive degree programs and English-speaking campus life.',
  },
  {
    id: 'north-america-oceania',
    label: 'North America & Oceania',
    heading: 'North America & Oceania',
    intro: 'Globally recognized institutions, research infrastructure and post-study work opportunities.',
  },
];

export const destinations: Destination[] = [
  {
    slug: 'malta',
    name: 'Malta',
    title: 'Study in Malta',
    region: 'europe',
    schengen: true,
    advisor: 'eu',
    advisorLabel: 'Malta Advisor',
    image: px(37807535, 1600),
    alt: 'Valletta, Malta, with boats in the harbour under a clear blue sky',
    summary:
      'An English-speaking Mediterranean destination offering accredited European education, reasonable tuition structures, full Schengen zone access, and a peaceful living environment.',
    tags: ['English-taught', 'Schengen zone', 'Post-visa tuition options'],
    overview:
      'Malta offers an ideal setting for international scholars seeking recognized European education in an English-speaking environment. Located in the Mediterranean, Malta combines accredited academic programs with safe surroundings and reasonable tuition structures.',
    highlights: [
      'English-taught programs',
      'Full Schengen zone access',
      'Comfortable climate',
      'Post-visa tuition options at select institutions',
    ],
  },
  {
    slug: 'hungary',
    name: 'Hungary',
    title: 'Study in Hungary',
    region: 'europe',
    schengen: true,
    advisor: 'eu',
    advisorLabel: 'Europe Advisor',
    image: px(18815996, 1600),
    alt: 'The Hungarian Parliament Building beside the Danube in Budapest',
    summary:
      'Central European academic excellence featuring top-tier medical, engineering, and business programs, affordable living costs, and rich historical culture.',
    tags: ['Competitive tuition', 'Schengen zone', 'Medicine & engineering'],
    overview:
      'Situated in Central Europe, Hungary boasts prestigious universities known for research contributions in medicine, engineering, technology, and business.',
    highlights: [
      'Highly competitive tuition fees',
      'Accredited European degrees',
      'Vibrant student lifestyle',
      'Schengen zone access',
    ],
  },
  {
    slug: 'italy',
    name: 'Italy',
    title: 'Study in Italy',
    region: 'europe',
    schengen: true,
    advisor: 'eu',
    advisorLabel: 'Europe Advisor',
    image: px(15562413, 1600),
    alt: 'The Colosseum in Rome at sunset',
    summary:
      'Immerse yourself in historic universities offering world-renowned master’s and doctoral degrees taught in English, set within a hub of innovation and culture.',
    tags: ['English-taught Master’s & PhD', 'Schengen zone'],
    overview:
      'Italy combines academic heritage with modern innovation. Home to Europe’s oldest universities, it offers a wide selection of English-taught Master’s and Doctoral degrees.',
    highlights: [
      'Globally recognized degrees',
      'Research-driven faculties',
      'Rich cultural environment',
      'Schengen zone access',
    ],
  },
  {
    slug: 'poland',
    name: 'Poland',
    title: 'Study in Poland',
    region: 'europe',
    schengen: true,
    advisor: 'eu',
    advisorLabel: 'Europe Advisor',
    image: px(12789261, 1600),
    alt: 'A cobblestone street in the historic Old Town of Warsaw, Poland',
    summary:
      'A dynamic European country boasting accredited technical universities, affordable tuition options, and vibrant international student communities.',
    tags: ['Affordable tuition', 'Schengen zone', 'Medical & technical'],
    overview:
      'Poland is a rapidly growing international education hub offering modern university infrastructure, technical excellence, and low living expenses.',
    highlights: [
      'High-ranking medical and technical universities',
      'Affordable tuition structures',
      'Dynamic campus communities',
      'Schengen zone access',
    ],
  },
  {
    slug: 'germany',
    name: 'Germany',
    title: 'Study in Germany',
    region: 'europe',
    schengen: true,
    advisor: 'eu',
    advisorLabel: 'Europe Advisor',
    image: px(65567, 1600),
    alt: 'Berlin Cathedral against a vibrant sky',
    summary:
      'Renowned worldwide for engineering, technology, and science, with world-class education standards and strong industrial connections.',
    tags: ['Tuition-free or low-cost', 'Schengen zone', 'Engineering'],
    overview:
      'Renowned worldwide for engineering, technology, and science, Germany provides world-class education standards and strong industrial connections.',
    highlights: [
      'State university options',
      'Tuition-free or low-cost structures',
      'Strong engineering programs',
      'Schengen zone access',
    ],
  },
  {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    title: 'Study in the United Kingdom',
    region: 'uk-ireland',
    schengen: false,
    advisor: 'uk',
    advisorLabel: 'UK Advisor',
    image: px(11796159, 1600),
    alt: 'Big Ben with a red double-decker bus passing in London',
    summary:
      'Home to top-ranked global universities, offering intensive degree programs, world-class research facilities, and graduate post-study work routes.',
    tags: ['1-year Master’s', 'Post-study work route'],
    overview:
      'The UK remains a top destination for international education, home to world-renowned universities, rigorous academic standards, and graduate post-study work routes.',
    highlights: ['Top global rankings', '1-year Master’s degree options', 'Graduate work opportunities'],
  },
  {
    slug: 'ireland',
    name: 'Ireland',
    title: 'Study in Ireland',
    region: 'uk-ireland',
    schengen: false,
    advisor: 'eu',
    advisorLabel: 'Europe Advisor',
    image: px(20252220, 1600),
    alt: "The Ha'penny Bridge over the River Liffey in Dublin, Ireland",
    summary: 'An English-speaking EU destination with a growing technology and research sector.',
    tags: ['English-speaking', 'EU destination'],
    overview:
      'Ireland is an English-speaking EU destination with welcoming cities and links to the technology, pharmaceutical and research sectors.',
    highlights: [
      'English-speaking country within the EU',
      'Universities and institutes of technology',
      'Strong links to the technology and research sectors',
      'Entry and visa rules depend on your nationality',
    ],
  },
  {
    slug: 'united-states',
    name: 'USA',
    title: 'Study in the USA',
    region: 'north-america-oceania',
    schengen: false,
    advisor: 'eu',
    advisorLabel: 'US Advisor',
    image: px(1461370, 1600),
    alt: 'New York City skyscrapers seen from the Brooklyn Bridge',
    summary:
      'Flexible degree options, cutting-edge campus facilities, and diverse specialization opportunities across thousands of accredited colleges.',
    tags: ['Scholarship pathways', 'Research facilities'],
    overview:
      'The United States offers flexible degree options, cutting-edge campus facilities, and diverse specialization opportunities across thousands of accredited colleges.',
    highlights: [
      'Globally recognized institutions',
      'Campus diversity',
      'Extensive academic research infrastructure',
    ],
  },
  {
    slug: 'canada',
    name: 'Canada',
    title: 'Study in Canada',
    region: 'north-america-oceania',
    schengen: false,
    advisor: 'eu',
    advisorLabel: 'Canada Advisor',
    image: px(25696388, 1600),
    alt: 'Toronto skyline with the CN Tower at sunset',
    summary: 'Colleges and universities in welcoming, multicultural cities.',
    tags: ['English & French', 'Study permit rules apply'],
    overview:
      'Canada has colleges and universities in multicultural cities and a reputation for welcoming international students. Study permit rules apply and can change, so it is important to get up-to-date guidance.',
    highlights: [
      'Universities and career-focused colleges',
      'Multicultural cities and a high quality of life',
      'Programmes in English and French',
      'Study permit rules apply and can change',
    ],
  },
  {
    slug: 'australia',
    name: 'Australia',
    title: 'Study in Australia',
    region: 'north-america-oceania',
    schengen: false,
    advisor: 'eu',
    advisorLabel: 'Australia Advisor',
    image: px(15453729, 1600),
    alt: 'The Sydney Opera House against a clear sky',
    summary:
      'World-class education, innovative research centers, post-study work opportunities, and high standards of living.',
    tags: ['Post-study work visas', 'Research universities'],
    overview:
      'Australia delivers world-class education, innovative research centers, post-study work opportunities, and high standards of living.',
    highlights: [
      'Globally ranked research universities',
      'Structured post-study work visas',
      'Vibrant cities',
    ],
  },
];

// Study Destinations: "Additional European Academic Destinations"
export const extraDestinations: ExtraDestination[] = [
  { name: 'Austria', schengen: true, text: 'High academic standards set within historic Central European cultural centers.' },
  { name: 'Sweden', schengen: true, text: 'Innovation-led education with an emphasis on sustainability and research.' },
  { name: 'Latvia', schengen: true, text: 'Modern Baltic higher education with accessible tuition and English-taught curricula.' },
  { name: 'Romania', schengen: true, text: 'Emerging European destination offering recognized programs in medicine and technical fields.' },
  { name: 'Bulgaria', schengen: true, text: 'Affordable tuition fees and growing international student communities.' },
  { name: 'Armenia', schengen: false, text: 'Affordable tuition fees and growing international student communities.' },
];

export const getDestination = (slug: string): Destination | undefined =>
  destinations.find((d) => d.slug === slug);
