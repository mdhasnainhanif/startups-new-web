import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";

export const metadata: Metadata = {
  robots: "nofollow",
  title: "Digital & Web Design Services | Startups Advisory",
  description: "UI designs that captivate and convert. Professional digital and web design services.",
};

export default function DigitalWebPage() {
  const serviceData = getServiceData("digital-web");
  
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <ServicePageLayout serviceData={serviceData} />;
}

