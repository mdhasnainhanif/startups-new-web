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
import { webDevelopmentProfessionalData, webDevelopmentCaseStudyData, webDevelopmentBlogGuides } from '../data/WebDevelopmentPageData';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import CaseStudySection from '../components/CaseStudySection';
import ProvenSuccess from '../components/ProvenSuccess/ProvenSuccess';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import Contact from '../components/Contact/Contact';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';
import { 
  webDevelopmentBannerData, 
  webDevelopmentAiPowerData, 
  webDevelopmentRealCostData, 
  webDevelopmentCompleteSetupData, 
  webDevelopmentGuessWorkData,
  webDevelopmentSliderData1, 
  webDevelopmentSliderData2, 
  webDevelopmentSliderData3
} from '../data/WebDevelopmentPageData';

export const metadata: Metadata = {
  title: "1 Month Website Package | Market-Ready Website | Startups Advisory",
  description:
    "Your Complete Website Team for 1 Month. Fully Focused on Your Build. A dedicated web unit assembled to create a fast, structured, market-ready website prepared to support real traffic and real business activity.",
  robots: "nofollow",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <HomenewBanner data={webDevelopmentBannerData} />
      <TextSlider1 data={webDevelopmentSliderData1}/>
      <CaseStudySection isShowTabs={false} data={webDevelopmentCaseStudyData} className="designerPageCaseStudy webDevelopmentPageCaseStudy" />
      <AiPowerDesign data={webDevelopmentAiPowerData}/>
      <Technologies 
        hideTabs={true} 
        defaultTab="creative"
        heading="$48000+ Worth of [Web Production] Capability Working on Your Build"
        description="Your project benefits from coordinated specialists and AI assisted systems delivering clarity, consistency, and technical precision without drawn-out timelines or extended costs."
        subDescription="Development and Production Systems ($12,000+ Annual Value)"
      />
      <TextSlider1 data={webDevelopmentSliderData2}/>
      <ProfessionalDesign className="designerPageProfessional" data={webDevelopmentProfessionalData} />
      <TextSlider1 data={webDevelopmentSliderData3}/>
      
      <GuessWorkAdvertising data={webDevelopmentGuessWorkData}/>
      <RealCost data={webDevelopmentRealCostData}/>
      <CompleteBusinessSetup data={webDevelopmentCompleteSetupData}/>
      <ProvenSuccess variant="web-development" />
      <Reviews/>
      {/* <GrowthSlider items={webDevelopmentBlogGuides} /> */}
      <BlogCarousel category="Web Development" />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <Contact/>
    </>
  )
}

