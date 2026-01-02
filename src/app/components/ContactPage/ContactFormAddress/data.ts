import { ContactFormAddressConfig } from "@/app/types/types";

export const contactFormAddressData: ContactFormAddressConfig = {
  items: [
    {
      id: "email",
      icon: "mail",
      label: "Email",
      value: "habib.developer8899@gmail.com",
      bgColor: "bg-blue-500",
      href: "mailto:habib.developer8899@gmail.com",
    },
    {
      id: "phone",
      icon: "phone",
      label: "Contact us",
      value: "+92 317 2016810",
      bgColor: "bg-purple-500",
      href: "tel:+923172016810",
    },
    {
      id: "location",
      icon: "location",
      label: "Location",
      value: "Shop No MC39 Green Town Shah faisal colony No3 Karachi (Near Shahzad Medical)",
      bgColor: "bg-purple-500",
    },
    {
      id: "location2",
      icon: "location",
      label: "Location",
      value: "123 Main Street, New York, NY 10001, United States",
      bgColor: "bg-purple-500",
    },
    {
      id: "location3",
      icon: "location",
      label: "Location",
      value: "456 Business Ave, Los Angeles, CA 90001, United States",
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
