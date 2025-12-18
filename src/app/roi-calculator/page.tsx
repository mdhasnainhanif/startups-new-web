import type { Metadata } from "next";
import React from 'react'
import AboutUsBanner from '../components/AboutUsBanner/AboutUsBanner'
import RoiCalculator from '../components/RoiCalculator/RoiCalculator'
import { ROI_CALCULATOR_BANNER } from '../data/RoiCalculatorData'

export const metadata: Metadata = {
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

