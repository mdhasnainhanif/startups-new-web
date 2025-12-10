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
    tagline: "Build brand experiences that last",
    description: "Create a powerful brand identity that resonates with your audience and stands the test of time. We design comprehensive brand systems that establish trust, communicate your values, and create lasting impressions.",
    metadata: {
      title: "Brand & Identity Services | Startups Advisory",
      description: "Build brand experiences that last. Professional brand identity design services for startups and businesses.",
    },
    bannerData: {
      heading: {
        part1: "Professional ",
        highlight1: "Brand & Identity",
        highlight2: "Design",
        part2: " That Builds Trust",
      },
      description: "Build brand experiences that last. Create a powerful brand identity that resonates with your audience and stands the test of time. We design comprehensive brand systems that establish trust, communicate your values, and create lasting impressions.",
      experienceBox: {
        title: "Experience Box – Your Brand Identity Team's Expertise",
        items: [
          "2,500+ brand identity systems created for businesses",
          "40+ years combined experience in brand design",
          "Specialists for logos, brand guidelines, and visual identity",
          "Brand systems used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and high-conversion branding",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Brand & Identity Design Service",
      },
    },
  },
  "marketing-advertising": {
    id: "2",
    slug: "marketing-advertising",
    title: "Marketing & Advertising",
    tagline: "Creative that drives results",
    description: "Transform your marketing campaigns with creative designs that capture attention and drive conversions. Our advertising solutions combine strategic thinking with compelling visuals to deliver measurable results.",
    metadata: {
      title: "Marketing & Advertising Services | Startups Advisory",
      description: "Creative that drives results. Professional marketing and advertising design services.",
    },
    bannerData: {
      heading: {
        part1: "Creative ",
        highlight1: "Marketing & Advertising",
        highlight2: "Design",
        part2: " That Drives Results",
      },
      description: "Creative that drives results. Transform your marketing campaigns with creative designs that capture attention and drive conversions. Our advertising solutions combine strategic thinking with compelling visuals to deliver measurable results.",
      experienceBox: {
        title: "Experience Box – Your Marketing Design Team's Expertise",
        items: [
          "2,500+ marketing campaigns designed for businesses",
          "40+ years combined experience in advertising design",
          "Specialists for ads, social media, and marketing collateral",
          "Campaigns used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and high-conversion advertising",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Marketing & Advertising Design Service",
      },
    },
  },
  "digital-web": {
    id: "3",
    slug: "digital-web",
    title: "Digital & Web",
    tagline: "UI designs that captivate and convert",
    description: "Design stunning digital experiences that engage users and drive business growth. From responsive websites to intuitive interfaces, we create digital solutions that captivate audiences and convert visitors into customers.",
    metadata: {
      title: "Digital & Web Design Services | Startups Advisory",
      description: "UI designs that captivate and convert. Professional digital and web design services.",
    },
    bannerData: {
      heading: {
        part1: "Stunning ",
        highlight1: "Digital & Web",
        highlight2: "Design",
        part2: " That Captivates and Converts",
      },
      description: "UI designs that captivate and convert. Design stunning digital experiences that engage users and drive business growth. From responsive websites to intuitive interfaces, we create digital solutions that captivate audiences and convert visitors into customers.",
      experienceBox: {
        title: "Experience Box – Your Digital Design Team's Expertise",
        items: [
          "2,500+ digital interfaces designed for businesses",
          "40+ years combined experience in web and UI design",
          "Specialists for websites, apps, and digital platforms",
          "Digital solutions used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and high-conversion UI/UX",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Digital & Web Design Service",
      },
    },
  },
  "motion-video": {
    id: "4",
    slug: "motion-video",
    title: "Motion & Video",
    tagline: "Make every message move",
    description: "Bring your brand to life with dynamic motion graphics and compelling video content. Our motion design services create engaging visual stories that capture attention and communicate your message effectively.",
    metadata: {
      title: "Motion & Video Services | Startups Advisory",
      description: "Make every message move. Professional motion graphics and video production services.",
    },
    bannerData: {
      heading: {
        part1: "Dynamic ",
        highlight1: "Motion & Video",
        highlight2: "Design",
        part2: " That Moves Your Message",
      },
      description: "Make every message move. Bring your brand to life with dynamic motion graphics and compelling video content. Our motion design services create engaging visual stories that capture attention and communicate your message effectively.",
      experienceBox: {
        title: "Experience Box – Your Motion Design Team's Expertise",
        items: [
          "2,500+ motion graphics and videos created for businesses",
          "40+ years combined experience in motion and video design",
          "Specialists for animations, videos, and motion graphics",
          "Motion content used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and high-impact motion design",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Motion & Video Design Service",
      },
    },
  },
  "print": {
    id: "5",
    slug: "print",
    title: "Print",
    tagline: "Print designs for memorable communication",
    description: "Create impactful print materials that leave a lasting impression. From business cards to brochures, we design print collateral that communicates your message clearly and professionally.",
    metadata: {
      title: "Print Design Services | Startups Advisory",
      description: "Print designs for memorable communication. Professional print design services.",
    },
    bannerData: {
      heading: {
        part1: "Impactful ",
        highlight1: "Print Design",
        highlight2: "",
        part2: " For Memorable Communication",
      },
      description: "Print designs for memorable communication. Create impactful print materials that leave a lasting impression. From business cards to brochures, we design print collateral that communicates your message clearly and professionally.",
      experienceBox: {
        title: "Experience Box – Your Print Design Team's Expertise",
        items: [
          "2,500+ print materials designed for businesses",
          "40+ years combined experience in print design",
          "Specialists for business cards, brochures, and print collateral",
          "Print designs used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and high-quality print design",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Print Design Service",
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
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Illustration & Artwork Service",
      },
    },
  },
  "ebooks-digital-report": {
    id: "7",
    slug: "ebooks-digital-report",
    title: "eBooks & Digital Report",
    tagline: "Turn data into designs that deliver",
    description: "Transform complex data into visually compelling digital reports and eBooks. We design informative, engaging documents that make your content accessible and shareable across digital platforms.",
    metadata: {
      title: "eBooks & Digital Report Design | Startups Advisory",
      description: "Turn data into designs that deliver. Professional eBook and digital report design services.",
    },
    bannerData: {
      heading: {
        part1: "Transform Data Into ",
        highlight1: "eBooks & Digital Reports",
        highlight2: "",
        part2: " That Deliver",
      },
      description: "Turn data into designs that deliver. Transform complex data into visually compelling digital reports and eBooks. We design informative, engaging documents that make your content accessible and shareable across digital platforms.",
      experienceBox: {
        title: "Experience Box – Your Digital Report Team's Expertise",
        items: [
          "2,500+ eBooks and reports designed for businesses",
          "40+ years combined experience in document design",
          "Specialists for eBooks, digital reports, and data visualization",
          "Documents used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and data-driven design",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "eBooks & Digital Report Design Service",
      },
    },
  },
  "presentations": {
    id: "8",
    slug: "presentations",
    title: "Presentations",
    tagline: "Decks for every report, pitch, and keynote",
    description: "Create powerful presentations that captivate your audience and drive action. Whether it's a pitch deck, annual report, or keynote presentation, we design slides that communicate your message with clarity and impact.",
    metadata: {
      title: "Presentation Design Services | Startups Advisory",
      description: "Decks for every report, pitch, and keynote. Professional presentation design services.",
    },
    bannerData: {
      heading: {
        part1: "Powerful ",
        highlight1: "Presentations",
        highlight2: "",
        part2: " For Every Report, Pitch, and Keynote",
      },
      description: "Decks for every report, pitch, and keynote. Create powerful presentations that captivate your audience and drive action. Whether it's a pitch deck, annual report, or keynote presentation, we design slides that communicate your message with clarity and impact.",
      experienceBox: {
        title: "Experience Box – Your Presentation Team's Expertise",
        items: [
          "2,500+ presentations designed for businesses",
          "40+ years combined experience in presentation design",
          "Specialists for pitch decks, reports, and keynote presentations",
          "Presentations used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and impactful slide design",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Presentation Design Service",
      },
    },
  },
  "product-packaging": {
    id: "9",
    slug: "product-packaging",
    title: "Product & Packaging",
    tagline: "Creative on full display",
    description: "Design packaging that stands out on shelves and creates memorable unboxing experiences. Our product and packaging design services combine functionality with aesthetics to showcase your products at their best.",
    metadata: {
      title: "Product & Packaging Design | Startups Advisory",
      description: "Creative on full display. Professional product and packaging design services.",
    },
    bannerData: {
      heading: {
        part1: "Creative ",
        highlight1: "Product & Packaging",
        highlight2: "Design",
        part2: " On Full Display",
      },
      description: "Creative on full display. Design packaging that stands out on shelves and creates memorable unboxing experiences. Our product and packaging design services combine functionality with aesthetics to showcase your products at their best.",
      experienceBox: {
        title: "Experience Box – Your Packaging Team's Expertise",
        items: [
          "2,500+ product packages designed for businesses",
          "40+ years combined experience in packaging design",
          "Specialists for product packaging, labels, and displays",
          "Packaging used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and shelf-stopping packaging",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Product & Packaging Design Service",
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
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Apparel & Merchandise Design Service",
      },
    },
  },
  "environmental-event": {
    id: "11",
    slug: "environmental-event",
    title: "Environmental & Event",
    tagline: "Graphics for every experience",
    description: "Design graphics and visual elements for events and environments that create immersive brand experiences. From trade show booths to event signage, we create visuals that make every interaction memorable.",
    metadata: {
      title: "Environmental & Event Graphics | Startups Advisory",
      description: "Graphics for every experience. Professional environmental and event design services.",
    },
    bannerData: {
      heading: {
        part1: "Immersive ",
        highlight1: "Environmental & Event",
        highlight2: "Graphics",
        part2: " For Every Experience",
      },
      description: "Graphics for every experience. Design graphics and visual elements for events and environments that create immersive brand experiences. From trade show booths to event signage, we create visuals that make every interaction memorable.",
      experienceBox: {
        title: "Experience Box – Your Event Design Team's Expertise",
        items: [
          "2,500+ event graphics and environments designed for businesses",
          "40+ years combined experience in environmental and event design",
          "Specialists for trade shows, events, and environmental graphics",
          "Event designs used by real customers in 15+ industries",
          "Trained in AI, modern design tools, and immersive brand experiences",
        ],
      },
      cta: {
        text: "Book a Free Call to See How It Works",
        href: "/contact-us",
      },
      image: {
        src: "/assets/images/homenewbanner-img.webp",
        alt: "Environmental & Event Graphics Service",
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

