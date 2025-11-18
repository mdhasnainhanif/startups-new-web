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




