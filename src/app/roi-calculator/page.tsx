import type { Metadata } from "next";
import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner/AboutUsBanner'
import RoiCalculator from '../components/RoiCalculator/RoiCalculator'
import { ROI_CALCULATOR_BANNER } from '../data/RoiCalculatorData'

export const metadata: Metadata = {
  title: "ROI Calculator | Calculate Your Business ROI | Startups Advisory",
  description: "Calculate the return on investment for your business team. Use our ROI calculator to see the value of hiring a dedicated team versus building in-house.",
  robots: "nofollow",
};

const page = () => {
  return (
      <>
        <AboutUsBanner {...ROI_CALCULATOR_BANNER} />
        <RoiCalculator />
      </>
  )
}

export default page

