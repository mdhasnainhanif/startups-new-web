import React from 'react'
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_DATA, FAQ_SECTION, GROWTH_GUIDES } from '../constants'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';
import TextSlider1 from '../components/HomenewPage/TextSlider/TextSlider';
import { sliderData1, sliderData2, sliderData3 } from '../data/HomeNewData';
import Reviews from '../components/Reviews/Reviews';
import ProfessionalDesign from '../components/ProfessionalDesign/ProfessionalDesign';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import ProvenSuccess from '../components/ProvenSuccess/ProvenSuccess';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import Contact from '../components/Contact/Contact';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import ContactTwo from '../components/ContactTwo/ContactTwo';

export default function homenew() {
  return (
    <section className="sectionPadding">
      <HomenewBanner />
      <TextSlider1 data={sliderData1}/>
      <AiPowerDesign/>
      <Technologies />
      <TextSlider1 data={sliderData2}/>
      <ProfessionalDesign />
      <TextSlider1 data={sliderData3}/>
      <Reviews/>
      <Technologies />
      <CompleteBusinessSetup/>
      <GuessWorkAdvertising/>
      <RealCost/>
      <ProvenSuccess/>
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
      <ContactTwo/>


    </section>
  )
}