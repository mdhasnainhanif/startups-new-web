import type { Metadata } from "next";
import CalendlySection from '../components/CalendlySection/CalendlySection';
import LogosSlider from '../components/LogosSlider/LogosSlider';
import HomeBanner from '../components/page2/HomeBanner/HomeBanner';
import GrowthManager from '../components/page2/GrowthManager/GrowthManager';
import TheProblem from '../components/page2/TheProblem/TheProblem';
import WhyItWorks from '../components/page2/WhyItWorks/WhyItWorks';
import TheGuarantees from '../components/page2/TheGuarantees/TheGuarantees';
import CreatedByEntrepreneurs from '../components/page2/CreatedByEntrepreneurs/CreatedByEntrepreneurs';
import WhyChooseUs from '../components/page2/WhyChooseUs/WhyChooseUs';
import ReplacementGuarantee from '../components/page2/ReplacementGuarantee/ReplacementGuarantee';
import SupportAndTraining from '../components/page2/SupportAndTraining/SupportAndTraining';
import ToolsTrained from '../components/page2/ToolsTrained/ToolsTrained';
import ThreeEasySteps from '../components/page2/ThreeEasySteps/ThreeEasySteps';
import { CALENDLY_SECTION, FAQ_DATA, FAQ_SECTION } from '../constants';
import ContactTwo from '../components/ContactTwo/ContactTwo';
import FAQ from '../components/FAQ/FAQ';
import Reviews from '../components/Reviews/Reviews';
import Technologies from '../components/Technologies/Technologies';
import { TECHNOLOGIES_PAGE2_DATA } from '../data/Page2';

export const metadata: Metadata = {
  robots: "nofollow",
};

export default function PageTwo() {
  return (
    <>
          <HomeBanner />
          <LogosSlider/>
          <GrowthManager />
          <TheProblem />
          <WhyItWorks />
          <TheGuarantees />
          <CreatedByEntrepreneurs />
          <WhyChooseUs />
          <ReplacementGuarantee />
          <SupportAndTraining />
          <Technologies 
          className={'keyGrowthTechnologySection'}
            heading={TECHNOLOGIES_PAGE2_DATA.heading}
            description={TECHNOLOGIES_PAGE2_DATA.description}
            subDescription={TECHNOLOGIES_PAGE2_DATA.subDescription}
            hideTabs={true}
          />
          <ToolsTrained />
          <Reviews/>
          <ThreeEasySteps />
          <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
          <ContactTwo />
    </>
  );
}

