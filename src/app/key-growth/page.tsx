import type { Metadata } from "next";
import LogosSlider from "../components/LogosSlider/LogosSlider";
import HomeBanner from "../components/page2/HomeBanner/HomeBanner";
import GrowthManager from "../components/page2/GrowthManager/GrowthManager";
import TheProblem from "../components/page2/TheProblem/TheProblem";
import WhyItWorks from "../components/page2/WhyItWorks/WhyItWorks";
import TheGuarantees from "../components/page2/TheGuarantees/TheGuarantees";
import AssistantCapabilities from "@/app/components/AssistantCapabilities/AssistantCapabilities";
import CreatedByEntrepreneurs from "../components/page2/CreatedByEntrepreneurs/CreatedByEntrepreneurs";
import WhyChooseUs from "../components/page2/WhyChooseUs/WhyChooseUs";
import ReplacementGuarantee from "../components/page2/ReplacementGuarantee/ReplacementGuarantee";
import ToolsTrained from "../components/page2/ToolsTrained/ToolsTrained";
import ThreeEasySteps from "../components/page2/ThreeEasySteps/ThreeEasySteps";
import { FAQ_DATA, FAQ_SECTION } from "../constants";
import FAQ from "../components/FAQ/FAQ";
import Reviews from "../components/Reviews/Reviews";
import Technologies from "../components/Technologies/Technologies";
import { TECHNOLOGIES_PAGE2_DATA } from "../data/Page2";
import BlogCarousel from "../components/BlogCarousel/BlogCarousel";
import Contact from "../components/Contact/Contact";
export const metadata: Metadata = {
  title: "Key Growth Manager | Business Growth Services | Startups Advisory",
  description:
    "A Key Growth Manager steps in to carry the weight — driving progress, clearing blockages, and keeping the machine in motion while you stay focused on the real work.",
  robots: "nofollow",
};
export default function PageTwo() {
  return (
    <>
      <HomeBanner />
      <LogosSlider />
      <GrowthManager />
      <TheProblem />
      <WhyItWorks />
      <TheGuarantees />
      <AssistantCapabilities />
      <CreatedByEntrepreneurs />
      <WhyChooseUs />
      <ReplacementGuarantee />
      <Technologies
        className={"keyGrowthTechnologySection"}
        heading={TECHNOLOGIES_PAGE2_DATA.heading}
        description={TECHNOLOGIES_PAGE2_DATA.description}
        subDescription={TECHNOLOGIES_PAGE2_DATA.subDescription}
        hideTabs={true}
        customTools={TECHNOLOGIES_PAGE2_DATA.tools}
      />
      <ToolsTrained />
      <Reviews />
      {/* <GrowthSlider items={KEY_GROWTH_GUIDES} /> */}
      <BlogCarousel category="Key Growth" />
      <ThreeEasySteps />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
      <Contact />
    </>
  );
}
