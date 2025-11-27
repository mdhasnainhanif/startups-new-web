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
  text: "Big News: We Launched Key Growth Manager Services",
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
      id: "development",
      label: "Web & App Development",
      value: "$15,000+ Annual Value",
    },
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
  ],

  tools: {
    // ------------------------------------------------------------
    // 1) WEB & APP DEVELOPMENT (20+ tools)
    // ------------------------------------------------------------
    development: [
      // Frameworks & Libraries
      { id: 1, name: "React", icon: "R", iconColor: "#61dafb" },
      { id: 2, name: "Angular", icon: "A", iconColor: "#dd0031" },
      { id: 3, name: "Vue.js", icon: "V", iconColor: "#41b883" },
      { id: 4, name: "Next.js", icon: "N", iconColor: "#000000" },
      { id: 5, name: "Svelte / SvelteKit", icon: "S", iconColor: "#ff3e00" },
      { id: 6, name: "Node.js", icon: "Nd", iconColor: "#68a063" },
      { id: 7, name: "Django", icon: "D", iconColor: "#092e20" },
      { id: 8, name: "Ruby on Rails", icon: "Rb", iconColor: "#cc0000" },
      { id: 9, name: "Laravel", icon: "L", iconColor: "#f9322c" },
      { id: 10, name: "Flutter", icon: "F", iconColor: "#02569b" },
      { id: 11, name: "React Native", icon: "RN", iconColor: "#61dafb" },
      { id: 12, name: "Swift", icon: "S", iconColor: "#fa7343" },
      { id: 13, name: "Kotlin", icon: "K", iconColor: "#7f52ff" },

      // DevOps / CI-CD
      { id: 14, name: "GitHub Actions", icon: "G", iconColor: "#000000" },
      { id: 15, name: "GitLab CI/CD", icon: "GL", iconColor: "#fc6d26" },
      { id: 16, name: "Jenkins", icon: "J", iconColor: "#d33833" },
      { id: 17, name: "Docker", icon: "Dk", iconColor: "#0db7ed" },
      { id: 18, name: "Kubernetes", icon: "K8", iconColor: "#326ce5" },
      { id: 19, name: "Vercel", icon: "V", iconColor: "#000000" },
      { id: 20, name: "Netlify", icon: "N", iconColor: "#32e6e2" },
      { id: 21, name: "AWS (Lambda / EC2 / S3)", icon: "A", iconColor: "#ff9900" },

      // Databases
      { id: 22, name: "PostgreSQL", icon: "P", iconColor: "#336791" },
      { id: 23, name: "MongoDB", icon: "M", iconColor: "#4db33d" },
      { id: 24, name: "Firebase", icon: "Fb", iconColor: "#ffca28" },
      { id: 25, name: "Redis", icon: "R", iconColor: "#dc382d" },

      // Utilities
      { id: 26, name: "Postman", icon: "Pm", iconColor: "#ff6c37" },
      { id: 27, name: "Figma", icon: "F", iconColor: "#a259ff" },
      { id: 28, name: "Jira", icon: "J", iconColor: "#0052cc" },
    ],

    // ------------------------------------------------------------
    // 2) CREATIVE & DESIGN (20+ tools)
    // ------------------------------------------------------------
    creative: [
      // Graphic Design
      { id: 1, name: "Adobe Photoshop", icon: "Ps", iconColor: "#31a8ff" },
      { id: 2, name: "Adobe Illustrator", icon: "Ai", iconColor: "#ff9a00" },
      { id: 3, name: "Adobe InDesign", icon: "Id", iconColor: "#ff3366" },
      { id: 4, name: "Affinity Designer", icon: "Ad", iconColor: "#1bbcfe" },
      { id: 5, name: "Affinity Photo", icon: "Ap", iconColor: "#7d4cf5" },

      // UI/UX
      { id: 6, name: "Figma", icon: "F", iconColor: "#a259ff" },
      { id: 7, name: "Sketch", icon: "Sk", iconColor: "#f7b500" },
      { id: 8, name: "Adobe XD", icon: "Xd", iconColor: "#ff61f6" },
      { id: 9, name: "Axure RP", icon: "Ax", iconColor: "#3366ff" },
      { id: 10, name: "Framer", icon: "Fr", iconColor: "#0055ff" },

      // Motion Graphics / Video
      { id: 11, name: "Premiere Pro", icon: "Pr", iconColor: "#9999ff" },
      { id: 12, name: "After Effects", icon: "Ae", iconColor: "#8b5cf6" },
      { id: 13, name: "Final Cut Pro", icon: "Fc", iconColor: "#ffffff" },
      { id: 14, name: "DaVinci Resolve", icon: "Dv", iconColor: "#1d1d1d" },
      { id: 15, name: "Blender (3D)", icon: "B", iconColor: "#e87d0d" },

      // 3D Tools
      { id: 16, name: "Cinema 4D", icon: "C4", iconColor: "#1d4ed8" },
      { id: 17, name: "Maya", icon: "M", iconColor: "#00b0b9" },
      { id: 18, name: "ZBrush", icon: "Z", iconColor: "#ffffff" },

      // Creative Productivity
      { id: 19, name: "Miro", icon: "Mi", iconColor: "#ffd02f" },
      { id: 20, name: "Notion", icon: "N", iconColor: "#000000" },
      { id: 21, name: "Canva", icon: "Ca", iconColor: "#00c4cc" },
      { id: 22, name: "Procreate", icon: "Pr", iconColor: "#ffffff" },
    ],

    // ------------------------------------------------------------
    // 3) MARKETING & GROWTH (20+ tools)
    // ------------------------------------------------------------
    marketing: [
      // Analytics
      { id: 1, name: "Google Analytics (GA4)", icon: "G", iconColor: "#f9ab00" },
      { id: 2, name: "Google Search Console", icon: "G", iconColor: "#34a853" },
      { id: 3, name: "Mixpanel", icon: "M", iconColor: "#a855f7" },
      { id: 4, name: "Amplitude", icon: "A", iconColor: "#1e40af" },
      { id: 5, name: "Hotjar", icon: "H", iconColor: "#ff3b30" },

      // SEO
      { id: 6, name: "Ahrefs", icon: "A", iconColor: "#1e90ff" },
      { id: 7, name: "SEMrush", icon: "S", iconColor: "#ff6b35" },
      { id: 8, name: "Moz", icon: "Mz", iconColor: "#2d8cff" },
      { id: 9, name: "Screaming Frog", icon: "Sf", iconColor: "#00d084" },
      { id: 10, name: "Surfer SEO", icon: "Su", iconColor: "#ff6b9d" },

      // Email marketing
      { id: 11, name: "Mailchimp", icon: "M", iconColor: "#ffe01b" },
      { id: 12, name: "Klaviyo", icon: "K", iconColor: "#11c37f" },
      { id: 13, name: "ConvertKit", icon: "C", iconColor: "#ff6666" },
      { id: 14, name: "HubSpot", icon: "H", iconColor: "#ff7a59" },

      // Social Media
      { id: 15, name: "Hootsuite", icon: "H", iconColor: "#000000" },
      { id: 16, name: "Buffer", icon: "B", iconColor: "#1a73e8" },
      { id: 17, name: "Later", icon: "L", iconColor: "#5b21b6" },
      { id: 18, name: "Sprout Social", icon: "Ss", iconColor: "#00c06a" },

      // Advertising & Growth
      { id: 19, name: "Google Ads", icon: "Ga", iconColor: "#4285f4" },
      { id: 20, name: "Meta Ads Manager", icon: "M", iconColor: "#1877f2" },
      { id: 21, name: "TikTok Ads", icon: "T", iconColor: "#ff0050" },
      { id: 22, name: "LinkedIn Campaign Manager", icon: "Li", iconColor: "#0a66c2" },
      { id: 23, name: "Zapier (Automation)", icon: "Z", iconColor: "#ff4f00" },
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

