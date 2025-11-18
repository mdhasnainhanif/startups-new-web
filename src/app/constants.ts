export const COMPANY_INFO = {
  logo: "/assets/images/logo.svg",
  email: "info@startupsadvisory.ai",
  phone: "+1 (555) 123-4567",
  address: "123 Startup Street, Innovation City, IC 12345",
  companyName: "Startups ADVISORY.Ai",
  website: "https://startupsadvisory.ai",
};

export const NAVIGATION_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Your Ai Agent", href: "/ai-agent" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const TOP_BANNER = {
  show: true,
  emoji: "🚀",
  text: "Big News: We are now a Public Company",
  buttonText: "Know More →",
  buttonLink: "/big-news",
};

// Re-export Home page data for backward compatibility
export {
  HERO_BANNER,
  FAQ_SECTION,
  FAQ_DATA,
  PROFESSIONAL_ONLINE,
  REVIEWS_SECTION,
  GROWTH_GUIDES,
  CALENDLY_SECTION,
} from "./components/Home/data";

export const FOOTER_LINKS = {
  column1: [
    { label: "Digital Consultation", href: "/digital-consultation" },
    { label: "Staff Augmentation", href: "/staff-augmentation" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  column2: [
    { label: "How it works", href: "/how-it-works" },
    { label: "In the press", href: "/press" },
    { label: "Affiliate", href: "/affiliate" },
    { label: "Brand", href: "/brand" },
  ],
  column3: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Data Security", href: "/data-security" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "New Secret Project", href: "/secret-project" },
  ],
};

export const SOCIAL_MEDIA_LINKS = [
  { name: "LinkedIn", icon: "linkedin", href: "https://linkedin.com" },
  { name: "Instagram", icon: "instagram", href: "https://instagram.com" },
  { name: "Facebook", icon: "facebook", href: "https://facebook.com" },
  { name: "GitHub", icon: "github", href: "https://github.com" },
  { name: "Website", icon: "globe", href: "https://startupsadvisory.ai" },
  { name: "YouTube", icon: "youtube", href: "https://youtube.com" },
];


export const TECHNOLOGIES_SECTION = {
  heading: {
    part1: "The Smart Marketing",
    part2: "AI Stack",
    part3: " — $48,000+ Worth of Tools Working for You",
  },
  description:
    "Your Smart Marketing AI Team doesn't just come with talent — it comes with a fully loaded AI ecosystem. From creative design to analytics automation, every task is powered by premium, enterprise-grade AI tools other businesses pay thousands for individually. You get all of it included — no setup, no license, no hassle.",
  tabs: [
    {
      id: "creative",
      label: "Creative & Design",
      value: "$12,000+ Annual Value",
    },
    {
      id: "marketing",
      label: "Marketing & Growth",
      value: "$15,000+ Annual Value",
    },
    {
      id: "development",
      label: "Development",
      value: "$10,000+ Annual Value",
    },
    {
      id: "growth",
      label: "Key Growth",
      value: "$11,000+ Annual Value",
    },
  ],
  tools: {
    creative: [
      { id: 1, name: "Kaiber", icon: "K", iconColor: "#8b5cf6" },
      { id: 2, name: "Illustrator", icon: "Ai", iconColor: "#ff6b35" },
      { id: 3, name: "After Effects", icon: "Ae", iconColor: "#8b5cf6" },
      { id: 4, name: "Midjourney (Pro)", icon: "🎨", iconColor: "#0fdac2" },
      { id: 5, name: "Figma + FigJam AI", icon: "F", iconColor: "#ff6b9d" },
      { id: 6, name: "Magic Studio Pro", icon: "M", iconColor: "#0fdac2" },
      { id: 7, name: "Photoshop", icon: "Ps", iconColor: "#4285f4" },
      { id: 8, name: "Runway ML (Enterprise)", icon: "R", iconColor: "#0fdac2" },
      { id: 9, name: "ElevenLabs", icon: "||", iconColor: "#0fdac2" },
      { id: 10, name: "Pika Labs", icon: "🐰", iconColor: "#ffffff" },
      { id: 11, name: "Canv", icon: "C", iconColor: "#0fdac2" },
    ],
    marketing: [
      { id: 1, name: "Google Ads AI", icon: "G", iconColor: "#4285f4" },
      { id: 2, name: "Facebook Ads Manager", icon: "f", iconColor: "#1877f2" },
      { id: 3, name: "HubSpot AI", icon: "H", iconColor: "#ff7a59" },
      { id: 4, name: "Mailchimp AI", icon: "M", iconColor: "#ffe01b" },
      { id: 5, name: "Semrush AI", icon: "S", iconColor: "#ff6b35" },
    ],
    development: [
      { id: 1, name: "GitHub Copilot", icon: "GH", iconColor: "#ffffff" },
      { id: 2, name: "Vercel AI", icon: "V", iconColor: "#000000" },
      { id: 3, name: "Codeium", icon: "C", iconColor: "#0fdac2" },
      { id: 4, name: "Cursor AI", icon: "Cu", iconColor: "#643bff" },
    ],
    growth: [
      { id: 1, name: "Analytics AI", icon: "A", iconColor: "#0fdac2" },
      { id: 2, name: "SEO AI Tools", icon: "S", iconColor: "#ff6b35" },
      { id: 3, name: "Content AI", icon: "C", iconColor: "#8b5cf6" },
    ],
  },
};

