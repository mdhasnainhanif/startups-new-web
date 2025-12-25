import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";
export const metadata: Metadata = {
  robots: "nofollow",
  title: "Brand & Identity Services | Startups Advisory",
  description: "Build brand experiences that last. Professional brand identity design services for startups and businesses.",
};
export default function BrandIdentityPage() {
  const serviceData = getServiceData("brand-identity");
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return <ServicePageLayout serviceData={serviceData} />;
}