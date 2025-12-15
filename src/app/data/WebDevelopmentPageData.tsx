import { HomenewBannerData } from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import { ProfessionalDesignData } from './ProfessionalDesignData';
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA } from './CaseStudySectionData';
import { AiPowerDesignData } from '../components/AiPowerDesign/AiPowerDesign';
import { RealCostData } from '../components/RealCost/RealCost';
import { CompleteBusinessSetupData } from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import { GuessWorkAdvertisingData } from '../components/GuessWorkAdvertising/GuessWorkAdvertising';

// HomenewBanner data for Web Development page
export const webDevelopmentBannerData: HomenewBannerData = {
  heading: {
    part1: "Your Complete Website Team for ",
    highlight1: "22 Days",
    highlight2: "",
    part2: "",
  },
  description:
    "Fully Focused on Your Build. A dedicated web unit assembled to create a fast, structured, market-ready website prepared to support real traffic and real business activity.",
  experienceBox: {
    title: "Experience Box – What Your Web Team Brings",
    items: [
      "2,500 plus completed website projects across multiple business categories",
      "40 plus years combined execution in modern web production",
      "Specialists in interface, content, SEO, and technical implementation",
      "Web systems deployed across 15 plus active service industries",
      "Trained in AI assisted workflows and rapid digital delivery methods",
    ],
  },
  cta: {
    text: "Get Started",
    href: "#get-started",
  },
  image: {
    src: "/assets/images/homenewbanner-img.webp",
    alt: "Web Development Service",
  },
};

// ProfessionalDesign data for Web Development page
export const webDevelopmentProfessionalData: ProfessionalDesignData = {
  heading: {
    part1: "A Reliable Website Is Core Business Infrastructure.",
    part2: "",
    className: {
      part1: "designerHeadingPart1",
      part2: "headingPart2",
      container: "heading",
    },
  },
  description: {
    text1: "",
    text2: " Visitors evaluate your credibility the moment your website loads. Layout, clarity, speed, and structure determine perceived value instantly. A professionally built website strengthens confidence, increases engagement, and supports real buyer decisions.",
    highlight: "",
    className: {
      text: "description",
      text1Highlight: "designerFirstSentence",
      highlight: "designerDescriptionHighlight",
    },
  },
  
  factsHeading: {
    text: "U.S. Business Website Performance Insights:",
    className: "factsHeading",
  },
  factsList: [
    {
      text: "Modernized websites generate 15 to 25 percent more revenue in the first year",
      className: "factsListItem",
    },
    {
      text: "Businesses with structured pages reduce ad costs by 20 to 40 percent",
      className: "factsListItem",
    },
    {
      text: "Websites with optimized layouts convert up to 30 percent more inquiries",
      className: "factsListItem",
    },
    {
      text: "Companies investing in strong digital systems increase customer value by 28 percent",
      className: "factsListItem",
    },
  ],
  bottomHeading: {
    part1: "Meet the Team Assigned to ",
    part2: "Build Your Website",
    part3: "",
    className: {
      part1: "bottomHeadingPart1",
      part2: "designerBottomHeadingPart2",
      part3: "bottomHeadingPart3",
      container: "bottomHeading",
    },
  },
  rightSectionFact: {
    text: "Long-Term Advantage: You're receiving the structured digital foundation your business will rely on for sales, visibility, and client trust over the long run, not temporary pages or placeholder content.",
    className: "rightFactsListItem",
  },
  videoOverlayText:
    "Your 22-day web team executes a complete website operation from initial structure to final deployment. Each specialist focuses on a dedicated part of the build, keeping quality consistent and timelines controlled.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE",
    videoTitle: "Web Development Team Demo",
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

// CaseStudySection data for Web Development page
export const webDevelopmentCaseStudyData: CaseStudySectionData = {
  ...DEFAULT_CASE_STUDY_DATA,
  heading: {
    text: "Meet the Team Assigned to Build Your Website",
    highlighted: "Your Website",
  },
  description:
    "Your 22-day web team executes a complete website operation from initial structure to final deployment. Each specialist focuses on a dedicated part of the build, keeping quality consistent and timelines controlled.",
  tabs: DEFAULT_CASE_STUDY_DATA.tabs.filter((tab) => tab.id === "creative"),
  cards: [
    {
      id: "tabScroll1",
      category: "creative",
      title: "Web Designer",
      subtitle: "Shapes the visual layout and presentation standards that set the tone for your entire website.",
      tags: [
        "Homepage visual plan",
        "Service section layout",
        "Color and typography system",
        "Hero area composition",
        "Visual hierarchy control",
        "Section block visuals",
        "Responsive element setup",
        "Brand alignment for web",
        "Component appearance mapping",
        "Full layout direction",
      ],
      buttonText: "Hire Web Designer",
      image: "/assets/images/2.png",
    },
    {
      id: "tabScroll2",
      category: "creative",
      title: "UI UX Designer",
      subtitle: "Constructs the experience layer that drives clarity, reduces friction, and supports user action.",
      tags: [
        "Wireframe architecture",
        "User journey planning",
        "Navigation structure",
        "Interaction placement",
        "Conversion sequence tuning",
        "Mobile usability upgrades",
        "Prototype demonstration",
        "Form experience mapping",
        "Spacing and readability rules",
        "Full experience consistency",
      ],
      buttonText: "Hire UI UX Designer",
      image: "/assets/images/ui-ux-designer.webp",
    },
    {
      id: "tabScroll3",
      category: "creative",
      title: "Web Developer",
      subtitle: "Builds the full website with stable code, fast performance, and complete stack integration.",
      tags: [
        "Frontend engineering",
        "Backend functionality setup",
        "Full-stack implementation",
        "Technical SEO installation",
        "Page speed refinement",
        "Schema & metadata configuration",
        "Security essentials",
        "Hosting and deployment support",
        "Responsive coding standards",
        "Complete website buildout",
      ],
      buttonText: "Hire Web Developer",
      image: "/assets/images/graphic-designer.webp",
    },
  ],
};

// AiPowerDesign data for Web Development page
export const webDevelopmentAiPowerData: AiPowerDesignData = {
  headline: {
    text: 'Your Web Team Handles Every Critical Website Component Within 22 Days.',
    highlighted: ['Critical Website Component', '22 Days'],
  },
  description:
    'Instead of managing multiple freelancers or coordinating disconnected tasks, you get a unified team producing a complete website prepared for real users and real business operations.',
  deliverablesTitle: 'Your 22-Day Website Package Includes:',
  tabs: [
    {
      id: 'homepage',
      label: 'Homepage',
      image: '/assets/images/aipower1.png',
      deliverables: [
        { id: '1', label: 'Homepage', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Service Page', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'About Page', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Contact Structure', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Blog Setup', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'Landing Page', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'Homepage', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Service Page', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'About Page', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Contact Structure', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Blog Setup', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'Landing Page', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'Homepage', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Service Page', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'About Page', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Contact Structure', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'Blog Setup', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Landing Page', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'Homepage', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Service Page', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'About Page', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Contact Structure', image: '/assets/images/aipower2.png' },
      ],
      gridItems: 22,
    },
  ],
  lifetimeValue: {
    heading: 'Long-Term Advantage:',
    text: "You're receiving the structured digital foundation your business will rely on for sales, visibility, and client trust over the long run, not temporary pages or placeholder content.",
  },
};

// RealCost data for Web Development page
export const webDevelopmentRealCostData: RealCostData = {
  heading: {
    part1: 'Review the Real Cost of',
    part2: 'Hiring Web Staff vs.',
    part3: 'Using a Full Web Team for 22 Days',
  },
  callToAction: 'Calculate:',
  bulletPoints: [
    'Annual cost of a U.S. developer',
    'Expenses for multiple specialists',
    'Tools and platform subscriptions',
    'Savings created by one coordinated unit',
    'Return gained by building your website correctly from the start',
  ],
  conclusion:
    'Most business owners recognize thousands saved and months regained through this model',
  calculator: {
    title: 'Cost Calculator',
    fields: [
      {
        id: 'developerType',
        label: 'Developer Type',
        icon: 'designer',
        placeholder: 'Developer Type',
        type: 'select',
        options: ['Junior Developer', 'Mid-Level Developer', 'Senior Developer', 'Tech Lead'],
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

// CompleteBusinessSetup data for Web Development page
export const webDevelopmentCompleteSetupData: CompleteBusinessSetupData = {
  heading: {
    part1: "Your Complete Website Package — ",
    price: "$1,499",
    part2: " One-Time",
  },
  brandingKits: {
    title: {
      highlight: "Website",
      suffix: " KITs",
    },
    items: [
      { id: "1", number: "01", label: "Homepage" },
      { id: "2", number: "02", label: "Service Page" },
      { id: "3", number: "03", label: "About Page" },
      { id: "4", number: "04", label: "Contact Structure" },
      { id: "5", number: "05", label: "Blog Setup" },
      { id: "6", number: "06", label: "Landing Page" },
      { id: "7", number: "07", label: "Homepage" },
      { id: "8", number: "08", label: "Service Page" },
      { id: "9", number: "09", label: "About Page" },
      { id: "10", number: "10", label: "Contact Structure" },
      { id: "11", number: "11", label: "Blog Setup" },
      { id: "12", number: "12", label: "Landing Page" },
    ],
  },
  benefits: {
    title: "You get:",
    items: [
      { id: "1", text: "A dedicated web team" },
      { id: "2", text: "22 essential website assets" },
      { id: "3", text: "AI assisted workflow" },
      { id: "4", text: "Unlimited revisions within 22 days" },
      { id: "5", text: "Launch-ready files delivered" },
    ],
    footer:
      "No additional charges. No ongoing retainers. You receive the full build your business needs to operate online confidently.",
  },
};

// GuessWorkAdvertising data for Web Development page
export const webDevelopmentGuessWorkData: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Unlock Your Growth ',
    highlight: 'Roadmap',
    part2: '',
  },
  description:
    'Share your objectives and receive a clear, actionable outline for your online presence. You will know what to build, what to improve, and what supports faster customer acquisition.',
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
    alt: 'Growth Roadmap',
  },
};

// Slider data for Web Development page
export const webDevelopmentSliderData1 = [
  { text: "Hiring a ", highlight: "U.S. developer ", price: "$85,000+ a year " },
  { text: "Hiring multiple ", highlight: "specialists", price: " $120,000+ a year " },
  { text: "Tools and ", highlight: "platform subscriptions", price: "$15,000+ a year " },
];

export const webDevelopmentSliderData2 = [
  { text: "Development and Production ", highlight: "Systems", price: "($12,000+ Annual Value)" },
  { text: "Development and Production ", highlight: "Systems", price: "($12,000+ Annual Value)" },
  { text: "Development and Production ", highlight: "Systems", price: "($12,000+ Annual Value)" },
  { text: "Development and Production ", highlight: "Systems", price: "($12,000+ Annual Value)" },
];

export const webDevelopmentSliderData3 = [
  { text: "$48,000 plus Worth of ", highlight: "Web Production Capability ", price: "Working on Your Build" },
  { text: "$48,000 plus Worth of ", highlight: "Web Production Capability ", price: "Working on Your Build" },
  { text: "$48,000 plus Worth of ", highlight: "Web Production Capability ", price: "Working on Your Build" },
];

