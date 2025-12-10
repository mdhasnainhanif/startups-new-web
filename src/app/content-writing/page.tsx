import type { Metadata } from "next";
import React from 'react'
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_SECTION, GROWTH_GUIDES } from '../constants'
import { FAQ_CONTACT } from '../components/Home/data'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';
import TextSlider1 from '../components/HomenewPage/TextSlider/TextSlider';
import Reviews from '../components/Reviews/Reviews';
import ProfessionalDesign from '../components/ProfessionalDesign/ProfessionalDesign';
import { contentWritingProfessionalData, contentWritingCaseStudyData } from '../data/ContentWritingPageData';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import CaseStudySection from '../components/CaseStudySection';
import ProvenSuccess from '../components/ProvenSuccess/ProvenSuccess';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import Contact from '../components/Contact/Contact';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import ContactTwo from '../components/ContactTwo/ContactTwo';
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
  title: "22-Day Content Writing Service | Market-Ready Content | Startups Advisory",
  description:
    "Market-Ready Content in 22 Days. Writing shaped for presence, persuasion, and modern brand standards. A complete content layer built with clarity, rhythm, and commercial intent.",
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
        defaultTab="creative"
        heading="$48,000 plus in Professional Writing Output Delivered in 22 Days"
        description="A condensed writing period supported by structured tools and seasoned writers replaces fragmented content, inconsistent tone, and time-consuming revisions."
        subDescription="Content Production Tools ($12,000 plus Annual Value)"
      />
      <TextSlider1 data={contentWritingSliderData2}/>
      <ProfessionalDesign className="designerPageProfessional" data={contentWritingProfessionalData} />
      <TextSlider1 data={contentWritingSliderData3}/>
      <GuessWorkAdvertising data={contentWritingGuessWorkData}/>
      <RealCost data={contentWritingRealCostData}/>
      <CompleteBusinessSetup data={contentWritingCompleteSetupData}/>
      <ProvenSuccess/>
      <Reviews/>
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <ContactTwo/>
    </>
  )
}

