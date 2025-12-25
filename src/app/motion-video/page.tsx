import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout/ServicePageLayout";
import { getServiceData } from "../data/ServicesPageData";
export const metadata: Metadata = {
  robots: "nofollow",
  title: "Motion & Video Services | Startups Advisory",
  description: "Make every message move. Professional motion graphics and video production services.",
};
export default function MotionVideoPage() {
  const serviceData = getServiceData("motion-video");
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return <ServicePageLayout serviceData={serviceData} />;
}