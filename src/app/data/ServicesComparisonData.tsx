// Services Comparison Data - All 12 services ke liye alag comparison data

export interface ComparisonCTA {
  text: string;
  href: string;
}

export interface Competitor {
  name: string;
  description: string;
}

export interface ComparisonPoint {
  label: string;
  description: string;
}

export interface ServicesComparisonData {
  badge?: string;
  heading: string;
  description: string;
  logo?: string;
  serviceName: string;
  criteria: string[];
  competitors: Competitor[];
  comparisonPoints?: ComparisonPoint[];
  cta?: ComparisonCTA;
}

export interface ServicesComparisonDataMap {
  [key: string]: ServicesComparisonData;
}

export const SERVICES_COMPARISON_DATA: ServicesComparisonDataMap = {
  "brand-identity": {
    badge: "BUILT FOR RESULTS",
    heading: "Why Smart Businesses Choose Us",
    description: "When you compare options side-by-side, the difference becomes obvious. This isn't about design preference — it's about clarity, consistency, and trust at scale.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Hiring takes time. Replacements are slow. Salaries and downtime make brand work expensive and inflexible.",
      },
      {
        name: "Freelancers",
        description: "Hit or miss. Managing multiple designers leads to inconsistency and diluted brand identity.",
      },
      {
        name: "Agencies",
        description: "Strong strategy, but high retainers, rigid scopes, and slow timelines.",
      },
      {
        name: "DIY Tools",
        description: "Quick to use — but output is off-brand, inconsistent, and damages credibility over time.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Immediate execution vs hiring delays",
      },
      {
        label: "Quality",
        description: "System-driven branding vs scattered visuals",
      },
      {
        label: "Support",
        description: "Always-on specialists vs limited access",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating expenses",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "marketing-advertising": {
    badge: "BUILT FOR RESULTS",
    heading: "Why Smart Businesses Choose Us",
    description: "When you compare options side-by-side, the difference becomes obvious. This isn't about running ads — it's about scaling demand without burning cash.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Hiring takes time. Replacements are slow. Fixed salaries and downtime make growth expensive and inflexible.",
      },
      {
        name: "Freelancers",
        description: "Hit or miss. Fragmented execution leads to inconsistency and wasted budget.",
      },
      {
        name: "Agencies",
        description: "High retainers, rigid scopes, and slow testing cycles reduce agility and ROI.",
      },
      {
        name: "DIY Tools",
        description: "Quick to start, but results are inconsistent and still require heavy manual effort.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Immediate execution vs hiring delays",
      },
      {
        label: "Quality",
        description: "System-driven optimization vs guesswork",
      },
      {
        label: "Support",
        description: "Always-on specialists vs limited access",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs uncontrolled spend",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "digital-web": {
    badge: "BUILT FOR DIGITAL RESULTS",
    heading: "Why Businesses Choose Our Digital & Web Services",
    description: "When you compare options side-by-side, the difference is clear. This isn't about aesthetics — it's about speed, scalability, performance, and long-term ROI.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Hiring developers takes time. Managing design, performance, and maintenance internally adds cost and slows execution — especially when priorities shift.",
      },
      {
        name: "Freelancers",
        description: "Quality varies. Communication breaks. Documentation gets lost. Results depend on individuals instead of systems, making long-term consistency difficult.",
      },
      {
        name: "Agencies",
        description: "Strong branding, but slow delivery. High retainers, rigid scopes, and extended timelines make agencies inefficient for ongoing digital iteration.",
      },
      {
        name: "DIY Builders",
        description: "Easy to start, hard to scale. Limited flexibility, performance issues, and generic layouts reduce credibility and conversion over time.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster launches vs long dev cycles",
      },
      {
        label: "Quality",
        description: "System-driven UX vs fragmented builds",
      },
      {
        label: "Support",
        description: "Always-on help vs limited availability",
      },
      {
        label: "Cost",
        description: "Predictable investment vs hidden expenses",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "motion-video": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Specialized video production requires expensive equipment and expertise. Full-time video teams are costly and often idle between projects.",
      },
      {
        name: "Freelancers",
        description: "Variable quality and availability. Video freelancers often juggle multiple clients, leading to delays and inconsistent output.",
      },
      {
        name: "Agencies",
        description: "Premium rates and lengthy production cycles. Video agencies charge premium fees and take weeks to deliver even simple projects.",
      },
      {
        name: "DIY Tools",
        description: "Limited creative capabilities and professional quality. Video editing tools require significant skill and time to produce polished results.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "print": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Print design expertise is specialized and costly. Maintaining designers who understand print production adds significant overhead.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent print knowledge and turnaround. Finding freelancers who understand print specifications and production is challenging.",
      },
      {
        name: "Agencies",
        description: "High costs for routine print projects. Agencies charge premium rates for print work that could be handled more efficiently.",
      },
      {
        name: "DIY Tools",
        description: "Limited print-ready capabilities. Design tools often lack proper print specifications and color management for professional output.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "illustration-artwork": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Illustration talent is rare and expensive. Hiring full-time illustrators is costly when illustration needs are project-based.",
      },
      {
        name: "Freelancers",
        description: "Finding the right artistic style is time-consuming. Matching freelancer illustration styles to your brand requires extensive vetting.",
      },
      {
        name: "Agencies",
        description: "Premium pricing for custom artwork. Agencies charge high rates for illustration work that may not align with your budget.",
      },
      {
        name: "DIY Tools",
        description: "Limited artistic capabilities and brand alignment. Illustration tools produce generic results that don't capture your unique brand voice.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "ebooks-digital-report": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Document design requires specialized layout skills. Maintaining designers for occasional eBook and report projects is inefficient.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent document formatting and quality. Finding freelancers skilled in long-form document design is challenging.",
      },
      {
        name: "Agencies",
        description: "Expensive for routine document design. Agencies charge premium rates for eBook and report layouts that need regular updates.",
      },
      {
        name: "DIY Tools",
        description: "Limited professional layout capabilities. Document design tools lack the sophistication needed for polished, branded materials.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "presentations": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Presentation design is often sporadic. Maintaining designers for occasional presentation needs creates unnecessary overhead.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent presentation quality and turnaround. Finding reliable freelancers for urgent presentation needs is difficult.",
      },
      {
        name: "Agencies",
        description: "Overpriced for routine presentations. Agencies charge premium rates for presentation design that should be quick and affordable.",
      },
      {
        name: "DIY Tools",
        description: "Generic templates that lack brand consistency. Presentation tools produce cookie-cutter slides that don't reflect your brand.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "product-packaging": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Packaging design requires specialized knowledge. Hiring full-time packaging designers is expensive for product-based businesses.",
      },
      {
        name: "Freelancers",
        description: "Variable packaging expertise and production knowledge. Finding freelancers who understand packaging specifications is challenging.",
      },
      {
        name: "Agencies",
        description: "High costs for packaging projects. Agencies charge premium rates for packaging design that may exceed your product margins.",
      },
      {
        name: "DIY Tools",
        description: "Limited packaging design capabilities. Design tools lack the technical knowledge needed for production-ready packaging files.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "apparel-merchandise": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Apparel design is seasonal and project-based. Maintaining full-time designers for occasional merchandise needs is inefficient.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent apparel design quality and production knowledge. Finding freelancers skilled in merchandise design is time-consuming.",
      },
      {
        name: "Agencies",
        description: "Expensive for routine merchandise design. Agencies charge premium rates for apparel design that should be quick and cost-effective.",
      },
      {
        name: "DIY Tools",
        description: "Limited merchandise design capabilities. Design tools produce generic apparel graphics that don't align with your brand standards.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "environmental-event": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Event design is event-based and sporadic. Maintaining designers for occasional event graphics creates unnecessary overhead.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent event design quality and turnaround. Finding reliable freelancers for urgent event needs is challenging.",
      },
      {
        name: "Agencies",
        description: "Overpriced for event graphics. Agencies charge premium rates for environmental design that should be quick and affordable.",
      },
      {
        name: "DIY Tools",
        description: "Limited event design capabilities. Design tools lack the scale and sophistication needed for impactful environmental graphics.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "corporate-internal": {
    badge: "BUILT FOR YOU",
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-house team",
        description: "Internal design needs fluctuate with company initiatives. Maintaining full-time designers for variable internal projects is costly.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent internal communication design. Finding freelancers who understand your company culture and messaging is challenging.",
      },
      {
        name: "Agencies",
        description: "Expensive for routine internal materials. Agencies charge premium rates for corporate design that should be efficient and affordable.",
      },
      {
        name: "DIY Tools",
        description: "Limited corporate design capabilities. Design tools produce generic internal materials that don't reflect your company's professional standards.",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
};

// Helper function to get comparison data by service slug
export const getServiceComparisonData = (slug: string): ServicesComparisonData | undefined => {
  return SERVICES_COMPARISON_DATA[slug];
};

