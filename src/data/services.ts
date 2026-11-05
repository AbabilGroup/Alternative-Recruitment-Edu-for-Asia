import { Compass, FileText, Award, BookOpen, Stamp, Luggage, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: "counselling",
    title: "Course and university shortlisting",
    summary: "We compare countries, courses and universities against your grades, budget and career goals.",
    details: ["Profile review and honest assessment", "Shortlist of ambitious, realistic and safer choices", "Total cost estimate for each option"],
    icon: Compass,
    image: "/images/online-counselling.webp",
    imageAlt: "A student talking with a counsellor on a video call",
  },
  {
    id: "applications",
    title: "Applications and documents",
    summary: "We help you prepare complete applications and keep track of each deadline.",
    details: ["Statement of purpose and CV feedback", "Guidance on recommendation letters", "Tracking of applications and offers"],
    icon: FileText,
    image: "/images/documents.webp",
    imageAlt: "Two people reviewing documents beside a laptop",
  },
  {
    id: "scholarships",
    title: "Scholarships and funding",
    summary: "We look for the awards you can realistically win, and help you plan the rest of your funding.",
    details: ["University and government scholarship search", "Scholarship application guidance", "Education loan and proof-of-funds guidance"],
    icon: Award,
    image: "/images/diplomas.webp",
    imageAlt: "Rolled certificates tied with red ribbon",
  },
  {
    id: "test-prep",
    title: "Language and test preparation",
    summary: "We work out which tests you actually need, then help you prepare for the scores you are aiming for.",
    details: ["IELTS, TOEFL, PTE and Duolingo guidance", "GRE, GMAT and SAT planning", "JLPT, TOPIK and German language pathways"],
    icon: BookOpen,
    image: "/images/study-desk.webp",
    imageAlt: "A student writing notes at a desk beside a laptop",
  },
  {
    id: "visa",
    title: "Visa preparation",
    summary: "We help you understand the requirements, organise your documents and prepare for any interview.",
    details: ["Country-specific document checklist", "Financial document review", "Mock visa interview practice"],
    icon: Stamp,
    image: "/images/handshake.webp",
    imageAlt: "Two people shaking hands across a table with documents",
  },
  {
    id: "pre-departure",
    title: "Accommodation and pre-departure",
    summary: "We help you get ready for the move, so your first weeks abroad are easier.",
    details: ["Accommodation search guidance", "Pre-departure checklist and briefing", "Advice on banking, phones and arrival"],
    icon: Luggage,
    image: "/images/students-steps.webp",
    imageAlt: "Three students talking on the steps outside a building",
  },
];

export const steps = [
  { title: "Talk to a counsellor", text: "Tell us about your grades, budget and goals. We help you work out what makes sense." },
  { title: "Build your shortlist", text: "Compare countries, courses and full costs, then agree on a list of universities." },
  { title: "Prepare and apply", text: "Take the tests you need, finish your documents and submit before each deadline." },
  { title: "Secure funds and visa", text: "Compare offers, plan your funding and prepare a complete visa application." },
  { title: "Get ready to fly", text: "Arrange accommodation, go through the pre-departure checklist and head to campus." },
];
