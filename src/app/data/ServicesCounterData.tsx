// Services Counter Data - All 12 services ke liye alag counter data

export interface CounterStat {
  id: string;
  value: string; // e.g., "25+", "10,000+", "4.8/5", "125,000+"
  label: string;
}

export interface ServicesCounterData {
  tagline: string;
  heading: string;
  stats: CounterStat[];
}

export interface ServicesCounterDataMap {
  [key: string]: ServicesCounterData;
}

export const SERVICES_COUNTER_DATA: ServicesCounterDataMap = {
  "brand-identity": {
    tagline: "WE DON'T MISS BRAND WORK THAT BUILDS TRUST",
    heading: "WE DON'T MISS BRAND WORK THAT BUILDS TRUST",
    stats: [
      {
        id: "bi-1",
        value: "25+",
        label: "Brand-focused creatives driving visual direction and consistency across active customer accounts.",
      },
      {
        id: "bi-2",
        value: "10,000+",
        label: "Brands supported with clear, consistent, and professional brand identities.",
      },
      {
        id: "bi-3",
        value: "4.8/5",
        label: "Client satisfaction with brand and identity work — measured by consistency, visual quality, and turnaround.",
      },
      {
        id: "bi-4",
        value: "125,000+",
        label: "Logos and brand assets delivered, powering identities across every industry we serve.",
      },
    ],
  },
  "marketing-advertising": {
    tagline: "WE DON'T MISS CAMPAIGNS THAT CONVERT",
    heading: "WE DON'T MISS [CAMPAIGNS] THAT CONVERT",
    stats: [
      {
        id: "ma-1",
        value: "25+",
        label: "Performance marketers actively managing paid campaigns and funnels across live accounts.",
      },
      {
        id: "ma-2",
        value: "10,000+",
        label: "Brands supported with revenue-focused marketing across platforms and industries.",
      },
      {
        id: "ma-3",
        value: "4.8/5",
        label: "Client satisfaction with marketing outcomes — measured by ROI, lead quality, and speed.",
      },
      {
        id: "ma-4",
        value: "125,000+",
        label: "Ads, funnels, and landing pages launched to drive demand and conversions.",
      },
    ],
  },
  "digital-web": {
    tagline: "WE BUILD DIGITAL EXPERIENCES THAT CONVERT",
    heading: "WE BUILD DIGITAL EXPERIENCES THAT CONVERT",
    stats: [
      {
        id: "dw-1",
        value: "18+",
        label: "Years of hands-on experience delivering high-performing digital products across platforms.",
      },
      {
        id: "dw-2",
        value: "2,400+",
        label: "Websites, landing pages, and digital systems launched for growing businesses.",
      },
      {
        id: "dw-3",
        value: "4.7/5",
        label: "Client satisfaction driven by speed, usability, and measurable performance gains.",
      },
      {
        id: "dw-4",
        value: "95%",
        label: "Projects delivered on time, optimized for speed, scalability, and long-term growth.",
      },
    ],
  },
  "motion-video": {
    tagline: "WE CREATE MOTION THAT HOLDS ATTENTION",
    heading: "WE CREATE [MOTION] THAT HOLDS ATTENTION",
    stats: [
      {
        id: "mv-1",
        value: "12+",
        label: "Years of experience producing motion and video assets that perform across channels.",
      },
      {
        id: "mv-2",
        value: "9,500+",
        label: "Videos delivered for ads, websites, products, and brand campaigns.",
      },
      {
        id: "mv-3",
        value: "4.8/5",
        label: "Client satisfaction based on clarity, turnaround speed, and results.",
      },
      {
        id: "mv-4",
        value: "87%",
        label: "Clients return for ongoing motion and video production.",
      },
    ],
  },
  "print": {
    tagline: "WE DON'T MISS THE DETAILS",
    heading: "WE DON'T MISS THE [DETAILS]",
    stats: [
      {
        id: "pr-1",
        value: "2M+",
        label: "Print designs created for brands across industries — from everyday materials to high-impact campaigns.",
      },
      {
        id: "pr-2",
        value: "180+",
        label: "Designers experienced in print formats, finishes, and production workflows.",
      },
      {
        id: "pr-3",
        value: "4.8/5",
        label: "Customer satisfaction driven by accuracy, clarity, and reliability.",
      },
    ],
  },
  "illustration-artwork": {
    tagline: "WE DON'T COMPROMISE ON QUALITY",
    heading: "WE DON'T [COMPROMISE] ON QUALITY",
    stats: [
      {
        id: "ia-1",
        value: "200000+",
        label: "Illustrations and artwork assets delivered across platforms and industries.",
      },
      {
        id: "ia-2",
        value: "160+",
        label: "Illustrators and artists producing custom visuals at scale.",
      },
      {
        id: "ia-3",
        value: "4.8/5",
        label: "Customer satisfaction driven by originality, clarity, and reliability.",
      },
      {
        id: "ia-4",
        value: "1,400+",
        label: "Custom illustrations and artwork pieces created for businesses.",
      },
    ],
  },
  "ebooks-digital-report": {
    tagline: "WE DESIGN DOCUMENTS THAT COMMAND ATTENTION",
    heading: "WE DESIGN [DOCUMENTS] THAT COMMAND ATTENTION",
    stats: [
      {
        id: "edr-1",
        value: "18+",
        label: "Years of experience designing long-form business documents.",
      },
      {
        id: "edr-2",
        value: "6,800+",
        label: "eBooks, reports, guides, and whitepapers delivered.",
      },
      {
        id: "edr-3",
        value: "4.8/5",
        label: "Client satisfaction based on clarity, structure, and visual quality.",
      },
      {
        id: "edr-4",
        value: "82%",
        label: "Clients reuse templates for ongoing content and lead generation.",
      },
    ],
  },
  "presentations": {
    tagline: "WE DESIGN PRESENTATIONS THAT HOLD ATTENTION",
    heading: "WE DESIGN PRESENTATIONS THAT HOLD ATTENTION",
    stats: [
      {
        id: "prs-1",
        value: "20+",
        label: "Years of experience designing business and sales presentations.",
      },
      {
        id: "prs-2",
        value: "8,200+",
        label: "Presentations delivered for pitches, sales, reports, and internal teams.",
      },
      {
        id: "prs-3",
        value: "4.8/5",
        label: "Client satisfaction based on clarity, structure, and visual quality.",
      },
      {
        id: "prs-4",
        value: "85%",
        label: "Clients reuse decks or request ongoing presentation support.",
      },
    ],
  },
  "product-packaging": {
    tagline: "WE DESIGN PACKAGING THAT DRIVES PURCHASES",
    heading: "WE DESIGN PACKAGING THAT DRIVES PURCHASES",
    stats: [
      {
        id: "pp-1",
        value: "16+",
        label: "Years of experience designing consumer and retail packaging.",
      },
      {
        id: "pp-2",
        value: "7,300+",
        label: "Packaging designs delivered across categories and markets.",
      },
      {
        id: "pp-3",
        value: "4.8/5",
        label: "Client satisfaction based on clarity, shelf impact, and execution speed.",
      },
      {
        id: "pp-4",
        value: "81%",
        label: "Clients expand packaging systems across multiple products.",
      },
    ],
  },
  "apparel-merchandise": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "am-1",
        value: "16+",
        label: "Apparel designers creating designs that work in real life.",
      },
      {
        id: "am-2",
        value: "5,500+",
        label: "Brands extended with apparel and merchandise designs.",
      },
      {
        id: "am-3",
        value: "4.7/5",
        label: "Satisfaction with apparel and merchandise design. Measured by wearability and brand alignment.",
      },
      {
        id: "am-4",
        value: "120,000+",
        label: "Apparel items designed, extending brand presence into the real world.",
      },
    ],
  },
  "environmental-event": {
    tagline: "WE DESIGN EVENTS THAT FEEL PREMIUM AND COORDINATED",
    heading: "WE DESIGN EVENTS THAT FEEL PREMIUM AND COORDINATED",
    stats: [
      {
        id: "ee-1",
        value: "15+",
        label: "Years of experience designing corporate and business events.",
      },
      {
        id: "ee-2",
        value: "6,400+",
        label: "Event design assets delivered across conferences, expos, and internal events.",
      },
      {
        id: "ee-3",
        value: "4.8/5",
        label: "Client satisfaction based on professionalism, consistency, and execution speed.",
      },
      {
        id: "ee-4",
        value: "80%",
        label: "Clients return for repeat events or multi-event programs.",
      },
    ],
  },
  "corporate-internal": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "ci-1",
        value: "21+",
        label: "Corporate designers creating professional visuals for internal success.",
      },
      {
        id: "ci-2",
        value: "6,500+",
        label: "Companies supported with professional internal communications.",
      },
      {
        id: "ci-3",
        value: "4.6/5",
        label: "Satisfaction with corporate and internal design. Measured by alignment and engagement.",
      },
      {
        id: "ci-4",
        value: "200,000+",
        label: "Internal materials designed, supporting team alignment and culture.",
      },
    ],
  },
};

// Helper function to get counter data by service slug
export const getServiceCounterData = (slug: string): ServicesCounterData | undefined => {
  return SERVICES_COUNTER_DATA[slug];
};

