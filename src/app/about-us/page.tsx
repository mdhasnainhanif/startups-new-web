import type { Metadata } from "next";
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

export const metadata: Metadata = {
  robots: "nofollow",
};

// Filter GROWTH_GUIDES to show one blog each for web-development, content-writing, and Social Media Marketing
function getFilteredGrowthGuides() {
  // Map target categories to exact category names in the data
  const categoryMap: Record<string, string[]> = {
    "web-development": ["Web Development", "web development", "web-development"],
    "content-writing": ["Content Writing", "content writing", "content-writing"],
    "social-media-marketing": ["Social Media Marketing", "social media marketing", "social-media-marketing"],
  };

  const filtered: typeof GROWTH_GUIDES = [];
  const usedIds = new Set<string>();

  Object.keys(categoryMap).forEach((targetCategory) => {
    const variations = categoryMap[targetCategory];
    
    const found = GROWTH_GUIDES.find((guide) => {
      if (usedIds.has(guide.id)) return false;
      
      const guideCategory = guide.category.trim();
      return variations.some((variation) => {
        return (
          guideCategory.toLowerCase() === variation.toLowerCase() ||
          guideCategory.toLowerCase().replace(/\s+/g, "-") === variation.toLowerCase().replace(/\s+/g, "-")
        );
      });
    });

    if (found) {
      filtered.push(found);
      usedIds.add(found.id);
    }
  });

  return filtered;
}

const page = () => {
  const filteredGrowthGuides = getFilteredGrowthGuides();

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
        <GrowthSlider items={filteredGrowthGuides.length > 0 ? filteredGrowthGuides : GROWTH_GUIDES}/>
        <FAQ faqs={FAQ_DATA} sectionData={FAQ_SECTION}/>
        <Contact/>
      </>
  )
}

export default page

