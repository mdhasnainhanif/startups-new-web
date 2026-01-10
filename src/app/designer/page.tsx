import type { Metadata } from "next";
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
import { designProfessionalPageData, caseStudyDesignerPageData, designerGuessWorkData, designerSliderData1, DESIGNER_GROWTH_GUIDES, designerFAQ } from '../data/DesignerPageData';
import AiPowerDesign from '../components/AiPowerDesign/AiPowerDesign';
import CaseStudySection from '../components/CaseStudySection';
import ProvenSuccess from '../components/ProvenSuccess/ProvenSuccess';
import RealCost from '../components/RealCost/RealCost';
import CompleteBusinessSetup from '../components/CompleteBusinessSetup/CompleteBusinessSetup';
import Contact from '../components/Contact/Contact';
import GuessWorkAdvertising from '../components/GuessWorkAdvertising/GuessWorkAdvertising';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';

import dynamic from 'next/dynamic';

const TwentyTwoDayDeliverable = dynamic(() => import('../components/TwentyTwoDayDeliverable/TwentyTwoDayDeliverable'), {
  ssr: true,
});

const TwentyTwoHeading = dynamic(() => import('../components/TwentyTwoDayDeliverable/TwentyTwoHeading'), {
  ssr: true,
});

// Custom data for ProvenSuccess on designer page
const designerProvenSuccessData = {
  headline: {
    text: 'Proven Success in Every Project',
    highlighted: 'Success',
  },
  description:
    'Your Smart AI Business Team brings a fully loaded AI ecosystem for creative design and analytics automation, premium tools, no extra cost, no hassle.',
  tabs: [
    {
      id: 'branding-kit',
      label: 'Branding Kit',
      images: [
        '/assets/images/portfolio/branding-kit/1.webp',
        '/assets/images/portfolio/branding-kit/2.webp',
        '/assets/images/portfolio/branding-kit/3.webp',
        '/assets/images/portfolio/branding-kit/4.webp',
        '/assets/images/portfolio/branding-kit/5.webp',
        '/assets/images/portfolio/branding-kit/6.webp',
        '/assets/images/portfolio/branding-kit/7.webp',
        '/assets/images/portfolio/branding-kit/8.webp',
        '/assets/images/portfolio/branding-kit/9.webp',
        '/assets/images/portfolio/branding-kit/10.webp',
        '/assets/images/portfolio/branding-kit/11.webp',
        '/assets/images/portfolio/branding-kit/12.webp',
      ],
      gridItems: [
        { id: '1', label: 'Logo Design' },
        { id: '2', label: 'Brand Identity' },
        { id: '3', label: 'Business Cards' },
        { id: '4', label: 'Letterhead' },
        { id: '5', label: 'Envelope' },
        { id: '6', label: 'Email Signature' },
        { id: '7', label: 'Social Media Kit' },
        { id: '8', label: 'Brand Guidelines' },
        { id: '9', label: 'Color Palette' },
        { id: '10', label: 'Typography' },
        { id: '11', label: 'Icon Set' },
        { id: '12', label: 'Pattern Design' },
        { id: '13', label: 'Stationery Set' },
        { id: '14', label: 'Packaging Design' },
        { id: '15', label: 'Merchandise' },
        { id: '16', label: 'Brand Book' },
        { id: '17', label: 'Logo Variations' },
        { id: '18', label: 'Favicon Set' },
        { id: '19', label: 'Watermark' },
        { id: '20', label: 'Brand Assets' },
        { id: '21', label: 'Templates' },
        { id: '22', label: 'Mockups' },
        { id: '23', label: 'Presentation' },
        { id: '24', label: 'Documentation' },
      ],
    },
    {
      id: 'logo-design',
      label: 'Logo Design',
      images: [
        '/assets/images/portfolio/logo-design/1.webp',
        '/assets/images/portfolio/logo-design/2.webp',
        '/assets/images/portfolio/logo-design/3.webp',
        '/assets/images/portfolio/logo-design/4.webp',
        '/assets/images/portfolio/logo-design/5.webp',
        '/assets/images/portfolio/logo-design/6.webp',
        '/assets/images/portfolio/logo-design/7.webp',
        '/assets/images/portfolio/logo-design/8.webp',
        '/assets/images/portfolio/logo-design/9.webp',
        '/assets/images/portfolio/logo-design/10.webp',
        '/assets/images/portfolio/logo-design/11.webp',
        '/assets/images/portfolio/logo-design/12.webp',
        '/assets/images/portfolio/logo-design/13.webp',
        '/assets/images/portfolio/logo-design/14.webp',
        '/assets/images/portfolio/logo-design/15.webp',
        '/assets/images/portfolio/logo-design/16.webp',
        '/assets/images/portfolio/logo-design/17.webp',
        '/assets/images/portfolio/logo-design/18.webp',
        '/assets/images/portfolio/logo-design/19.webp',
        '/assets/images/portfolio/logo-design/20.webp',
        '/assets/images/portfolio/logo-design/21.webp',
        '/assets/images/portfolio/logo-design/22.webp',
        '/assets/images/portfolio/logo-design/23.webp',
        '/assets/images/portfolio/logo-design/24.webp',
      ],
      gridItems: [
        { id: '1', label: 'Primary Logo' },
        { id: '2', label: 'Secondary Logo' },
        { id: '3', label: 'Icon Logo' },
        { id: '4', label: 'Wordmark' },
        { id: '5', label: 'Symbol' },
        { id: '6', label: 'Monogram' },
        { id: '7', label: 'Logo Variations' },
        { id: '8', label: 'Color Versions' },
        { id: '9', label: 'Black & White' },
        { id: '10', label: 'Horizontal' },
        { id: '11', label: 'Vertical' },
        { id: '12', label: 'Square' },
        { id: '13', label: 'Favicon' },
        { id: '14', label: 'App Icon' },
        { id: '15', label: 'Social Media' },
        { id: '16', label: 'Print Ready' },
        { id: '17', label: 'Web Ready' },
        { id: '18', label: 'Vector Files' },
        { id: '19', label: 'Raster Files' },
        { id: '20', label: 'Logo Guidelines' },
        { id: '21', label: 'Usage Rules' },
        { id: '22', label: 'Spacing Guide' },
        { id: '23', label: 'Size Variations' },
        { id: '24', label: 'File Formats' },
      ],
    },
    {
      id: 'stationary',
      label: 'Stationary',
      images: [
        '/assets/images/portfolio/stationary/1.webp',
        '/assets/images/portfolio/stationary/2.webp',
        '/assets/images/portfolio/stationary/3.webp',
        '/assets/images/portfolio/stationary/4.webp',
        '/assets/images/portfolio/stationary/5.webp',
        '/assets/images/portfolio/stationary/6.webp',
        '/assets/images/portfolio/stationary/7.webp',
        '/assets/images/portfolio/stationary/8.webp',
        '/assets/images/portfolio/stationary/9.webp',
        '/assets/images/portfolio/stationary/13.webp',
        '/assets/images/portfolio/stationary/14.webp',
        '/assets/images/portfolio/stationary/11.webp',
        '/assets/images/portfolio/stationary/16.webp',
        '/assets/images/portfolio/stationary/10.webp',
        '/assets/images/portfolio/stationary/12.webp',
        '/assets/images/portfolio/stationary/15.webp',
      ],
      gridItems: [
        { id: '1', label: 'Business Card' },
        { id: '2', label: 'Letterhead' },
        { id: '3', label: 'Envelope' },
        { id: '4', label: 'Invoice' },
        { id: '5', label: 'Receipt' },
        { id: '6', label: 'Notepad' },
        { id: '7', label: 'Folder' },
        { id: '8', label: 'Presentation Folder' },
        { id: '9', label: 'Compliment Slip' },
      ],
    },
  ],
};
export const metadata: Metadata = {
  title: "Designer Services | Professional Design Team | Startups Advisory",
  description: "Get a complete design team in 1 month. Professional branding, graphics, and creative design services to build your brand identity and visual presence.",
  robots: "nofollow",
};
export default function DesignerPage() {
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
      {/* <TwentyTwoHeading/> */}
      {/* <TwentyTwoDayDeliverable/> */}
      <GuessWorkAdvertising data={designerGuessWorkData}/>
      <RealCost/>
      <CompleteBusinessSetup/>
      <ProvenSuccess data={designerProvenSuccessData} />
      <Reviews/>
      {/* <GrowthSlider items={DESIGNER_GROWTH_GUIDES} /> */}
      <BlogCarousel category="Design" />
      <FAQ faqs={designerFAQ} sectionData={FAQ_SECTION} />
      <Contact/>
    </>
  )
}