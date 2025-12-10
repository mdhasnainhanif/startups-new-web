import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";

export const metadata: Metadata = {
  robots: "nofollow",
  title: "eBooks & Digital Report Design | Startups Advisory",
  description: "Turn data into designs that deliver. Professional eBook and digital report design services.",
};

export default function EbooksDigitalReportPage() {
  const serviceData = getServiceData("ebooks-digital-report");
  
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <ServicePageLayout serviceData={serviceData} />;
}

