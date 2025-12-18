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
  { label: "Home", href: "/" },
  { label: "Designer", href: "/designer" },
  { label: "About Us", href: "/about-us" },
  { label: "Key Growth", href: "/key-growth" },
  { label: "Contact", href: "/contact-us" },
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
    { label: "Home", href: "/" },
    { label: "Designer", href: "/designer" },
    { label: "About", href: "/about-us" },
    { label: "Key Growth", href: "/key-growth" },
    { label: "Contact", href: "/contact-us" },

  ],
  column5: [
    { label: "Web Development", href: "/web-development" },
    { label: "Content Marketing", href: "/content-writing" },
    { label: "Social Media Marketing", href: "/social-media-marketing" },
    {label: "Privacy Policy", href: "/privacy-policy" },
    {label: "Terms & Conditions", href: "/terms-and-condition" },
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
      { id: 1, name: "React", icon: "/assets/images/technology/react.svg", iconColor: "#61dafb" },
      { id: 2, name: "Angular", icon: "/assets/images/technology/angular.svg", iconColor: "#dd0031" },
      { id: 3, name: "Vue.js", icon: "/assets/images/technology/vue.js.svg", iconColor: "#41b883" },
      { id: 4, name: "Next.js", icon: "/assets/images/technology/next.js.svg", iconColor: "#000000" },
      { id: 5, name: "Svelte / SvelteKit", icon: "/assets/images/technology/svelte-sveltekit.svg", iconColor: "#ff3e00" },
      { id: 6, name: "Node.js", icon: "/assets/images/technology/node.js.svg", iconColor: "#68a063" },
      { id: 7, name: "Django", icon: "/assets/images/technology/django.svg", iconColor: "#092e20" },
      { id: 8, name: "Ruby on Rails", icon: "/assets/images/technology/ruby-on-rails.svg", iconColor: "#cc0000" },
      { id: 9, name: "Laravel", icon: "/assets/images/technology/laravel.svg", iconColor: "#f9322c" },
      { id: 10, name: "Flutter", icon: "/assets/images/technology/flutter.svg", iconColor: "#02569b" },
      { id: 11, name: "React Native", icon: "/assets/images/technology/react-native.svg", iconColor: "#61dafb" },
      { id: 12, name: "Swift", icon: "/assets/images/technology/swift-ios-dev.svg", iconColor: "#fa7343" },
      { id: 13, name: "Kotlin", icon: "/assets/images/technology/kotlin-android dev.svg", iconColor: "#7f52ff" },

      // DevOps / CI-CD
      { id: 14, name: "GitHub Actions", icon: "/assets/images/technology/github-action.svg", iconColor: "#000000" },
      { id: 15, name: "GitLab CI/CD", icon: "/assets/images/technology/gitlab.svg", iconColor: "#fc6d26" },
      { id: 16, name: "Jenkins", icon: "/assets/images/technology/jenkins.svg", iconColor: "#d33833" },
      { id: 17, name: "Docker", icon: "/assets/images/technology/docker.svg", iconColor: "#0db7ed" },
      { id: 18, name: "Kubernetes", icon: "/assets/images/technology/kubernetes.svg", iconColor: "#326ce5" },
      { id: 19, name: "Vercel", icon: "/assets/images/technology/vercel.svg", iconColor: "#000000" },
      { id: 20, name: "Netlify", icon: "/assets/images/technology/netlify.svg", iconColor: "#000000" },
      { id: 21, name: "AWS (Lambda / EC2 / S3)", icon: "/assets/images/technology/aws.svg", iconColor: "#ff9900" },

      // Databases
      { id: 22, name: "PostgreSQL", icon: "/assets/images/technology/postgresql.svg", iconColor: "#336791" },
      { id: 23, name: "MongoDB", icon: "/assets/images/technology/mongodb.svg", iconColor: "#4db33d" },
      { id: 24, name: "Firebase", icon: "/assets/images/technology/firebase.svg", iconColor: "#ffca28" },
      { id: 25, name: "Redis", icon: "/assets/images/technology/redis.svg", iconColor: "#dc382d" },

      // Utilities
      { id: 26, name: "Postman", icon: "/assets/images/technology/postman.svg", iconColor: "#ff6c37" },
      { id: 27, name: "Figma", icon: "/assets/images/technology/figma.svg", iconColor: "#a259ff" },
      { id: 28, name: "Jira", icon: "/assets/images/technology/jira.svg", iconColor: "#0052cc" },
    ],

    // ------------------------------------------------------------
    // 2) CREATIVE & DESIGN (20+ tools)
    // ------------------------------------------------------------
    creative: [
      // Graphic Design
      { id: 1, name: "Adobe Photoshop", icon: "/assets/images/creative-design/adobe-photoshop.svg", iconColor: "#31a8ff" },
      { id: 2, name: "Adobe Illustrator", icon: "/assets/images/creative-design/adobe-illustrator.svg", iconColor: "#ff9a00" },
      { id: 3, name: "Adobe InDesign", icon: "/assets/images/creative-design/adobe-indesign.svg", iconColor: "#ff3366" },
      { id: 4, name: "Affinity Designer", icon: "/assets/images/creative-design/affinity-designer.svg", iconColor: "#1bbcfe" },
      { id: 5, name: "Affinity Photo", icon: "/assets/images/creative-design/affinity-photo.svg", iconColor: "#7d4cf5" },

      // UI/UX
      { id: 6, name: "Figma", icon: "/assets/images/technology/figma.svg", iconColor: "#a259ff" },
      { id: 7, name: "Sketch", icon: "/assets/images/creative-design/sketch.svg", iconColor: "#f7b500" },
      { id: 8, name: "Adobe XD", icon: "/assets/images/creative-design/adobe-xd.svg", iconColor: "#ff61f6" },
      { id: 9, name: "Axure RP", icon: "/assets/images/creative-design/axure.svg", iconColor: "#3366ff" },
      { id: 10, name: "Framer", icon: "/assets/images/creative-design/framer.svg", iconColor: "#0055ff" },

      // Motion Graphics / Video
      { id: 11, name: "Premiere Pro", icon: "/assets/images/creative-design/adobe-premiere-pro.svg", iconColor: "#9999ff" },
      { id: 12, name: "After Effects", icon: "/assets/images/creative-design/after-effects.svg", iconColor: "#8b5cf6" },
      { id: 13, name: "Final Cut Pro", icon: "/assets/images/creative-design/final-cut-pro.svg", iconColor: "#ffffff" },
      { id: 14, name: "DaVinci Resolve", icon: "/assets/images/creative-design/davinci-resolve.svg", iconColor: "#1d1d1d" },
      { id: 15, name: "Blender (3D)", icon: "/assets/images/creative-design/blender-3d.svg", iconColor: "#e87d0d" },

      // 3D Tools
      { id: 16, name: "Cinema 4D", icon: "/assets/images/creative-design/cinema-4d.svg", iconColor: "#1d4ed8" },
      { id: 17, name: "Maya", icon: "/assets/images/creative-design/maya.svg", iconColor: "#00b0b9" },
      { id: 18, name: "ZBrush", icon: "/assets/images/creative-design/zbrush.svg", iconColor: "#ffffff" },

      // Creative Productivity
      { id: 19, name: "Miro", icon: "/assets/images/creative-design/miro.svg", iconColor: "#ffd02f" },
      { id: 20, name: "Notion", icon: "/assets/images/creative-design/notion.svg", iconColor: "#fff" },
      { id: 21, name: "Canva", icon: "/assets/images/creative-design/canva.svg", iconColor: "#00c4cc" },
      { id: 22, name: "Procreate", icon: "/assets/images/creative-design/procreate.svg", iconColor: "#ffffff" },
    ],

    // ------------------------------------------------------------
    // 3) MARKETING & GROWTH (20+ tools)
    // ------------------------------------------------------------
    marketing: [
      // Analytics
      { id: 1, name: "Google Analytics (GA4)", icon: "/assets/images/marketing-growth/google-analytics.svg", iconColor: "#f9ab00" },
      { id: 2, name: "Google Search Console", icon: "/assets/images/marketing-growth/google-search-console.svg", iconColor: "#34a853" },
      { id: 3, name: "Mixpanel", icon: "/assets/images/marketing-growth/mixpanel.svg", iconColor: "#a855f7" },
      { id: 4, name: "Amplitude", icon: "/assets/images/marketing-growth/amplitude.svg", iconColor: "#1e40af" },
      { id: 5, name: "Hotjar", icon: "/assets/images/marketing-growth/hotjar.svg", iconColor: "#ff3b30" },

      // SEO
      { id: 6, name: "Ahrefs", icon: "/assets/images/marketing-growth/ahrefs.svg", iconColor: "#1e90ff" },
      { id: 7, name: "SEMrush", icon: "/assets/images/marketing-growth/semrush.svg", iconColor: "#ff6b35" },
      { id: 8, name: "Moz", icon: "/assets/images/marketing-growth/moz.svg", iconColor: "#2d8cff" },
      { id: 9, name: "Screaming Frog", icon: "/assets/images/marketing-growth/screaming-frog.svg", iconColor: "#2d8cff" },
      { id: 10, name: "Surfer SEO", icon: "/assets/images/marketing-growth/surfer-seo.svg", iconColor: "#ff6b9d" },

      // Email marketing
      { id: 11, name: "Mailchimp", icon: "/assets/images/marketing-growth/mailchimp.svg", iconColor: "#ffe01b" },
      { id: 12, name: "Klaviyo", icon: "/assets/images/marketing-growth/klaviyo.svg", iconColor: "#11c37f" },
      { id: 13, name: "ConvertKit", icon: "/assets/images/marketing-growth/convertkit.svg", iconColor: "#ff6666" },
      { id: 14, name: "HubSpot", icon: "/assets/images/marketing-growth/hubspot.svg", iconColor: "#ff7a59" },

      // Social Media
      { id: 15, name: "Hootsuite", icon: "/assets/images/marketing-growth/hootsuite.svg", iconColor: "#000000" },
      { id: 16, name: "Buffer", icon: "/assets/images/marketing-growth/buffer.svg", iconColor: "#1a73e8" },
      { id: 17, name: "Later", icon: "/assets/images/marketing-growth/later.svg", iconColor: "#5b21b6" },
      { id: 18, name: "Sprout Social", icon: "/assets/images/marketing-growth/sprout-social.svg", iconColor: "#00c06a" },

      // Advertising & Growth
      { id: 19, name: "Google Ads", icon: "/assets/images/marketing-growth/google-ads.svg", iconColor: "#4285f4" },
      { id: 20, name: "Meta Ads Manager", icon: "/assets/images/marketing-growth/meta-ads-manager.svg", iconColor: "#1877f2" },
      { id: 21, name: "TikTok Ads", icon: "/assets/images/marketing-growth/tiktok-add.svg", iconColor: "#ff0050" },
      { id: 22, name: "LinkedIn Campaign Manager", icon: "/assets/images/marketing-growth/linkedIn-campaign-manager.svg", iconColor: "#0a66c2" },
      { id: 23, name: "Zapier (Automation)", icon: "/assets/images/marketing-growth/zapier.svg", iconColor: "#ff4f00" },
    ],
  },
};


export const ABOUT_US_BANNER = {
  heading: {
    part1: "Building Stronger Businesses That ",
    highlight: "Grow Every Day",
    part2: "",
    highlight2: "",
  },
  description:
    "StartupAdvisory is the partner founders choose when they want real growth real structure and real results. We help businesses simplify operations sharpen their strategy and build systems that improve sales performance and accelerate progress. Our work blends clear direction with practical execution giving founders the power to grow without confusion or wasted effort.",
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
      heading: "Innovation That Drives Revenue Forward",
      description:
        "We design growth focused solutions that remove bottlenecks help you move faster and give your business the structure it needs to scale.",
    },
    {
      id: "2",
      number: "02",
      icon: null, // Will be set in component
      heading: "Strong Reliable Business Systems",
      description:
        "Every system we build is created for long term stability giving you operations that run smoothly consistently and without hidden gaps.",
    },
    {
      id: "3",
      number: "03",
      icon: null, // Will be set in component
      heading: "A Global Mindset For Modern Businesses",
      description:
        "With experience shaped across different markets we help businesses build models that scale easily adapt quickly and stay competitive everywhere they operate.",
    },
  ],
};

export const WHY_CHOOSE_US = {
  heading: {
    part1: "Why Work",
    highlight: "With Us",
  },
  description:
    "We combine your business insight with proven growth frameworks to create a system that increases revenue strengthens performance and supports consistent expansion. Together we build an operation that keeps improving learning and delivering measurable results over time.",
  items: [
    {
      id: "1",
      title: "Expertise That Strengthens Your Growth Engine",
      description:
        "Our strategists operators and business builders bring deep experience from multiple industries to create strong processes and systems that support your goals.",
      isOpen: true,
    },
    {
      id: "2",
      title: "Growth Systems Tailored To Your Business",
      description:
        "No two businesses are the same. We create solutions shaped around your model your market and your goals so everything you implement moves your growth forward.",
      isOpen: false,
    },
    {
      id: "3",
      title: "From Strategy To Execution",
      description:
        "We guide your full growth transformation from planning to building to optimizing so your business runs cleaner stronger and more predictable every day.",
      isOpen: false,
    },
    {
      id: "4",
      title: "Transparent And Ethical Practices",
      description:
        "We operate with complete clarity giving you strategies and systems built on honesty accountability and long term trust.",
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
      // name: "Michael Turner",
      title: "Frontend Developer",
      image: "/assets/images/avatar-without-icons/frontend-developer.webp",
    },
    {
      id: "2",
      // name: "James Williams",
      title: "Backend Developer",
      image: "/assets/images/avatar-without-icons/backend-developer.webp",
    },
    {
      id: "3",
      // name: "Sophia Martinez",
      title: "Full Stack Developer",
      image: "/assets/images/avatar-without-icons/dev.webp",
    },
    {
      id: "4",
      // name: "Michael Turner",
      title: "Graphic Designer",
      image: "/assets/images/avatar-without-icons/graphic-designer.webp",
    },
    {
      id: "5",
      // name: "James Williams",
      title: "UI/UX Designer",
      image: "/assets/images/avatar-without-icons/ui-ux-designer.webp",
    },
    {
      id: "6",
      // name: "Sophia Martinez",
      title: "Brand Designer",
      image: "/assets/images/avatar-without-icons/brand-designer.webp",
    },
    {
      id: "7",
      // name: "Michael Turner",
      title: "Content Writer",
      image: "/assets/images/avatar-without-icons/content-writer.webp",
    },
    {
      id: "8",
      // name: "James Williams",
      title: "Data Analyst",
      image: "/assets/images/avatar-without-icons/data-analyst.webp",
    },
    {
      id: "9",
      // name: "John Doe",
      title: "Growth Hacker",
      image: "/assets/images/avatar-without-icons/growth-hacker.webp",
    },
    {
      id: "10",
      // name: "Michael Turner",
      title: "Marketing Automation Specialist",
      image: "/assets/images/avatar-without-icons/marketing.webp",
    },
    {
      id: "11",
      // name: "James Williams",
      title: "Social Media Manager",
      image: "/assets/images/avatar-without-icons/social-media-marketing.webp",
    },
    {
      id: "12",
      // name: "Sophia Martinez",
      title: "Video Animator",
      image: "/assets/images/avatar-without-icons/graphic-designer.webp",
    },
    {
      id: "13",
      // name: "Sophia Martinez",
      title: "Ads Writer",
      image: "/assets/images/avatar-without-icons/ads-writer.webp",
    },
    {
      id: "14",
      // name: "Sophia Martinez",
      title: "Campaign Writer",
      image: "/assets/images/avatar-without-icons/campaign-writer.webp",
    },
    {
      id: "15",
      // name: "Sophia Martinez",
      title: "Content Curator",
      image: "/assets/images/avatar-without-icons/content-curator.webp",
    },
    {
      id: "16",
      // name: "Sophia Martinez",
      title: "Reels Creator",
      image: "/assets/images/avatar-without-icons/reels-creator.webp",
    },
    {
      id: "17",
      // name: "Sophia Martinez",
      title: "Copywriter",
      image: "/assets/images/avatar-without-icons/copywriter.webp",
    },
    {
      id: "18",
      // name: "Sophia Martinez",
      title: "UI/UX Writer",
      image: "/assets/images/avatar-without-icons/ui-ux-writer.webp",
    },
  ],
};

export const EMPOWER_BUSINESS = {
  heading: "Grow your business today.",
  description:
    "Give your company the systems clarity and direction it needs to increase revenue perform better and scale with confidence.",
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
      title: "The Vision Starts",
      subtitle: "Understanding What Will Grow Your Business",
      description:
        "We begin by listening to your challenges your goals and your roadblocks then identify what will move the needle fastest for your revenue and performance.",
      imagePosition: "left" as const,
    },
    {
      id: "2",
      number: "02.",
      title: "Building The Foundation Of Growth",
      subtitle: "Creating Your Structure For Scaling",
      description:
        "We map your operations define your growth opportunities and design the systems that help your business operate stronger and sell smarter.",
      imagePosition: "right" as const,
    },
    {
      id: "3",
      number: "03.",
      title: "Turning Strategy Into Real Results",
      subtitle: "Implementing Processes That Increase Revenue",
      description:
        "We launch improved workflows refined systems and stronger structures that reduce wasted time boost output and drive measurable business growth.",
      imagePosition: "left" as const,
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

