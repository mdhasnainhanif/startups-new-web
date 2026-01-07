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
    description: "When you compare options side-by-side, the difference becomes obvious. This isn't about design preference   it's about clarity, consistency, and trust at scale.",
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
        description: "Quick to use   but output is off-brand, inconsistent, and damages credibility over time.",
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
    heading: "Why Smart Businesses Choose [Us]",
    description: "When you compare options side-by-side, the difference becomes obvious. This isn't about running ads   it's about scaling demand without burning cash.",
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
    heading: "Why Businesses Choose Our [Digital & Web Services]",
    description: "When you compare options side-by-side, the difference is clear. This isn't about aesthetics   it's about speed, scalability, performance, and long term ROI.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Hiring developers takes time. Managing design, performance, and maintenance internally adds cost and slows execution   especially when priorities shift.",
      },
      {
        name: "Freelancers",
        description: "Quality varies. Communication breaks. Documentation gets lost. Results depend on individuals instead of systems, making long term consistency difficult.",
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
    badge: "BUILT FOR VIDEO RESULTS",
    heading: "Why Businesses Choose Our [Motion & Video Services]",
    description: "Side-by-side, the difference is clear. This isn't about cinematic flair   it's about clarity, speed, scalability, and ROI.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Hiring editors and animators is slow and expensive. Managing scripts, revisions, and formats internally adds overhead and delays.",
      },
      {
        name: "Freelancers",
        description: "Quality varies. Availability changes. Brand consistency suffers when videos are handled by different individuals.",
      },
      {
        name: "Agencies",
        description: "High production value, but slow timelines and expensive retainers make agencies inefficient for ongoing motion needs.",
      },
      {
        name: "DIY Tools",
        description: "Easy to start, hard to scale. Generic animations and templates reduce impact and credibility over time.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster delivery vs long production cycles",
      },
      {
        label: "Quality",
        description: "System-led consistency vs scattered output",
      },
      {
        label: "Support",
        description: "Always-on collaboration vs limited access",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating spend",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "print": {
    badge: "BUILT FOR TEAMS THAT CARE ABOUT CREDIBILITY",
    heading: "Why Businesses Choose Our [Print Design Services]",
    description: "Hiring print designers in-house is slow. Agencies are expensive. Templates cheapen perception. We give you a dedicated print design team that executes fast, stays consistent, and scales with your needs.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Hiring print designers in-house is slow. Print design expertise is specialized and costly. Maintaining designers who understand print production adds significant overhead.",
      },
      {
        name: "Freelancers",
        description: "Variable quality and availability. Print freelancers often lack production knowledge, leading to delays and print errors.",
      },
      {
        name: "Agencies",
        description: "Premium rates and lengthy production cycles. Print agencies charge premium fees and take weeks to deliver even simple projects.",
      },
      {
        name: "DIY Tools",
        description: "Limited creative capabilities and professional quality. Print templates require significant skill and time to produce polished results.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster delivery vs long production cycles",
      },
      {
        label: "Quality",
        description: "System-led consistency vs scattered output",
      },
      {
        label: "Support",
        description: "Always-on collaboration vs limited access",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating spend",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "illustration-artwork": {
    badge: "BUILT FOR BRANDS THAT WANT TO STAND OUT",
    heading: "Why Businesses Choose Our [Illustration & Artwork]",
    description: "Hiring illustrators in-house is slow. Stock libraries dilute identity. Agencies overcomplicate the process. We give you a dedicated illustration team that creates original artwork fast, stays consistent, and scales with your needs.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Illustration talent is rare and expensive. Hiring Full time illustrators is costly when illustration needs are project-based.",
      },
      {
        name: "Freelancers",
        description: "Finding the right artistic style is time consuming. Matching freelancer illustration styles to your brand requires extensive vetting.",
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
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster delivery vs slow hiring cycles",
      },
      {
        label: "Quality",
        description: "Original artwork vs stock reuse",
      },
      {
        label: "Support",
        description: "Always-on collaboration vs limited availability",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating spend",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "ebooks-digital-report": {
    badge: "BUILT FOR CONTENT RESULTS",
    heading: "Why Businesses Choose Our [eBook & Report Templates]",
    description: "Side-by-side, the difference is obvious. This isn't about decoration   it's about clarity, authority, and scalability.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Document design competes with other priorities. Updates take longer and consistency drops as workload increases.",
      },
      {
        name: "Freelancers",
        description: "Style varies. Structure breaks. Every new document feels disconnected from the last.",
      },
      {
        name: "Agencies",
        description: "Strong design, but high costs and slow timelines make agencies inefficient for recurring documents.",
      },
      {
        name: "DIY Tools",
        description: "Easy to start, but layouts lack hierarchy and credibility   reducing trust and perceived value.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster delivery vs slow design cycles",
      },
      {
        label: "Quality",
        description: "System-driven structure vs inconsistent layouts",
      },
      {
        label: "Support",
        description: "Always-on collaboration vs limited availability",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating spend",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "presentations": {
    badge: "BUILT FOR PRESENTATION RESULTS",
    heading: "Why Businesses Choose Our Presentation Design",
    description: "Side-by-side, the difference is clear. This isn't about decoration   it's about clarity, persuasion, and repeatability.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Presentation work competes with other priorities. Updates take longer and slide quality varies under pressure.",
      },
      {
        name: "Freelancers",
        description: "Style shifts between decks. Structure breaks. Messaging becomes inconsistent.",
      },
      {
        name: "Agencies",
        description: "Strong visuals, but slow timelines and high costs limit flexibility for ongoing decks.",
      },
      {
        name: "DIY Tools",
        description: "Quick to use, but slides lack hierarchy and executive-level credibility.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster delivery vs long revision cycles",
      },
      {
        label: "Quality",
        description: "System-driven slides vs inconsistent decks",
      },
      {
        label: "Support",
        description: "Always-on collaboration vs limited access",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating spend",
      },
    ],
    cta: {
      text: "Get Started",
      href: "#get-started",
    },
  },
  "product-packaging": {
    badge: "BUILT FOR PRODUCT RESULTS",
    heading: "Why Businesses Choose Our Product & Packaging Design",
    description: "Side-by-side, the difference is clear. This isn't about decoration   it's about clarity, differentiation, and sell-through.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Packaging work competes with other priorities. Updates slow down launches and consistency suffers.",
      },
      {
        name: "Freelancers",
        description: "Styles vary. Brand cohesion breaks across SKUs and releases.",
      },
      {
        name: "Agencies",
        description: "High quality work, but slow timelines and high retainers reduce flexibility.",
      },
      {
        name: "DIY Tools",
        description: "Quick to start, but packaging lacks shelf impact and professional credibility.",
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
        description: "Apparel design is seasonal and project-based. Maintaining Full time designers for occasional merchandise needs is inefficient.",
      },
      {
        name: "Freelancers",
        description: "Inconsistent apparel design quality and production knowledge. Finding freelancers skilled in merchandise design is time consuming.",
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
    badge: "BUILT FOR EVENT RESULTS",
    heading: "Why Businesses Choose Our Corporate Event Design",
    description: "Side-by-side, the difference is clear. This isn't about decoration   it's about professionalism, coordination, and brand impact.",
    logo: "/assets/images/logo.svg",
    serviceName: "Startups Advisory (Our Platform)",
    criteria: ["Platform", "Speed", "Quality", "Support", "Cost"],
    competitors: [
      {
        name: "In-House Team",
        description: "Event design competes with other priorities. Deadlines tighten and consistency suffers under pressure.",
      },
      {
        name: "Freelancers",
        description: "Styles vary. Visual alignment breaks across event materials.",
      },
      {
        name: "Agencies",
        description: "High quality work, but slow timelines and high costs reduce flexibility.",
      },
      {
        name: "DIY Tools",
        description: "Quick layouts, but poor scalability and unprofessional results for large events.",
      },
    ],
    comparisonPoints: [
      {
        label: "Speed",
        description: "Faster turnaround vs long prep cycles",
      },
      {
        label: "Quality",
        description: "System-driven design vs fragmented visuals",
      },
      {
        label: "Support",
        description: "Always-on collaboration vs limited access",
      },
      {
        label: "Cost",
        description: "Predictable pricing vs escalating spend",
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
        description: "Internal design needs fluctuate with company initiatives. Maintaining Full time designers for variable internal projects is costly.",
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


export const getServiceComparisonData = (slug: string): ServicesComparisonData | undefined => {
  return SERVICES_COMPARISON_DATA[slug];
};

