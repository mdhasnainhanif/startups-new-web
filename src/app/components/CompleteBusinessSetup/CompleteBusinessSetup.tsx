  "use client";

  import { useRef, useState } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Navigation } from "swiper/modules";
  import type { Swiper as SwiperType } from "swiper";
  import Container from "../Container";
  import styles from "./CompleteBusinessSetup.module.css";
  import "swiper/css";
  import "swiper/css/navigation";
  import Button from "../Button";
  import { ArrowRightIcon } from "../icons";

  export interface BrandingKitItem {
    id: string;
    number: string;
    label: string;
  }

  export interface BenefitItem {
    id: string;
    text: string;
  }

  export interface CompleteBusinessSetupData {
    heading: {
      part1: string;
      price: string;
      part2: string;
    };
    brandingKits: {
      items: BrandingKitItem[];
    };
    benefits: {
      title: string;
      items: BenefitItem[];
      ctaButton: {
        text: string;
        href?: string;
      };
    };
    additionalText?: {
      heading?: string;
      description?: string;
    };
  }

  interface CompleteBusinessSetupProps {
    data?: CompleteBusinessSetupData;
  }

  const DEFAULT_DATA: CompleteBusinessSetupData = {
    heading: {
      part1: "Your Complete Business Design Setup — ",
      price: "$1,499",
      part2: " One-Time",
    },
    brandingKits: {
      items: [
        { id: "1", number: "01", label: "Brand Identity" },
        { id: "2", number: "02", label: "Visual Language" },
        { id: "3", number: "03", label: "Brand Redesign" },
        { id: "4", number: "04", label: "Brand Guidelines" },
        { id: "5", number: "05", label: "Brand Tone" },
        { id: "6", number: "06", label: "Wordmark Logos" },
        { id: "7", number: "07", label: "Symbol Logos" },
        { id: "8", number: "08", label: "Combination Logos" },
        { id: "9", number: "09", label: "Emblem Logos" },
        { id: "10", number: "10", label: "Monogram Logos" },
        { id: "11", number: "11", label: "Custom Lettering" },
        { id: "12", number: "12", label: "Calligraphy Design" },
        { id: "13", number: "13", label: "Typography Pairings" },
        { id: "14", number: "14", label: "Font Styling" },
        { id: "15", number: "15", label: "Decorative Typography" },
        { id: "16", number: "16", label: "Business Cards" },
        { id: "17", number: "17", label: "Letterheads" },
        { id: "18", number: "18", label: "Envelopes" },
        { id: "19", number: "19", label: "Company Folders" },
        { id: "20", number: "20", label: "Invoice Templates" },
        { id: "21", number: "21", label: "Posters" },
        { id: "22", number: "22", label: "Flyers" },
        { id: "23", number: "23", label: "Catalogs" },
        { id: "24", number: "24", label: "Magazine Layouts" },
        { id: "25", number: "25", label: "Newspaper Ads" },
        { id: "26", number: "26", label: "Box Packaging" },
        { id: "27", number: "27", label: "Pouch Packaging" },
        { id: "28", number: "28", label: "Bottle Labels" },
        { id: "29", number: "29", label: "Cosmetic Packaging" },
        { id: "30", number: "30", label: "Retail Packaging" },
        { id: "31", number: "31", label: "Product Mockups" },
        { id: "32", number: "32", label: "Product Labels" },
        { id: "33", number: "33", label: "3D Mockups" },
        { id: "34", number: "34", label: "Package Visualization" },
        { id: "35", number: "35", label: "Branding Mockups" },
        { id: "36", number: "36", label: "Wireframes" },
        { id: "37", number: "37", label: "Mobile Screens" },
        { id: "38", number: "38", label: "User Flows" },
        { id: "39", number: "39", label: "Micro Interactions" },
        { id: "40", number: "40", label: "App Prototypes" },
        { id: "41", number: "41", label: "Homepage Design" },
        { id: "42", number: "42", label: "Landing Pages" },
        { id: "43", number: "43", label: "UI Layouts" },
        { id: "44", number: "44", label: "Responsive Breakpoints" },
        { id: "45", number: "45", label: "UI Components" },
        { id: "46", number: "46", label: "SaaS Dashboards" },
        { id: "47", number: "47", label: "Analytics Screens" },
        { id: "48", number: "48", label: "Admin Panels" },
        { id: "49", number: "49", label: "System Layouts" },
        { id: "50", number: "50", label: "Interactive Prototypes" },
        { id: "51", number: "51", label: "Static Posts" },
        { id: "52", number: "52", label: "Reel Templates" },
        { id: "53", number: "53", label: "Story Designs" },
        { id: "54", number: "54", label: "Highlight Covers" },
        { id: "55", number: "55", label: "Engagement Boosters" },
        { id: "56", number: "56", label: "Facebook Ads" },
        { id: "57", number: "57", label: "Instagram Ads" },
        { id: "58", number: "58", label: "LinkedIn Ads" },
        { id: "59", number: "59", label: "TikTok Visuals" },
        { id: "60", number: "60", label: "Campaign Variations" },
        { id: "61", number: "61", label: "Web Banners" },
        { id: "62", number: "62", label: "Display Ads" },
        { id: "63", number: "63", label: "Promotional Graphics" },
        { id: "64", number: "64", label: "Event Posters" },
        { id: "65", number: "65", label: "Blog Images" },
        { id: "66", number: "66", label: "Pitch Decks" },
        { id: "67", number: "67", label: "Sales Decks" },
        { id: "68", number: "68", label: "Company Profiles" },
        { id: "69", number: "69", label: "Training Slides" },
        { id: "70", number: "70", label: "Slide Templates" },
        { id: "71", number: "71", label: "Data Visualizations" },
        { id: "72", number: "72", label: "Process Infographics" },
        { id: "73", number: "73", label: "Comparison Infographics" },
        { id: "74", number: "74", label: "Timeline Infographics" },
        { id: "75", number: "75", label: "Educational Infographics" },
        { id: "76", number: "76", label: "Vector Illustrations" },
        { id: "77", number: "77", label: "Mascot Design" },
        { id: "78", number: "78", label: "Scene Illustrations" },
        { id: "79", number: "79", label: "Character Art" },
        { id: "80", number: "80", label: "Icon Illustration" },
        { id: "81", number: "81", label: "Animated Posts" },
        { id: "82", number: "82", label: "Animated Icons" },
        { id: "83", number: "83", label: "Title Animations" },
        { id: "84", number: "84", label: "Logo Animations" },
        { id: "85", number: "85", label: "Motion Interactions" },
        { id: "86", number: "86", label: "Short-Form Edits" },
        { id: "87", number: "87", label: "Long-Form Edits" },
        { id: "88", number: "88", label: "Text Overlays" },
        { id: "89", number: "89", label: "Lower Thirds" },
        { id: "90", number: "90", label: "Video Intros" },
        { id: "91", number: "91", label: "Product Models" },
        { id: "92", number: "92", label: "Surface Modeling" },
        { id: "93", number: "93", label: "3D Renders" },
        { id: "94", number: "94", label: "Material Design" },
        { id: "95", number: "95", label: "Lighting Setup" },
        { id: "96", number: "96", label: "Print Campaigns" },
        { id: "97", number: "97", label: "Digital Campaigns" },
        { id: "98", number: "98", label: "Key Visuals" },
        { id: "99", number: "99", label: "Brand Activations" },
        { id: "100", number: "100", label: "Creative Directions" },
        { id: "101", number: "101", label: "Tri-Fold Brochures" },
        { id: "102", number: "102", label: "Bi-Fold Brochures" },
        { id: "103", number: "103", label: "Product Catalogs" },
        { id: "104", number: "104", label: "Pricing Booklets" },
        { id: "105", number: "105", label: "Service Books" },
        { id: "106", number: "106", label: "Ebook Covers" },
        { id: "107", number: "107", label: "Chapter Layouts" },
        { id: "108", number: "108", label: "Page Formatting" },
        { id: "109", number: "109", label: "Typography Styling" },
        { id: "110", number: "110", label: "PDF Designs" },
        { id: "111", number: "111", label: "Promotional Emails" },
        { id: "112", number: "112", label: "Ecommerce Newsletters" },
        { id: "113", number: "113", label: "Drip Templates" },
        { id: "114", number: "114", label: "Layout Systems" },
        { id: "115", number: "115", label: "Banner Kits" },
        { id: "116", number: "116", label: "Outdoor Signage" },
        { id: "117", number: "117", label: "Indoor Signage" },
        { id: "118", number: "118", label: "Booth Branding" },
        { id: "119", number: "119", label: "Storefront Branding" },
        { id: "120", number: "120", label: "Wayfinding Systems" },
      ],
    },
    benefits: {
      title: "Get This Package For ",
      items: [
        { id: "1", text: "A full design team" },
        { id: "2", text: "22 essential business design assets" },
        { id: "3", text: "AI-powered efficiency" },
        { id: "4", text: "Unlimited revisions during the 22 days" },
        { id: "5", text: "All files delivered print-ready and web-ready" },
      ],
      ctaButton: {
        text: "Get My Package",
        href: "/contact",
      },
    },
  };
  const CompleteBusinessSetup = ({ data = DEFAULT_DATA }: CompleteBusinessSetupProps) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const handlePrev = () => {
      swiperRef.current?.slidePrev();
    };
    const handleNext = () => {
      swiperRef.current?.slideNext();
    };
    const handleSlideChange = (swiper: SwiperType) => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    const { heading, brandingKits, benefits } = data;
    const parseTitleWithPrice = (text: string) => {
      const parts: Array<{ text: string; isHighlight: boolean; isSmall: boolean }> = [];
      const regex = /(\$\d{1,3}(?:,\d{3})*)\s*(\/mo)?/g;
      let lastIndex = 0;
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
          parts.push({
            text: text.substring(lastIndex, match.index),
            isHighlight: false,
            isSmall: false,
          });
        }
        parts.push({
          text: match[1], 
          isHighlight: true,
          isSmall: false,
        }); 
        if (match[2]) {
          parts.push({
            text: match[2], 
            isHighlight: false,
            isSmall: true,
          });
        }
        lastIndex = regex.lastIndex;
      }
      if (lastIndex < text.length) {
        parts.push({
          text: text.substring(lastIndex),
          isHighlight: false,
          isSmall: false,
        });
      }
      if (parts.length === 0) {
        parts.push({ text, isHighlight: false, isSmall: false });
      }

      return parts;
    };

    return (
      <section className="sectionPadding bg-gradient-to-br from-[#1a0b3f] via-[#05001a] to-[#020014] relative overflow-hidden">
        <Container maxWidth="xl">
          <div className="text-center mb-12 sectionHeading forH2 md:max-w-220 mx-auto">
            <h2 className="">
              {heading.part1}
              <span className="text-[#0fdac2]">{heading.price}</span>
              {heading.part2}
            </h2>
          </div>
          <div
            className={`${styles.contentWrapper} realCostCard md:max-w-[85%] mx-auto bg-[#21164c] rounded-2xl p-6 md:p-8 lg:p-10 border border-[#6147c14d] ${styles.businesscontainer}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
              <div className={`flex flex-col md:col-span-7 ${styles.sliderwrapper}`}>
                <div className="relative px-6 md:px-10 py-4 flex items-center min-h-full w-full">
                  <button
                    onClick={handlePrev}
                    disabled={isBeginning}
                    className={`absolute left-0 top-1/2 z-10 flex items-center justify-center transition-all ${
                      isBeginning
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:opacity-80"
                    } ${styles.navButton}`}
                    style={{ transform: 'translate(-50%, -50%)' }}
                    aria-label="Previous"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isEnd}
                    className={`absolute right-0 top-1/2 z-10 flex items-center justify-center transition-all ${
                      isEnd ? "opacity-30 cursor-not-allowed" : "hover:opacity-80"
                    } ${styles.navButton}`}
                    style={{ transform: 'translate(50%, -50%)' }}
                    aria-label="Next"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>

                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                    }}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                      setIsBeginning(swiper.isBeginning);
                      setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={handleSlideChange}
                    className={styles.brandingKitsSwiper}
                  >
                    {Array.from({
                      length: Math.ceil(brandingKits.items.length / 10),
                    }).map((_, groupIndex) => (
                      <SwiperSlide key={groupIndex}>
                        <div className="grid grid-cols-2 md:gap-x-6 gap-y-4 gap-x-2 mx-auto">
                          {brandingKits.items
                            .slice(groupIndex * 10, (groupIndex + 1) * 10)
                            .map((item) => (
                              <div
                                key={item.id}
                                className={`${styles.separatorLine} pb-1 md:text-lg text-xs`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-[#0FDAC2] font-medium">
                                    {item.number}.
                                  </span>
                                  <span className="text-white">{item.label}</span>
                                </div>
                              </div>
                            ))}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* <h3
                  className={`text-3xl md:text-4xl font-bold inline-block px-4 py-2 rounded-lg ${styles.brandingKitsTitle}`}
                >
                  <span className={styles.highlighted}>
                    {brandingKits.title.highlight}
                  </span>
                  {brandingKits.title.suffix}
                </h3> */}
              </div>
              <div className="flex flex-col md:col-span-5">
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 items-center">
                  {benefits.title}
                  <span className="text-[#0fdac2]">{heading.price}</span>
                  <span className="text-white text-[1rem]">/ mo</span>
                </h3>
                <ul className="space-y-4 mb-6 flex-1">
                  {benefits.items.map((benefit) => (
                    <li key={benefit.id} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1 w-5 h-5">
                        <img
                          src="/assets/images/tick.png"
                          alt="checkmark"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-white text-base md:text-lg">
                        {benefit.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button href="#" variant="green" icon={<ArrowRightIcon style={{ fill: "#000" }} />} iconPosition="right">
              {benefits.ctaButton.text}
              </Button>
                {data.additionalText && (
                  <div className="mt-6 pt-6 border-t border-[#2f2a63]">
                    {data.additionalText.heading && (
                      <h4 className="text-xl font-semibold text-white mb-3">
                        {data.additionalText.heading}
                      </h4>
                    )}
                    {data.additionalText.description && (
                      <p className="text-white/80 text-sm md:text-base leading-relaxed">
                        {data.additionalText.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
        <img src="/assets/images/1.webp" alt="arrow icon" loading="lazy" className={styles.aeroicon} />
      </section>
    );
  };

  export default CompleteBusinessSetup;
