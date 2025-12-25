import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";
export const metadata: Metadata = {
  robots: "nofollow",
  title: "Illustration & Artwork Services | Startups Advisory",
  description: "Custom designs to enhance your brand's presence. Professional illustration and artwork services.",
};
export default function IllustrationArtworkPage() {
  const serviceData = getServiceData("illustration-artwork");
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return <ServicePageLayout serviceData={serviceData} />;
}