import type { Metadata } from "next";
import LogosSlider from '../components/LogosSlider/LogosSlider';
import HomeBanner from '../components/Page2/HomeBanner/HomeBanner';
import GrowthManager from '../components/Page2/GrowthManager/GrowthManager';
import TheProblem from '../components/Page2/TheProblem/TheProblem';
import WhyItWorks from '../components/Page2/WhyItWorks/WhyItWorks';
import TheGuarantees from '../components/Page2/TheGuarantees/TheGuarantees';
import AssistantCapabilities from '@/app/components/AssistantCapabilities/AssistantCapabilities';
import CreatedByEntrepreneurs from '../components/Page2/CreatedByEntrepreneurs/CreatedByEntrepreneurs';
import WhyChooseUs from '../components/Page2/WhyChooseUs/WhyChooseUs';
import ReplacementGuarantee from '../components/Page2/ReplacementGuarantee/ReplacementGuarantee';
import ToolsTrained from '../components/Page2/ToolsTrained/ToolsTrained';
import ThreeEasySteps from '../components/Page2/ThreeEasySteps/ThreeEasySteps';
import { FAQ_DATA, FAQ_SECTION } from '../constants';
import FAQ from '../components/FAQ/FAQ';
import Reviews from '../components/Reviews/Reviews';
import Technologies from '../components/Technologies/Technologies';
import { TECHNOLOGIES_PAGE2_DATA } from '../data/Page2';
import Contact from "../components/Contact/Contact";

export const metadata: Metadata = {
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

      {/* <SupportAndTraining /> */}

      <Technologies
        className={'keyGrowthTechnologySection'}
        heading={TECHNOLOGIES_PAGE2_DATA.heading}
        description={TECHNOLOGIES_PAGE2_DATA.description}
        subDescription={TECHNOLOGIES_PAGE2_DATA.subDescription}
        hideTabs={true}
      />
      
      <ToolsTrained />
      <Reviews />
      <ThreeEasySteps />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
      {/* <ContactTwo /> */}
      <Contact />
    </>
  );
}

