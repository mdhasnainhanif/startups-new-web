import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Button Types
export type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "light";
export type ButtonSize = "sm" | "md" | "lg";

export interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: never;
}

export interface ButtonAsLink extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children"> {
  href: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

// Container Types
export interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

// HeroBanner Types
export interface HeroBannerProps {
  headline: string;
  headlineHighlight?: string;
  subheadline?: string;
  description: string;
  ctaButton: {
    text: string;
    href: string;
    variant?: ButtonVariant;
  };
  className?: string;
}

// AboutUsBanner Types
export interface AboutUsBannerProps {
  heading: {
    part1: string;
    highlight: string;
    part2?: string;
    highlight2?: string;
  };
  description: string;
  ctaButton: {
    text: string;
    href: string;
    variant?: ButtonVariant;
  };
  className?: string;
}

// OurCoreValue Types
export interface CoreValueCard {
  id: string;
  number: string;
  icon: ReactNode;
  heading: string;
  description: string;
}

export interface OurCoreValueProps {
  cards: CoreValueCard[];
  className?: string;
}

// WhyChoose Types
export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  isOpen?: boolean;
}

export interface WhyChooseProps {
  heading: {
    part1: string;
    highlight: string;
  };
  description: string;
  items: WhyChooseItem[];
  className?: string;
}

// DedicatedTeam Types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface DedicatedTeamProps {
  heading: {
    part1: string;
    highlight: string;
    part2?: string;
  };
  members: TeamMember[];
  className?: string;
}

// EmpowerBusiness Types
export interface EmpowerBusinessProps {
  heading: string;
  description: string;
  ctaButton: {
    text: string;
    href: string;
    variant?: ButtonVariant;
  };
  className?: string;
}

// OurJourney Types
export interface JourneyItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imagePosition: "left" | "right";
}

export interface OurJourneyProps {
  items: JourneyItem[];
  className?: string;
}

// Counter Types
export interface CounterItem {
  id: string;
  value: string;
  label: string;
}

export interface CounterProps {
  items: CounterItem[];
  className?: string;
}

