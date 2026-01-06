// Types
export interface HeroData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  features: string[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface ClientLogosData {
  title: string;
  logos: Array<{
    name: string;
    initials: string;
  }>;
}

export interface WhyContentData {
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  benefits: Array<{
    icon: string;
    text: string;
  }>;
}

export interface DataInsightsData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  beforeAfter: Array<{
    before: string;
    after: string;
  }>;
  valueStack: Array<{
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
  };
}

export interface ContentConvertsData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  contentTypes: Array<{
    icon: string;
    text: string;
  }>;
  guarantee: {
    icon: string;
    title: string;
    description: string;
  };
}

export interface ContentEngineData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  steps: Array<{
    icon: string;
    title: string;
    description: string;
    step: string;
  }>;
}

export interface TrustBadgesData {
  heading: string;
  badges: Array<{
    icon: string;
    label: string;
  }>;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface MessagingData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  contentServices: Array<{
    icon: string;
    text: string;
  }>;
  freeOffer: {
    title: string;
    description: string;
    items: string[];
  };
}

export interface ContentManagementData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  features: Array<{
    icon: string;
    title: string;
    desc: string;
  }>;
}

export interface FrameworkData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  frameworkSlices: Array<{
    icon: string;
    label: string;
  }>;
  valueStackItems: string[];
  note: string;
  cta: string;
}

export interface WhoItsForData {
  badge: string;
  heading: {
    text: string;
    highlight: string;
  };
  description: string;
  forList: string[];
  notForList: string[];
  guarantee: {
    icon: string;
    title: string;
    description: string;
  };
}

export interface TeamData {
  badge: string;
  heading: string;
  team: Array<{
    name: string;
    role: string;
    bio: string;
    initials: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface FinalTestimonialData {
  quote: string;
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
  form: {
    fields: Array<{
      name: string;
      type: string;
      placeholder: string;
    }>;
    submitText: string;
  };
  note: string;
}

export interface MicroCTAData {
  text: string;
  cta: string;
}

export interface ContentWritingData {
  hero: HeroData;
  clientLogos: ClientLogosData;
  whyContent: WhyContentData;
  dataInsights: DataInsightsData;
  storyTestimonial: StoryTestimonialData;
  contentConverts: ContentConvertsData;
  contentEngine: ContentEngineData;
  trustBadges: TrustBadgesData;
  messaging: MessagingData;
  contentManagement: ContentManagementData;
  framework: FrameworkData;
  whoItsFor: WhoItsForData;
  team: TeamData;
  finalTestimonial: FinalTestimonialData;
  bigCTA: BigCTAData;
  microCTA: MicroCTAData;
}

// Data
export const CONTENT_WRITING_DATA: ContentWritingData = {
  hero: {
    badge: "1 Month Content Writing Service",
    heading: {
      text: "Market-Ready Content in",
      highlight: "1 Month.",
    },
    description:
      "Writing shaped for presence, persuasion, and modern brand standards. A complete content layer built with clarity, rhythm, and commercial intent.",
    features: [
      "2,500 plus writing projects delivered across real industries",
      "40 plus years combined experience in website, marketing, and brand content",
      "Writers specialized in digital messaging, UX wording, and performance copy",
      "Content frameworks applied in 15 plus business categories",
      "Production supported by AI-enhanced research and structured writing systems",
    ],
    cta: {
      primary: "Get Started",
      secondary: "View Package Details",
    },
  },
  clientLogos: {
    title: "Experience Box – What This Service Produces",
    logos: [
      { name: "2,500+ Projects", initials: "2.5K" },
      { name: "40+ Years", initials: "40+" },
      { name: "15+ Categories", initials: "15+" },
      { name: "AI-Enhanced", initials: "AI" },
      { name: "Structured Systems", initials: "SS" },
      { name: "Market Ready", initials: "MR" },
    ],
  },
  whyContent: {
    heading: {
      text: "The 1 Month Content Writing Service",
      highlight: "",
    },
    description:
      "A full content build designed to install strong, consistent communication across web, marketing, and product touchpoints. The service introduces clean language, modern tone, and commercially aligned structure to every written asset required for market readiness.",
    benefits: [
      { icon: "FileText", text: "Website content, sales copy, UX text, marketing lines" },
      { icon: "Target", text: "Ads, captions, and brand communication" },
      { icon: "Zap", text: "Produced inside one controlled writing cycle" },
      { icon: "CheckCircle", text: "Consistent tone and polished delivery" },
      { icon: "Calendar", text: "Complete written foundation in 1 Month" },
    ],
  },
  dataInsights: {
    badge: "Experience Box",
    heading: {
      text: "What This Service",
      highlight: "Produces",
    },
    description:
      "Strong Writing Shapes Market Perception. Clear content improves trust. Consistent messaging lifts credibility. Strategic wording increases conversions. Modern brands depend on writing that informs, persuades, and aligns with audience expectations.",
    beforeAfter: [
      {
        before: "Fragmented content creation",
        after: "Complete content layer in 1 Month",
      },
      {
        before: "Inconsistent tone and messaging",
        after: "Consistent, polished delivery across all assets",
      },
      {
        before: "Time-consuming revisions",
        after: "Structured tools and seasoned writers",
      },
    ],
    valueStack: [
      { icon: "FileText", text: "2,500 plus writing projects delivered" },
      { icon: "Users", text: "40 plus years combined experience" },
      { icon: "Target", text: "Writers specialized in digital messaging" },
      { icon: "Layers", text: "Content frameworks in 15 plus categories" },
      { icon: "Zap", text: "AI-enhanced research and structured systems" },
      { icon: "DollarSign", text: "Content Production Tools ($12,000 plus Annual Value)" },
    ],
    cta: "View Complete Package",
  },
  storyTestimonial: {
    heading: {
      text: "invisible",
      highlight: "industry leader",
    },
    challenge: {
      title: "The Challenge",
      description:
        "A B2B SaaS company was posting blogs for 18 months with zero measurable results. No rankings. No leads. Just wasted budget and team frustration.",
    },
    transformation: {
      title: "The Transformation",
      items: [
        "Within 90 days of implementing our content system",
        "They ranked for 32 new keywords",
        "Increased organic traffic by 127%",
        "Started generating qualified leads directly from search",
      ],
    },
    testimonial: {
      rating: 5,
      quote: "Our organic leads increased 42% in 90 days — this was the first time content actually worked for us.",
      author: "Michael R.",
      role: "VP Marketing",
      company: "SaaS Company",
    },
  },
  contentConverts: {
    badge: "Our Writing Specialists",
    heading: {
      text: "Four specialized writers for",
      highlight: "complete content coverage.",
    },
    description:
      "The service covers all content requirements across a 1 month production window. Website content, sales copy, UX text, marketing lines, ads, captions, and brand communication are produced inside one controlled writing cycle with consistent tone and polished delivery.",
    contentTypes: [
      { icon: "FileText", text: "Web Content Writer - Creates structured, fluent text designed to present services, explain value, and shape a confident digital presence. Includes: Homepage messaging, service page detailing, benefit-oriented content blocks, about statements, contact page wording, support descriptions, SEO-supported headings, process breakdowns, mobile-ready text structure, full website content creation" },
      { icon: "Target", text: "Copywriter - Delivers persuasive, action-oriented writing built to highlight offers, drive response, and support promotions. Includes: Sales page copy, landing page messaging, call-to-action sets, offer explanation lines, short-form conversion copy, lead-focused content, value-driven messaging, script lines, segment-specific variations, commercial writing essentials" },
      { icon: "Layout", text: "UI/UX Writer - Produces concise, intuitive wording that guides user actions and improves product and interface communication. Includes: Button labels, form microcopy, navigation text, onboarding lines, instructional messaging, state messages, section titles, feature descriptions, user guidance wording, complete UX content refinement" },
      { icon: "Zap", text: "Ads Writer - Crafts fast, scroll-resistant content for paid advertising and brand visibility across digital channels. Includes: Ad headlines, primary message sets, short-form hooks, audience-focused variations, offer highlights, retargeting lines, caption-based ads, video copy prompts, angle testing ideas, performance-aligned ad content" },
    ],
    guarantee: {
      icon: "Shield",
      title: "Enduring Advantage",
      description:
        "The service installs a complete written foundation designed to strengthen brand clarity, improve communication quality, and support marketing, sales, and customer experience long after the production cycle concludes.",
    },
  },
  contentEngine: {
    badge: "Content Production",
    heading: {
      text: "$48,000 plus in Professional Writing Output",
      highlight: "Delivered in 1 Month",
    },
    description:
      "A condensed writing period supported by structured tools and seasoned writers replaces fragmented content, inconsistent tone, and time-consuming revisions.",
    steps: [
      {
        icon: "FileText",
        title: "Website Content",
        description: "Homepage messaging, service page detailing, benefit-oriented content blocks, about statements, contact page wording, support descriptions, SEO-supported headings, process breakdowns, mobile-ready text structure, full website content creation.",
        step: "01",
      },
      {
        icon: "Target",
        title: "Service Descriptions",
        description: "Sales page copy, landing page messaging, call-to-action sets, offer explanation lines, short-form conversion copy, lead-focused content, value-driven messaging.",
        step: "02",
      },
      {
        icon: "BookOpen",
        title: "About Page Text",
        description: "Button labels, form microcopy, navigation text, onboarding lines, instructional messaging, state messages, section titles, feature descriptions.",
        step: "03",
      },
      {
        icon: "Mail",
        title: "Contact Page Text",
        description: "Ad headlines, primary message sets, short-form hooks, audience-focused variations, offer highlights, retargeting lines, caption-based ads, video copy prompts.",
        step: "04",
      },
      {
        icon: "PenTool",
        title: "Blog Articles",
        description: "SEO-optimized blog content, long-form articles, industry insights, thought leadership pieces, educational content.",
        step: "05",
      },
      {
        icon: "Zap",
        title: "Marketing Copy",
        description: "Email campaigns, social media content, promotional materials, brand messaging, campaign copy.",
        step: "06",
      },
    ],
  },
  trustBadges: {
    heading: "U.S. Content Performance Insights",
    badges: [
      { icon: "TrendingUp", label: "Brands with clarified messaging report conversion lifts of 15 to 25 percent" },
      { icon: "DollarSign", label: "Consistent content reduces ad cost by 20 to 40 percent" },
      { icon: "Search", label: "Websites with modern copy see up to 30 percent more inquiries" },
      { icon: "BarChart", label: "Structured content foundations increase customer value by 28 percent" },
    ],
    testimonial: {
      quote: "This service delivers content created for attention, clarity, and commercial performance.",
      author: "Industry Standard",
      role: "Content Performance Metrics",
    },
  },
  messaging: {
    badge: "Content KITs",
    heading: {
      text: "1 Month Content Package",
      highlight: "Includes",
    },
    description:
      "No retainers. No added fees. A complete writing foundation for brand presence and commercial use. Consistent output across all builds. The service delivers polished, modern content shaped for clarity, relevance, and ongoing business performance.",
    contentServices: [
      { icon: "CheckCircle", text: "1 month of structured content creation" },
      { icon: "CheckCircle", text: "All essential content assets" },
      { icon: "CheckCircle", text: "AI-supported writing workflow" },
      { icon: "CheckCircle", text: "Unlimited refinements during the cycle" },
      { icon: "CheckCircle", text: "Content delivered in publish-ready format" },
    ],
    freeOffer: {
      title: "Content Outline Reference",
      description:
        "An organized writing map is created to guide tone, hierarchy, communication priorities, and future content expansion.",
      items: [
        "Tone and hierarchy guidelines",
        "Communication priorities",
        "Future content expansion roadmap",
        "Brand consistency framework",
      ],
    },
  },
  contentManagement: {
    badge: "Writer Specializations",
    heading: {
      text: "Four specialized writers for",
      highlight: "complete coverage.",
    },
    description:
      "Each writer type brings specialized expertise to ensure every aspect of your content needs is professionally handled within the 1 month production window.",
    features: [
      { icon: "FileText", title: "Web Content Writer", desc: "Creates structured, fluent text designed to present services, explain value, and shape a confident digital presence. Handles homepage messaging, service page detailing, benefit-oriented content blocks, about statements, contact page wording, support descriptions, SEO-supported headings, process breakdowns, mobile-ready text structure, and full website content creation." },
      { icon: "Target", title: "Copywriter", desc: "Delivers persuasive, action-oriented writing built to highlight offers, drive response, and support promotions. Creates sales page copy, landing page messaging, call-to-action sets, offer explanation lines, short-form conversion copy, lead-focused content, value-driven messaging, script lines, segment-specific variations, and commercial writing essentials." },
      { icon: "Layout", title: "UI/UX Writer", desc: "Produces concise, intuitive wording that guides user actions and improves product and interface communication. Develops button labels, form microcopy, navigation text, onboarding lines, instructional messaging, state messages, section titles, feature descriptions, user guidance wording, and complete UX content refinement." },
      { icon: "Zap", title: "Ads Writer", desc: "Crafts fast, scroll-resistant content for paid advertising and brand visibility across digital channels. Creates ad headlines, primary message sets, short-form hooks, audience-focused variations, offer highlights, retargeting lines, caption-based ads, video copy prompts, angle testing ideas, and performance-aligned ad content." },
    ],
  },
  framework: {
    badge: "1 Month Content Package",
    heading: {
      text: "Complete Content Writing Package —",
      highlight: "$3,299 One-Time",
    },
    frameworkSlices: [
      { icon: "FileText", label: "Website Content" },
      { icon: "Target", label: "Service Descriptions" },
      { icon: "BookOpen", label: "About Page Text" },
      { icon: "Mail", label: "Contact Page Text" },
      { icon: "PenTool", label: "Blog Articles" },
      { icon: "Zap", label: "Marketing Copy" },
      { icon: "FileText", label: "Website Content" },
      { icon: "Target", label: "Service Descriptions" },
      { icon: "BookOpen", label: "About Page Text" },
      { icon: "Mail", label: "Contact Page Text" },
      { icon: "PenTool", label: "Blog Articles" },
      { icon: "Zap", label: "Marketing Copy" },
    ],
    valueStackItems: [
      "1 month of structured content creation",
      "All essential content assets",
      "AI-supported writing workflow",
      "Unlimited refinements during the cycle",
      "Content delivered in publish-ready format",
      "No retainers. No added fees. A complete writing foundation for brand presence and commercial use.",
    ],
    note: "A complete writing foundation for brand presence and commercial use.",
    cta: "Get Started Now",
  },
  whoItsFor: {
    badge: "Is This Right For You?",
    heading: {
      text: "What if you're not sure",
      highlight: "what content you need?",
    },
    description:
      "That's exactly what the Content Growth Plan is for. We'll analyze your current situation, identify opportunities, and give you a clear roadmap — even if you decide not to work with us.",
    forList: [
      "B2B, SaaS, and service brands",
      "Teams that want consistent content growth",
      "Companies who want content that drives leads",
    ],
    notForList: [
      "Businesses wanting cheap word-count articles",
      "Teams unwilling to follow data-driven recommendations",
    ],
    guarantee: {
      icon: "Shield",
      title: "Zero-Risk Guarantee",
      description:
        "If you don't feel 100% clear on your content plan after the audit, you owe nothing. Walk away with the insights we've shared — no strings attached.",
    },
  },
  team: {
    badge: "Our Team",
    heading: "Meet the writers & strategists behind your content engine.",
    team: [
      {
        name: "James Mitchell",
        role: "Content Strategist",
        bio: "10+ years crafting content strategies for B2B SaaS companies. Obsessed with data-driven content that converts.",
        initials: "JM",
      },
      {
        name: "Sarah Kim",
        role: "SEO Lead",
        bio: "Former Google analyst. Specializes in technical SEO and content optimization that drives organic growth.",
        initials: "SK",
      },
      {
        name: "Alex Rivera",
        role: "Senior Writer",
        bio: "Published in Forbes, HBR, and TechCrunch. Turns complex topics into compelling stories that sell.",
        initials: "AR",
      },
      {
        name: "David Park",
        role: "Conversion Copywriter",
        bio: "Hormone-trained copywriter. Specializes in landing pages and sales copy that drive action.",
        initials: "DP",
      },
      {
        name: "Maria Lopez",
        role: "Content Editor",
        bio: "Former HubSpot editor. Ensures every piece of content is polished, on-brand, and optimized.",
        initials: "ML",
      },
    ],
    stats: [
      { value: "30%+", label: "Average improvement in organic conversions" },
      { value: "200+", label: "High-ranking articles produced" },
      { value: "15+", label: "Industries served" },
    ],
  },
  finalTestimonial: {
    quote:
      "Working with this team transformed our content from random posts into a predictable revenue generator. Our pipeline has never been healthier.",
    author: {
      name: "Lisa Thompson",
      role: "CEO",
      company: "Growth SaaS Co.",
      initials: "LT",
    },
  },
  bigCTA: {
    badge: "Cost Review",
    heading: {
      text: "Internal Writing Efforts vs.",
      highlight: "1 Month Content Writing Service",
    },
    description:
      "Consider: Full-time writer costs, specialist copy fees, time spent correcting unclear content, tools and software expenses, savings created by consolidated production, return generated by consistent, professional writing. Most brands gain weeks of progress and significant savings through this structured cycle.",
    form: {
      fields: [
        { name: "website", type: "url", placeholder: "Your website URL" },
        { name: "email", type: "email", placeholder: "Your work email" },
      ],
      submitText: "Get Started - $3,299",
    },
    note: "Content Production Tools ($12,000 plus Annual Value) included. No retainers. No added fees.",
  },
  microCTA: {
    text: "You're one step away from content that actually grows your business.",
    cta: "Talk to a content strategist",
  },
};

