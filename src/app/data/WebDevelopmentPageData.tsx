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
    src: "/assets/images/web-development/banner.webp",
    alt: "Web Development Service",
    className: "banneFull",
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
      image: "/assets/images/avatar/brand-designer.webp",
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
      image: "/assets/images/avatar/ui-ux-designer.webp",
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
      image: "/assets/images/avatar/graphic-designer.webp",
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
        { id: '1', label: 'Frontend Development', image: '/assets/images/aipower1.png' },
        { id: '2', label: 'Backend Development', image: '/assets/images/aipower2.png' },
        { id: '3', label: 'Full-Stack Development', image: '/assets/images/aipower3.png' },
        { id: '4', label: 'Web App Development', image: '/assets/images/aipower4.png' },
        { id: '5', label: 'Ecommerce Development', image: '/assets/images/aipower5.png' },
        { id: '6', label: 'CMS Development', image: '/assets/images/aipower1.png' },
        { id: '7', label: 'API Development & Integration', image: '/assets/images/aipower2.png' },
        { id: '8', label: 'Database Development', image: '/assets/images/aipower3.png' },
        { id: '9', label: 'UI/UX Web Design', image: '/assets/images/aipower4.png' },
        { id: '10', label: 'Mobile-First Web Development', image: '/assets/images/aipower5.png' },
        { id: '11', label: 'Website Redesign & Optimization', image: '/assets/images/aipower1.png' },
        { id: '12', label: 'SEO Web Development', image: '/assets/images/aipower2.png' },
        { id: '13', label: 'Landing Page Development', image: '/assets/images/aipower3.png' },
        { id: '14', label: 'Web Hosting & Deployment', image: '/assets/images/aipower4.png' },
        { id: '15', label: 'Performance Optimization', image: '/assets/images/aipower5.png' },
        { id: '16', label: 'Security & Compliance', image: '/assets/images/aipower1.png' },
        { id: '17', label: 'Custom Plugin & Module Development', image: '/assets/images/aipower2.png' },
        { id: '18', label: 'Automation & Scripting', image: '/assets/images/aipower3.png' },
        { id: '19', label: 'DevOps for Web Projects', image: '/assets/images/aipower4.png' },
        { id: '20', label: 'Cloud Web Development', image: '/assets/images/aipower5.png' },
        { id: '21', label: 'Enterprise Web Development', image: '/assets/images/aipower1.png' },
        { id: '22', label: 'Maintenance & Support', image: '/assets/images/aipower2.png' },
        { id: '23', label: 'QA & Testing', image: '/assets/images/aipower3.png' },
        { id: '24', label: 'API-Driven Headless Development', image: '/assets/images/aipower4.png' },
      ],
      gridItems: 24,
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
  { sliderDataPara: "Hiring a [U.S. developer] $85,000+ a year" },
  { sliderDataPara: "Hiring multiple [specialists] $120,000+ a year" },
  { sliderDataPara: "Tools and [platform subscriptions] $15,000+ a year" },
];

export const webDevelopmentSliderData2 = [
  { sliderDataPara: "Development and Production [Systems] ($12,000+ Annual Value)" },
  { sliderDataPara: "Development and Production [Systems] ($12,000+ Annual Value)" },
  { sliderDataPara: "Development and Production [Systems] ($12,000+ Annual Value)" },
  { sliderDataPara: "Development and Production [Systems] ($12,000+ Annual Value)" },
];

export const webDevelopmentSliderData3 = [
  { sliderDataPara: "$48,000 plus Worth of [Web Production Capability] Working on Your Build" },
  { sliderDataPara: "$48,000 plus Worth of [Web Production Capability] Working on Your Build" },
  { sliderDataPara: "$48,000 plus Worth of [Web Production Capability] Working on Your Build" },
];

// Web Development specific blog guides
export const webDevelopmentBlogGuides = [
  {
    id: "1",
    image: "/assets/images/blog/1.webp",
    category: "Web Development",
    title: "Web Development in 2026 - Full Guide",
    date: "Nov 10, 2025",
    readTime: "15 min read",
    excerpt:
      "The web in 2026 moves at a speed that forces developers, teams, and businesses to rethink how they build and maintain digital experiences.",
    href: "/blog-detail/web-development-in-2026-full-guide/",
  },
  {
    id: "2",
    image: "/assets/images/blog/2.webp",
    category: "Web Development",
    title: "How to Build Future‑Ready Websites in 2026 - Full Guide",
    date: "Nov 15, 2025",
    readTime: "18 min read",
    excerpt:
      "Websites built in 2026 must meet higher expectations than ever before. Users demand instant load times, frictionless navigation, and secure interactions across every device and network.",
    href: "/blog-detail/how-to-build-future-ready-websites-in-2026/",
  },
  {
    id: "3",
    image: "/assets/images/blog/3.webp",
    category: "Web Development",
    title: "The 2026 Web Developer's Handbook - Full Guide",
    date: "Nov 20, 2025",
    readTime: "20 min read",
    excerpt:
      "The role of the web developer has evolved dramatically. Businesses expect developers to understand not only coding, but also user experience, performance engineering, AI‑supported workflows, DevOps fundamentals, and long-term system thinking.",
    href: "/blog-detail/the-2026-web-developers-handbook/",
  },
];

