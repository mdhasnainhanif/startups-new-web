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
        value: "",
        label: "Designs created for our customers",
      },
      {
        id: "bi-stat-2",
        image: "/assets/images/services/brand-identity/stat2.webp",
        value: "",
        label: "Creatives and art directors",
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
        value: "",
        label: "Customer satisfaction rate (and counting)",
      },
    ],
  },
  "marketing-advertising": {
    stats: [
      {
        id: "ma-stat-1",
        image: "/assets/images/services/marketing-advertising/1.webp",
        value: "5M+",
        label: "Campaign creatives delivered",
      },
      {
        id: "ma-stat-2",
        image: "/assets/images/services/marketing-advertising/2.webp",
        value: "450+",
        label: "Marketing specialists and strategists",
        overlays: [
          { label: "Mike", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Emma", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "David", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "ma-stat-3",
        image: "/assets/images/services/marketing-advertising/3.webp",
        value: "4.9/5★",
        label: "Client satisfaction with campaign results",
      },
    ],
  },
  "digital-web": {
    stats: [
      {
        id: "dw-stat-1",
        image: "/assets/images/services/digital-web/1.webp",
        value: "2.5M+",
        label: "Digital interfaces designed",
      },
      {
        id: "dw-stat-2",
        image: "/assets/images/services/digital-web/2.webp",
        value: "380+",
        label: "UI/UX designers and developers",
        overlays: [
          { label: "Alex", top: "15%", left: "72%", color: "#2a2a2a" },
          { label: "Lisa", top: "42%", left: "12%", color: "#ff6b35" },
          { label: "Tom", top: "70%", left: "18%", color: "#000" },
        ],
      },
      {
        id: "dw-stat-3",
        image: "/assets/images/services/digital-web/3.webp",
        value: "4.7/5★",
        label: "User experience satisfaction rating",
      },
    ],
  },
  "motion-video": {
    stats: [
      {
        id: "mv-stat-1",
        image: "/assets/images/services/motion-video/1.webp",
        value: "1.8M+",
        label: "Motion graphics and videos created",
      },
      {
        id: "mv-stat-2",
        image: "/assets/images/services/motion-video/2.webp",
        value: "280+",
        label: "Motion designers and video editors",
        overlays: [
          { label: "Chris", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Nina", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Ryan", top: "72%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "mv-stat-3",
        image: "/assets/images/services/motion-video/3.webp",
        value: "4.8/5★",
        label: "Client satisfaction with video content",
      },
    ],
  },
  "print": {
    stats: [
      {
        id: "pr-stat-1",
        image: "/assets/images/services/print/1.webp",
        value: "4M+",
        label: "Print materials designed and produced",
      },
      {
        id: "pr-stat-2",
        image: "/assets/images/services/print/2.webp",
        value: "260+",
        label: "Print designers and production specialists",
        overlays: [
          { label: "Pat", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Sam", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Kim", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "pr-stat-3",
        image: "/assets/images/services/print/3.webp",
        value: "4.6/5★",
        label: "Print quality and design satisfaction",
      },
    ],
  },
  "illustration-artwork": {
    stats: [
      {
        id: "ia-stat-1",
        image: "/assets/images/services/illustration-artwork/1.webp",
        value: "2.2M+",
        label: "Custom illustrations and artwork created",
      },
      {
        id: "ia-stat-2",
        image: "/assets/images/services/illustration-artwork/2.webp",
        value: "310+",
        label: "Illustrators and digital artists",
        overlays: [
          { label: "Jordan", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Casey", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Morgan", top: "70%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "ia-stat-3",
        image: "/assets/images/services/illustration-artwork/3.webp",
        value: "4.9/5★",
        label: "Artwork quality and creativity rating",
      },
    ],
  },
  "ebooks-digital-report": {
    stats: [
      {
        id: "edr-stat-1",
        image: "/assets/images/services/ebooks-digital-report/1.webp",
        value: "1.5M+",
        label: "Digital documents and reports designed",
      },
      {
        id: "edr-stat-2",
        image: "/assets/images/services/ebooks-digital-report/2.webp",
        value: "240+",
        label: "Document designers and content specialists",
        overlays: [
          { label: "Taylor", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Jamie", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Riley", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "edr-stat-3",
        image: "/assets/images/services/ebooks-digital-report/3.webp",
        value: "4.7/5★",
        label: "Document design and clarity satisfaction",
      },
    ],
  },
  "presentations": {
    stats: [
      {
        id: "prs-stat-1",
        image: "/assets/images/services/presentations/1.webp",
        value: "3.5M+",
        label: "Presentation slides designed",
      },
      {
        id: "prs-stat-2",
        image: "/assets/images/services/presentations/2.webp",
        value: "350+",
        label: "Presentation designers and consultants",
        overlays: [
          { label: "Drew", top: "10%", left: "75%", color: "#2a2a2a" },
          { label: "Blake", top: "40%", left: "10%", color: "#ff6b35" },
          { label: "Quinn", top: "70%", left: "15%", color: "#000" },
        ],
      },
      {
        id: "prs-stat-3",
        image: "/assets/images/services/presentations/3.webp",
        value: "4.8/5★",
        label: "Presentation impact and effectiveness rating",
      },
    ],
  },
  "product-packaging": {
    stats: [
      {
        id: "pp-stat-1",
        image: "/assets/images/services/product-packaging/1.webp",
        value: "2.8M+",
        label: "Packaging designs created",
      },
      {
        id: "pp-stat-2",
        image: "/assets/images/services/product-packaging/2.webp",
        value: "290+",
        label: "Packaging designers and brand specialists",
        overlays: [
          { label: "Avery", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Cameron", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Dakota", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "pp-stat-3",
        image: "/assets/images/services/product-packaging/3.webp",
        value: "4.9/5★",
        label: "Packaging design and shelf appeal rating",
      },
    ],
  },
  "apparel-merchandise": {
    stats: [
      {
        id: "am-stat-1",
        image: "/assets/images/services/apparel-merchandise/1.webp",
        value: "1.2M+",
        label: "Apparel and merchandise designs created",
      },
      {
        id: "am-stat-2",
        image: "/assets/images/services/apparel-merchandise/2.webp",
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
        image: "/assets/images/services/apparel-merchandise/3.webp",
        value: "4.7/5★",
        label: "Apparel design and quality satisfaction",
      },
    ],
  },
  "environmental-event": {
    stats: [
      {
        id: "ee-stat-1",
        image: "/assets/images/services/environmental-event/1.webp",
        value: "1.6M+",
        label: "Event graphics and environmental designs",
      },
      {
        id: "ee-stat-2",
        image: "/assets/images/services/environmental-event/2.webp",
        value: "270+",
        label: "Event designers and environmental specialists",
        overlays: [
          { label: "Skyler", top: "12%", left: "70%", color: "#2a2a2a" },
          { label: "Rowan", top: "45%", left: "15%", color: "#ff6b35" },
          { label: "Finley", top: "68%", left: "20%", color: "#000" },
        ],
      },
      {
        id: "ee-stat-3",
        image: "/assets/images/services/environmental-event/3.webp",
        value: "4.8/5★",
        label: "Event design impact and memorability rating",
      },
    ],
  },
  "corporate-internal": {
    stats: [
      {
        id: "ci-stat-1",
        image: "/assets/images/services/corporate-internal/1.webp",
        value: "2.1M+",
        label: "Corporate materials and internal designs",
      },
      {
        id: "ci-stat-2",
        image: "/assets/images/services/corporate-internal/2.webp",
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
        image: "/assets/images/services/corporate-internal/3.webp",
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

