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
export const metadata: Metadata = {
  title: "Flippa | Turn Your Business Into a High Value Asset in 90 Days",
  description:
    "We rebuild, scale and systematize your business so you get a High value, sell-ready asset in 90 days. Business growth, operations, branding & exit-prep services.",
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
      "We rebuild, scale and systematize your business so you get a High value, sell-ready asset in 90 days.",
    url: "https://startupsadvisory.ai/flippa",
  },
};
export default function FlippaPage() {
  return (
    <main className="relative bg-[var(--color-dark)]">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <StatsSection />
      <ValueStackSection />
      <DifferentiatorsSection />
      <Portfolio />
      <TestimonialsSection />
      {/* <GuaranteeSection /> */}
      {/* <ObjectionsSection /> */}
      <CreativeServicesSection />
      {/* <WhyUsSection /> */}
      {/* <FlippaCalculator /> */}
      <CTASection />
      <FlippaCTA />
    </main>
  );
}