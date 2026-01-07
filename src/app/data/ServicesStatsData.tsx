// Services Stats Data - All 12 services ke liye alag stats data

export interface StatOverlay {
  label: string;
  top: string;
  left: string;
  color: string;
}

export interface ServiceStat {
  id: string;
  image: string;
  value: string; // e.g., "3M+", "320+", "4.8/5★"
  label: string;
  overlays?: StatOverlay[];
}

export interface ServicesStatsData {
  stats: ServiceStat[];
}

export interface ServicesStatsDataMap {
  [key: string]: ServicesStatsData;
}

export const SERVICES_STATS_DATA: ServicesStatsDataMap = {
  "brand-identity": {
    stats: [
      {
        id: "bi-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "3M+",
        label: "Brand assets designed for customers, built to perform across platforms, channels, and touchpoints.",
      },
      {
        id: "bi-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "320+",
        label: "Creatives and art directors actively producing, reviewing, and refining brand work at scale.",
        overlays: [
          { label: "Russ", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Sarah", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Bryan", top: "70%", left: "15%", color: "#000" },
          { label: "Jess", top: "75%", left: "50%", color: "#4caf50" },
          { label: "Alyssa", top: "15%", left: "80%", color: "#2196f3" },
        ],
      },
      {
        id: "bi-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Customer satisfaction score   driven by reliability, clarity, and execution speed.",
      },
    ],
  },
  "marketing-advertising": {
    stats: [
      {
        id: "ma-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "3M+",
        label: "Leads, impressions, and conversion events generated across paid channels and campaigns.",
      },
      {
        id: "ma-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "320+",
        label: "Marketers, creatives, and analysts producing, testing, and scaling campaigns daily.",
        overlays: [
          { label: "Mike", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Emma", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "David", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "ma-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Customer satisfaction score   driven by performance, transparency, and execution speed.",
      },
    ],
  },
  "digital-web": {
    stats: [
      {
        id: "dw-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "1.2M+",
        label: "Pages designed and deployed to support marketing, sales, and product growth.",
      },
      {
        id: "dw-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "210+",
        label: "Designers and developers collaborating across UX, frontend, and performance.",
        overlays: [
          { label: "Alex", top: "15%", left: "72%", color: "#2a2a2a" },
          { label: "Lisa", top: "42%", left: "12%", color: "#ff6b35" },
          { label: "Tom", top: "70%", left: "18%", color: "#000" },
        ],
      },
      {
        id: "dw-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.7/5★",
        label: "Average rating for reliability, clarity, and post-launch support.",
      },
    ],
  },
  "motion-video": {
    stats: [
      {
        id: "mv-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "850K+",
        label: "Seconds of video content produced to support marketing and sales.",
      },
      {
        id: "mv-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "190+",
        label: "Motion designers, editors, and animators collaborating at scale.",
        overlays: [
          { label: "Chris", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Nina", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Ryan", top: "72%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "mv-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Average rating for creative quality, reliability, and delivery speed.",
      },
    ],
  },
  "print": {
    stats: [
      {
        id: "pr-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "2M+",
        label: "Print designs created for brands across industries   from everyday materials to high impact campaigns.",
      },
      {
        id: "pr-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "180+",
        label: "Designers experienced in print formats, finishes, and production workflows.",
        overlays: [
          { label: "Pat", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Sam", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Kim", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "pr-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Customer satisfaction driven by accuracy, clarity, and reliability.",
      },
    ],
  },
  "illustration-artwork": {
    stats: [
      {
        id: "ia-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "1.8M+",
        label: "Illustrations and artwork assets delivered across platforms and industries.",
      },
      {
        id: "ia-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "160+",
        label: "Illustrators and artists producing custom visuals at scale.",
        overlays: [
          { label: "Jordan", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Casey", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Morgan", top: "70%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "ia-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Customer satisfaction driven by originality, clarity, and reliability.",
      },
    ],
  },
  "ebooks-digital-report": {
    stats: [
      {
        id: "edr-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "1.9M+",
        label: "Pages of structured content designed across industries.",
      },
      {
        id: "edr-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "210+",
        label: "Designers and layout specialists collaborating at scale.",
        overlays: [
          { label: "Taylor", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Jamie", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Riley", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "edr-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Average rating for consistency, professionalism, and turnaround speed.",
      },
    ],
  },
  "presentations": {
    stats: [
      {
        id: "prs-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "2.4M+",
        label: "Slides designed across industries and business functions.",
      },
      {
        id: "prs-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "240+",
        label: "Presentation designers and visual strategists collaborating at scale.",
        overlays: [
          { label: "Drew", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Blake", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Quinn", top: "70%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "prs-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Average rating for consistency, polish, and turnaround speed.",
      },
    ],
  },
  "product-packaging": {
    stats: [
      {
        id: "pp-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "999.0+",
        label: "Packaging units influenced by our design systems.",
      },
      {
        id: "pp-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "220+",
        label: "Packaging designers and brand specialists collaborating at scale.",
        overlays: [
          { label: "Avery", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Cameron", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Dakota", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "pp-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Average rating for consistency, quality, and turnaround speed.",
      },
    ],
  },
  "apparel-merchandise": {
    stats: [
      {
        id: "am-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "1.2M+",
        label: "Apparel and merchandise designs created",
      },
      {
        id: "am-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "220+",
        label: "Apparel designers and merchandise specialists",
        overlays: [
          { label: "Sage", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "River", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Phoenix", top: "70%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "am-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.7/5★",
        label: "Apparel design and quality satisfaction",
      },
    ],
  },
  "environmental-event": {
    stats: [
      {
        id: "ee-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "2.0M+",
        label: "Event attendees impacted by our design systems.",
      },
      {
        id: "ee-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "215+",
        label: "Event designers and brand specialists collaborating at scale.",
        overlays: [
          { label: "Skyler", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Rowan", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Finley", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "ee-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.8/5★",
        label: "Average rating for reliability, quality, and turnaround.",
      },
    ],
  },
  "corporate-internal": {
    stats: [
      {
        id: "ci-stat-1",
        image: "/assets/images/services/brand-identity/stat1.webp",
        value: "2.1M+",
        label: "Corporate materials and internal designs",
      },
      {
        id: "ci-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "300+",
        label: "Corporate designers and internal comms specialists",
        overlays: [
          { label: "Hayden", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Parker", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Reese", top: "70%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "ci-stat-3",
        image: "/assets/images/services/brand-identity/stat3.webp",
        value: "4.6/5★",
        label: "Corporate design and alignment satisfaction",
      },
    ],
  },
};

// Helper function to get stats data by service slug
export const getServiceStatsData = (slug: string): ServicesStatsData | undefined => {
  return SERVICES_STATS_DATA[slug];
};

