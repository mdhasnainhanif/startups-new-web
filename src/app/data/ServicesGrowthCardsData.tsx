export interface GrowthCard {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  href: string;
}
export interface ServicesGrowthCardsContent {
  heading: string;
  bodyText: string;
  image: string;
}
export interface ServicesGrowthCardsContentData {
  [key: string]: ServicesGrowthCardsContent[];
}

export interface ServicesGrowthCardsSectionData {
  heading: string;
  description: string;
}

export const SERVICES_GROWTH_CARDS_SECTION: Record<string, ServicesGrowthCardsSectionData> = {
  "brand-identity": {
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed."
  },
  "marketing-advertising": {
    heading: "Marketing Growth Resources",
    description: "Discover strategies, guides, and insights to accelerate your marketing efforts and drive business growth."
  },
  "digital-web": {
    heading: "Digital Growth Guides",
    description: "Learn from expert guides and case studies on building successful digital products and web experiences."
  },
  "motion-video": {
    heading: "Motion & Video Resources",
    description: "Access valuable resources and guides to enhance your motion graphics and video production capabilities."
  },
  "print": {
    heading: "Print Design Resources",
    description: "Explore guides and best practices for creating impactful print materials that drive results."
  },
  "illustration-artwork": {
    heading: "Illustration Resources",
    description: "Discover resources and guides to elevate your illustration and artwork capabilities."
  },
  "ebooks-digital-report": {
    heading: "Digital Report Resources",
    description: "Access guides and templates for creating compelling eBooks and digital reports."
  },
  "presentations": {
    heading: "Presentation Resources",
    description: "Learn how to create powerful presentations that captivate audiences and drive action."
  },
  "product-packaging": {
    heading: "Packaging Design Resources",
    description: "Explore guides and case studies on creating packaging that stands out and drives sales."
  },
  "apparel-merchandise": {
    heading: "Apparel Design Resources",
    description: "Discover resources and guides for creating branded apparel and merchandise that customers love."
  },
  "environmental-event": {
    heading: "Event Design Resources",
    description: "Access guides and best practices for creating immersive event and environmental graphics."
  },
  "corporate-internal": {
    heading: "Corporate Design Resources",
    description: "Explore resources and guides for creating professional internal communications and corporate materials."
  }
};
export interface ServicesGrowthCardsData {
  [key: string]: GrowthCard[];
}
export const SERVICES_GROWTH_CARDS: ServicesGrowthCardsData = {
  "brand-identity": [
    {
      id: "bi-1",
      image: "/assets/images/blog/1.webp",
      category: "Brand Identity",
      title: "Building a Strong Brand Identity That Lasts",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how to create a brand identity that resonates with your audience and stands the test of time.",
      href: "#",
    },
    {
      id: "bi-2",
      image: "/assets/images/blog/2.webp",
      category: "Brand Design",
      title: "The Power of Consistent Branding",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover why consistent branding across all touchpoints is crucial for business success.",
      href: "#",
    },
    {
      id: "bi-3",
      image: "/assets/images/blog/3.webp",
      category: "Visual Identity",
      title: "Creating Memorable Brand Experiences",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore strategies to build brand experiences that create lasting impressions on your customers.",
      href: "#",
    },
  ],
  "marketing-advertising": [
    {
      id: "ma-1",
      image: "/assets/images/blog/1.webp",
      category: "Marketing",
      title: "Creative Marketing That Drives Results",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how creative marketing campaigns can capture attention and drive measurable conversions.",
      href: "#",
    },
    {
      id: "ma-2",
      image: "/assets/images/blog/2.webp",
      category: "Advertising",
      title: "Effective Advertising Strategies for Growth",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover proven advertising strategies that combine strategic thinking with compelling visuals.",
      href: "#",
    },
    {
      id: "ma-3",
      image: "/assets/images/blog/3.webp",
      category: "Campaigns",
      title: "Building Campaigns That Convert",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore how to create marketing campaigns that not only look great but deliver real results.",
      href: "#",
    },
  ],
  "digital-web": [
    {
      id: "dw-1",
      image: "/assets/images/blog/1.webp",
      category: "Web Design",
      title: "UI Designs That Captivate and Convert",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how stunning digital experiences can engage users and drive business growth.",
      href: "#",
    },
    {
      id: "dw-2",
      image: "/assets/images/blog/2.webp",
      category: "Digital Experience",
      title: "Creating Intuitive Digital Interfaces",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover the principles of designing digital solutions that captivate audiences.",
      href: "#",
    },
    {
      id: "dw-3",
      image: "/assets/images/blog/3.webp",
      category: "User Experience",
      title: "Converting Visitors Into Customers",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore how responsive websites and intuitive interfaces can boost conversions.",
      href: "#",
    },
  ],
  "motion-video": [
    {
      id: "mv-1",
      image: "/assets/images/blog/1.webp",
      category: "Motion Graphics",
      title: "Make Every Message Move",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how dynamic motion graphics can bring your brand to life and capture attention.",
      href: "#",
    },
    {
      id: "mv-2",
      image: "/assets/images/blog/2.webp",
      category: "Video Content",
      title: "Creating Compelling Video Content",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how video content can create engaging visual stories for your brand.",
      href: "#",
    },
    {
      id: "mv-3",
      image: "/assets/images/blog/3.webp",
      category: "Animation",
      title: "Visual Stories That Communicate",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore motion design services that communicate your message effectively.",
      href: "#",
    },
  ],
  "print": [
    {
      id: "pr-1",
      image: "/assets/images/blog/1.webp",
      category: "Print Design",
      title: "Print Designs for Memorable Communication",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how impactful print materials can leave a lasting impression on your audience.",
      href: "#",
    },
    {
      id: "pr-2",
      image: "/assets/images/blog/2.webp",
      category: "Print Collateral",
      title: "Designing Professional Print Materials",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how to design print collateral that communicates your message clearly.",
      href: "#",
    },
    {
      id: "pr-3",
      image: "/assets/images/blog/3.webp",
      category: "Business Cards",
      title: "Creating Impactful Business Materials",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore print design services from business cards to brochures and beyond.",
      href: "#",
    },
  ],
  "illustration-artwork": [
    {
      id: "ia-1",
      image: "/assets/images/blog/1.webp",
      category: "Illustration",
      title: "Custom Designs to Enhance Your Brand",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how custom illustrations can elevate your brand and reflect your unique identity.",
      href: "#",
    },
    {
      id: "ia-2",
      image: "/assets/images/blog/2.webp",
      category: "Artwork",
      title: "Distinctive Visual Elements for Brands",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how artwork can enhance your brand's presence across all touchpoints.",
      href: "#",
    },
    {
      id: "ia-3",
      image: "/assets/images/blog/3.webp",
      category: "Custom Art",
      title: "Creating Unique Brand Visuals",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore illustration services that create distinctive visual elements for your brand.",
      href: "#",
    },
  ],
  "ebooks-digital-report": [
    {
      id: "edr-1",
      image: "/assets/images/blog/1.webp",
      category: "Digital Reports",
      title: "Turn Data Into Designs That Deliver",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how to transform complex data into visually compelling digital reports.",
      href: "#",
    },
    {
      id: "edr-2",
      image: "/assets/images/blog/2.webp",
      category: "eBooks",
      title: "Designing Informative Digital Documents",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how to design eBooks that make your content accessible and shareable.",
      href: "#",
    },
    {
      id: "edr-3",
      image: "/assets/images/blog/3.webp",
      category: "Data Visualization",
      title: "Creating Engaging Digital Content",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore digital report design services that transform data into engaging documents.",
      href: "#",
    },
  ],
  "presentations": [
    {
      id: "prs-1",
      image: "/assets/images/blog/1.webp",
      category: "Presentations",
      title: "Decks for Every Report, Pitch, and Keynote",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how to create powerful presentations that captivate your audience and drive action.",
      href: "#",
    },
    {
      id: "prs-2",
      image: "/assets/images/blog/2.webp",
      category: "Pitch Decks",
      title: "Designing Impactful Presentation Slides",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how to design slides that communicate your message with clarity and impact.",
      href: "#",
    },
    {
      id: "prs-3",
      image: "/assets/images/blog/3.webp",
      category: "Keynotes",
      title: "Creating Memorable Presentations",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore presentation design services for pitch decks, reports, and keynotes.",
      href: "#",
    },
  ],
  "product-packaging": [
    {
      id: "pp-1",
      image: "/assets/images/blog/1.webp",
      category: "Packaging",
      title: "Creative on Full Display",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how packaging design can make your products stand out on shelves.",
      href: "#",
    },
    {
      id: "pp-2",
      image: "/assets/images/blog/2.webp",
      category: "Product Design",
      title: "Creating Memorable Unboxing Experiences",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how product and packaging design combines functionality with aesthetics.",
      href: "#",
    },
    {
      id: "pp-3",
      image: "/assets/images/blog/3.webp",
      category: "Brand Packaging",
      title: "Showcasing Products at Their Best",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore packaging design services that showcase your products at their best.",
      href: "#",
    },
  ],
  "apparel-merchandise": [
    {
      id: "am-1",
      image: "/assets/images/blog/1.webp",
      category: "Apparel",
      title: "Designs That Work IRL",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how to create branded apparel that your team and customers will love to wear.",
      href: "#",
    },
    {
      id: "am-2",
      image: "/assets/images/blog/2.webp",
      category: "Merchandise",
      title: "Extending Brand Presence in Real World",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how to design practical, stylish items that extend your brand presence.",
      href: "#",
    },
    {
      id: "am-3",
      image: "/assets/images/blog/3.webp",
      category: "Branded Items",
      title: "Creating Wearable Brand Experiences",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore apparel and merchandise design services for real-world brand extension.",
      href: "#",
    },
  ],
  "environmental-event": [
    {
      id: "ee-1",
      image: "/assets/images/blog/1.webp",
      category: "Event Graphics",
      title: "Graphics for Every Experience",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how to design graphics for events that create immersive brand experiences.",
      href: "#",
    },
    {
      id: "ee-2",
      image: "/assets/images/blog/2.webp",
      category: "Environmental Design",
      title: "Creating Memorable Event Interactions",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how environmental graphics can make every interaction memorable.",
      href: "#",
    },
    {
      id: "ee-3",
      image: "/assets/images/blog/3.webp",
      category: "Trade Shows",
      title: "Designing Immersive Brand Spaces",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore event and environmental design services from trade shows to signage.",
      href: "#",
    },
  ],
  "corporate-internal": [
    {
      id: "ci-1",
      image: "/assets/images/blog/1.webp",
      category: "Corporate Design",
      title: "Professional Visuals for Internal Success",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      excerpt: "Learn how to create professional internal communications that align your team.",
      href: "#",
    },
    {
      id: "ci-2",
      image: "/assets/images/blog/2.webp",
      category: "Internal Communications",
      title: "Strengthening Company Culture Through Design",
      date: "Jan 10, 2025",
      readTime: "4 min read",
      excerpt: "Discover how corporate materials can strengthen your company culture.",
      href: "#",
    },
    {
      id: "ci-3",
      image: "/assets/images/blog/3.webp",
      category: "Employee Engagement",
      title: "Supporting Internal Success with Visuals",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      excerpt: "Explore corporate and internal design services that support employee engagement.",
      href: "#",
    },
  ],
};
export const SERVICES_GROWTH_CARDS_CONTENT: ServicesGrowthCardsContentData = {
  "brand-identity": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/services/brand-identity/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/services/brand-identity/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/services/brand-identity/3.webp",
    },
  ],
  "marketing-advertising": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "digital-web": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "motion-video": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "print": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "illustration-artwork": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "ebooks-digital-report": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "presentations": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "product-packaging": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "apparel-merchandise": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "environmental-event": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
  "corporate-internal": [
    {
      heading: "Quality talent, worldwide",
      bodyText: "We review thousands of portfolios and only a small percent make it. You get access to top-tier creatives committed to your brand's long-term success.",
      image: "/assets/images/blog/1.webp",
    },
    {
      heading: "Creative consistency",
      bodyText: "Our designers follow proven systems built by Startups Advisory to help them adapt quickly to your brand and improve with every request and round of feedback.",
      image: "/assets/images/blog/2.webp",
    },
    {
      heading: "Always-on, always legal",
      bodyText: "Every creative uses a fully licensed commercial-safe tech stack ensuring your brand is protected from legal risks and uncertain quality.",
      image: "/assets/images/blog/3.webp",
    },
  ],
};
export const getServiceGrowthCards = (slug: string): GrowthCard[] => {
  return SERVICES_GROWTH_CARDS[slug] || [];
};
export const getServiceGrowthCardsContent = (slug: string): ServicesGrowthCardsContent[] => {
  return SERVICES_GROWTH_CARDS_CONTENT[slug] || [];
};

export const getServiceGrowthCardsSection = (slug: string): ServicesGrowthCardsSectionData => {
  return SERVICES_GROWTH_CARDS_SECTION[slug] || {
    heading: "Growth Guides & Resources",
    description: "Explore our comprehensive collection of growth guides, case studies, and resources designed to help your business scale and succeed."
  };
};