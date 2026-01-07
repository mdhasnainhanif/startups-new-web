import React from 'react';
import { HomenewBannerData } from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import { ProfessionalDesignData } from './ProfessionalDesignData';
import { CaseStudySectionData, DEFAULT_CASE_STUDY_DATA } from './CaseStudySectionData';
import { AiPowerDesignData } from '../components/AiPowerDesign/AiPowerDesign';
import { RealCostData } from '../components/RealCost/RealCost';
import { CompleteBusinessSetupData } from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import { GuessWorkAdvertisingData } from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import { socialMediaMarketingAnalyticsDashboardData } from './AnalyticsDashboardData';



export const socialMediaMarketingBannerData: HomenewBannerData = {
  heading: {
    part1: "Your Complete AI Powered Social Media Marketing Team",
    highlight1: " for Months",
    highlight2: "",
    part2: "",
  },
  description:
    "Creative built for attention, precision, and brand presence. A complete social layer shaped with clarity, style, and strategic intent.",
  experienceBox: {
    title: "Experience Box  What This Service Produces",
    items: [
      "2,500 plus social content assets created across multiple industries",
      "40 plus years combined expertise in design, content, and campaign execution",
      "Specialists focused on graphics, reels, captions, and brand communication",
      "Frameworks used across 15 plus business categories",
      "Production supported by AI assisted tools and high volume creative systems",
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
    text2: " High quality visuals increase perceived value. Creative reels boost visibility and reach. Sharp captions clarify messaging. Consistent posting strengthens brand familiarity. This service creates content aligned with modern social behavior and platform expectations.",
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
      text: "Reel focused strategies increase reach by up to 40 percent",
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
  rightSectionFact: [
    {
      text: "long term Advantage: The service installs a complete visual and written foundation designed to strengthen brand presence, expand reach, and support marketing efforts across major social platforms. The content set continues performing beyond the initial cycle.",
      className: "rightFactsListItem",
    },
  ],
  videoOverlayText:
    "Your Smart AI Social Media Team operates behind-the-scenes creating graphics, reels, captions, and building your brand presence.",
  video: {
    videoUrl: "YOUR_VIDEO_URL_HERE",
    videoTitle: "Smart AI Social Media Team Demo",
  },
  videoImage: {
    src: "/assets/images/man.webp",
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


export const socialMediaMarketingCaseStudyData: CaseStudySectionData = {
  ...DEFAULT_CASE_STUDY_DATA,
  heading: {
    text: "The 1 Month Social Media Management & Marketing Service",
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
      subtitle: "Produces clean, creative, platform ready visuals built to lift brand perception and attract attention quickly.",
      tags: [
        "Post graphics",
        "Carousel layouts",
        "Brand focused visual sets",
        "Announcement designs",
        "Promotional visuals",
        "Educational content styles",
        "Color and typography direction",
        "Template variations",
        "Consistency mapping",
        "Full visual content production",
      ],
      buttonText: "Hire Social Media Designer",
      image: "/assets/images/avatar/social-media-marketing.webp",
    },
    {
      id: "tabScroll2",
      category: "creative",
      title: "Content Curator",
      subtitle: "Delivers clear, structured, on brand messaging crafted to support visuals, campaigns, and platform strategy.",
      tags: [
        "Caption sets",
        "Short Form explanations",
        "Carousel text",
        "Idea prompts",
        "Topic banks",
        "Supporting highlights",
        "Audience aligned content",
        "Brand voice refinement",
        "Hook lines",
        "Message ready content compilation",
      ],
      buttonText: "Hire Content Curator",
      image: "/assets/images/avatar/content-curator.webp",
    },
    {
      id: "tabScroll3",
      category: "creative",
      title: "Reels Creator",
      subtitle: "Builds Short Form, high performance videos designed for visibility, engagement, and modern algorithm behavior.",
      tags: [
        "Reel concepts",
        "Script prompts",
        "Scene directions",
        "Movement based ideas",
        "Text overlays",
        "Vertical first sequences",
        "Hook variations",
        "Trend aligned formats",
        "Bite sized storytelling",
        "Fast cut creative planning",
      ],
      buttonText: "Hire Reels Creator",
      image: "/assets/images/avatar/reels-creator.webp",
    },
    {
      id: "tabScroll4",
      category: "creative",
      title: "Campaign Writer",
      subtitle: "Produces targeted campaign wording built for growth, engagement, and platform specific actions.",
      tags: [
        "Campaign themes",
        "Offer messaging",
        "Audience targeted lines",
        "Seasonal content wording",
        "Platform based variations",
        "Scroll stopping hooks",
        "Clear directives",
        "Angle testing lines",
        "Creative captioning",
        "Promotional content writing",
      ],
      buttonText: "Hire Campaign Writer",
      image: "/assets/images/avatar/campaign-writer.webp",
    },
  ],
};
export const socialMediaMarketingAiPowerData: AiPowerDesignData = {
  headline: {
    text: 'The Service Covers All Social Media Requirements Across a 1 Month Cycle.',
    highlighted: ['Social Media Requirements', '1 Month Cycle'],
  },
  description:
    'Visual content, caption sets, reels, campaigns, hooks, platform text, and creative variations are produced inside one streamlined cycle with consistent tone, style, and quality.',
  deliverablesTitle: '1 Month Social Content Package Includes:',
  tabs: [
    {
      id: 'social-content',
      label: 'Social Content',
      image: '/assets/images/aipower1.webp',
      deliverables: [
        { id: '1', label: 'Social Media Strategy Development', image: '/assets/images/social-media-marketing/days-section/social-media-strategy-development.jpg' },
        { id: '2', label: 'Social Media Content Creation', image: '/assets/images/social-media-marketing/days-section/social-media-content-creation.jpg' },
        { id: '3', label: 'Social Media Calendar Planning', image: '/assets/images/social-media-marketing/days-section/social-media-calendar-planning.jpg' },
        { id: '4', label: 'Social Media Account Management', image: '/assets/images/social-media-marketing/days-section/social-media-account-management.jpg' },
        { id: '5', label: 'Community Engagement & Management', image: '/assets/images/social-media-marketing/days-section/community-engagement-management.jpg' },
        { id: '6', label: 'Social Listening & Monitoring', image: '/assets/images/social-media-marketing/days-section/social-listening-monitoring.jpg' },
        { id: '7', label: 'Social Media Branding', image: '/assets/images/social-media-marketing/days-section/social-media-branding.jpg' },
        { id: '8', label: 'Paid Social Media Advertising', image: '/assets/images/social-media-marketing/days-section/paid-social-media-advertising.jpg' },
        { id: '9', label: 'Campaign Strategy & Management', image: '/assets/images/social-media-marketing/days-section/campaign-strategy-management.jpg' },
        { id: '10', label: 'Influencer Marketing Management', image: '/assets/images/social-media-marketing/days-section/influencer-marketing-management.jpg' },
        { id: '11', label: 'Social Media Analytics & Reporting', image: '/assets/images/social-media-marketing/days-section/social-media-analytics-reporting.jpg' },
        { id: '12', label: 'Reel & Short Form Video Production', image: '/assets/images/social-media-marketing/days-section/reel-Short Form-video-production.jpg' },
        { id: '13', label: 'Hashtag Strategy Development', image: '/assets/images/social-media-marketing/days-section/hashtag-strategy-development.jpg' },
        { id: '14', label: 'Social Media SEO', image: '/assets/images/social-media-marketing/days-section/social-media-seo.jpg' },
        { id: '15', label: 'Crisis Management', image: '/assets/images/social-media-marketing/days-section/crisis-management.jpg' },
        { id: '16', label: 'Customer Support via Social Media', image: '/assets/images/social-media-marketing/days-section/customer-support-via-social-media.jpg' },
        { id: '17', label: 'Platform Specific Management', image: '/assets/images/social-media-marketing/days-section/platform-specific-management.jpg' },
        { id: '18', label: 'Brand Collaboration & Partnerships', image: '/assets/images/social-media-marketing/days-section/brand-collaboration-partnerships.jpg' },
        { id: '19', label: 'Social Media Automation Setup', image: '/assets/images/social-media-marketing/days-section/social-media-automation-setup.jpg' },
        { id: '20', label: 'Lead Generation via Social Media', image: '/assets/images/social-media-marketing/days-section/lead-generation-via-social-media.jpg' },
        { id: '21', label: 'Live Session Management', image: '/assets/images/social-media-marketing/days-section/live-session-management.jpg' },
        { id: '22', label: 'UGC (User Generated Content) Management', image: '/assets/images/social-media-marketing/days-section/user-generated-content-management.jpg' },
        { id: '23', label: 'Social Media Funnel Development', image: '/assets/images/social-media-marketing/days-section/social-media-funnel-development.jpg' },
        { id: '24', label: 'Competitor Benchmarking', image: '/assets/images/social-media-marketing/days-section/competitor-benchmarking.jpg' },
      ],
      gridItems: 24,
    },
  ],
  lifetimeValue: {
    heading: 'long term Advantage:',
    text: "The service installs a complete visual and written foundation designed to strengthen brand presence, expand reach, and support marketing efforts across major social platforms. The content set continues performing beyond the initial cycle.",
  },
};


export const socialMediaMarketingRealCostData: RealCostData = {
  heading: {
    part1: 'Internal Social Media Production vs.',
    part2: '1 Month Social Content Service',
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
        options: ['Junior Designer', 'Mid Level Designer', 'Senior Designer', 'Creative Director'],
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


export const socialMediaMarketingCompleteSetupData: CompleteBusinessSetupData = {
  heading: {
    part1: "Complete Social Content Package   ",
    price: "$3,299",  
    part2: " One Time",
  },
  brandingKits: {
    items: [
      { id: "1", number: "01", label: "Content Strategy" },
      { id: "2", number: "02", label: "Platform Selection" },
      { id: "3", number: "03", label: "Audience Mapping" },
      { id: "4", number: "04", label: "Brand Positioning" },
      { id: "5", number: "05", label: "Competitor Analysis" },
      { id: "6", number: "06", label: "Post Copywriting" },
      { id: "7", number: "07", label: "Static Post Design" },
      { id: "8", number: "08", label: "Carousel Creation" },
      { id: "9", number: "09", label: "Story Content" },
      { id: "10", number: "10", label: "Reels/TikTok Scripts" },
      { id: "11", number: "11", label: "Content Calendars" },
      { id: "12", number: "12", label: "Campaign Scheduling" },
      { id: "13", number: "13", label: "Post Scheduling" },
      { id: "14", number: "14", label: "Content Themes" },
      { id: "15", number: "15", label: "Seasonal Planning" },
      { id: "16", number: "16", label: "Page Setup/Optimization" },
      { id: "17", number: "17", label: "Daily Posting" },
      { id: "18", number: "18", label: "Community Monitoring" },
      { id: "19", number: "19", label: "Inbox Management" },
      { id: "20", number: "20", label: "Brand Guidelines" },
      { id: "21", number: "21", label: "Comment Replies" },
      { id: "22", number: "22", label: "DM Responses" },
      { id: "23", number: "23", label: "Audience Interaction" },
      { id: "24", number: "24", label: "Reputation Management" },
      { id: "25", number: "25", label: "Engagement Boosting" },
      { id: "26", number: "26", label: "Trend Tracking" },
      { id: "27", number: "27", label: "Brand Mention Monitoring" },
      { id: "28", number: "28", label: "Competitor Tracking" },
      { id: "29", number: "29", label: "Hashtag Trend Analysis" },
      { id: "30", number: "30", label: "Sentiment Tracking" },
      { id: "31", number: "31", label: "Visual Identity for Socials" },
      { id: "32", number: "32", label: "Highlight Covers" },
      { id: "33", number: "33", label: "Template Systems" },
      { id: "34", number: "34", label: "Brand Color Consistency" },
      { id: "35", number: "35", label: "Icon & Typography Styling" },
      { id: "36", number: "36", label: "Meta Ads" },
      { id: "37", number: "37", label: "TikTok Ads" },
      { id: "38", number: "38", label: "LinkedIn Ads" },
      { id: "39", number: "39", label: "Pinterest Ads" },
      { id: "40", number: "40", label: "Campaign Scaling" },
      { id: "41", number: "41", label: "Campaign Concepts" },
      { id: "42", number: "42", label: "Awareness Campaigns" },
      { id: "43", number: "43", label: "Conversion Campaigns" },
      { id: "44", number: "44", label: "Retargeting Strategy" },
      { id: "45", number: "45", label: "A/B Testing & Refinement" },
      { id: "46", number: "46", label: "Influencer Sourcing" },
      { id: "47", number: "47", label: "Outreach Coordination" },
      { id: "48", number: "48", label: "Contracting & Negotiation" },
      { id: "49", number: "49", label: "Content Approvals" },
      { id: "50", number: "50", label: "Performance Tracking" },
      { id: "51", number: "51", label: "Monthly Analytics Reports" },
      { id: "52", number: "52", label: "KPI Tracking" },
      { id: "53", number: "53", label: "Growth Analysis" },
      { id: "54", number: "54", label: "Performance Reviews" },
      { id: "55", number: "55", label: "Improvements" },
      { id: "56", number: "56", label: "Reel Scripting" },
      { id: "57", number: "57", label: "Video Editing" },
      { id: "58", number: "58", label: "Motion Graphics" },
      { id: "59", number: "59", label: "Caption + Hook Writing" },
      { id: "60", number: "60", label: "Viral Trend Adaptation" },
      { id: "61", number: "61", label: "Hashtag Research" },
      { id: "62", number: "62", label: "Niche Based Hashtags" },
      { id: "63", number: "63", label: "Ranking Optimization" },
      { id: "64", number: "64", label: "Competitive Hashtags" },
      { id: "65", number: "65", label: "Branded Hashtag Creation" },
      { id: "66", number: "66", label: "Keyword Based Captions" },
      { id: "67", number: "67", label: "Search Optimized Posts" },
      { id: "68", number: "68", label: "Profile SEO" },
      { id: "69", number: "69", label: "Hashtag SEO" },
      { id: "70", number: "70", label: "Engagement SEO" },
      { id: "71", number: "71", label: "Brand Risk Handling" },
      { id: "72", number: "72", label: "Comment Moderation" },
      { id: "73", number: "73", label: "Public Response Drafting" },
      { id: "74", number: "74", label: "Reputation Recovery" },
      { id: "75", number: "75", label: "Crisis Content" },
      { id: "76", number: "76", label: "Query Handling" },
      { id: "77", number: "77", label: "Complaint Resolution" },
      { id: "78", number: "78", label: "Real Time Support" },
      { id: "79", number: "79", label: "Feedback Collection" },
      { id: "80", number: "80", label: "Satisfaction Tracking" },
      { id: "81", number: "81", label: "Instagram Strategy" },
      { id: "82", number: "82", label: "Facebook Management" },
      { id: "83", number: "83", label: "TikTok Management" },
      { id: "84", number: "84", label: "LinkedIn B2B Systems" },
      { id: "85", number: "85", label: "Pinterest Optimization" },
      { id: "86", number: "86", label: "Partner Outreach" },
      { id: "87", number: "87", label: "Co Branded Content" },
      { id: "88", number: "88", label: "Giveaways & Contests" },
      { id: "89", number: "89", label: "Joint Campaigns" },
      { id: "90", number: "90", label: "Collaboration Strategy" },
      { id: "91", number: "91", label: "Scheduling Tools Setup" },
      { id: "92", number: "92", label: "Chat Automation" },
      { id: "93", number: "93", label: "DM Automation Flows" },
      { id: "94", number: "94", label: "Comment Automation" },
      { id: "95", number: "95", label: "Lead Routing" },
      { id: "96", number: "96", label: "Lead Capture Funnels" },
      { id: "97", number: "97", label: "CTA Optimization" },
      { id: "98", number: "98", label: "Form Based Leads" },
      { id: "99", number: "99", label: "Landing Page Integration" },
      { id: "100", number: "100", label: "Lead Nurturing" },
      { id: "101", number: "101", label: "Live Stream Planning" },
      { id: "102", number: "102", label: "Host Coordination" },
      { id: "103", number: "103", label: "Live Script Writing" },
      { id: "104", number: "104", label: "Engagement Moderation" },
      { id: "105", number: "105", label: "Post Live Distribution" },
      { id: "106", number: "106", label: "UGC Sourcing" },
      { id: "107", number: "107", label: "UGC Guidelines" },
      { id: "108", number: "108", label: "Approval Workflow" },
      { id: "109", number: "109", label: "UGC Blend" },
      { id: "110", number: "110", label: "Rights Management" },
      { id: "111", number: "111", label: "Sales Funnel" },
      { id: "112", number: "112", label: "Content Layered Funnels" },
      { id: "113", number: "113", label: "Retargeting Sequences" },
      { id: "114", number: "114", label: "Funnel Mapping" },
      { id: "115", number: "115", label: "Organic + Paid Alignment" },
      { id: "116", number: "116", label: "Competitor Audit" },
      { id: "117", number: "117", label: "Content Comparison" },
      { id: "118", number: "118", label: "KPI Benchmarking" },
      { id: "119", number: "119", label: "Gap Analysis" },
      { id: "120", number: "120", label: "Strategy Refinement" },
    ],
  },
  benefits: {
    title: "Get This Package For ",
    items: [
      { id: "1", text: "1 month of active creative production" },
      { id: "2", text: "All essential visual and written assets" },
      { id: "3", text: "AI supported content workflow" },
      { id: "4", text: "Unlimited refinements during the cycle" },
      { id: "5", text: "Content delivered platform ready" },
    ],
    ctaButton: {
      text: "Get My Package",
      href: "/contact",
    },
  },
};


export const socialMediaMarketingGuessWorkData: GuessWorkAdvertisingData = {
  heading: {
    part1: 'Content Structure Reference',
    highlight: '',
    part2: '',
  },
  description:
    'A platform ready plan is developed to guide posting rhythm, design consistency, message hierarchy, and creative direction for future growth.',
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
    src: '/assets/images/guesswork.webp',
    alt: 'Social Media Performance Insights',
  },
  analyticsDashboardData: socialMediaMarketingAnalyticsDashboardData,
};


export const socialMediaMarketingSliderData1 = [
  { sliderDataPara: "It costs [$74,536] annually to hire a [Social Media Manager] in the US" },
  { sliderDataPara: "It costs [$54,455] annually to hire a [Social Media Marketer] in the US" },
  { sliderDataPara: "It costs [$68,770] annually to hire a [Community Manager] in the US" },
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


export const socialMediaMarketingBlogGuides = [
  {
    id: "1",
    image: "/assets/images/blog/1.webp",
    category: "Social Media Marketing",
    title: "Social Media Strategy for 2026 - Full Guide",
    date: "Dec 10, 2025",
    readTime: "23 min read",
    excerpt:
      "Social media has shifted from simple posting to strategic ecosystem building. Platforms reward consistency, originality, watch time, and meaningful engagement   not random uploads.",
    href: "/blog-detail/social-media-strategy-for-2026/",
  },
  {
    id: "2",
    image: "/assets/images/blog/2.webp",
    category: "Social Media Marketing",
    title: "How to Grow on Social Media in 2026 - Full Guide",
    date: "Dec 15, 2025",
    readTime: "20 min read",
    excerpt:
      "Growing on social media in 2026 goes far beyond posting frequently. Algorithms now reward content that increases meaningful engagement, holds attention longer, and builds trust.",
    href: "/blog-detail/how-to-grow-on-social-media-in-2026/",
  },
  {
    id: "3",
    image: "/assets/images/blog/3.webp",
    category: "Social Media Marketing",
    title: "The 2026 Social Media Manager's Guide - Full Guide",
    date: "Dec 20, 2025",
    readTime: "22 min read",
    excerpt:
      "Social media in 2026 is no longer managed with guesswork or inconsistent posting. Platforms evolve weekly, algorithms demand meaningful engagement, and audiences expect High value content delivered with personality and consistency.",
    href: "/blog-detail/the-2026-social-media-managers-guide/",
  },
];


export const socialMediaMarketingProvenSuccessData = {
  headline: {
    text: 'Proven Success in Every Project',
    highlighted: 'Success',
  },
  description:
    'Your Smart AI Business Team brings a fully loaded AI ecosystem for creative design and analytics automation premium tools, no extra cost, no hassle.',
  tabs: [
    {
      id: 'social-posts',
      label: 'Social Posts',
      images: [
        '/assets/images/portfolio/social-media-post/1-min.webp' ,
        '/assets/images/portfolio/social-media-post/2-min.webp',
        '/assets/images/portfolio/social-media-post/3-min.webp',
        '/assets/images/portfolio/social-media-post/4-min.webp',
        '/assets/images/portfolio/social-media-post/5-min.webp',
        '/assets/images/portfolio/social-media-post/6-min.webp',
        '/assets/images/portfolio/social-media-post/7-min.webp',
        '/assets/images/portfolio/social-media-post/8-min.webp',
      ],
      gridItems: [
        { id: '1', label: 'Facebook Post' },
        { id: '2', label: 'Instagram Post' },
        { id: '3', label: 'Twitter Post' },
        { id: '4', label: 'LinkedIn Post' },
        { id: '5', label: 'Story Design' },
        { id: '6', label: 'Reel Cover' },
        { id: '7', label: 'Carousel' },
        { id: '8', label: 'Banner' },
        { id: '9', label: 'Cover Photo' },
        { id: '10', label: 'Profile Picture' },
        { id: '11', label: 'Highlight Cover' },
        { id: '12', label: 'Pinterest Pin' },
        { id: '13', label: 'YouTube Thumbnail' },
        { id: '14', label: 'TikTok Cover' },
        { id: '15', label: 'Snapchat Filter' },
        { id: '16', label: 'WhatsApp Status' },
        { id: '17', label: 'Template Set' },
        { id: '18', label: 'Quote Card' },
        { id: '19', label: 'Infographic' },
        { id: '20', label: 'Announcement' },
        { id: '21', label: 'Event Poster' },
        { id: '22', label: 'Promotion' },
        { id: '23', label: 'Testimonial' },
        { id: '24', label: 'Case Study' },
      ],
    },
    {
      id: 'social-covers',
      label: 'Social Covers',
      images: [
        '/assets/images/portfolio/social-covers/1.webp',
        '/assets/images/portfolio/social-covers/2.webp',
        '/assets/images/portfolio/social-covers/3.webp',
        '/assets/images/portfolio/social-covers/4.webp',
        '/assets/images/portfolio/social-covers/5.webp',
        '/assets/images/portfolio/social-covers/6.webp',
        '/assets/images/portfolio/social-covers/7.webp',
        '/assets/images/portfolio/social-covers/8.webp',
      ],
      gridItems: [
        { id: '1', label: 'Facebook Cover' },
        { id: '2', label: 'Twitter Header' },
        { id: '3', label: 'LinkedIn Banner' },
        { id: '4', label: 'YouTube Channel Art' },
        { id: '5', label: 'Instagram Story' },
        { id: '6', label: 'Profile Covers' },
        { id: '7', label: 'Event Covers' },
        { id: '8', label: 'Campaign Covers' },
        { id: '9', label: 'Product Covers' },
        { id: '10', label: 'Service Covers' },
        { id: '11', label: 'Brand Covers' },
        { id: '12', label: 'Promotional Covers' },
        { id: '13', label: 'Seasonal Covers' },
        { id: '14', label: 'Holiday Covers' },
        { id: '15', label: 'Announcement Covers' },
        { id: '16', label: 'Launch Covers' },
        { id: '17', label: 'Sale Covers' },
        { id: '18', label: 'Event Covers' },
        { id: '19', label: 'Webinar Covers' },
        { id: '20', label: 'Workshop Covers' },
        { id: '21', label: 'Course Covers' },
        { id: '22', label: 'Ebook Covers' },
        { id: '23', label: 'Podcast Covers' },
        { id: '24', label: 'Video Covers' },
      ],
    },
    {
      id: 'carousel',
      label: 'Carousel',
      images: [
        '/assets/images/portfolio/carousel/1.webp',
        '/assets/images/portfolio/carousel/2.webp',
        '/assets/images/portfolio/carousel/3.webp',
        '/assets/images/portfolio/carousel/4.webp',
        '/assets/images/portfolio/carousel/5.webp',
        '/assets/images/portfolio/carousel/6.webp',
        '/assets/images/portfolio/carousel/7.webp',
        '/assets/images/portfolio/carousel/8.webp',
      ],
      gridItems: [
        { id: '1', label: 'Instagram Carousel' },
        { id: '2', label: 'Facebook Carousel' },
        { id: '3', label: 'LinkedIn Carousel' },
        { id: '4', label: 'Product Carousel' },
        { id: '5', label: 'Service Carousel' },
        { id: '6', label: 'Tutorial Carousel' },
        { id: '7', label: 'Tips Carousel' },
        { id: '8', label: 'Story Carousel' },
        { id: '9', label: 'Educational Carousel' },
        { id: '10', label: 'Promotional Carousel' },
        { id: '11', label: 'Brand Carousel' },
        { id: '12', label: 'Campaign Carousel' },
        { id: '13', label: 'Event Carousel' },
        { id: '14', label: 'Testimonial Carousel' },
        { id: '15', label: 'Case Study Carousel' },
        { id: '16', label: 'FAQ Carousel' },
        { id: '17', label: 'How-To Carousel' },
        { id: '18', label: 'Behind Scenes Carousel' },
        { id: '19', label: 'Team Carousel' },
        { id: '20', label: 'Process Carousel' },
        { id: '21', label: 'Results Carousel' },
        { id: '22', label: 'Before After Carousel' },
        { id: '23', label: 'Comparison Carousel' },
        { id: '24', label: 'Timeline Carousel' },
      ],
    },
  ],
};

