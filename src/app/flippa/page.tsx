import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ProcessSection from "./components/ProcessSection";
import StatsSection from "./components/StatsSection";
import ValueStackSection from "./components/ValueStackSection";
import DifferentiatorsSection from "./components/DifferentiatorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import FlippaCTA from "./components/FlippaCTA";
import Portfolio from "./components/portfolio";
import CreativeServicesSection from "./components/CreativeServicesSection";
import { sliderData } from "../data/HomeNewData";
import TextSlider1 from "../components/HomenewPage/TextSlider/TextSlider";
import OurJourney from "./components/OurJourney";
import { flippaJourneyData } from "../data/FlippaPageData";
import BlogCarousel from "../components/BlogCarousel/BlogCarousel";
import FAQ from "../components/FAQ/FAQ";
import { FAQ_DATA } from "../constants";
import { FAQ_SECTION } from "../constants";
import Contact from "../components/Contact/Contact";
export const metadata: Metadata = {
  title: "Flippa | Turn Your Business Into a High Value Asset in 90 Days",
  description:
    "We rebuild, scale and systematize your business so you get a High value, sell ready asset in 90 days. Business growth, operations, branding & Exit Prep services.",
  keywords: [
    "business growth",
    "exit preparation",
    "business valuation",
    "operations optimization",
    "sell business",
    "value accelerator",
  ],
  openGraph: {
    title: "Flippa | Turn Your Business Into a High Value Asset in 90 Days",
    description:
      "We rebuild, scale and systematize your business so you get a High value, sell ready asset in 90 days.",
    url: "https://startupsadvisory.ai/flippa",
  },
};
export default function FlippaPage() {
  return (
    <main className="relative bg-[var(--color-dark)]">
      <HeroSection />
      <TextSlider1 data={sliderData.slider1} />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <OurJourney items={flippaJourneyData.items} />
      <StatsSection />
      <ValueStackSection />
      <DifferentiatorsSection />
      <Portfolio />
      <TestimonialsSection />
      {/* <GuaranteeSection /> */}
      {/* <ObjectionsSection /> */}
      {/* <CreativeServicesSection /> */}
      {/* <WhyUsSection /> */}
      {/* <FlippaCalculator /> */}
      {/* <CTASection /> */}
      {/* <FlippaCTA /> */}
      <BlogCarousel showAllCategories={true} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
      <Contact />
    </main>
  );
}