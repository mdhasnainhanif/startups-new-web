import { ContactFormConfig } from "@/app/types/types";

export const contactFormData: ContactFormConfig = {
  heading: "Have Any",
  headingHighlight: " Questions?",
  description: "Let's collaborate and create powerful AI solutions",
  fields: [
    {
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Name*",
      required: true,
      validation: {
        pattern: "^[a-zA-Z\\s]+$",
        message: "Name should contain only letters and spaces",
      },
    },
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email*",
      required: true,
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address",
      },
    },
    {
      id: "phone",
      name: "phone",
      type: "tel",
      placeholder: "Phone Number*",
      required: true,
      validation: {
        pattern: "^[\\d+\\-\\s()]+$",
        message: "Please enter a valid phone number",
      },
    },
    {
      id: "company",
      name: "company",
      type: "text",
      placeholder: "Company Name*",
      required: true,
    },
    {
      id: "message",
      name: "message",
      type: "textarea",
      placeholder: "Message*",
      required: true,
    },
  ],
  submitButtonText: "Submit",
  submitButtonIcon: "→",
  successMessage: "Thank you! Your message has been sent successfully.",
  errorMessage: "Oops! Something went wrong. Please try again.",
  mapLocation: {
    city: "New York",
    country: "USA",
    latitude: 40.7128,
    longitude: -74.006,
  },
  showMap: true,
  className: "",
};
