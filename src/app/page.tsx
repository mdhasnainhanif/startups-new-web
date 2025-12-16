import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Questionnaire from "./components/Questionnaire/Questionnaire";
import CaseStudySection from "./components/CaseStudySection";
import { FAQ_SECTION, CALENDLY_SECTION, GROWTH_GUIDES } from "./constants";
import { FAQ_CONTACT } from "./components/Home/data";

// Lazy load below-the-fold components to reduce initial bundle size and TBT
const LogosSlider = dynamic(() => import("./components/LogosSlider/LogosSlider"), {
  loading: () => <div className="h-32" />, // Placeholder to prevent layout shift
});

const ProfessionalOnline = dynamic(() => import("./components/ProfessionalOnline/ProfessionalOnline"), {
  loading: () => <div className="h-96" />,
});

const CTABanner = dynamic(() => import("./components/CTABanner/CTABanner"), {
  loading: () => <div className="h-64" />,
});

// CaseStudySection is NOT lazy loaded because it has complex scroll behavior
// that requires proper initialization on mount

const Technologies = dynamic(() => import("./components/Technologies/Technologies"), {
  loading: () => <div className="h-96" />,
});

const CalendlySection = dynamic(() => import("./components/CalendlySection/CalendlySection"), {
  loading: () => <div className="h-96" />,
});

const Reviews = dynamic(() => import("./components/Reviews/Reviews"), {
  loading: () => <div className="h-96" />,
});

const GrowthSlider = dynamic(() => import("./components/GrowthSlider/GrowthSlider"), {
  loading: () => <div className="h-96" />,
});

const FAQ = dynamic(() => import("./components/FAQ/FAQ"), {
  loading: () => <div className="h-96" />,
});

const Contact = dynamic(() => import("./components/Contact/Contact"), {
  loading: () => <div className="h-96" />,
});

export const metadata: Metadata = {
  robots: "nofollow",
};

export default function Home() {
  return (
    <main className="relative">
      <Questionnaire />
      <LogosSlider />
      <ProfessionalOnline />
      <CTABanner />
      <CaseStudySection isShowTabs={true} />
      <Technologies />
      {/* <AiTeamSection /> */}
      <CalendlySection {...CALENDLY_SECTION} />
      <Reviews />
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <Contact />
    </main>
  );
}
