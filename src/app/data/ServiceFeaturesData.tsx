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
  default: {
    heading: "REAL MINDS, SMART TOOLS, EXCEPTIONAL DESIGN",
    featuredCard: {
      image: "/assets/images/services/brand-identity/men.avif",
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
        description: "Average 24-hour first drafts, handled with consistency and care."
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

