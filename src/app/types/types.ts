import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

// Button Types
export type ButtonVariant = "primary" | "secondary" | "outline" | "dark" | "light" | "purple" | "green";
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

<<<<<<< HEAD
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

=======
// ContactForm Types
export interface FormFieldConfig {
  id: string;
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder: string;
  required?: boolean;
  validation?: {
    pattern?: string;
    message?: string;
  };
}

export interface ContactFormConfig {
  heading: string;
  headingHighlight?: string;
  description?: string;
  fields: FormFieldConfig[];
  submitButtonText: string;
  submitButtonIcon?: string;
  successMessage?: string;
  errorMessage?: string;
  mapLocation?: {
    city: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };
  showMap?: boolean;
  className?: string;
}

export interface ContactFormProps {
  config: ContactFormConfig;
}

export interface FormData {
  [key: string]: string;
}

// ContactFormAddress Types
export interface SocialLink {
  id: string;
  icon: string; // Icon name or component path
  url: string;
  label: string;
  bgColor?: string; // Tailwind bg color class
}

export interface ContactItem {
  id: string;
  icon: string; // Icon name
  label: string;
  value: string;
  bgColor?: string; // Tailwind bg color
  href?: string; // Optional link for email/phone
}

export interface ContactFormAddressConfig {
  items: ContactItem[];
  socialLinks?: SocialLink[];
  className?: string;
  backgroundColor?: string;
}

export interface ContactFormAddressProps {
  config: ContactFormAddressConfig;
}




>>>>>>> 82f994b265fa895ad6e09cb649fccc226f3e0606
