import type { Metadata } from "next";
import React from 'react'
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_SECTION } from '../constants'
import { FAQ_CONTACT } from '../components/Home/data'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';
import TextSlider1 from '../components/HomenewPage/TextSlider/TextSlider';
import Reviews from '../components/Reviews/Reviews';
import ProfessionalDesign from '../components/ProfessionalDesign/ProfessionalDesign';
import { socialMediaMarketingProfessionalData, socialMediaMarketingCaseStudyData, socialMediaMarketingBlogGuides } from '../data/SocialMediaMarketingPageData';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import CaseStudySection from '../components/CaseStudySection';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import Contact from '../components/Contact/Contact';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';
import { 
  socialMediaMarketingBannerData, 
  socialMediaMarketingAiPowerData, 
  socialMediaMarketingRealCostData, 
  socialMediaMarketingCompleteSetupData, 
  socialMediaMarketingGuessWorkData,
  socialMediaMarketingSliderData1, 
  socialMediaMarketingSliderData2, 
  socialMediaMarketingSliderData3,
  socialMediaMarketingProvenSuccessData
} from '../data/SocialMediaMarketingPageData';
import ProvenSuccess from "../components/ProvenSuccess/ProvenSuccess";
export const metadata: Metadata = {
  title: "22-Day Social Media Marketing Service | Market-Ready Social Content | Startups Advisory",
  description:
    "Market-Ready Social Content in 22 Days. Creative built for attention, precision, and brand presence. A complete social layer shaped with clarity, style, and strategic intent.",
  robots: "nofollow",
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <HomenewBanner data={socialMediaMarketingBannerData} />
      <TextSlider1 data={socialMediaMarketingSliderData1}/>
      <CaseStudySection isShowTabs={false} data={socialMediaMarketingCaseStudyData} className="designerPageCaseStudy" />
      <AiPowerDesign data={socialMediaMarketingAiPowerData}/>
      <Technologies 
        hideTabs={true} 
        defaultTab="socialMediaMarketing"
        heading="$48,000 plus in Creative Output Delivered in 22 Days"
        description="A concentrated production period powered by structured tools and experienced creators replaces inconsistent visuals, slow content delivery, and unclear messaging."
        subDescription="Creative Production Tools ($12,000 plus Annual Value)"
      />
      <TextSlider1 data={socialMediaMarketingSliderData2}/>
      <ProfessionalDesign className="designerPageProfessional" data={socialMediaMarketingProfessionalData} />
      <TextSlider1 data={socialMediaMarketingSliderData3}/>
      <GuessWorkAdvertising data={socialMediaMarketingGuessWorkData}/>
      <RealCost data={socialMediaMarketingRealCostData}/>
      <CompleteBusinessSetup data={socialMediaMarketingCompleteSetupData}/>
      <ProvenSuccess data={socialMediaMarketingProvenSuccessData}/>
      <Reviews/>
      {/* <GrowthSlider items={socialMediaMarketingBlogGuides} /> */}
      <BlogCarousel category="Social Media Marketing" />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <Contact/>
    </>
  )
}

