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
import ServicesCounter from '../ServicesCounter/ServicesCounter';
import { SERVICES_COUNTER_DATA } from '../../data/ServicesCounterData';
import ServicesStats from '../ServicesStats/ServicesStats';
import { SERVICES_STATS_DATA } from '../../data/ServicesStatsData';
import ServicesComparison from '../ServicesComparison/ServicesComparison';
import { SERVICES_COMPARISON_DATA } from '../../data/ServicesComparisonData';
import ServiceFeatures from '../ServiceFeatures/ServiceFeatures';
import { getServiceFeaturesData } from '../../data/ServiceFeaturesData';
import { getServiceFAQData } from '../../data/ServicesFAQData';
interface ServicePageLayoutProps {
  serviceData: ServicePageData;
}
const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ serviceData }) => {
  const growthCardsContent = getServiceGrowthCardsContent(serviceData.slug);
  const growthCardsSection = getServiceGrowthCardsSection(serviceData.slug);
  const counterData = SERVICES_COUNTER_DATA[serviceData.slug];
  const statsData = SERVICES_STATS_DATA[serviceData.slug];
  const comparisonData = SERVICES_COMPARISON_DATA[serviceData.slug];
  const featuresData = getServiceFeaturesData(serviceData.slug);
  const faqData = getServiceFAQData(serviceData.slug);
  const faqsToShow = faqData.length > 0 ? faqData : FAQ_CONTACT;
  
  return (
    <>
      <HomenewBanner data={serviceData.bannerData} />
      <TextSlider1 data={sliderData1} />
      <Technologies hideTabs={true} defaultTab="creative" />
      <ServiceFeatures data={featuresData} />
      {counterData && <ServicesCounter data={counterData} />}
      {statsData && <ServicesStats data={statsData} />}
      <Reviews limit={6} columns={3} equalHeight={true} />
      <ServicesGrowthCards content={growthCardsContent} sectionData={growthCardsSection} />
      <AiPowerDesign />
      {/* <Counter items={COUNTER_DATA.items} className="sectionPadding pt-0 pb-[15rem]" gridClassName="!mt-0" /> */}
      <ServicesComparison data={comparisonData} />
      <ServicesCalculator />
      <GrowthSlider items={GROWTH_GUIDES} />
      <FAQ faqs={faqsToShow} sectionData={FAQ_SECTION} />
      <ContactTwo />
    </>
  );
};
export default ServicePageLayout;

