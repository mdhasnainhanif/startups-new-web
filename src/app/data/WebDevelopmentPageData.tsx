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
  rightSectionFact: [
    {
      text: "Long-Term Advantage: You're receiving the structured digital foundation your business will rely on for sales, visibility, and client trust over the long run, not temporary pages or placeholder content.",
      className: "rightFactsListItem",
    },
  ],
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
        { id: '1', label: 'Frontend Development', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '2', label: 'Backend Development', image: '/assets/images/pakage/backend-development.webp' },
        { id: '3', label: 'Full-Stack Development', image: '/assets/images/pakage/full-stack-development.webp' },
        { id: '4', label: 'Web App Development', image: '/assets/images/pakage/web-app-development.webp' },
        { id: '5', label: 'Ecommerce Development', image: '/assets/images/pakage/ecommerce-development.webp' },
        { id: '6', label: 'CMS Development', image: '/assets/images/pakage/cms-development.webp' },
        { id: '7', label: 'API Development & Integration', image: '/assets/images/pakage/api-development-integration.webp' },
        { id: '8', label: 'Database Development', image: '/assets/images/pakage/database-development.webp' },
        { id: '9', label: 'UI/UX Web Design', image: '/assets/images/pakage/ui-ux-web-design.webp' },
        { id: '10', label: 'Mobile-First Web Development', image: '/assets/images/pakage/mobile-first-web-development.webp' },
        { id: '11', label: 'Website Redesign & Optimization', image: '/assets/images/pakage/website-redesign-optimization.webp' },
        { id: '12', label: 'SEO Web Development', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '13', label: 'Landing Page Development', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '14', label: 'Web Hosting & Deployment', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '15', label: 'Performance Optimization', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '16', label: 'Security & Compliance', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '17', label: 'Custom Plugin & Module Development', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '18', label: 'Automation & Scripting', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '19', label: 'DevOps for Web Projects', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '20', label: 'Cloud Web Development', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '21', label: 'Enterprise Web Development', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '22', label: 'Maintenance & Support', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '23', label: 'QA & Testing', image: '/assets/images/pakage/frontend-development.webp' },
        { id: '24', label: 'API-Driven Headless Development', image: '/assets/images/pakage/frontend-development.webp' },
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
    items: [
      { id: "1", number: "01", label: "HTML/CSS Development" },
      { id: "2", number: "02", label: "JavaScript Development" },
      { id: "3", number: "03", label: "Responsive UI" },
      { id: "4", number: "04", label: "Component-Based UI" },
      { id: "5", number: "05", label: "Browser Optimization" },
      { id: "6", number: "06", label: "Server-Side Logic" },
      { id: "7", number: "07", label: "API Development" },
      { id: "8", number: "08", label: "Authentication Systems" },
      { id: "9", number: "09", label: "Database Integration" },
      { id: "10", number: "10", label: "Server Optimization" },
      { id: "11", number: "11", label: "MERN Stack Apps" },
      { id: "12", number: "12", label: "MEAN Stack Apps" },
      { id: "13", number: "13", label: "LAMP Stack Apps" },
      { id: "14", number: "14", label: "End-to-End Web Apps" },
      { id: "15", number: "15", label: "Deployment Management" },
      { id: "16", number: "16", label: "SaaS Platforms" },
      { id: "17", number: "17", label: "Custom Dashboards" },
      { id: "18", number: "18", label: "Real-Time Apps" },
      { id: "19", number: "19", label: "Progressive Web Apps" },
      { id: "20", number: "20", label: "Admin/CRM Panels" },
      { id: "21", number: "21", label: "Shopify Stores" },
      { id: "22", number: "22", label: "WooCommerce Stores" },
      { id: "23", number: "23", label: "Custom Ecommerce" },
      { id: "24", number: "24", label: "Checkout Optimization" },
      { id: "25", number: "25", label: "Payment Integration" },
      { id: "26", number: "26", label: "WordPress Development" },
      { id: "27", number: "27", label: "Webflow Development" },
      { id: "28", number: "28", label: "Custom Themes" },
      { id: "29", number: "29", label: "Plugins/Add-ons" },
      { id: "30", number: "30", label: "Content Automation" },
      { id: "31", number: "31", label: "REST API" },
      { id: "32", number: "32", label: "GraphQL API" },
      { id: "33", number: "33", label: "Third-Party Integrations" },
      { id: "34", number: "34", label: "Payment APIs" },
      { id: "35", number: "35", label: "Automation APIs" },
      { id: "36", number: "36", label: "MySQL Databases" },
      { id: "37", number: "37", label: "PostgreSQL Databases" },
      { id: "38", number: "38", label: "MongoDB Databases" },
      { id: "39", number: "39", label: "Database Modeling" },
      { id: "40", number: "40", label: "Query Optimization" },
      { id: "41", number: "41", label: "Wireframes" },
      { id: "42", number: "42", label: "User Flows" },
      { id: "43", number: "43", label: "High-Fidelity UI" },
      { id: "44", number: "44", label: "Design Systems" },
      { id: "45", number: "45", label: "Interaction Design" },
      { id: "46", number: "46", label: "Mobile UI Layouts" },
      { id: "47", number: "47", label: "Adaptive Components" },
      { id: "48", number: "48", label: "Touch Interaction Design" },
      { id: "49", number: "49", label: "Speed Optimization" },
      { id: "50", number: "50", label: "Cross-Device Testing" },
      { id: "51", number: "51", label: "UI Redesign" },
      { id: "52", number: "52", label: "Code Refactoring" },
      { id: "53", number: "53", label: "Speed Optimization" },
      { id: "54", number: "54", label: "UX Improvements" },
      { id: "55", number: "55", label: "SEO-Friendly Structure" },
      { id: "56", number: "56", label: "Technical SEO" },
      { id: "57", number: "57", label: "Schema Markup" },
      { id: "58", number: "58", label: "URL Structuring" },
      { id: "59", number: "59", label: "Page Speed SEO" },
      { id: "60", number: "60", label: "Crawl & Indexing" },
      { id: "61", number: "61", label: "Optimized Pages" },
      { id: "62", number: "62", label: "A/B Testing Variants" },
      { id: "63", number: "63", label: "Lead Capture Systems" },
      { id: "64", number: "64", label: "Marketing Integrations" },
      { id: "65", number: "65", label: "Launch Funnels" },
      { id: "66", number: "66", label: "cPanel Hosting" },
      { id: "67", number: "67", label: "Cloud Deployment" },
      { id: "68", number: "68", label: "SSL Setup" },
      { id: "69", number: "69", label: "Server Configuration" },
      { id: "70", number: "70", label: "Backup/Restore Systems" },
      { id: "71", number: "71", label: "Lighthouse Improvements" },
      { id: "72", number: "72", label: "Asset Compression" },
      { id: "73", number: "73", label: "Caching Strategies" },
      { id: "74", number: "74", label: "Lazy Loading" },
      { id: "75", number: "75", label: "CDN Integration" },
      { id: "76", number: "76", label: "Vulnerability Fixing" },
      { id: "77", number: "77", label: "HTTPS & Data Protection" },
      { id: "78", number: "78", label: "Secure Auth Systems" },
      { id: "79", number: "79", label: "Role-Based Access" },
      { id: "80", number: "80", label: "Compliance" },
      { id: "81", number: "81", label: "WordPress Plugins" },
      { id: "82", number: "82", label: "Shopify Apps" },
      { id: "83", number: "83", label: "CMS Add-ons" },
      { id: "84", number: "84", label: "API Connectors" },
      { id: "85", number: "85", label: "Custom Integrations" },
      { id: "86", number: "86", label: "Task Automation" },
      { id: "87", number: "87", label: "Web Scrapers" },
      { id: "88", number: "88", label: "Bot Development" },
      { id: "89", number: "89", label: "Workflow Scripts" },
      { id: "90", number: "90", label: "Cron Jobs" },
      { id: "91", number: "91", label: "CI/CD Pipelines" },
      { id: "92", number: "92", label: "Git Workflow Setup" },
      { id: "93", number: "93", label: "Cloud Infrastructure" },
      { id: "94", number: "94", label: "Containerization" },
      { id: "95", number: "95", label: "Monitoring Tools" },
      { id: "96", number: "96", label: "AWS Web Services" },
      { id: "97", number: "97", label: "Google Cloud Apps" },
      { id: "98", number: "98", label: "Azure Deployments" },
      { id: "99", number: "99", label: "Serverless Functions" },
      { id: "100", number: "100", label: "Cloud Databases" },
      { id: "101", number: "101", label: "ERP Systems" },
      { id: "102", number: "102", label: "Intranets" },
      { id: "103", number: "103", label: "Multi-User Apps" },
      { id: "104", number: "104", label: "Compliance-Based Apps" },
      { id: "105", number: "105", label: "Scalable Architecture" },
      { id: "106", number: "106", label: "Bug Fixing" },
      { id: "107", number: "107", label: "Performance Monitoring" },
      { id: "108", number: "108", label: "Security Updates" },
      { id: "109", number: "109", label: "Backup Management" },
      { id: "110", number: "110", label: "Feature Enhancements" },
      { id: "111", number: "111", label: "Manual Testing" },
      { id: "112", number: "112", label: "Automated Testing" },
      { id: "113", number: "113", label: "Browser Testing" },
      { id: "114", number: "114", label: "Performance Testing" },
      { id: "115", number: "115", label: "Usability Testing" },
      { id: "116", number: "116", label: "Headless CMS" },
      { id: "117", number: "117", label: "API-First Websites" },
      { id: "118", number: "118", label: "Static Site Generators" },
      { id: "119", number: "119", label: "JAMstack Development" },
      { id: "120", number: "120", label: "Framework Integration" },
    ],
  },
  benefits: {
    title: "Get This Package For ",
    items: [
      { id: "1", text: "A dedicated web team" },
      { id: "2", text: "22 essential website assets" },
      { id: "3", text: "AI assisted workflow" },
      { id: "4", text: "Unlimited revisions within 22 days" },
      { id: "5", text: "Launch-ready files delivered" },
    ],
    ctaButton: {
      text: "Get My Package",
      href: "/contact",
    },
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
  analyticsDashboardData: undefined, // Web Development page uses AnalyticsDashboard separately, not in GuessWorkAdvertising
};

// Slider data for Web Development page
export const webDevelopmentSliderData1 = [
  { sliderDataPara: "It costs [$162,643] annually to hire a [Full Stack Web Developer] in the US" },
  { sliderDataPara: "It costs [$110,412] annually to hire a [Front End Developer] in the US" },
  { sliderDataPara: "It costs [$114,432] annually to hire a [Back End Developer] in the US" },
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

