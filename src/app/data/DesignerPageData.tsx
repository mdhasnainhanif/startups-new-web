import { ProfessionalDesignData } from './ProfessionalDesignData';
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA } from './CaseStudySectionData';
import { GuessWorkAdvertisingData } from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import { designerAnalyticsDashboardData } from './AnalyticsDashboardData';

// ProfessionalDesign component data for Designer page
export const designProfessionalPageData: ProfessionalDesignData = {
  heading: {
    part1: "Good Design",
    part2: " Is Not Decoration. It is A Financial Driver.",
    className: {
      part1: "designerHeadingPart1",
      part2: "headingPart2",
      container: "heading",
    },
  },
  description: {
    text1: "Customers judge your business in the first 3 seconds.",
    text2: " They judge your professionalism, pricing, and reliability by how your brand looks. Strong design creates instant trust, higher perceived value, and more people choosing you over a ",
    highlight: "competitor",
    className: {
      text: "description",
      text1Highlight: "designerFirstSentence",
      highlight: "designerDescriptionHighlight",
    },
  },
  factsHeading: {
    text: "Facts About U.S. Local Businesses Benefiting From Design:",
    className: "factsHeading",
  },
  factsList: [
    {
      text: "Local service businesses with updated branding see an average revenue increase of 15-25 percent within the first 12 months",
      className: "factsListItem",
    },
    {
      text: "Contractors who refreshed their brand identity reported paying 20-40 percent less in ad spend for the same number of leads.",
      className: "factsListItem",
    },
    {
      text: "Local businesses with consistent visual design closed up to 30 percent more jobs.",
      className: "factsListItem",
    },
    {
      text: "Home-service businesses using professional design saw a 2-3x improvement in lead conversion after updating visuals.",
      className: "factsListItem",
    },
    {
      text: "Companies that invested in brand design increased their lifetime customer value by 28 percent.",
      className: "factsListItem",
    },
  ],
  bottomHeading: {
    part1: "Your ",
    part2: "Design Team",
    part3: " Builds a Brand That Signals Credibility, & Business",
    className: {
      part1: "bottomHeadingPart1",
      part2: "designerBottomHeadingPart2",
      part3: "bottomHeadingPart3",
      container: "bottomHeading",
    },
  },
  rightSectionFact: [],
  videoOverlayText:
    "Your Smart AI Business Team operate a behind-the-scenes planning promotions, creating visuals.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE",
    videoTitle: "Smart AI Business Team Demo",
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

// CaseStudySection component data for Designer page
export const caseStudyDesignerPageData: CaseStudySectionData = {
  ...DEFAULT_CASE_STUDY_DATA,
  // You can override specific fields here if needed for designer page
  heading: {
    text: "Meet Your AI Powered Design Team Built for Your Business Growth",
    highlighted: "AI Powered Design Team",
  },
  description:
    "Your Smart AI Design Team specializes in creating stunning visual identities and designs that make your business stand out. With professional design expertise and AI-powered efficiency, we deliver complete brand systems that drive real business results.",
  // Only show "Creative & Design" tab
  tabs: DEFAULT_CASE_STUDY_DATA.tabs.filter((tab) => tab.id === "creative"),
  // Custom cards for Designer page with different images and content
  cards: [
    {
      id: "tabScroll1",
      category: "creative",
      title: "Brand Designer",
      subtitle: "Creates a memorable visual identity that makes your business look professional and trusted.",
      tags: [
        "Social media post design",
        "Social media banner design",
        "Logo design",
        "Brand color palette creation",
        "Typography selection",
        "Business card design",
        "Brand identity kit creation",
        "Packaging or label design",
        "Brand guideline document",
        "Full brand identity system",
      ],
      buttonText: "Hire Brand Designer",
      image: "/assets/images/avatar/brand-designer.webp",
    },
    {
      id: "tabScroll2",
      category: "creative",
      title: "UI UX Designer",
      subtitle: "Designs intuitive, smooth experiences that increase user satisfaction and conversions.",
      tags: [
        "Landing page design",
        "Website UI screens",
        "App UI screens",
        "UI component design",
        "Wireframes",
        "User flows",
        "Mobile responsive versions",
        "Interactive prototypes",
        "UX improvements",
        "Full UI UX redesign",
      ],
      buttonText: "Hire UI/UX Designer",
      image: "/assets/images/avatar/ui-ux-designer.webp",
    },
    {
      id: "tabScroll3",
      category: "creative",
      title: "Graphic Designer",
      subtitle: "Creates visuals that grab attention and communicate messages clearly.",
      tags: [
        "Social media posts",
        "Social media banners",
        "Flyer or poster design",
        "Brochure design",
        "Ad creative design",
        "Infographic design",
        "Presentation design",
        "Email banner graphics",
        "Print-ready marketing assets",
        "Full visual campaign design",
      ],
      buttonText: "Hire Graphic Designer",
      image: "/assets/images/avatar/graphic-designer.webp",
    },
  ],
};

// GuessWorkAdvertising data for Designer page
export const designerGuessWorkData: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Unlock Your Growth ',
    highlight: 'Roadmap',
    part2: '',
  },
  description:
    'Share your objectives and receive a clear, actionable outline for your online presence. You will know what to build, what to improve, and what supports faster customer acquisition.',
  form: {
    placeholder: 'Enter Your Business Name',
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
  analyticsDashboardData: designerAnalyticsDashboardData,
};

// Slider data for Designer page
export const designerSliderData1 = [
  { sliderDataPara: "It costs [$57,000] annually to hire a [Graphics Designer] in the US" },
  { sliderDataPara: "It costs [$67,000] annually to hire an [Animator] in the US" },
];

// Growth Guides for Designer page (includes design guide)
export const DESIGNER_GROWTH_GUIDES = [
  {
    id: "design-2026",
    image: "/assets/images/designer_blog/1.webp", // Dummy image - replace with actual design guide image
    category: "Design",
    title: "Design in 2026: How Modern Design Systems Drive Speed, Consistency, and Business Growth",
    date: "Jan 15, 2026",
    readTime: "18 min read",
    excerpt:
      "In 2026, design has moved beyond visuals and aesthetics into a core operational system that directly impacts business speed, scalability, and trust. Companies no longer compete only on features or pricing. They compete on execution quality, experience consistency, and how fast teams can ship without breaking brand integrity.",
    href: "/blog-detail/design-in-2026-modern-design-systems/",
  },
  {
    id: "from-visuals-to-value",
    image: "/assets/images/designer_blog/2.webp", // Dummy image
    category: "Design",
    title: "From Visuals To Value: How Strategic Design Impacts UX, Conversions, And Brand Trust In 2026",
    date: "Jan 20, 2026",
    readTime: "17 min read",
    excerpt:
      "By 2026, design is no longer judged by how attractive an interface looks. It is judged by how effectively it guides users, builds confidence, and drives meaningful action. Strategic design connects visual decisions directly to business outcomes such as engagement, conversion, and long-term brand trust.",
    href: "/blog-detail/from-visuals-to-value-how-strategic-design-impacts-ux-conversions-and-brand-trust-in-2026/",
  },
  {
    id: "future-of-design-teams",
    image: "/assets/images/designer_blog/3.webp", // Dummy image
    category: "Design",
    title: "The Future Of Design Teams In 2026: Tools, Workflows, And AI-Assisted Creative Systems",
    date: "Jan 25, 2026",
    readTime: "19 min read",
    excerpt:
      "By 2026, design teams have evolved from isolated creative units into core operators within product, marketing, and growth organizations. Faster release cycles, multi-platform demands, and rising expectations for consistency require design teams to operate with systems, not just talent.",
    href: "/blog-detail/the-future-of-design-teams-in-2026-tools-workflows-and-ai-assisted-creative-systems/",
  },
];

