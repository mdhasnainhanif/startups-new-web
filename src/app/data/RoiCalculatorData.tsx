import { AboutUsBannerProps } from "../types/types";

// ROI Calculator Banner Data
export const ROI_CALCULATOR_BANNER: AboutUsBannerProps = {
  heading: {
    part1: "Calculate Your Business ",
    highlight: "ROI",
    part2: " and Growth Potential",
    highlight2: "",
  },
  description:
    "Discover the real impact of investing in professional design and marketing services. Use our ROI calculator to see how strategic investments can drive measurable growth, increase revenue, and accelerate your business success.",
  ctaButton: {
    text: "Start Calculating Your ROI",
    href: "#calculator",
    variant: "secondary" as const,
  },
};

// Country Data
export interface Country {
  id: string;
  name: string;
  code: string;
  salaryMultiplier: number; // Multiplier compared to Pakistan
}

export const COUNTRIES: Country[] = [
  { id: "us", name: "United States", code: "US", salaryMultiplier: 4.0 },
  { id: "uk", name: "United Kingdom", code: "UK", salaryMultiplier: 3.5 },
  { id: "au", name: "Australia", code: "AU", salaryMultiplier: 4.0 },
];

// Role Data
export interface Role {
  id: string;
  name: string;
  baseSalaryPakistan: number; // Monthly salary in USD for Pakistan
}

export const ROLES: Role[] = [
  { id: "devops", name: "Dev ops Engineer", baseSalaryPakistan: 2772 },
  { id: "frontend", name: "Frontend Developer", baseSalaryPakistan: 2000 },
  { id: "backend", name: "Backend Developer", baseSalaryPakistan: 2200 },
  { id: "fullstack", name: "Full Stack Developer", baseSalaryPakistan: 2500 },
  { id: "mobile", name: "Mobile Developer", baseSalaryPakistan: 2400 },
  { id: "qa", name: "QA Engineer", baseSalaryPakistan: 1800 },
  { id: "uiux", name: "UI/UX Designer", baseSalaryPakistan: 2000 },
  { id: "product", name: "Product Manager", baseSalaryPakistan: 3000 },
  { id: "data", name: "Data Scientist", baseSalaryPakistan: 2800 },
  { id: "ml", name: "ML Engineer", baseSalaryPakistan: 3200 },
];

// Experience Level Data
export interface ExperienceLevel {
  id: string;
  name: string;
  multiplier: number; // Multiplier on base salary
}

export const EXPERIENCE_LEVELS: ExperienceLevel[] = [
  { id: "junior", name: "Junior (0-2 Years)", multiplier: 0.7 },
  { id: "mid", name: "Mid Level (3-5 Years)", multiplier: 1.0 },
  { id: "senior", name: "Senior (6-8 Years)", multiplier: 1.5 },
  { id: "lead", name: "Lead (9+ Years)", multiplier: 2.0 },
];

// Additional Cost/Benefit Data
export interface AdditionalCost {
  id: string;
  name: string;
  description: string;
  percentage: number; // Percentage of base salary
}

export const ADDITIONAL_COSTS: AdditionalCost[] = [
  {
    id: "recruitment",
    name: "Recruitment Fee",
    description: "Base salary based on role and experience.",
    percentage: 20,
  },
  {
    id: "onboarding",
    name: "Onboarding & Training",
    description: "Base salary based on role and experience.",
    percentage: 15,
  },
  {
    id: "exit",
    name: "Exit Management",
    description: "Base salary based on role and experience.",
    percentage: 10,
  },
  {
    id: "benefits",
    name: "Benefits & Overheads",
    description: "Base salary based on role and experience.",
    percentage: 30,
  },
  {
    id: "miscellaneous",
    name: "Miscellaneous",
    description: "Base salary based on role and experience.",
    percentage: 5,
  },
  {
    id: "appraisals",
    name: "Appraisals & Performance",
    description: "Base salary based on role and experience.",
    percentage: 8,
  },
  {
    id: "engagement",
    name: "Employee Engagement",
    description: "Base salary based on role and experience.",
    percentage: 5,
  },
  {
    id: "infrastructure",
    name: "Infrastructure (Dedicated Seat)",
    description: "Base salary based on role and experience.",
    percentage: 7,
  },
];

// Team Member Interface
export interface TeamMember {
  id: string;
  roleId: string;
  experienceId: string;
  quantity: number;
}
