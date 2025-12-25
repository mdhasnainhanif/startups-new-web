import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";
export const metadata: Metadata = {
  robots: "nofollow",
  title: "Apparel & Merchandise Design | Startups Advisory",
  description: "Designs that work IRL. Professional apparel and merchandise design services.",
};
export default function ApparelMerchandisePage() {
  const serviceData = getServiceData("apparel-merchandise");
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return <ServicePageLayout serviceData={serviceData} />;
}

