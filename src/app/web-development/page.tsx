import { Hero } from "../components/sections/Hero";
import { ExperienceBox } from "../components/sections/ExperienceBox";
import { Team } from "../components/sections/Team";
import CompleteBusinessSetup from "../components/CompleteBusinessSetup/CompleteBusinessSetup";
import { PerformanceInsights } from "../components/sections/PerformanceInsights";
import { CostComparison } from "../components/sections/CostComparison";
import { BigCTA } from "../components/sections/BigCTA";
import { WEB_DEVELOPMENT_DATA } from "../data/webDevelopment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "22-Day Website Package | Startups Advisory",
  description:
    "Your Complete Website Team for 22 Days. Fully Focused on Your Build. A dedicated web unit assembled to create a fast, structured, market-ready website.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#020016]">
      <main>
        <Hero data={WEB_DEVELOPMENT_DATA.hero} />
        <ExperienceBox data={WEB_DEVELOPMENT_DATA.experienceBox} />
        <Team data={WEB_DEVELOPMENT_DATA.team} />
        <CompleteBusinessSetup data={WEB_DEVELOPMENT_DATA.completeBusinessSetup} />
        <PerformanceInsights data={WEB_DEVELOPMENT_DATA.performanceInsights} />
        <CostComparison data={WEB_DEVELOPMENT_DATA.costComparison} />
        <BigCTA data={WEB_DEVELOPMENT_DATA.bigCTA} />
      </main>
    </div>
  );
}

