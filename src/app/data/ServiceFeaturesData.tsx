import React from 'react';

export interface ServiceFeaturesCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceFeaturesFeaturedCard {
  image?: string;
  name?: string;
  backgroundShape?: string;
  trademark?: string;
  tools?: string[];
  title: string;
  description: string;
}

export interface ServiceFeaturesData {
  heading: string;
  featuredCard: ServiceFeaturesFeaturedCard;
  cards: ServiceFeaturesCard[];
}

// Icon components matching the image design
const PencilIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    <line x1="4" y1="20" x2="8" y2="16" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeDasharray="2 2" />
  </svg>
);

const DollarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <path d="M15 9a3 3 0 1 0 0 6M9 9a3 3 0 1 1 0 6" />
  </svg>
);

const HeadphonesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

export const SERVICE_FEATURES_DATA: Record<string, ServiceFeaturesData> = {
  "brand-identity": {
    heading: "Real Thinkers, Smart Systems, Proven Brand Design",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Quality driven by people and process",
      description: "Every brand asset passes through experienced hands and a defined workflow. This ensures speed never compromises clarity, consistency, or brand standards."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Build a brand team instantly",
        description: "Skip hiring delays and onboarding friction. Plug a ready-to-execute brand identity team directly into your business and start building immediately."
      },
      {
        icon: <ClockIcon />,
        title: "Consistent delivery you can rely on",
        description: "No guessing timelines or chasing updates. Most first brand drafts arrive within 24 hours, crafted with intent   not shortcuts."
      },
      {
        icon: <DollarIcon />,
        title: "Clear pricing, built for flexibility",
        description: "No hidden costs or per-request confusion. Choose a plan that fits your workload today and scales with your brand tomorrow."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You're never left waiting. Real brand specialists are available 24/5 to keep work moving and unblock progress."
      }
    ]
  },
  "marketing-advertising": {
    heading: "Real Strategists, Smart Systems, Proven Growth",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Performance driven by people and process",
      description: "Every campaign passes through research, execution, and optimization. This ensures speed never compromises targeting, messaging, or conversion quality."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Build a marketing team instantly",
        description: "Skip hiring delays and agency bottlenecks. Plug a ready-to-execute marketing unit directly into your business and start launching without slowdown."
      },
      {
        icon: <ClockIcon />,
        title: "Consistent delivery you can rely on",
        description: "No waiting weeks to test ideas. Most first ad drafts go live within 24 hours, built for iteration   not assumptions."
      },
      {
        icon: <DollarIcon />,
        title: "Clear pricing, built for flexibility",
        description: "No retainers or budget surprises. Choose a plan that fits your ad spend today and scales with performance tomorrow."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You're never left guessing. Real growth specialists are available 24/5 to optimize, adjust, and unblock progress."
      }
    ]
  },
  "digital-web": {
    heading: "Strategic Thinking, Clean Execution, Proven Results",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "UX built around real behavior",
      description: "Every layout is designed around how users think, scroll, and decide. This keeps experiences intuitive, focused, and aligned with real conversion paths."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Launch faster without technical drag",
        description: "Skip long dev cycles and bloated builds. We ship clean, production-ready websites that move fast and adapt as your business evolves."
      },
      {
        icon: <ClockIcon />,
        title: "Performance you can measure",
        description: "No guessing what works. Pages are built for speed, SEO, and conversion tracking from day one   so every improvement compounds."
      },
      {
        icon: <DollarIcon />,
        title: "Flexible builds, clear pricing",
        description: "No hidden development costs or scope creep. Choose a setup that fits your current needs and scales without rebuilding from scratch."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, start to scale",
        description: "You're never stuck waiting on tickets. Real people are available 24/5 to keep projects moving and resolve issues fast."
      }
    ]
  },
  "product-packaging": {
    heading: "Clear Positioning, Strong Design, Proven Impact",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Clear Positioning, Strong Design, Proven Impact",
      description: "Great packaging doesn’t just look good. It communicates value, differentiates instantly, and earns trust in seconds."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Product-first design strategy",
        description: "Every package starts with clarity. We design around your product's purpose, audience, and positioning   not trends."
      },
      {
        icon: <ClockIcon />,
        title: "Built to stand out on shelves",
        description: "No blending in. No visual noise. Designs are crafted to grab attention and remain recognizable across variants."
      },
      {
        icon: <DollarIcon />,
        title: "Retail and eCommerce ready",
        description: "From physical shelves to online listings. Packaging works seamlessly for print, retail display, and digital product pages."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Simple pricing, scalable packaging",
        description: "No hidden costs or endless revisions. Choose a setup that supports multiple SKUs and future product lines."
      }
    ]
  },
  "environmental-event": {
    heading: "Clear Planning, Cohesive Design, Proven Impact",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Clear Planning, Cohesive Design, Proven Impact",
      description: "Great events don’t feel improvised. They’re structured, consistent, and visually aligned   engineered to represent your brand professionally."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Brand-first event strategy",
        description: "Every event starts with your brand identity. Designs align with your messaging, audience, and objectives   not generic themes."
      },
      {
        icon: <ClockIcon />,
        title: "Designed for physical spaces",
        description: "From stages to floor graphics. Layouts are created to work in real environments, distances, and lighting conditions."
      },
      {
        icon: <DollarIcon />,
        title: "Seamless multi-touchpoint design",
        description: "One event, one system. Signage, screens, badges, booths, and materials stay visually consistent throughout."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Simple pricing, scalable events",
        description: "No last-minute surprises or scope confusion. Choose a setup that supports single events or recurring corporate programs."
      }
    ]
  },
  "presentations": {
    heading: "Clear Messaging, Strong Visuals, Proven Impact",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Message-first slide structure",
      description: "Every deck starts with intent. Slide flow, hierarchy, and pacing are designed to support the story   not distract from it."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Designed to persuade",
        description: "No clutter. No filler slides. Each slide earns its place by reinforcing the message and supporting decisions."
      },
      {
        icon: <ClockIcon />,
        title: "Built for live and shared use",
        description: "Present in rooms or send as files. Slides work just as well live, on-screen, or as downloadable decks."
      },
      {
        icon: <DollarIcon />,
        title: "Simple pricing, scalable decks",
        description: "No per-slide surprises or revision traps. Choose a setup that supports recurring presentations and ongoing updates."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You’re never stuck waiting. Real designers are available 24/5 to manage edits, feedback, and delivery."
      }
    ]
  },
  "ebooks-digital-report": {
    heading: "Structured Content, Clear Design, Proven Impact",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Content-first layout strategy",
      description: "Every document starts with structure. Headings, sections, and flow are designed to make complex ideas easy to follow and hard to ignore."
    },
    cards: [
      
      {
        icon: <PencilIcon />,
        title: "Designed for credibility",
        description: "No clutter. No amateur layouts. Every page is built to look polished, professional, and trustworthy   from cover to final page."
      },
      {
        icon: <ClockIcon />,
        title: "Optimized for reading and sharing",
        description: "Designed for screens, downloads, and presentations. Layouts work seamlessly across PDFs, email downloads, and live presentations."
      },
      {
        icon: <DollarIcon />,
        title: "Simple pricing, scalable documents",
        description: "No per-page confusion or revision traps. Choose a setup that supports ongoing content creation and scales with your publishing needs."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You’re never left guessing. Real designers are available 24/5 to manage revisions, updates, and delivery."
      }
    ]
  },
  "illustration-artwork": {
    heading: "DESIGNED WITH INTENT, NOT DECORATION",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Original, custom artwork",
      description: "No templates. No stock reuse. Every illustration is created specifically for your brand and use case."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Original, custom artwork",
        description: "No templates. No stock reuse. Every illustration is created specifically for your brand and use case."
      },
      {
        icon: <ClockIcon />,
        title: "Consistent visual language",
        description: "Styles, colors, and line work follow defined systems so your artwork stays cohesive as usage grows."
      },
      {
        icon: <DollarIcon />,
        title: "Flexible, reusable assets",
        description: "Illustrations are delivered in formats that work across digital, print, and motion without needing redesigns every time."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You're never left guessing. Real illustrators are available 24/5 to manage revisions, updates, and delivery."
      }
    ]
  },
  "motion-video": {
    heading: "Strategic Storytelling, Smart Motion, Proven Impact",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Story-first execution",
      description: "Every video starts with a clear objective. Scripts, scenes, and motion are designed to guide attention and deliver the message without confusion."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Production without delays",
        description: "Skip long agency timelines and revision chaos. We deliver clean, on brand motion assets quickly   ready for ads, landing pages, and campaigns."
      },
      {
        icon: <ClockIcon />,
        title: "Built for modern platforms",
        description: "No resizing headaches or mismatched formats. Videos are optimized for social, paid ads, websites, and presentations from the start."
      },
      {
        icon: <DollarIcon />,
        title: "Simple pricing, scalable output",
        description: "No per-frame surprises or hidden costs. Choose a setup that supports ongoing video needs and scales as demand grows."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You’re never guessing what’s next. Real people are available 24/5 to manage feedback, revisions, and delivery."
      }
    ]
  },
  "print": {
    heading: "DESIGNED FOR PRINT   NOT JUST SCREENS",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Print-first precision",
      description: "We design with bleed, margins, hierarchy, and finishes in mind. What you approve on screen is what comes out of the press."
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Print-first precision",
        description: "We design with bleed, margins, hierarchy, and finishes in mind. What you approve on screen is what comes out of the press."
      },
      {
        icon: <ClockIcon />,
        title: "Consistent with your brand system",
        description: "Colors, typography, and layouts stay aligned. Your print never feels disconnected from your digital brand."
      },
      {
        icon: <DollarIcon />,
        title: "Press-ready delivery",
        description: "No confusion with printers. You get clean, production-ready files prepared to industry standards."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always available",
        description: "You're never left guessing. Real print specialists are available 24/5 to manage revisions, updates, and delivery."
      }
    ]
  },
  default: {
    heading: "REAL MINDS, SMART TOOLS, EXCEPTIONAL DESIGN",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.webp",
      name: "James",
      backgroundShape: "#aaff00",
      trademark: "®",
      tools: ["Fi", "AI", "Ship", "△"],
      title: "Quality guaranteed by talent and process",
      description: ""
    },
    cards: [
      {
        icon: <PencilIcon />,
        title: "Spin up a creative team fast",
        description: "Low complexity to build from scratch or plug into your current team."
      },
      {
        icon: <ClockIcon />,
        title: "Reliable turnarounds",
        description: "Average 24 hour first drafts, handled with consistency and care."
      },
      {
        icon: <DollarIcon />,
        title: "Transparent pricing",
        description: "Build a subscription that matches your current demands."
      },
      {
        icon: <HeadphonesIcon />,
        title: "Human support, always on",
        description: "Never get stuck on a request. Our support team is here 24/5 to support you and your success."
      }
    ]
  }
};

export const getServiceFeaturesData = (slug: string): ServiceFeaturesData => {
  return SERVICE_FEATURES_DATA[slug] || SERVICE_FEATURES_DATA.default;
};

