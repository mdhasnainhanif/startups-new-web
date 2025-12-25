import { HomenewBannerData } from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import { ProfessionalDesignData } from './ProfessionalDesignData';
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA } from './CaseStudySectionData';
import { AiPowerDesignData } from '../components/AiPowerDesign/AiPowerDesign';
import { RealCostData } from '../components/RealCost/RealCost';
import { CompleteBusinessSetupData } from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import { GuessWorkAdvertisingData } from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import { contentWritingAnalyticsDashboardData } from './AnalyticsDashboardData';

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
  rightSectionFact: [
    {
      text: "Enduring Advantage: The service installs a complete written foundation designed to strengthen brand clarity, improve communication quality, and support marketing, sales, and customer experience long after the production cycle concludes.",
      className: "rightFactsListItem",
    },
  ],
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
      image: "/assets/images/avatar/content-writer.webp",
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
      image: "/assets/images/avatar/copywriter.webp",
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
      image: "/assets/images/avatar/ui-ux-writer.webp",
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
      image: "/assets/images/avatar/ads-writer.webp",
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
        { id: '1', label: 'SEO Content Writing', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Copywriting', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Social Media Content Writing', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Email Marketing Content', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Content Strategy', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Brand Messaging Development', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Script Writing', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Technical Writing', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'Creative Writing', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Product Description Writing', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Ad Copywriting', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'B2B Content Writing', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'B2C Content Writing', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Website Content Writing', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'Thought Leadership Writing', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Content Editing & Proofreading', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'Content Repurposing', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Press Releases & PR Writing', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'Lead Magnet Content', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Content for Funnels', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'SMS & Micro-Copywriting', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Marketing Collateral Writing', image: '/assets/images/aipower2.png' },
        { id: '23', label: 'Community & Engagement Writing', image: '/assets/images/aipower3.png' },
        { id: '24', label: 'Content Distribution & Marketing', image: '/assets/images/aipower4.png' },
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
    part1: "Complete Content Writing Package — ",
    price: "$1,499",
    part2: " One-Time",
  },
  brandingKits: {
    items: [
      { id: "1", number: "01", label: "Blog Writing" },
      { id: "2", number: "02", label: "SEO Keyword Integration" },
      { id: "3", number: "03", label: "Long-Form Guides" },
      { id: "4", number: "04", label: "SEO Formatting" },
      { id: "5", number: "05", label: "Snippet Targeting" },
      { id: "6", number: "06", label: "Sales Copy" },
      { id: "7", number: "07", label: "Landing Page Copy" },
      { id: "8", number: "08", label: "Website Content" },
      { id: "9", number: "09", label: "Brand Story Writing" },
      { id: "10", number: "10", label: "Conversion Copy" },
      { id: "11", number: "11", label: "Caption Writing" },
      { id: "12", number: "12", label: "Hook Creation" },
      { id: "13", number: "13", label: "Carousel Copy" },
      { id: "14", number: "14", label: "Short-Form Storytelling" },
      { id: "15", number: "15", label: "Content Calendars" },
      { id: "16", number: "16", label: "Promotional Emails" },
      { id: "17", number: "17", label: "Drip Sequences" },
      { id: "18", number: "18", label: "Email Nurturing Content" },
      { id: "19", number: "19", label: "Cold Outreach Emails" },
      { id: "20", number: "20", label: "Newsletter Content" },
      { id: "21", number: "21", label: "Topic Research" },
      { id: "22", number: "22", label: "Content Clusters" },
      { id: "23", number: "23", label: "Keyword Mapping" },
      { id: "24", number: "24", label: "Publishing Strategy" },
      { id: "25", number: "25", label: "Competitor Audits" },
      { id: "26", number: "26", label: "Tagline Creation" },
      { id: "27", number: "27", label: "Value Proposition Writing" },
      { id: "28", number: "28", label: "Tone of Voice Definition" },
      { id: "29", number: "29", label: "Brand Messaging Guide" },
      { id: "30", number: "30", label: "Identity-Based Copy" },
      { id: "31", number: "31", label: "Video Scripts" },
      { id: "32", number: "32", label: "Reel/Short-Form Scripts" },
      { id: "33", number: "33", label: "Explainer Video Scripts" },
      { id: "34", number: "34", label: "Sales Video Scripts" },
      { id: "35", number: "35", label: "Voice-Over Scripts" },
      { id: "36", number: "36", label: "Manuals" },
      { id: "37", number: "37", label: "Technical Blogs" },
      { id: "38", number: "38", label: "Product Documentation" },
      { id: "39", number: "39", label: "API Documentation" },
      { id: "40", number: "40", label: "Knowledge Base Writing" },
      { id: "41", number: "41", label: "Storytelling Content" },
      { id: "42", number: "42", label: "Narrative Development" },
      { id: "43", number: "43", label: "Brand Stories" },
      { id: "44", number: "44", label: "Character/Story Scripts" },
      { id: "45", number: "45", label: "Creative Campaigns" },
      { id: "46", number: "46", label: "Ecommerce Descriptions" },
      { id: "47", number: "47", label: "Feature-Benefit Writing" },
      { id: "48", number: "48", label: "Amazon/Shopify Listings" },
      { id: "49", number: "49", label: "Catalog Descriptions" },
      { id: "50", number: "50", label: "SEO Product Copy" },
      { id: "51", number: "51", label: "Facebook Ad Copy" },
      { id: "52", number: "52", label: "Google Ad Copy" },
      { id: "53", number: "53", label: "LinkedIn Ad Copy" },
      { id: "54", number: "54", label: "TikTok Ad Hooks" },
      { id: "55", number: "55", label: "Campaign Messaging" },
      { id: "56", number: "56", label: "Industry Blogs" },
      { id: "57", number: "57", label: "Whitepapers" },
      { id: "58", number: "58", label: "Case Studies" },
      { id: "59", number: "59", label: "Reports & Insights" },
      { id: "60", number: "60", label: "Executive-Level Content" },
      { id: "61", number: "61", label: "Lifestyle Blogs" },
      { id: "62", number: "62", label: "Emotional Copywriting" },
      { id: "63", number: "63", label: "Product-Led Stories" },
      { id: "64", number: "64", label: "Awareness Content" },
      { id: "65", number: "65", label: "Lead Focused Writing" },
      { id: "66", number: "66", label: "Home Page Content" },
      { id: "67", number: "67", label: "Services Page Content" },
      { id: "68", number: "68", label: "About Page Content" },
      { id: "69", number: "69", label: "FAQ Writing" },
      { id: "70", number: "70", label: "UX-Friendly Content" },
      { id: "71", number: "71", label: "LinkedIn Articles" },
      { id: "72", number: "72", label: "Executive Ghostwriting" },
      { id: "73", number: "73", label: "Opinion Pieces" },
      { id: "74", number: "74", label: "Industry Insights" },
      { id: "75", number: "75", label: "Final Authority Positioning" },
      { id: "76", number: "76", label: "Structural Editing" },
      { id: "77", number: "77", label: "Line Editing" },
      { id: "78", number: "78", label: "Proofreading" },
      { id: "79", number: "79", label: "Tone Refinement" },
      { id: "80", number: "80", label: "Grammar/Style Fixing" },
      { id: "81", number: "81", label: "Blog to Social Posts" },
      { id: "82", number: "82", label: "Video to Articles" },
      { id: "83", number: "83", label: "Content Repurposing" },
      { id: "84", number: "84", label: "Ebook Breakdowns" },
      { id: "85", number: "85", label: "Multi-Platform Syndication" },
      { id: "86", number: "86", label: "Media Announcements" },
      { id: "87", number: "87", label: "Company Updates" },
      { id: "88", number: "88", label: "Launch PR" },
      { id: "89", number: "89", label: "Industry Insights Writing" },
      { id: "90", number: "90", label: "Public Communication" },
      { id: "91", number: "91", label: "Ebooks" },
      { id: "92", number: "92", label: "Checklists" },
      { id: "93", number: "93", label: "Guides" },
      { id: "94", number: "94", label: "Reports" },
      { id: "95", number: "95", label: "Conversion-Focused" },
      { id: "96", number: "96", label: "Awareness Content" },
      { id: "97", number: "97", label: "Consideration Content" },
      { id: "98", number: "98", label: "Decision-Stage Content" },
      { id: "99", number: "99", label: "Funnel Scripts" },
      { id: "100", number: "100", label: "Landing Page Alignment" },
      { id: "101", number: "101", label: "Short SMS Campaigns" },
      { id: "102", number: "102", label: "App Micro-Copy" },
      { id: "103", number: "103", label: "UX Micro-Messaging" },
      { id: "104", number: "104", label: "CTA Writing" },
      { id: "105", number: "105", label: "Push Notification Copy" },
      { id: "106", number: "106", label: "Brochure Content" },
      { id: "107", number: "107", label: "Company Profiles" },
      { id: "108", number: "108", label: "Service Books" },
      { id: "109", number: "109", label: "Presentations" },
      { id: "110", number: "110", label: "Pitch Decks" },
      { id: "111", number: "111", label: "Forum Content" },
      { id: "112", number: "112", label: "Discord/Slack Messaging" },
      { id: "113", number: "113", label: "Announcement Writing" },
      { id: "114", number: "114", label: "Engagement Scripts" },
      { id: "115", number: "115", label: "Community Content Plans" },
      { id: "116", number: "116", label: "Multi-Platform Posting" },
      { id: "117", number: "117", label: "Traffic Amplification" },
      { id: "118", number: "118", label: "Social SEO Optimization" },
      { id: "119", number: "119", label: "Content Mapping" },
      { id: "120", number: "120", label: "Engagement Strategy" },
    ],
  },
  benefits: {
    title: "Get This Package For ",
    items: [
      { id: "1", text: "22 days of structured content creation" },
      { id: "2", text: "All essential content assets" },
      { id: "3", text: "AI-supported writing workflow" },
      { id: "4", text: "Unlimited refinements during the cycle" },
      { id: "5", text: "Content delivered in publish-ready format" },
    ],
      ctaButton: {
      text: "Get My Package",
      href: "/contact",
    },
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
  analyticsDashboardData: contentWritingAnalyticsDashboardData,
};

// Slider data for Content Writing page
export const contentWritingSliderData1 = [
  { sliderDataPara: "It costs [$65,000] annually to hire a [Content Writer] in the US" },
  { sliderDataPara: "It costs [$73,660] annually to hire a [Copywriter] in the US" },
  { sliderDataPara: "It costs [$104,557] annually to hire a [Content Manager] in the US" },
  { sliderDataPara: "It costs [$82,000] annually to hire a [Content Marketer] in the US" },
];

export const contentWritingSliderData2 = [
  { sliderDataPara: "Content Production [Tools] ($12,000+ Annual Value)" },
  { sliderDataPara: "Content Production [Tools] ($12,000+ Annual Value)" },
  { sliderDataPara: "Content Production [Tools] ($12,000+ Annual Value)" },
  { sliderDataPara: "Content Production [Tools] ($12,000+ Annual Value)" },
];

export const contentWritingSliderData3 = [
  { sliderDataPara: "Hiring a [content writer] $65,000+ a year" },
  { sliderDataPara: "Hiring a [copywriter team] $75,000+ a year" },
  { sliderDataPara: "Hiring a [content team] $85,000+ a year" },
];

// Content Writing specific blog guides
export const contentWritingBlogGuides = [
  {
    id: "1",
    image: "/assets/images/blog/3.webp",
    category: "Content Writing",
    title: "The 2026 Web Developer's Handbook - Full Guide",
    date: "Nov 20, 2025",
    readTime: "20 min read",
    excerpt:
      "The role of the web developer has evolved dramatically. Businesses expect developers to understand not only coding, but also user experience, performance engineering, AI‑supported workflows, DevOps fundamentals, and long-term system thinking.",
    href: "/blog-detail/the-2026-web-developers-handbook-content/",
  },
  {
    id: "2",
    image: "/assets/images/blog/1.webp",
    category: "Content Writing",
    title: "The 2026 Content Marketing Playbook - Full Guide",
    date: "Nov 25, 2025",
    readTime: "22 min read",
    excerpt:
      "Content marketing in 2026 is no longer about publishing articles or social posts and hoping they perform. Audiences are more selective, search engines are stricter, and businesses expect measurable ROI from every piece of content.",
    href: "/blog-detail/the-2026-content-marketing-playbook/",
  },
  {
    id: "3",
    image: "/assets/images/blog/2.webp",
    category: "Content Writing",
    title: "How to Create Content That Wins in 2026 - Full Guide",
    date: "Nov 30, 2025",
    readTime: "19 min read",
    excerpt:
      "Winning in content marketing in 2026 requires understanding algorithms, user psychology, search intent, and multi-platform distribution. Search engines reward expertise and depth, while audiences demand clarity, speed, and relevance.",
    href: "/blog-detail/how-to-create-content-that-wins-in-2026/",
  },
  {
    id: "4",
    image: "/assets/images/blog/3.webp",
    category: "Content Writing",
    title: "Content Writing in 2026 - Full Guide",
    date: "Dec 5, 2025",
    readTime: "21 min read",
    excerpt:
      "Content writing in 2026 is no longer about stuffing keywords into 800 words and hoping to rank. Search engines now prioritize experience, depth, and usefulness, while readers expect clarity, speed, and authenticity.",
    href: "/blog-detail/content-writing-in-2026-full-guide/",
  },
];

