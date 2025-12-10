import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";

export const metadata: Metadata = {
  robots: "nofollow",
  title: "Product & Packaging Design | Startups Advisory",
  description: "Creative on full display. Professional product and packaging design services.",
};

export default function ProductPackagingPage() {
  const serviceData = getServiceData("product-packaging");
  
  if (!serviceData) {
    return <div>Service not found</div>;
  }

  return <ServicePageLayout serviceData={serviceData} />;
}

