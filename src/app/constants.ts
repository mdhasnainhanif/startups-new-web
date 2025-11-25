export const COMPANY_INFO = {
  logo: "/assets/images/logo.svg",
  email: "info@startupsadvisory.ai",
  phone: "+1 346-626-9169",
  address: "1007n Orange St, Wilmington, DE 19801, United States",
  companyName: "Startups ADVISORY.Ai",
  website: "https://startupsadvisory.ai",
};

export const NAVIGATION_LINKS = [
  // { label: "Solutions", href: "/solutions" },
  // { label: "How it Works", href: "/how-it-works" },
  // { label: "Pricing", href: "/pricing" },
  // { label: "Your Ai Agent", href: "/ai-agent" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export const TOP_BANNER = {
  show: true,
  emoji: "🚀",
  text: "Big News: We are now a Public Company",
  buttonText: "Know More",
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
    // { label: "Digital Consultation", href: "/digital-consultation" },
    // { label: "Staff Augmentation", href: "/staff-augmentation" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
  ],
  column2: [
    // { label: "How it works", href: "/how-it-works" },
    // { label: "In the press", href: "/press" },
    // { label: "Affiliate", href: "/affiliate" },
    // { label: "Brand", href: "/brand" },
  ],
  column3: [
    // { label: "Privacy Policy", href: "/privacy-policy" },
    // { label: "Data Security", href: "/data-security" },
    // { label: "Terms of Use", href: "/terms-of-use" },
    // { label: "New Secret Project", href: "/secret-project" },
  ],
};

export const SOCIAL_MEDIA_LINKS = [
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/StartupsAdvisory" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/startups_advisory/" },
  { name: "Twitter", icon: "twitter", href: "https://x.com/SAdvisory_AI" },
  { name: "Pinterest", icon: "pinterest", href: "https://www.pinterest.com/StartupsAdvisory" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/startupsadvisory" },
];


export const TECHNOLOGIES_SECTION = {
  heading: {
    part1: "$48000+ Worth of [Advanced AI] Tools Growing Your Business 10x",
  },
  description:
    "When this AI power fuels your business your visibility explodes and the right clients start coming in on their own.",
  tabs: [
    {
      id: "creative",
      label: "Creative & Design",
      value: " $12,000+ Annual Value",
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

export const ABOUT_US_BANNER = {
  heading: {
    part1: "Shaping the",
    highlight: "Future",
    part2: "with",
    highlight2: "AI",
  },
  description:
    "Startsup Advisory is a digital company specializing in AI, data analytics, and innovative technology solutions. We partner with businesses to design and implement smart systems that drive efficiency, reduce costs, and accelerate growth. Our approach combines technical expertise with real-world impact, making AI accessible and transformative across industries.",
  ctaButton: {
    text: "Book a Free Call to See How It Works",
    href: "/contact-us",
    variant: "secondary" as const,
  },
};

export const OUR_CORE_VALUES = {
  cards: [
    {
      id: "1",
      number: "01",
      icon: null, // Will be set in component
      heading: "Innovation First",
      description:
        "We continuously push the boundaries of AI and digital technologies to create smarter, future-ready solutions.",
    },
    {
      id: "2",
      number: "02",
      icon: null, // Will be set in component
      heading: "Secure & Reliable",
      description:
        "Our systems are built with enterprise-grade security, ensuring trust, safety, and long-term stability.",
    },
    {
      id: "3",
      number: "03",
      icon: null, // Will be set in component
      heading: "Global Perspective",
      description:
        "With a worldwide outlook, we design solutions that scale seamlessly and adapt to diverse markets.",
    },
  ],
};

export const WHY_CHOOSE_US = {
  heading: {
    part1: "Why Choose",
    highlight: "US",
  },
  description:
    "We combine your business insight with our AI expertise to create systems that work with you, streamline your workflow, and drive consistent growth. Together, we build a smarter operation that keeps learning, improving, and delivering stronger results over time.",
  items: [
    {
      id: "1",
      title: "Expertise That Drives Innovation",
      description:
        "Our team of AI engineers, data scientists, and strategists use deep cross-industry experience to build reliable, high-impact AI systems aligned with your business goals.",
      isOpen: true,
    },
    {
      id: "2",
      title: "Custom-Built AI Solutions",
      description:
        "Every business is unique. We design and develop AI solutions tailored to your specific needs, industry requirements, and growth objectives, ensuring maximum impact and ROI.",
      isOpen: false,
    },
    {
      id: "3",
      title: "End-to-End Implementation",
      description:
        "From initial strategy and design to deployment and ongoing optimization, we handle every aspect of your AI transformation, ensuring seamless integration with your existing systems.",
      isOpen: false,
    },
    {
      id: "4",
      title: "Transparent & Ethical AI",
      description:
        "We build AI systems with transparency, fairness, and ethical considerations at the core. Our solutions are explainable, accountable, and designed to build trust with your customers and stakeholders.",
      isOpen: false,
    },
  ],
};

export const DEDICATED_TEAM = {
  heading: {
    part1: "Our",
    highlight: "Dedicated Team",
    part2: "of Professionals",
  },
  members: [
    {
      id: "1",
      name: "Michael Turner",
      title: "Digital Consultant",
      image: "/assets/images/slider01.webp",
    },
    {
      id: "2",
      name: "James Williams",
      title: "Digital Consultant",
      image: "/assets/images/slider02.webp",
    },
    {
      id: "3",
      name: "Sophia Martinez",
      title: "Digital Consultant",
      image: "/assets/images/slider03.webp",
    },
  ],
};

export const EMPOWER_BUSINESS = {
  heading: "Empower your business growth with AI today.",
  description:
    "Empower your business growth with AI technologies today by leveraging intelligent solutions designed to optimize operations, enhance decision-making, and drive innovation.",
  ctaButton: {
    text: "Get Started Now",
    href: "#",
    variant: "secondary" as const,
  },
};

export const OUR_JOURNEY = {
  items: [
    {
      id: "1",
      number: "01.",
      title: "The Vision Begins",
      subtitle: "Identifying What's Possible With AI",
      description:
        "We started by understanding your challenges and defining how AI can meaningfully transform your operations, growth, and customer experience.",
      imagePosition: "left" as const,
    },
    {
      id: "2",
      number: "02.",
      title: "Building Intelligent Foundations",
      subtitle: "Designing Your AI-Powered Blueprint",
      description:
        "Our team created a tailored AI strategy — mapping workflows, automation points, and the systems required to scale your business using intelligent technology.",
      imagePosition: "right" as const,
    },
    {
      id: "3",
      number: "03.",
      title: "Launching Real AI Impact",
      subtitle: "Deploying Advanced Agents & Automations",
      description:
        "We rolled out AI agents, automations, and integrations that streamline processes, reduce workload, and unlock measurable business growth.",
      imagePosition: "left" as const,
    },
    {
      id: "4",
      number: "04.",
      title: "Evolving Beyond Limits",
      subtitle: "Continuous Optimization, Training & Scaling",
      description:
        "Your AI ecosystem keeps improving with performance insights, new capabilities, and proactive enhancements to ensure long-term growth and efficiency.",
      imagePosition: "right" as const,
    },
  ],
};

export const COUNTER_DATA = {
  items: [
    {
      id: "1",
      value: "298+",
      label: "Seamless Integration",
    },
    {
      id: "2",
      value: "978+",
      label: "AI Projects Delivered",
    },
    {
      id: "3",
      value: "300%",
      label: "Handled by AI Bots",
    },
    {
      id: "4",
      value: "95X",
      label: "Faster Time to Market",
    },
  ],
};

