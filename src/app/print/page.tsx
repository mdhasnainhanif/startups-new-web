import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";

export const metadata: Metadata = {
  robots: "nofollow",
  title: "Print Design Services | Startups Advisory",
  description: "Print designs for memorable communication. Professional print design services.",
};

export default function PrintPage() {
  const serviceData = getServiceData("print");
  
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <ServicePageLayout serviceData={serviceData} />;
}

