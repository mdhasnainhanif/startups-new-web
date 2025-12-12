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
    heading: "WE DON'T MISS CAMPAIGNS THAT CONVERT",
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
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "mv-1",
        value: "20+",
        label: "Motion designers bringing brands to life through dynamic visuals.",
      },
      {
        id: "mv-2",
        value: "5,000+",
        label: "Motion graphics and videos created for brands.",
      },
      {
        id: "mv-3",
        value: "4.8/5",
        label: "Satisfaction with motion and video work. Measured by engagement and message clarity.",
      },
      {
        id: "mv-4",
        value: "75,000+",
        label: "Video minutes produced, making every message move.",
      },
    ],
  },
  "print": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "pr-1",
        value: "18+",
        label: "Print designers creating memorable communication materials.",
      },
      {
        id: "pr-2",
        value: "12,000+",
        label: "Print materials designed for businesses across industries.",
      },
      {
        id: "pr-3",
        value: "4.6/5",
        label: "Satisfaction with print design work. Measured by quality and professional impact.",
      },
      {
        id: "pr-4",
        value: "300,000+",
        label: "Print pieces created, from business cards to brochures.",
      },
    ],
  },
  "illustration-artwork": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "ia-1",
        value: "22+",
        label: "Illustrators creating custom designs that enhance brand presence.",
      },
      {
        id: "ia-2",
        value: "7,000+",
        label: "Brands enhanced with custom illustrations and artwork.",
      },
      {
        id: "ia-3",
        value: "4.9/5",
        label: "Satisfaction with illustration and artwork. Measured by uniqueness and brand alignment.",
      },
      {
        id: "ia-4",
        value: "150,000+",
        label: "Custom illustrations created, reflecting unique brand identities.",
      },
    ],
  },
  "ebooks-digital-report": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "edr-1",
        value: "15+",
        label: "Designers transforming data into compelling digital documents.",
      },
      {
        id: "edr-2",
        value: "4,000+",
        label: "eBooks and digital reports designed for businesses.",
      },
      {
        id: "edr-3",
        value: "4.7/5",
        label: "Satisfaction with eBook and report design. Measured by clarity and visual appeal.",
      },
      {
        id: "edr-4",
        value: "80,000+",
        label: "Pages designed, turning data into engaging visual stories.",
      },
    ],
  },
  "presentations": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "prs-1",
        value: "28+",
        label: "Presentation designers creating decks for every report, pitch, and keynote.",
      },
      {
        id: "prs-2",
        value: "9,000+",
        label: "Presentations designed that captivate audiences and drive action.",
      },
      {
        id: "prs-3",
        value: "4.8/5",
        label: "Satisfaction with presentation design. Measured by impact and clarity.",
      },
      {
        id: "prs-4",
        value: "180,000+",
        label: "Slides created, communicating messages with clarity and impact.",
      },
    ],
  },
  "product-packaging": {
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "pp-1",
        value: "24+",
        label: "Packaging designers creating creative displays for products.",
      },
      {
        id: "pp-2",
        value: "6,000+",
        label: "Product packages designed that stand out on shelves.",
      },
      {
        id: "pp-3",
        value: "4.9/5",
        label: "Satisfaction with packaging design. Measured by shelf appeal and functionality.",
      },
      {
        id: "pp-4",
        value: "100,000+",
        label: "Packaging designs created, showcasing products at their best.",
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
    tagline: "CREATIVE THAT COUNTS",
    heading: "$48000+ Worth of Advanced AI Tools Growing Your Business 10x",
    stats: [
      {
        id: "ee-1",
        value: "19+",
        label: "Event designers creating graphics for every experience.",
      },
      {
        id: "ee-2",
        value: "3,500+",
        label: "Events and environments enhanced with immersive graphics.",
      },
      {
        id: "ee-3",
        value: "4.8/5",
        label: "Satisfaction with environmental and event design. Measured by impact and memorability.",
      },
      {
        id: "ee-4",
        value: "90,000+",
        label: "Event graphics created, making every interaction memorable.",
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

