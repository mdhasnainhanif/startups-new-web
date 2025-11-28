import { ContactFormAddressConfig } from "@/app/types/types";

export const contactFormAddressData: ContactFormAddressConfig = {
  items: [
    {
      id: "email",
      icon: "mail",
      label: "Email",
      value: "info@startupsadvisory.ai",
      bgColor: "bg-blue-500",
      href: "mailto:info@startupsadvisory.ai",
    },
    {
      id: "phone",
      icon: "phone",
      label: "Contact us",
      value: "+1 346-626-9169",
      bgColor: "bg-purple-500",
      href: "tel:+13466269169",
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
      id: "facebook",
      icon: "facebook",
      url: "https://www.facebook.com/StartupsAdvisory",
      label: "Facebook",
      bgColor: "bg-blue-600",
    },
    {
      id: "instagram",
      icon: "instagram",
      url: "https://www.instagram.com/startups_advisory/",
      label: "Instagram",
      bgColor: "bg-pink-500",
    },
    {
      id: "twitter",
      icon: "twitter",
      url: "https://x.com/SAdvisory_AI",
      label: "Twitter",
      bgColor: "bg-black",
    },
    {
      id: "pinterest",
      icon: "pinterest",
      url: "https://www.pinterest.com/StartupsAdvisory",
      label: "Pinterest",
      bgColor: "bg-red-500",
    },
    {
      id: "linkedin",
      icon: "linkedin",
      url: "https://www.linkedin.com/company/startupsadvisory",
      label: "LinkedIn",
      bgColor: "bg-blue-600",
    },
  ],
  backgroundColor: "bg-black",
};
