import React from 'react';
import { HomenewBannerData } from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import { ProfessionalDesignData } from './ProfessionalDesignData';
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA } from './CaseStudySectionData';
import { AiPowerDesignData } from '../components/AiPowerDesign/AiPowerDesign';
import { RealCostData } from '../components/RealCost/RealCost';
import { CompleteBusinessSetupData } from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import { GuessWorkAdvertisingData } from '../components/GuessWorkAdvertising/GuessWorkAdvertising';

// Social Media Marketing Page Data
// HomenewBanner data for Social Media Marketing page
export const socialMediaMarketingBannerData: HomenewBannerData = {
  heading: {
    part1: "Market-Ready Social Content in ",
    highlight1: "22 Days.",
    highlight2: "",
    part2: "",
  },
  description:
    "Creative built for attention, precision, and brand presence. A complete social layer shaped with clarity, style, and strategic intent.",
  experienceBox: {
    title: "Experience Box – What This Service Produces",
    items: [
      "2,500 plus social content assets created across multiple industries",
      "40 plus years combined expertise in design, content, and campaign execution",
      "Specialists focused on graphics, reels, captions, and brand communication",
      "Frameworks used across 15 plus business categories",
      "Production supported by AI-assisted tools and high-volume creative systems",
    ],
  },
  cta: {
    text: "Get Started",
    href: "#get-started",
  },
  image: {
    src: "/assets/images/social-media-marketing/banner.webp",
    alt: "Social Media Marketing Service",
    className: "banneFull",
  },
};

// ProfessionalDesign data for Social Media Marketing page
export const socialMediaMarketingProfessionalData: ProfessionalDesignData = {
  heading: {
    part1: "Creative Production Tools ",
    part2: "($12,000 plus Annual Value)",
    className: {
      part1: "designerHeadingPart1",
      part2: "headingPart2",
      container: "heading",
    },
  },
  description: {
    text1: "Strong Social Content Drives Brand Momentum.",
    text2: " High-quality visuals increase perceived value. Creative reels boost visibility and reach. Sharp captions clarify messaging. Consistent posting strengthens brand familiarity. This service creates content aligned with modern social behavior and platform expectations.",
    highlight: "",
    className: {
      text: "description",
      text1Highlight: "designerFirstSentence",
      highlight: "designerDescriptionHighlight",
    },
  },
  
  factsHeading: {
    text: "U.S. Social Media Performance Insights:",
    className: "factsHeading",
  },
  factsList: [
    {
      text: "Brands with improved creative see engagement rise by 20 to 35 percent",
      className: "factsListItem",
    },
    {
      text: "Reel-focused strategies increase reach by up to 40 percent",
      className: "factsListItem",
    },
    {
      text: "Consistent design raises brand recall by 25 percent",
      className: "factsListItem",
    },
    {
      text: "Structured content calendars reduce marketing workload by 30 percent",
      className: "factsListItem",
    },
  ],
  bottomHeading: {
    part1: "Four Specialized Creators for ",
    part2: "Complete Social Content Coverage",
    part3: "",
    className: {
      part1: "bottomHeadingPart1",
      part2: "designerBottomHeadingPart2",
      part3: "bottomHeadingPart3",
      container: "bottomHeading",
    },
  },
  rightSectionFact: {
    text: "Long-Term Advantage: The service installs a complete visual and written foundation designed to strengthen brand presence, expand reach, and support marketing efforts across major social platforms. The content set continues performing beyond the initial cycle.",
    className: "rightFactsListItem",
  },
  videoOverlayText:
    "Your Smart AI Social Media Team operates behind-the-scenes creating graphics, reels, captions, and building your brand presence.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE",
    videoTitle: "Smart AI Social Media Team Demo",
  },
  videoImage: {
    src: "/assets/images/man.png",
    alt: "Video Thumbnail",
    className: "videoImage",
  },
  className: {
    section: "section",
    contentWrapper: "contentWrapper",
    leftSection: "leftSection",
    rightSectionMain: "rightSectionMain",
    videoMain: "videoMain",
    videoImageWrapper: "videoImageWrapper",
    playButtonContainer: "playButtonContainer",
    playButton: "playButton",
    playIcon: "playIcon",
    backgroundDecoration: "backgroundDecoration",
  },
};

// CaseStudySection data for Social Media Marketing page
export const socialMediaMarketingCaseStudyData: CaseStudySectionData = {
  ...DEFAULT_CASE_STUDY_DATA,
  heading: {
    text: "The 22-Day Social Media Management & Marketing Service",
    highlighted: "Social Media Marketing",
  },
  description:
    "A concentrated production cycle engineered to build a brand's visual and content presence across social platforms. The service delivers graphics, reels, captions, campaign lines, creative direction, and structured content suited for modern attention spans and platform behavior.",
  tabs: DEFAULT_CASE_STUDY_DATA.tabs.filter((tab) => tab.id === "creative"),
  cards: [
    {
      id: "tabScroll1",
      category: "creative",
      title: "Social Media Designer",
      subtitle: "Produces clean, creative, platform-ready visuals built to lift brand perception and attract attention quickly.",
      tags: [
        "Post graphics",
        "Carousel layouts",
        "Brand-focused visual sets",
        "Announcement designs",
        "Promotional visuals",
        "Educational content styles",
        "Color and typography direction",
        "Template variations",
        "Consistency mapping",
        "Full visual content production",
      ],
      buttonText: "Hire Social Media Designer",
      image: "/assets/images/2.png",
    },
    {
      id: "tabScroll2",
      category: "creative",
      title: "Content Curator",
      subtitle: "Delivers clear, structured, on-brand messaging crafted to support visuals, campaigns, and platform strategy.",
      tags: [
        "Caption sets",
        "Short-form explanations",
        "Carousel text",
        "Idea prompts",
        "Topic banks",
        "Supporting highlights",
        "Audience-aligned content",
        "Brand voice refinement",
        "Hook lines",
        "Message-ready content compilation",
      ],
      buttonText: "Hire Content Curator",
      image: "/assets/images/ui-ux-designer.webp",
    },
    {
      id: "tabScroll3",
      category: "creative",
      title: "Reels Creator",
      subtitle: "Builds short-form, high-performance videos designed for visibility, engagement, and modern algorithm behavior.",
      tags: [
        "Reel concepts",
        "Script prompts",
        "Scene directions",
        "Movement-based ideas",
        "Text overlays",
        "Vertical-first sequences",
        "Hook variations",
        "Trend-aligned formats",
        "Bite-sized storytelling",
        "Fast-cut creative planning",
      ],
      buttonText: "Hire Reels Creator",
      image: "/assets/images/graphic-designer.webp",
    },
    {
      id: "tabScroll4",
      category: "creative",
      title: "Campaign Writer",
      subtitle: "Produces targeted campaign wording built for growth, engagement, and platform-specific actions.",
      tags: [
        "Campaign themes",
        "Offer messaging",
        "Audience-targeted lines",
        "Seasonal content wording",
        "Platform-based variations",
        "Scroll-stopping hooks",
        "Clear directives",
        "Angle testing lines",
        "Creative captioning",
        "Promotional content writing",
      ],
      buttonText: "Hire Campaign Writer",
      image: "/assets/images/graphic-designer.webp",
    },
  ],
};

// AiPowerDesign data for Social Media Marketing page
export const socialMediaMarketingAiPowerData: AiPowerDesignData = {
  headline: {
    text: 'The Service Covers All Social Media Requirements Across a 22-Day Cycle.',
    highlighted: ['Social Media Requirements', '22-Day Cycle'],
  },
  description:
    'Visual content, caption sets, reels, campaigns, hooks, platform text, and creative variations are produced inside one streamlined cycle with consistent tone, style, and quality.',
  deliverablesTitle: '22-Day Social Content Package Includes:',
  tabs: [
    {
      id: 'social-content',
      label: 'Social Content',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Homepage Design', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'About Page', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Services Page', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Contact Page', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Product Pages', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Blog Layout', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Portfolio', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Landing Pages', image: '/assets/images/aipower3.png' },
        { id: '9', label: '404 Page', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Thank You Page', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Mobile Design', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'Tablet Design', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'UI Components', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Navigation Menu', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'Footer Design', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Forms Design', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'CTA Buttons', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Icons Set', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'Animations', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Loading States', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'Error States', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Email Templates', image: '/assets/images/aipower2.png' },
        { id: '23', label: 'Dashboard UI', image: '/assets/images/aipower3.png' },
        { id: '24', label: 'Admin Panel', image: '/assets/images/aipower4.png' },
      ],
      gridItems: 24,
    },
  ],
  lifetimeValue: {
    heading: 'Long-Term Advantage:',
    text: "The service installs a complete visual and written foundation designed to strengthen brand presence, expand reach, and support marketing efforts across major social platforms. The content set continues performing beyond the initial cycle.",
  },
};

// RealCost data for Social Media Marketing page
export const socialMediaMarketingRealCostData: RealCostData = {
  heading: {
    part1: 'Internal Social Media Production vs.',
    part2: '22-Day Social Content Service',
    part3: '',
  },
  callToAction: 'Consider:',    
  bulletPoints: [
    'Designer fees',
    'Editor fees',
    'Caption writing costs',
    'Time lost in manual production',
    'Tool and subscription expenses',
    'Savings created through consolidated creation',
    'Return gained from consistent, creative output',
  ],
  conclusion:
    'Most brands gain faster growth and stronger visibility through this structured cycle',
  calculator: {
    title: 'Cost Calculator',
    fields: [
      {
        id: 'designerType',
        label: 'Social Media Designer Type',
        icon: 'designer',
        placeholder: 'Designer Type',
        type: 'select',
        options: ['Junior Designer', 'Mid-Level Designer', 'Senior Designer', 'Creative Director'],
      },
      {
        id: 'monthlyCost',
        label: 'Monthly Cost',
        icon: 'coins',
        placeholder: 'Monthly Cost',
        type: 'input',
      },
      {
        id: 'annualCost',
        label: 'Annual Cost',
        icon: 'calendar',
        placeholder: 'Annual Cost',
        type: 'input',
      },
    ],
    estimatedTotalLabel: 'Estimated Total Cost',
    charts: {
      monthlyVsAnnual: {
        label: 'Monthly vs Annual',
        monthlyValue: 30,
        annualValue: 70,
      },
      costBreakdown: {
        label: 'Cost Breakdown',
        segments: [
          { label: 'Segment 1', value: 50, color: '#0fdac2', gradient: ['#0fdac2', '#0fdac2'] },
          { label: 'Segment 2', value: 105, color: '#732BFF', gradient: ['#732BFF', '#732BFF'] },
        ],
      },
    },
  },
};

// CompleteBusinessSetup data for Social Media Marketing page
export const socialMediaMarketingCompleteSetupData: CompleteBusinessSetupData = {
  heading: {
    part1: "Complete Social Content Package — $1,499 One-Time",
    price: "",
    part2: " ",
  },
  brandingKits: {
    title: {
      highlight: "Content",
      suffix: " KITs",
    },
    items: [
      { id: "1", number: "01", label: "Post Graphics" },
      { id: "2", number: "02", label: "Carousel Designs" },
      { id: "3", number: "03", label: "Brand Visual Sets" },
      { id: "4", number: "04", label: "Caption Packs" },
      { id: "5", number: "05", label: "Reel Concepts" },
      { id: "6", number: "06", label: "Campaign Messaging" },
      { id: "7", number: "07", label: "Post Graphics" },
      { id: "8", number: "08", label: "Carousel Designs" },
      { id: "9", number: "09", label: "Brand Visual Sets" },
      { id: "10", number: "10", label: "Caption Packs" },
      { id: "11", number: "11", label: "Reel Concepts" },
      { id: "12", number: "12", label: "Campaign Messaging" },
    ],
  },
  benefits: {
    title: "Included:",
    items: [
      { id: "1", text: "22 days of active creative production" },
      { id: "2", text: "All essential visual and written assets" },
      { id: "3", text: "AI-supported content workflow" },
      { id: "4", text: "Unlimited refinements during the cycle" },
      { id: "5", text: "Content delivered platform-ready" },
    ],
    footer:
      "No retainers. No extra fees. A complete social creative foundation built for growth and brand expression.",
  },
};

// GuessWorkAdvertising data for Social Media Marketing page
export const socialMediaMarketingGuessWorkData: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Content Structure Reference',
    highlight: '',
    part2: '',
  },
  description:
    'A platform-ready plan is developed to guide posting rhythm, design consistency, message hierarchy, and creative direction for future growth.',
  form: {
    placeholder: 'Enter Your Website Link',
    buttonText: 'Get Started',
    buttonIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
  image: {
    src: '/assets/images/guesswork.png',
    alt: 'Social Media Performance Insights',
  },
};

// Slider data for Social Media Marketing page
export const socialMediaMarketingSliderData1 = [
  { sliderDataPara: "Hiring a [social media designer] $65,000+ a year" },
  { sliderDataPara: "Hiring a [content creator team] $75,000+ a year" },
  { sliderDataPara: "Hiring a [social media team] $85,000+ a year" },
];

export const socialMediaMarketingSliderData2 = [
  { sliderDataPara: "Creative Production [Tools] ($12,000+ Annual Value)" },
  { sliderDataPara: "Creative Production [Tools] ($12,000+ Annual Value)" },
  { sliderDataPara: "Creative Production [Tools] ($12,000+ Annual Value)" },
  { sliderDataPara: "Creative Production [Tools] ($12,000+ Annual Value)" },
];

export const socialMediaMarketingSliderData3 = [
  { sliderDataPara: "Hiring a [social media designer] $65,000+ a year" },
  { sliderDataPara: "Hiring a [content creator team] $75,000+ a year" },
  { sliderDataPara: "Hiring a [social media team] $85,000+ a year" },
];

