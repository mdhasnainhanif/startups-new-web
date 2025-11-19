import React from 'react'
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_DATA, FAQ_SECTION, GROWTH_GUIDES } from '../constants'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';
import TextSlider1 from '../components/HomenewPage/TextSlider1/TextSlider1';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import ProvenSuccess from '../components/ProvenSuccess/ProvenSuccess';

export default function homenew() {
  return (
    <section className="sectionPadding">
      <HomenewBanner />
      <TextSlider1/>
      <AiPowerDesign/>
      <Technologies />
      <ProvenSuccess/>
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
    </section>
  )
}
