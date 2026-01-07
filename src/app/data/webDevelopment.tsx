import { CompleteBusinessSetupData } from "../components/CompleteBusinessSetup/CompleteBusinessSetup";

// Types
export interface HeroData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface LogoStripData {
  title: string;
  subtitle: string;
  description: string;
  logos: string[];
}

export interface AuthorityData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  services: Array<{
    icon: string;
    text: string;
  }>;
  note: string;
}

export interface AIInsightsData {
  badge: {
    icon: string;
    text: string;
  };
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  beforeAfter: Array<{
    before: string;
    after: string;
  }>;
  valuePreview: Array<{
    icon: string;
    text: string;
  }>;
  cta: string;
}

export interface StoryTestimonialData {
  heading: {
    text: string;
    highlight: string;
  };
  challenge: {
    title: string;
    description: string;
  };
  transformation: {
    title: string;
    items: string[];
  };
  testimonial: {
    rating: number;
    quote: string;
    author: string;
    role: string;
    company: string;
    date: string;
  };
}

export interface CROSectionData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  conversionLevers: Array<{
    icon: string;
    text: string;
  }>;
  guarantee: {
    icon: string;
    title: string;
    description: string;
  };
}

export interface ProcessCardsData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  steps: Array<{
    icon: string;
    number: string;
    title: string;
    outcome: string;
  }>;
}

export interface TrustBadgesData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  badges: Array<{
    icon: string;
    label: string;
    subtext: string;
  }>;
}

export interface MessagingData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  copyBenefits: Array<{
    icon: string;
    text: string;
  }>;
  freeOffer: {
    title: string;
    description: string;
    cta: string;
  };
}

export interface CMSControlData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  cmsFeatures: Array<{
    icon: string;
    text: string;
  }>;
}

export interface FrameworkData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  frameworkSlices: Array<{
    label: string;
    angle: number;
  }>;
  valueStackItems: Array<{
    icon: string;
    text: string;
  }>;
}

export interface TeamData {
  heading: string;
  description: string;
  team: Array<{
    name: string;
    role: string;
    bio: string;
    initials: string;
  }>;
  stats: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
}

export interface FinalTestimonialData {
  quote: {
    text: string;
    highlight: string;
  };
  author: {
    name: string;
    role: string;
    company: string;
    initials: string;
  };
}

export interface BigCTAData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  process: Array<{
    step: string;
    title: string;
    description: string;
    icon: string;
  }>;
  form: {
    title: string;
    fields: Array<{
      name: string;
      label: string;
      type: string;
      placeholder: string;
      required: boolean;
    }>;
    submitText: string;
  };
  note: string;
}

export interface ExperienceBoxData {
  heading: string;
  items: Array<{
    text: string;
  }>;
}

export interface PackageDetailsData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  items: Array<{
    number: string;
    label: string;
  }>;
  ctaButton?: {
    text: string;
    href: string;
  };
}

export interface PricingData {
  heading: {
    part1: string;
    price: string;
    part2: string;
  };
  websiteKits: {
    title: {
      highlight: string;
      suffix: string;
    };
    items: Array<{
      number: string;
      label: string;
    }>;
  };
  benefits: {
    title: string;
    items: Array<{
      text: string;
    }>;
    footer: string;
  };
  longTermAdvantage: string;
  valueProposition: string;
}

export interface PerformanceInsightsData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  insights: Array<{
    text: string;
  }>;
}

export interface CostComparisonData {
  heading: {
    part1: string;
    part2: string;
    part3: string;
  };
  description: string;
  points: Array<{
    text: string;
  }>;
  conclusion: string;
}

export interface WebDevelopmentData {
  hero: HeroData;
  experienceBox: ExperienceBoxData;
  team: TeamData;
  completeBusinessSetup: CompleteBusinessSetupData;
  performanceInsights: PerformanceInsightsData;
  costComparison: CostComparisonData;
  bigCTA: BigCTAData;
}

// Data
export const WEB_DEVELOPMENT_DATA: WebDevelopmentData = {
  hero: {
    badge: "1 Month Website Package",
    heading: {
      text: "Your Complete Website Team for ..............",
      highlight: "  1 Month",
    },
    description:
      "Fully Focused on Your Build. A dedicated web unit assembled to create a fast, structured, market ready website prepared to support real traffic and real business activity.",
    features: [
      {
        icon: "TrendingUp",
        text: "2,500 plus completed website projects across multiple business categories",
      },
      {
        icon: "BarChart3",
        text: "40 plus years combined execution in modern web production",
      },
      {
        icon: "Layout",
        text: "Specialists in interface, content, SEO, and technical implementation",
      },
      {
        icon: "Zap",
        text: "Web systems deployed across 15 plus active service industries",
      },
    ],
    cta: {
      primary: "Get Started with Your Website Team",
      secondary: "See what's included",
    },
  },
  experienceBox: {
    heading: "Experience Box  What Your Web Team Brings",
    items: [
      { text: "2,500 plus completed website projects across multiple business categories" },
      { text: "40 plus years combined execution in modern web production" },
      { text: "Specialists in interface, content, SEO, and technical implementation" },
      { text: "Web systems deployed across 15 plus active service industries" },
      { text: "Trained in AI assisted workflows and rapid digital delivery methods" },
    ],
  },
  completeBusinessSetup: {
    heading: {
      part1: "Your Complete Website Package   ",
      price: "$3,299",
      part2: " One Time",
    },
    brandingKits: {
      items: [
        { id: "1", number: "01", label: "Homepage" },
        { id: "2", number: "02", label: "Service Page" },
        { id: "3", number: "03", label: "About Page" },
        { id: "4", number: "04", label: "Contact Structure" },
        { id: "5", number: "05", label: "Blog Setup" },
        { id: "6", number: "06", label: "Landing Page" },
        { id: "7", number: "07", label: "Homepage" },
        { id: "8", number: "08", label: "Service Page" },
        { id: "9", number: "09", label: "About Page" },
        { id: "10", number: "10", label: "Contact Structure" },
        { id: "11", number: "11", label: "Blog Setup" },
        { id: "12", number: "12", label: "Landing Page" },
      ],
    },
    benefits: {
      title: "Get This Package For ",
      items: [
        { id: "1", text: "A dedicated web team" },
        { id: "2", text: "50+ essential website assets" },
        { id: "3", text: "AI assisted workflow" },
        { id: "4", text: "Unlimited revisions within 1 month" },
        { id: "5", text: "Launch ready files delivered" },
      ],
      ctaButton: {
        text: "Get My Package",
        href: "/contact",
      },
    },
    // additionalText: {
    //   heading: "Consistent Performance Across All Builds",
    //   description:
    //     "Your web team uses an AI enhanced production environment engineered to deliver strong, dependable website systems without complexity or extra cost.",
    // },
  },
  performanceInsights: {
    heading: {
      text: "A Reliable Website Is Core Business Infrastructure.",
      highlight: "",
    },
    description:
      "Visitors evaluate your credibility the moment your website loads. Layout, clarity, speed, and structure determine perceived value instantly. A professionally built website strengthens confidence, increases engagement, and supports real buyer decisions.",
    insights: [
      {
        text: "Modernized websites generate 15 to 25 percent more revenue in the first year",
      },
      {
        text: "Businesses with structured pages reduce ad costs by 20 to 40 percent",
      },
      {
        text: "Websites with optimized layouts convert up to 30 percent more inquiries",
      },
      {
        text: "Companies investing in strong digital systems increase customer value by 28 percent",
      },
    ],
  },
  costComparison: {
    heading: {
      part1: "Review the Real Cost of",
      part2: "Hiring Web Staff vs.",
      part3: "Using a Full Web Team for 1 Month",
    },
    description: "Calculate:",
    points: [
      { text: "Annual cost of a U.S. developer" },
      { text: "Expenses for multiple specialists" },
      { text: "Tools and platform subscriptions" },
      { text: "Savings created by one coordinated unit" },
      { text: "Return gained by building your website correctly from the start" },
    ],
    conclusion:
      "Most business owners recognize thousands saved and months regained through this model",
  },
  team: {
    heading: "Meet the Team Assigned to Build Your Website",
    description:
      "Your 1 month web team executes a complete website operation from initial structure to final deployment. Each specialist focuses on a dedicated part of the build, keeping quality consistent and timelines controlled.",
    team: [
      {
        name: "Web Designer",
        role: "Visual Layout Specialist",
        bio: "Shapes the visual layout and presentation standards that set the tone for your entire website. Handles homepage visual plan, service section layout, color and typography system, hero area composition, visual hierarchy control, section block visuals, responsive element setup, brand alignment for web, component appearance mapping, and full layout direction.",
        initials: "WD",
      },
      {
        name: "UI UX Designer",
        role: "Experience Layer Specialist",
        bio: "Constructs the experience layer that drives clarity, reduces friction, and supports user action. Handles wireframe architecture, user journey planning, navigation structure, interaction placement, conversion sequence tuning, mobile usability upgrades, prototype demonstration, form experience mapping, spacing and readability rules, and full experience consistency.",
        initials: "UX",
      },
      {
        name: "Web Developer",
        role: "Full stack implementation",
        bio: "Builds the full website with stable code, fast performance, and complete stack integration. Handles frontend engineering, backend functionality setup, Full stack implementation, technical SEO installation, page speed refinement, schema and metadata configuration, security essentials, hosting and deployment support, responsive coding standards, and complete website buildout.",
        initials: "DEV",
      },
    ],
    stats: [
      {
        icon: "TrendingUp",
        value: "2,500+",
        label: "Completed website projects",
      },
      {
        icon: "Users",
        value: "40+",
        label: "Years combined execution",
      },
      {
        icon: "Handshake",
        value: "15+",
        label: "Active service industries",
      },
    ],
  },
  bigCTA: {
    badge: "Unlock Your Growth Roadmap",
    heading: {
      text: "Share your objectives and receive a clear, actionable outline for your online presence.",
      highlight: "",
    },
    description:
      "You will know what to build, what to improve, and what supports faster customer acquisition.",
    process: [
      {
        step: "1",
        title: "Share your objectives",
        description: "Tell us about your business goals and current website status",
        icon: "User",
      },
      {
        step: "2",
        title: "We analyze and plan",
        description: "Our team reviews your needs and creates a strategic roadmap",
        icon: "FileSearch",
      },
      {
        step: "3",
        title: "Get your roadmap",
        description: "Receive a clear, actionable outline for your online presence",
        icon: "Phone",
      },
    ],
    form: {
      title: "Get Your Growth Roadmap",
      fields: [
        {
          name: "name",
          label: "Your name",
          type: "text",
          placeholder: "John Smith",
          required: true,
        },
        {
          name: "email",
          label: "Work email",
          type: "email",
          placeholder: "john@company.com",
          required: true,
        },
        {
          name: "website",
          label: "Company website",
          type: "url",
          placeholder: "https://company.com",
          required: false,
        },
        {
          name: "objectives",
          label: "Your main objectives",
          type: "textarea",
          placeholder: "Tell us about your business goals...",
          required: false,
        },
      ],
      submitText: "Get My Growth Roadmap",
    },
    note: "No obligation • Clear insights • Actionable roadmap",
  },
};

