// Card data structure
export interface CardData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  tags: string[];
  buttonText: string;
  image: string;
}

export interface TabData {
  id: string;
  label: string;
}

export interface CaseStudySectionData {
  heading: {
    text: string;
    highlighted: string;
  };
  description: string;
  tabs: TabData[];
  cards: CardData[];
}

// Default data (can be used as fallback)
export const DEFAULT_CASE_STUDY_DATA: CaseStudySectionData = {
  heading: {
    text: "Meet Your AI Powered Team Built for Your Business Growth",
    highlighted: "AI Powered",
  },
  description:
    "Your Smart AI Business Team is more than extra help. It acts as your complete digital department handling the work that keeps your business growing. With human creativity and AI precision working together every task becomes faster clearer and more valuable for your long term success.",
  tabs: [
    { id: "creative", label: "Creative & Design" },
    { id: "marketing", label: "Marketing & Growth" },
    { id: "development", label: "Development" },
    { id: "keygrowth", label: "Key Growth" },
  ],
  cards: [
    // Creative & Design
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
      image: "/assets/images/2.png",
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
      image: "/assets/images/ui-ux-designer.webp",
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
      image: "/assets/images/graphic-designer.webp",
    },
    // Marketing & Growth
    {
      id: "tabScroll4",
      category: "marketing",
      title: "Content Strategist",
      subtitle: "Builds content plans that bring traffic, trust, and conversions.",
      tags: [
        "Blog topic ideas",
        "Monthly content plan",
        "Social content calendar",
        "Keyword content outlines",
        "Content pillars",
        "Brand voice guide",
        "Funnel planning",
        "Long-form content strategy",
        "Multi-channel blueprint",
        "Brand storytelling framework",
      ],
      buttonText: "Hire Content Strategist",
      image: "/assets/images/content-strategist.webp",
    },
    {
      id: "tabScroll5",
      category: "marketing",
      title: "Social Media Manager",
      subtitle: "Grows brand visibility and engagement across all social platforms.",
      tags: [
        "Post scheduling",
        "Caption writing",
        "Trend research",
        "Hashtag research",
        "Engagement management",
        "Content calendar planning",
        "Influencer outreach",
        "Campaign coordination",
        "Analytics reporting",
        "Multi-platform growth strategy",
      ],
      buttonText: "Hire Social Media Manager",
      image: "/assets/images/social-media-manager.webp",
    },
    {
      id: "tabScroll6",
      category: "marketing",
      title: "SEO Specialist",
      subtitle: "Improves search rankings so your business gets steady organic traffic.",
      tags: [
        "Keyword research",
        "Competitor keyword review",
        "Meta title writing",
        "On-page SEO",
        "Alt text optimization",
        "SEO topic planning",
        "Backlink research",
        "Technical SEO fixes",
        "Content optimization",
        "SEO growth roadmap",
      ],
      buttonText: "Hire SEO Specialist",
      image: "/assets/images/seo-specialist.webp",
    },
    // Development
    {
      id: "tabScroll7",
      category: "development",
      title: "Front End Developer",
      subtitle: "Builds fast, visually clean, user friendly interfaces for web and mobile.",
      tags: [
        "Website layout creation",
        "HTML setup",
        "CSS styling",
        "Landing page development",
        "Responsive adjustments",
        "JavaScript interactions",
        "API integration",
        "Component library creation",
        "Performance optimization",
        "Full front-end build",
      ],
      buttonText: "Hire Front End Developer",
      image: "/assets/images/frontend-developer.webp",
    },
    {
      id: "tabScroll8",
      category: "development",
      title: "Backend Developer",
      subtitle: "Builds the logic and systems that make your product reliable and scalable.",
      tags: [
        "Server setup",
        "Database creation",
        "API development",
        "User authentication",
        "Admin backend setup",
        "Payment integration",
        "Role and permission setup",
        "Security implementation",
        "Data flow optimization",
        "Full backend architecture",
      ],
      buttonText: "Hire Backend Developer",
      image: "/assets/images/backend-developer.webp",
    },
    {
      id: "tabScroll9",
      category: "development",
      title: "Full Stack Developer",
      subtitle: "Builds complete end to end products quickly — both frontend and backend.",
      tags: [
        "Landing page build",
        "API integration",
        "Auth setup",
        "Dashboard creation",
        "Database setup",
        "Frontend-backend connection",
        "Feature development",
        "Deployment setup",
        "Optimization",
        "Full product development",
      ],
      buttonText: "Hire Full Stack Developer",
      image: "/assets/images/full-stack-developer.webp",
    },
    // Key Growth
    {
      id: "tabScroll10",
      category: "keygrowth",
      title: "Growth Hacker",
      subtitle: "Drives rapid business growth using creative experiments and data.",
      tags: [
        "Landing page improvement",
        "A/B testing",
        "Lead magnet creation",
        "Funnel mapping",
        "Email capture optimization",
        "Paid ads testing",
        "Conversion rate optimization",
        "Viral loops",
        "User behavior analysis",
        "Growth engine design",
      ],
      buttonText: "Hire Growth Hacker",
      image: "/assets/images/growth-hacker.webp",
    },
    {
      id: "tabScroll11",
      category: "keygrowth",
      title: "Marketing Automation Specialist",
      subtitle: "Automates your marketing to generate more leads without more work.",
      tags: [
        "Email sequence setup",
        "Lead tagging",
        "CRM cleanup",
        "Workflow creation",
        "Drip campaigns",
        "Multi-step automation",
        "Lead scoring setup",
        "Tool integrations",
        "Behavior triggers",
        "Full automation system",
      ],
      buttonText: "Hire Marketing Automation Specialist",
      image: "/assets/images/marketing-automation-specialist.webp",
    },
    {
      id: "tabScroll12",
      category: "keygrowth",
      title: "Data Analyst",
      subtitle: "Turns business data into insights that guide better decisions.",
      tags: [
        "Data cleanup",
        "Sheet organization",
        "Basic charts",
        "KPI reports",
        "Dashboards",
        "Trend analysis",
        "Campaign performance",
        "Forecasting", 
        "Opportunity spotting",
        "Data insights system",
      ],
      buttonText: "Hire Data Analyst",
      image: "/assets/images/data-analyst.webp",
    },
  ],
};

