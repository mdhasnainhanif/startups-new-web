// Services Page Data - All 12 services data in one file

import { HomenewBannerData } from '../components/HomenewPage/HomenewBanner/HomenewBanner';

export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon?: string;
  metadata: {
    title: string;
    description: string;
  };
  bannerData: HomenewBannerData;
}

export const SERVICES_DATA: Record<string, ServicePageData> = {
  "brand-identity": {
    id: "1",
    slug: "brand-identity",
    title: "Brand & Identity",
    tagline: "Build brand foundations that convert",
    description: "Create a strategic brand identity that positions your business clearly and removes buyer hesitation. We build complete brand systems that signal authority, clarify value, and drive confident decisions.",
    metadata: {
      title: "Brand & Identity Services | Startups Advisory",
      description: "High Impact Brand & Identity That Drive Trust. Build brand foundations that convert.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "Brand & Identity",
        highlight2: "",
        part2: " That Drive Trust",
      },
      description: "Build brand foundations that convert. Create a strategic brand identity that positions your business clearly and removes buyer hesitation. We build complete brand systems that signal authority, clarify value, and drive confident decisions.",
      experienceBox: {
        title: "Authority Box – Your Brand Identity Team's Advantage",
        items: [
          "2,500+ brand identity systems built to drive growth",
          "40+ years combined experience in brand strategy",
          "Specialists in logos, brand systems, and visual clarity",
          "Brand systems trusted by real businesses in 15+ industries",
          "Built with AI-driven systems and conversion-focused branding",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits →",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/brand-identity/banner.webp",
        alt: "Brand & Identity Design Service",
        className: "banneFullMin",
      },
    },
  },
  "marketing-advertising": {
    id: "2",
    slug: "marketing-advertising",
    title: "Marketing & Advertising",
    tagline: "Build demand that converts",
    description: "Create performance-driven marketing that attracts qualified buyers and removes friction from the buying journey. We build complete marketing systems that generate attention, capture intent, and turn traffic into predictable revenue.",
    metadata: {
      title: "Marketing & Advertising Services | Startups Advisory",
      description: "High Impact Marketing & Advertising Systems That Drive Revenue. Build demand that converts.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "Marketing And Advertising",
        highlight2: "",
        part2: " Systems That Drive Revenue",
      },
      description: "Build demand that converts. Create performance-driven marketing that attracts qualified buyers and removes friction from the buying journey. We build complete marketing systems that generate attention, capture intent, and turn traffic into predictable revenue.",
      experienceBox: {
        title: "Authority Box – Your Marketing & Advertising Team's Advantage",
        items: [
          "2,500+ marketing and advertising campaigns launched for growth",
          "40+ years combined experience in paid media and growth strategy",
          "Specialists in ads, funnels, messaging, and conversion optimization",
          "Campaign systems trusted by real businesses in 15+ industries",
          "Built with AI-driven testing and revenue-focused execution",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits →",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/marketing-advertising/banner.webp",
        alt: "Marketing & Advertising Design Service",
        className: "banneFull",
      },
    },
  },
  "digital-web": {
    id: "3",
    slug: "digital-web",
    title: "Digital & Web",
    tagline: "Build digital experiences that drive action",
    description: "Create fast, scalable, conversion-focused websites and digital systems that position your business clearly and turn traffic into revenue. We build complete digital frameworks that remove friction, increase trust, and guide users to decisive outcomes.",
    metadata: {
      title: "Digital & Web Design Services | Startups Advisory",
      description: "High Performance Digital & Web Systems That Convert. Build digital experiences that drive action.",
    },
    bannerData: {
      heading: {
        part1: "High Performance ",
        highlight1: "Digital & Web",
        highlight2: "",
        part2: " Systems That Convert",
      },
      description: "Build digital experiences that drive action. Create fast, scalable, conversion-focused websites and digital systems that position your business clearly and turn traffic into revenue. We build complete digital frameworks that remove friction, increase trust, and guide users to decisive outcomes.",
      experienceBox: {
        title: "Authority Box – Your Digital & Web Team's Advantage",
        items: [
          "1,800+ websites and digital systems shipped",
          "35+ years combined experience in web strategy and UX",
          "Specialists in UI/UX, performance, and conversion design",
          "Digital platforms trusted by businesses in 20+ industries",
          "Built with scalable systems and growth-first architecture",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits →",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/digital-web/banner.webp",
        alt: "Digital & Web Design Service",
        className: "digitalWebBanner",
      },
    },
  },
  "motion-video": {
    id: "4",
    slug: "motion-video",
    title: "Motion & Video",
    tagline: "Turn attention into action",
    description: "Create motion and video content that explains fast, holds attention, and drives decisions across ads, websites, and campaigns. We build motion systems that clarify your message, amplify trust, and convert viewers into customers.",
    metadata: {
      title: "Motion & Video Services | Startups Advisory",
      description: "High Impact Motion & Video That Puts Your Brand Story in Motion. Turn attention into action.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "Motion & Video",
        highlight2: "",
        part2: " That Puts Your Brand Story in Motion",
      },
      description: "Turn attention into action. Create motion and video content that explains fast, holds attention, and drives decisions across ads, websites, and campaigns. We build motion systems that clarify your message, amplify trust, and convert viewers into customers.",
      experienceBox: {
        title: "Authority Box – Your Motion & Video Team's Advantage",
        items: [
          "1,600+ motion and video projects delivered",
          "30+ years combined experience in motion strategy",
          "Specialists in explainer videos, ads, and brand motion",
          "Video systems trusted by businesses in 18+ industries",
          "Built with performance-driven storytelling and production systems",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Motion & Video Design Service",
        className: "motionVideoBanner",
      },
    },
  },
  "print": {
    id: "5",
    slug: "print",
    title: "Print",
    tagline: "Turn Your Brand Into Something People Can Hold",
    description: "Digital gets noticed. Print gets remembered. We design print materials that add weight to your brand   pieces that feel intentional, credible, and worth keeping. From first impressions to final handshakes, we create print that supports trust and reinforces your brand in the real world.",
    metadata: {
      title: "Print Design Services | Startups Advisory",
      description: "High Impact Print That Makes Your Brand Feel Real. Turn Your Brand Into Something People Can Hold.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "Print That Makes ",
        highlight2: "",
        part2: " Your Brand Feel Real",
      },
      description: "Turn Your Brand Into Something People Can Hold. Digital gets noticed. Print gets remembered. We design print materials that add weight to your brand   pieces that feel intentional, credible, and worth keeping. From first impressions to final handshakes, we create print that supports trust and reinforces your brand in the real world.",
      experienceBox: {
        title: "Authority Box – Your Print Design Team's Advantage",
        items: [
          "2,000+ print assets designed for real businesses",
          "25+ years combined experience in print design & production",
          "Specialists in stationery, packaging, and sales collateral",
          "Print systems trusted by businesses in 15+ industries",
          "Designed with production accuracy and brand consistency in mind",
        ],
      },
      cta: {
        text: "Get Started",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/print/banner.webp",
        alt: "Print Design Service",
        className: "banneFull",
      },
    },
  },
  "illustration-artwork": {
    id: "6",
    slug: "illustration-artwork",
    title: "Illustration & Artwork",
    tagline: "Custom designs to enhance your brand's presence",
    description: "Elevate your brand with custom illustrations and artwork that reflect your unique identity. Our illustration services create distinctive visual elements that enhance your brand's presence across all touchpoints.",
    metadata: {
      title: "Illustration & Artwork Services | Startups Advisory",
      description: "Custom designs to enhance your brand's presence. Professional illustration and artwork services.",
    },
    bannerData: {
      heading: {
        part1: "Custom ",
        highlight1: "Illustration & Artwork",
        highlight2: "",
        part2: " To Enhance Your Brand",
      },
      description: "Custom designs to enhance your brand's presence. Elevate your brand with custom illustrations and artwork that reflect your unique identity. Our illustration services create distinctive visual elements that enhance your brand's presence across all touchpoints.",
      experienceBox: {
        title: "Experience Box – Your Illustration Team's Expertise",
        items: [
          "2,500+ custom illustrations created for businesses",
          "40+ years combined experience in illustration and artwork",
          "Specialists for custom illustrations, icons, and artwork",
          "Illustrations used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and distinctive visual art",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/illustration-artwork/banner.webp",
        alt: "Illustration & Artwork Service",
        className: "banneFull",
      },
    },
  },
  "ebooks-digital-report": {
    id: "7",
    slug: "ebooks-digital-report",
    title: "eBooks & Digital Report",
    tagline: "Turn information into influence",
    description: "Create professional eBooks and reports that explain clearly, look credible, and position your brand as the authority in your space. We design structured document systems that earn trust, hold attention, and drive confident decisions.",
    metadata: {
      title: "eBooks & Digital Report Design | Startups Advisory",
      description: "High Impact eBook & Report Templates That Build Authority. Turn information into influence.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "eBook & Report Templates",
        highlight2: "",
        part2: " That Build Authority",
      },
      description: "Turn information into influence. Create professional eBooks and reports that explain clearly, look credible, and position your brand as the authority in your space. We design structured document systems that earn trust, hold attention, and drive confident decisions.",
      experienceBox: {
        title: "Authority Box – Your eBook & Report Design Team's Advantage",
        items: [
          "1,200+ eBooks, reports, and lead assets designed",
          "25+ years combined experience in editorial and layout design",
          "Specialists in Long Form documents, data-heavy reports, and lead magnets",
          "Templates trusted by businesses across 20+ industries",
          "Built with clarity-first structure and conversion-focused design systems",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/ebooks-digital-report/banner.webp",
        alt: "eBooks & Digital Report Design Service",
        className: "banneFull",
      },
    },
  },
  "presentations": {
    id: "8",
    slug: "presentations",
    title: "Presentations",
    tagline: "Turn slides into decisions",
    description: "Create presentations that explain clearly, look credible, and move audiences toward action   whether you're pitching, selling, or reporting. We design presentation systems that sharpen your message, reinforce authority, and drive confident outcomes.",
    metadata: {
      title: "Presentation Design Services | Startups Advisory",
      description: "High Impact Presentation Design That Wins Attention. Turn slides into decisions.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "Presentation Design",
        highlight2: "",
        part2: " That Wins Attention",
      },
      description: "Turn slides into decisions. Create presentations that explain clearly, look credible, and move audiences toward action   whether you're pitching, selling, or reporting. We design presentation systems that sharpen your message, reinforce authority, and drive confident outcomes.",
      experienceBox: {
        title: "Authority Box – Your Presentation Design Team's Advantage",
        items: [
          "1,800+ presentations designed for business and sales",
          "30+ years combined experience in presentation strategy",
          "Specialists in pitch decks, sales decks, reports, and executive slides",
          "Presentation systems trusted by teams across 20+ industries",
          "Built with clarity-first storytelling and conversion-focused slide systems",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/presentations/banner.webp",
        alt: "Presentation Design Service",
        className: "banneFull",
      },
    },
  },
  "product-packaging": {
    id: "9",
    slug: "product-packaging",
    title: "Product & Packaging",
    tagline: "Turn shelves into sales",
    description: "Create product and packaging designs that stand out instantly, communicate value clearly, and influence buying decisions at the point of sale. We design packaging systems that elevate perception, build trust, and move products faster.",
    metadata: {
      title: "Product & Packaging Design | Startups Advisory",
      description: "High Impact Product & Packaging Design That Sells on Sight. Turn shelves into sales.",
    },
    bannerData: {
      heading: {
        part1: "High Impact Product",
        highlight1: " & Packaging Design",
        highlight2: "",
        part2: " That Sells on Sight",
      },
      description: "Turn shelves into sales. Create product and packaging designs that stand out instantly, communicate value clearly, and influence buying decisions at the point of sale. We design packaging systems that elevate perception, build trust, and move products faster.",
      experienceBox: {
        title: "Authority Box – Your Product & Packaging Design Team's Advantage",
        items: [
          "1,400+ product and packaging designs delivered",
          "28+ years combined experience in packaging strategy",
          "Specialists in labels, boxes, containers, and retail-ready packaging",
          "Packaging systems trusted by brands across 18+ industries",
          "Built with shelf-impact thinking and conversion-driven design systems",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/product-packaging/banner.webp",
        alt: "Product & Packaging Design Service",
        className: "banneFull",
      },
    },
  },
  "apparel-merchandise": {
    id: "10",
    slug: "apparel-merchandise",
    title: "Apparel & Merchandise",
    tagline: "Designs that work IRL",
    description: "Create branded apparel and merchandise that your team and customers will love to wear. We design practical, stylish items that extend your brand presence into the real world.",
    metadata: {
      title: "Apparel & Merchandise Design | Startups Advisory",
      description: "Designs that work IRL. Professional apparel and merchandise design services.",
    },
    bannerData: {
      heading: {
        part1: "Branded ",
        highlight1: "Apparel & Merchandise",
        highlight2: "",
        part2: " That Works IRL",
      },
      description: "Designs that work IRL. Create branded apparel and merchandise that your team and customers will love to wear. We design practical, stylish items that extend your brand presence into the real world.",
      experienceBox: {
        title: "Experience Box – Your Apparel Team's Expertise",
        items: [
          "2,500+ apparel and merchandise designs created for businesses",
          "40+ years combined experience in apparel design",
          "Specialists for t-shirts, merchandise, and branded items",
          "Apparel used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and wearable brand design",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/apparel-merchandise/banner.webp",
        alt: "Apparel & Merchandise Design Service",
        className: "banneFull",
      },
    },
  },
  "environmental-event": {
    id: "11",
    slug: "environmental-event",
    title: "Environmental & Event",
    tagline: "Turn events into brand experiences",
    description: "Create corporate event designs that look professional, feel intentional, and reinforce your brand at every touchpoint   before, during, and after the event. We design event systems that build credibility, engagement, and lasting impressions.",
    metadata: {
      title: "Environmental & Event Graphics | Startups Advisory",
      description: "High Impact Corporate Event Design That Elevates Brand Presence. Turn events into brand experiences.",
    },
    bannerData: {
      heading: {
        part1: "High Impact ",
        highlight1: "Corporate Event Design",
        highlight2: "",
        part2: " That Elevates Brand Presence",
      },
      description: "Turn events into brand experiences. Create corporate event designs that look professional, feel intentional, and reinforce your brand at every touchpoint   before, during, and after the event. We design event systems that build credibility, engagement, and lasting impressions.",
      experienceBox: {
        title: "Authority Box – Your Corporate Events Design Team's Advantage",
        items: [
          "1,300+ corporate event design projects delivered",
          "27+ years combined experience in event and brand design",
          "Specialists in stage visuals, signage, booths, and event collateral",
          "Event systems trusted by organizations across 19+ industries",
          "Built with brand-led planning and execution-ready design systems",
        ],
      },
      cta: {
        text: "Book a Free Call to See If It Fits",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Environmental & Event Graphics Service",
        className: "environmentalEventBanner",
      },
    },
  },
  "corporate-internal": {
    id: "12",
    slug: "corporate-internal",
    title: "Corporate & Internal",
    tagline: "Professional visuals for internal success",
    description: "Create professional internal communications and corporate materials that align your team and strengthen your company culture. We design visuals that support internal success and employee engagement.",
    metadata: {
      title: "Corporate & Internal Design Services | Startups Advisory",
      description: "Professional visuals for internal success. Corporate and internal design services.",
    },
    bannerData: {
      heading: {
        part1: "Professional ",
        highlight1: "Corporate & Internal",
        highlight2: "Design",
        part2: " For Internal Success",
      },
      description: "Professional visuals for internal success. Create professional internal communications and corporate materials that align your team and strengthen your company culture. We design visuals that support internal success and employee engagement.",
      experienceBox: {
        title: "Experience Box – Your Corporate Design Team's Expertise",
        items: [
          "2,500+ corporate materials designed for businesses",
          "40+ years combined experience in corporate and internal design",
          "Specialists for internal communications and corporate materials",
          "Corporate designs used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and professional internal branding",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Corporate & Internal Design Service",
        className: "corporateInternalBanner",
      },
    },
  },
};

// Helper function to get service data by slug
export const getServiceData = (slug: string): ServicePageData | undefined => {
  return SERVICES_DATA[slug];
};

// Get all services as array
export const getAllServices = (): ServicePageData[] => {
  return Object.values(SERVICES_DATA);
};

