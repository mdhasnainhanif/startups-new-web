import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";

export const metadata: Metadata = {
  robots: "nofollow",
  title: "Marketing & Advertising Services | Startups Advisory",
  description: "Creative that drives results. Professional marketing and advertising design services.",
};

export default function MarketingAdvertisingPage() {
  const serviceData = getServiceData("marketing-advertising");
  
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <ServicePageLayout serviceData={serviceData} />;
}

