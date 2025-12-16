import { HomenewBannerData } from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import { ProfessionalDesignData } from './ProfessionalDesignData';
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA } from './CaseStudySectionData';
import { AiPowerDesignData } from '../components/AiPowerDesign/AiPowerDesign';
import { RealCostData } from '../components/RealCost/RealCost';
import { CompleteBusinessSetupData } from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import { GuessWorkAdvertisingData } from '../components/GuessWorkAdvertising/GuessWorkAdvertising';

// HomenewBanner data for Content Writing page
export const contentWritingBannerData: HomenewBannerData = {
  heading: {
    part1: "Market-Ready Content in ",
    highlight1: "22 Days.",
    highlight2: "",
    part2: "",
  },
  className: "contentWritingBanner",
  description:
    "Writing shaped for presence, persuasion, and modern brand standards. A complete content layer built with clarity, rhythm, and commercial intent.",
  experienceBox: {
    title: "Experience Box – What This Service Produces",
    items: [
      "2,500 plus writing projects delivered across real industries",
      "40 plus years combined experience in website, marketing, and brand content",
      "Writers specialized in digital messaging, UX wording, and performance copy",
      "Content frameworks applied in 15 plus business categories",
      "Production supported by AI-enhanced research and structured writing systems",
    ],
  },
  cta: {
    text: "Get Started",
    href: "#get-started",
  },
  image: {
    src: "/assets/images/content-marketing-banner.webp",
    alt: "Content Writing Service",
  },
};

// ProfessionalDesign data for Content Writing page
export const contentWritingProfessionalData: ProfessionalDesignData = {
  heading: {
    part1: "U.S. Content Performance Insights:",
    part2: "",
    className: {
      part1: "designerHeadingPart1",
      part2: "headingPart2",
      container: "heading",
    },
  },
  description: {
    text1: "A full content build designed to install strong, consistent communication across web, marketing, and product touchpoints.",
    text2: " The service introduces clean language, modern tone, and commercially aligned structure to every written asset required for market readiness.",
    highlight: "",
    className: {
      text: "description",
      text1Highlight: "designerFirstSentence",
      highlight: "designerDescriptionHighlight",
    },
  },
  
  factsHeading: {
    text: "The Service Covers All Content Requirements Across a 22-Day Production Window.",
    className: "factsHeading",
  },
  factsList: [
    {
      text: "Brands with clarified messaging report conversion lifts of 15 to 25 percent",
      className: "factsListItem",
    },
    {
      text: "Consistent content reduces ad cost by 20 to 40 percent",
      className: "factsListItem",
    },
    {
      text: "Websites with modern copy see up to 30 percent more inquiries",
      className: "factsListItem",
    },
    {
      text: "Structured content foundations increase customer value by 28 percent",
      className: "factsListItem",
    },
  ],
  bottomHeading: {
    part1: "Four Specialized Writers for ",
    part2: "Complete Content Coverage",
    part3: "",
    className: {
      part1: "bottomHeadingPart1",
      part2: "designerBottomHeadingPart2",
      part3: "bottomHeadingPart3",
      container: "bottomHeading",
    },
  },
  rightSectionFact: {
    text: "Enduring Advantage: The service installs a complete written foundation designed to strengthen brand clarity, improve communication quality, and support marketing, sales, and customer experience long after the production cycle concludes.",
    className: "rightFactsListItem",
  },
  videoOverlayText:
    "Your Smart AI Content Writing Team operates behind-the-scenes creating content, refining messaging, and building your brand voice.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE",
    videoTitle: "Smart AI Content Writing Team Demo",
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

// CaseStudySection data for Content Writing page
export const contentWritingCaseStudyData: CaseStudySectionData = {
  ...DEFAULT_CASE_STUDY_DATA,
  heading: {
    text: "The 22-Day Content Writing Service",
    highlighted: "Content Writing",
  },
  description:
    "A full content build designed to install strong, consistent communication across web, marketing, and product touchpoints. The service introduces clean language, modern tone, and commercially aligned structure to every written asset required for market readiness.",
  tabs: DEFAULT_CASE_STUDY_DATA.tabs.filter((tab) => tab.id === "creative"),
  cards: [
    {
      id: "tabScroll1",
      category: "creative",
      title: "Web Content Writer",
      subtitle: "Creates structured, fluent text designed to present services, explain value, and shape a confident digital presence.",
      tags: [
        "Homepage messaging",
        "Service page detailing",
        "Benefit-oriented content blocks",
        "About statements",
        "Contact page wording",
        "Support descriptions",
        "SEO-supported headings",
        "Process breakdowns",
        "Mobile-ready text structure",
        "Full website content creation",
      ],
      buttonText: "Hire Web Content Writer",
      image: "/assets/images/2.png",
    },
    {
      id: "tabScroll2",
      category: "creative",
      title: "Copywriter",
      subtitle: "Delivers persuasive, action-oriented writing built to highlight offers, drive response, and support promotions.",
      tags: [
        "Sales page copy",
        "Landing page messaging",
        "Call-to-action sets",
        "Offer explanation lines",
        "Short-form conversion copy",
        "Lead-focused content",
        "Value-driven messaging",
        "Script lines",
        "Segment-specific variations",
        "Commercial writing essentials",
      ],
      buttonText: "Hire Copywriter",
      image: "/assets/images/ui-ux-designer.webp",
    },
    {
      id: "tabScroll3",
      category: "creative",
      title: "UI/UX Writer",
      subtitle: "Produces concise, intuitive wording that guides user actions and improves product and interface communication.",
      tags: [
        "Button labels",
        "Form microcopy",
        "Navigation text",
        "Onboarding lines",
        "Instructional messaging",
        "State messages",
        "Section titles",
        "Feature descriptions",
        "User guidance wording",
        "Complete UX content refinement",
      ],
      buttonText: "Hire UI/UX Writer",
      image: "/assets/images/graphic-designer.webp",
    },
    {
      id: "tabScroll4",
      category: "creative",
      title: "Ads Writer",
      subtitle: "Crafts fast, scroll-resistant content for paid advertising and brand visibility across digital channels.",
      tags: [
        "Ad headlines",
        "Primary message sets",
        "Short-form hooks",
        "Audience-focused variations",
        "Offer highlights",
        "Retargeting lines",
        "Caption-based ads",
        "Video copy prompts",
        "Angle testing ideas",
        "Performance-aligned ad content",
      ],
      buttonText: "Hire Ads Writer",
      image: "/assets/images/graphic-designer.webp",
    },
  ],
};

// AiPowerDesign data for Content Writing page
export const contentWritingAiPowerData: AiPowerDesignData = {
  headline: {
    text: 'The Service Covers All Content Requirements Across a 22-Day Production Window.',
    highlighted: ['Content Requirements', '22-Day Production'],
  },
  description:
    'Website content, sales copy, UX text, marketing lines, ads, captions, and brand communication are produced inside one controlled writing cycle with consistent tone and polished delivery.',
  deliverablesTitle: '22-Day Content Package Includes:',
  tabs: [
    {
      id: 'website-content',
      label: 'Website Content',
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
    {
      id: 'sales-copy',
      label: 'Sales Copy',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Sales page copy', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Landing page messaging', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Call-to-action sets', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Offer explanation lines', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Short-form conversion copy', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Lead-focused content', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Value-driven messaging', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Script lines', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'Segment-specific variations', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Commercial writing essentials', image: '/assets/images/aipower5.png' },
      ],
      gridItems: 10,
    },
    {
      id: 'ux-content',
      label: 'UX Content',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Button labels', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Form microcopy', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Navigation text', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Onboarding lines', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Instructional messaging', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'State messages', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Section titles', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Feature descriptions', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'User guidance wording', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Complete UX content refinement', image: '/assets/images/aipower5.png' },
      ],
      gridItems: 10,
    },
    {
      id: 'advertising-content',
      label: 'Advertising Content',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Ad headlines', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Primary message sets', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Short-form hooks', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Audience-focused variations', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Offer highlights', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Retargeting lines', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Caption-based ads', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Video copy prompts', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'Angle testing ideas', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Performance-aligned ad content', image: '/assets/images/aipower5.png' },
      ],
      gridItems: 10,
    },
  ],
  lifetimeValue: {
    heading: 'Enduring Advantage:',
    text: "The service installs a complete written foundation designed to strengthen brand clarity, improve communication quality, and support marketing, sales, and customer experience long after the production cycle concludes.",
  },
};

// RealCost data for Content Writing page
export const contentWritingRealCostData: RealCostData = {
  heading: {
    part1: 'Internal [Writing Efforts] vs. 22-Day Content Writing Service',
    part2: '',
    part3: '',
  },
  callToAction: 'Consider:',    
  bulletPoints: [
    'Full-time writer costs',
    'Specialist copy fees',
    'Time spent correcting unclear content',
    'Tools and software expenses',
    'Savings created by consolidated production',
    'Return generated by consistent, professional writing',
  ],
  conclusion:
    'Most brands gain weeks of progress and significant savings through this structured cycle',
  calculator: {
    title: 'Cost Calculator',
    fields: [
      {
        id: 'writerType',
        label: 'Content Writer Type',
        icon: 'designer',
        placeholder: 'Content Writer Type',
        type: 'select',
        options: ['Junior Writer', 'Mid-Level Writer', 'Senior Writer', 'Content Director'],
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

// CompleteBusinessSetup data for Content Writing page
export const contentWritingCompleteSetupData: CompleteBusinessSetupData = {
  heading: {
    part1: "Complete Content Writing Package — $1,499 One-Time",
    price: "",
    part2: " ",
  },
  brandingKits: {
    title: {
      highlight: "Content",
      suffix: " KITs",
    },
    items: [
      { id: "1", number: "01", label: "Website Content" },
      { id: "2", number: "02", label: "Service Descriptions" },
      { id: "3", number: "03", label: "About Page Text" },
      { id: "4", number: "04", label: "Contact Page Text" },
      { id: "5", number: "05", label: "Blog Articles" },
      { id: "6", number: "06", label: "Marketing Copy" },
      { id: "7", number: "07", label: "Website Content" },
      { id: "8", number: "08", label: "Service Descriptions" },
      { id: "9", number: "09", label: "About Page Text" },
      { id: "10", number: "10", label: "Contact Page Text" },
      { id: "11", number: "11", label: "Blog Articles" },
      { id: "12", number: "12", label: "Marketing Copy" },
    ],
  },
  benefits: {
    title: "Included:",
    items: [
      { id: "1", text: "22 days of structured content creation" },
      { id: "2", text: "All essential content assets" },
      { id: "3", text: "AI-supported writing workflow" },
      { id: "4", text: "Unlimited refinements during the cycle" },
      { id: "5", text: "Content delivered in publish-ready format" },
    ],
    footer:
      "No retainers. No added fees. A complete writing foundation for brand presence and commercial use.",
  },
};

// GuessWorkAdvertising data for Content Writing page
export const contentWritingGuessWorkData: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Content Outline Reference ',
    highlight: 'Insights',
    part2: '',
  },
  description:
    'An organized writing map is created to guide tone, hierarchy, communication priorities, and future content expansion.',
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
    alt: 'Content Performance Insights',
  },
};

// Slider data for Content Writing page
export const contentWritingSliderData1 = [
  { text: "Hiring a ", highlight: "content writer ", price: " $65,000+ a year " },
  { text: "Hiring a ", highlight: "copywriter team", price: " $75,000+ a year " },
  { text: "Hiring a ", highlight: "content team", price: "$85,000+ a year " },
];

export const contentWritingSliderData2 = [
  { text: "Content Production ", highlight: "Tools", price: "($12,000+ Annual Value)" },
  { text: "Content Production ", highlight: "Tools", price: "($12,000+ Annual Value)" },
  { text: "Content Production ", highlight: "Tools", price: "($12,000+ Annual Value)" },
  { text: "Content Production ", highlight: "Tools", price: "($12,000+ Annual Value)" },
];

export const contentWritingSliderData3 = [
  { text: "Hiring a ", highlight: "content writer ", price: "$65,000+ a year " },
  { text: "Hiring a ", highlight: "copywriter team", price: " $75,000+ a year " },
  { text: "Hiring a ", highlight: "content team", price: "$85,000+ a year " },
];

