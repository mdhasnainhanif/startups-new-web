import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";

export const metadata: Metadata = {
  robots: "nofollow",
  title: "Corporate & Internal Design Services | Startups Advisory",
  description: "Professional visuals for internal success. Corporate and internal design services.",
};

export default function CorporateInternalPage() {
  const serviceData = getServiceData("corporate-internal");
  
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <ServicePageLayout serviceData={serviceData} />;
}

