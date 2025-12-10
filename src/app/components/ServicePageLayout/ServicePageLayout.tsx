import React from 'react';
import { ServicePageData } from '../../data/ServicesPageData';
import HomenewBanner from '../HomenewPage/HomenewBanner/HomenewBanner';
import FAQ from '../FAQ/FAQ';
import { FAQ_SECTION, COUNTER_DATA } from '../../constants';
import { FAQ_CONTACT } from '../Home/data';
import Technologies from '../Technologies/Technologies';
import TextSlider1 from '../HomenewPage/TextSlider/TextSlider';
import Reviews from '../Reviews/Reviews';
import AiPowerDesign from '../AiPowerDesign/AiPowerDesign';
import ContactTwo from '../ContactTwo/ContactTwo';
import ServicesGrowthCards from '../ServicesGrowthCards/ServicesGrowthCards';
import Counter from '../Counter/Counter';
import { sliderData1 } from '../../data/HomeNewData';
import { getServiceGrowthCardsContent, getServiceGrowthCardsSection } from '../../data/ServicesGrowthCardsData';
import GrowthSlider from '../GrowthSlider/GrowthSlider';
import { GROWTH_GUIDES } from '../../constants';
import ServicesCalculator from '../ServicesCalculator/ServicesCalculator';
interface ServicePageLayoutProps {
  serviceData: ServicePageData;
}
const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ serviceData }) => {
  const growthCardsContent = getServiceGrowthCardsContent(serviceData.slug);
  const growthCardsSection = getServiceGrowthCardsSection(serviceData.slug);
  return (
    <>
      <HomenewBanner data={serviceData.bannerData} />
      <TextSlider1 data={sliderData1} />
      <Technologies hideTabs={true} defaultTab="creative" />
      <Reviews limit={6} columns={3} equalHeight={true} />
      <ServicesGrowthCards content={growthCardsContent} sectionData={growthCardsSection} />
      <AiPowerDesign />
      <Counter items={COUNTER_DATA.items} className="sectionPadding pt-0" gridClassName="!mt-0" />
      <Reviews limit={6} columns={3} equalHeight={true} />
      <ServicesCalculator />
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={FAQ_CONTACT} sectionData={FAQ_SECTION} />
      <ContactTwo />
    </>
  );
};
export default ServicePageLayout;

