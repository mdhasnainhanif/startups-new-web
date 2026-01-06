import type { Metadata } from "next";
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_SECTION } from '../constants'
import { FAQ_CONTACT } from '../components/Home/data'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';
import TextSlider1 from '../components/HomenewPage/TextSlider/TextSlider';
import Reviews from '../components/Reviews/Reviews';
import ProfessionalDesign from '../components/ProfessionalDesign/ProfessionalDesign';
import { contentWritingProfessionalData, contentWritingCaseStudyData, contentWritingBlogGuides } from '../data/ContentWritingPageData';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import CaseStudySection from '../components/CaseStudySection';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import Contact from '../components/Contact/Contact';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';
import { 
  contentWritingBannerData, 
  contentWritingAiPowerData, 
  contentWritingRealCostData, 
  contentWritingCompleteSetupData, 
  contentWritingGuessWorkData,
  contentWritingSliderData1, 
  contentWritingSliderData2, 
  contentWritingSliderData3 
} from '../data/ContentWritingPageData';
export const metadata: Metadata = {
  title: "1 Month Content Writing Service | Market-Ready Content | Startups Advisory",
  description:
    "Market Ready Content in 1 Month. Writing shaped for presence, persuasion, and modern brand standards. A complete content layer built with clarity, rhythm, and commercial intent.",
  robots: "nofollow",
};
export default function ContentWritingPage() {
  return (
    <>
      <HomenewBanner data={contentWritingBannerData} />
      <TextSlider1 data={contentWritingSliderData1}/>
      <CaseStudySection isShowTabs={false} data={contentWritingCaseStudyData} className="designerPageCaseStudy" />
      <AiPowerDesign data={contentWritingAiPowerData}/>
      <Technologies 
        hideTabs={true} 
        defaultTab="contentWriting"
        heading="$48,000 plus in Professional Writing Output Delivered in 1 Month"
        description="A condensed writing period supported by structured tools and seasoned writers replaces fragmented content, inconsistent tone, and time-consuming revisions."
        subDescription="Content Production Tools ($12,000 plus Annual Value)"
      />
      <TextSlider1 data={contentWritingSliderData2}/>
      <ProfessionalDesign className="designerPageProfessional" data={contentWritingProfessionalData} />
      <TextSlider1 data={contentWritingSliderData3}/>
      <GuessWorkAdvertising data={contentWritingGuessWorkData}/>
      <RealCost data={contentWritingRealCostData}/>
      <CompleteBusinessSetup data={contentWritingCompleteSetupData}/>
      <Reviews/>
      {/* <GrowthSlider items={contentWritingBlogGuides} /> */}
      <BlogCarousel category="Content Writing" />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <Contact/>
    </>
  )
}