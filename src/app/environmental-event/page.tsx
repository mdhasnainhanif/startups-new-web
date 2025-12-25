import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";
export const metadata: Metadata = {
  robots: "nofollow",
  title: "Environmental & Event Graphics | Startups Advisory",
  description: "Graphics for every experience. Professional environmental and event design services.",
};
export default function EnvironmentalEventPage() {
  const serviceData = getServiceData("environmental-event");
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return <ServicePageLayout serviceData={serviceData} />;
}