import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner/AboutUsBanner'
import { ABOUT_US_BANNER, FAQ_DATA, FAQ_SECTION, GROWTH_GUIDES, OUR_CORE_VALUES, WHY_CHOOSE_US, DEDICATED_TEAM, EMPOWER_BUSINESS, OUR_JOURNEY, COUNTER_DATA } from '../constants'
import LogosSlider from '../components/LogosSlider/LogosSlider'
import Reviews from '../components/Reviews/Reviews'
import GrowthSlider from '../components/GrowthSlider/GrowthSlider'
import FAQ from '../components/FAQ/FAQ'
import Contact from '../components/Contact/Contact'
import OurCoreValue from '../components/OurCoreValue/OurCoreValue'
import WhyChoose from '../components/WhyChoose/WhyChoose'
import DedicatedTeam from '../components/DedicatedTeam/DedicatedTeam'
import EmpowerBusiness from '../components/EmpowerBusiness/EmpowerBusiness'
import Counter from '../components/Counter/Counter'
import OurJourney from '../components/OurJourney/OurJourney'

const page = () => {
  return (
      <>
        <AboutUsBanner {...ABOUT_US_BANNER} />
        
        <LogosSlider/>
        <OurCoreValue {...OUR_CORE_VALUES} />        
        <WhyChoose {...WHY_CHOOSE_US} />
        <Counter {...COUNTER_DATA} />
        <OurJourney {...OUR_JOURNEY} />
        <DedicatedTeam {...DEDICATED_TEAM} />
        <EmpowerBusiness {...EMPOWER_BUSINESS} />
        <Reviews/>
        <GrowthSlider items={GROWTH_GUIDES}/>
        <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION}/>
        <Contact/>
      </>
  )
}

export default page

