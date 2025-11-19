import React from 'react'
import HomenewBanner from '../components/HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../components/FAQ/FAQ'
import { FAQ_DATA, FAQ_SECTION, GROWTH_GUIDES } from '../constants'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import Technologies from '../components/Technologies/Technologies';

export default function homenew() {
  return (
    <section className="sectionPadding">
      <HomenewBanner />
      <Technologies />
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION} />
    </section>
  )
}
