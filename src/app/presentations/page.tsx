import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";
export const metadata: Metadata = {
  robots: "nofollow",
  title: "Presentation Design Services | Startups Advisory",
  description: "Decks for every report, pitch, and keynote. Professional presentation design services.",
};
export default function PresentationsPage() {
  const serviceData = getServiceData("presentations");
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return <ServicePageLayout serviceData={serviceData} />;
}