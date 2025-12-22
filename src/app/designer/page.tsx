import type { Metadata } from "next";
import React from 'react'
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_SECTION } from '../constants'
import { FAQ_CONTACT } from '../components/Home/data'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';
import TextSlider1 from '../components/HomenewPage/TextSlider/TextSlider';
import { sliderData } from '../data/HomeNewData';
import Reviews from '../components/Reviews/Reviews';
import ProfessionalDesign from '../components/ProfessionalDesign/ProfessionalDesign';
import { designProfessionalPageData, caseStudyDesignerPageData, designerGuessWorkData, designerSliderData1, DESIGNER_GROWTH_GUIDES } from '../data/DesignerPageData';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import CaseStudySection from '../components/CaseStudySection';
import ProvenSuccess from '../components/ProvenSuccess/ProvenSuccess';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import Contact from '../components/Contact/Contact';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import dynamic from 'next/dynamic';

const TwentyTwoDayDeliverable = dynamic(() => import('../components/TwentyTwoDayDeliverable/TwentyTwoDayDeliverable'), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Designer Services | Professional Design Team | Startups Advisory",
  description: "Get a complete design team in 22 days. Professional branding, graphics, and creative design services to build your brand identity and visual presence.",
  robots: "nofollow",
};

export default function homenew() {
  return (
    <>
      <HomenewBanner />
      <TextSlider1 data={designerSliderData1}/>
      <CaseStudySection isShowTabs={false} data={caseStudyDesignerPageData} className="designerPageCaseStudy" />
      <AiPowerDesign/>
      <Technologies hideTabs={true} defaultTab="creative" />
      <TextSlider1 data={sliderData.slider2}/>
      <ProfessionalDesign className="designerPageProfessional" data={designProfessionalPageData} />
      <TextSlider1 data={sliderData.slider3}/>
      <TwentyTwoDayDeliverable/>
      <GuessWorkAdvertising data={designerGuessWorkData}/>
      <RealCost/>
      <CompleteBusinessSetup/>
      <ProvenSuccess/>
      <Reviews/>
      <GrowthSlider items={DESIGNER_GROWTH_GUIDES} />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <Contact/>
    </>

  )
}