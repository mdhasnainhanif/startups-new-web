import { ContactFormAddressConfig } from "@/app/types/types";

export const contactFormAddressData: ContactFormAddressConfig = {
  items: [
    {
      id: "email",
      icon: "mail",
      label: "E - Mail",
      value: "info@startupsadvisory.ai",
      bgColor: "bg-blue-500",
      href: "mailto:info@startupsadvisory.ai",
    },
    {
      id: "phone",
      icon: "phone",
      label: "Contact us",
      value: "+1 267-248-9454",
      bgColor: "bg-purple-500",
      href: "tel:+12672489454",
    },
    {
      id: "location",
      icon: "location",
      label: "location",
      value: "1007n Orange St, Wilmington, DE 19801, United States",
      bgColor: "bg-purple-500",
    },
  ],
  socialLinks: [
    {
      id: "linkedin",
      icon: "linkedin",
      url: "https://linkedin.com",
      label: "LinkedIn",
      bgColor: "bg-blue-600",
    },
    {
      id: "pinterest",
      icon: "pinterest",
      url: "https://pinterest.com",
      label: "Pinterest",
      bgColor: "bg-red-500",
    },
    {
      id: "instagram",
      icon: "instagram",
      url: "https://instagram.com",
      label: "Instagram",
      bgColor: "bg-pink-500",
    },
    {
      id: "twitter",
      icon: "twitter",
      url: "https://twitter.com",
      label: "Twitter",
      bgColor: "bg-black",
    },
    {
      id: "facebook",
      icon: "facebook",
      url: "https://facebook.com",
      label: "Facebook",
      bgColor: "bg-blue-600",
    },
  ],
  backgroundColor: "bg-black",
};
