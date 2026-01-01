"use client";

import React, { useState, useEffect } from "react";
import { ContactFormProps, FormData, FormFieldConfig } from "@/app/types/types";
import { contactFormData } from "./data";
import styles from "./ContactForm.module.css";
import Button from "../../Button";
import Container from "../../Container";
import { submitEmail } from '../../../lib/api/email';
import CustomPhoneInput from './CustomPhoneInput';
import { EmailIcon, PhoneIcon } from '@/app/icons';
const ContactForm: React.FC<ContactFormProps> = ({
  config = contactFormData,
}) => {
  const [formData, setFormData] = useState<FormData>(
    config.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as FormData)
  );

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateField = (field: FormFieldConfig, value: string): boolean => {
    if (field.required && !value.trim()) {
      return false;
    }

    if (field.validation && field.validation.pattern) {
      const regex = new RegExp(field.validation.pattern);
      return regex.test(value);
    }

    return true;
  };

  // Load map immediately when component mounts for faster loading
  useEffect(() => {
    if (!config.showMap || !config.mapLocation) return;

    // Load map immediately with a small delay to ensure DOM is ready
    const loadTimer = setTimeout(() => {
      setMapLoaded(true);
    }, 100);

    return () => {
      clearTimeout(loadTimer);
    };
  }, [config.showMap, config.mapLocation]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const isValid = config.fields.every((field) => {
      const value = formData[field.name];
      return validateField(field, value);
    });

    if (!isValid) {
      setErrorMessage("Please fill in all required fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        email: formData["email"] || "",
        name: formData["name"] || "",
        phone: formData["phone"] || "",
        company: formData["company"] || "",
        message: formData["message"] || "",
      };

      const response = await submitEmail(payload);
      
      if (response.ok) {
        setSuccessMessage(
          config.successMessage || "Thank you! Your message has been sent successfully."
        );
        setFormData(
          config.fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
          }, {} as FormData)
        );
      } else {
        // Display detailed error message
        console.error("API Error:");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(config.errorMessage || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xl" className="px-0">
    <div className={`${styles.contactFormContainer} ${config.className || ""}`}>
      <div className={styles.formWrapper}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.heading}>
            {config.heading}
            {config.headingHighlight && (
              <span className={styles.highlight}>
                {config.headingHighlight}
              </span>
            )}
          </h2>

          {successMessage && (
            <div className={styles.successMessage}>{successMessage}</div>
          )}
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className={styles.formFields}>
            {/* --- FIRST 2 FIELDS (SIDE BY SIDE) --- */}
            <div className={styles.inputGroupRow}>
              {config.fields.slice(0, 2).map((field) => {
                const isName = field.name === "name";
                const isEmail = field.name === "email";
                
                return (
                  <div
                    key={field.id}
                    className={`${styles.inputGroup} ${styles.half}`}
                  >
                    <div className={styles.inputWithIcon}>
                      {isName && (
                        <span className={styles.inputIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#0fdac2"/>
                          </svg>
                        </span>
                      )}
                      {isEmail && (
                        <span className={styles.inputIcon}>
                          <EmailIcon fill="#0fdac2" />
                        </span>
                      )}
                      <input
                        id={field.id}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        disabled={loading}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- REMAINING FIELDS --- */}
            {config.fields.slice(2).map((field) => {
              const isTextarea = field.type === "textarea";
              const isPhone = field.type === "tel" || field.name === "phone";
              const isCompany = field.name === "company";
              const isMessage = field.name === "message";

              return (
                <div
                  key={field.id}
                  className={`${styles.inputGroup} ${styles.full}`}
                >
                  {isTextarea ? (
                    <div className={styles.inputWithIcon}>
                      {isMessage && (
                        <span className={styles.inputIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" fill="#0fdac2"/>
                          </svg>
                        </span>
                      )}
                      <textarea
                        id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className={`${styles.formInput} ${styles.formTextarea}`}
                        disabled={loading}
                      />
                    </div>
                  ) : isPhone ? (
                    <CustomPhoneInput
                      value={formData[field.name] as string}
                      onChange={(value) => setFormData((prev) => ({ ...prev, [field.name]: value || "" }))}
                      defaultCountry="PK"
                      placeholder={field.placeholder}
                      required={field.required}
                      disabled={loading}
                      className={styles.phoneInput}
                    />
                  ) : (
                    <div className={styles.inputWithIcon}>
                      {isCompany && (
                        <span className={styles.inputIcon}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="#0fdac2"/>
                          </svg>
                        </span>
                      )}
                      <input
                        id={field.id}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        disabled={loading}
                      />
                    </div>
                  )}
                </div>
              );
            })}

            <Button
              variant="green"
              type="submit"
              disabled={loading}
              className="w-full text-center justify-center items-center"
            >
              {config.submitButtonText}
            </Button>
          </form>
        </div>

        {/* Map Section */}
        {config.showMap && config.mapLocation && (
          <div className={styles.mapSection}>
            {!mapLoaded && (
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapLoadingSpinner}></div>
                <p>Loading map...</p>
              </div>
            )}
            {mapLoaded && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.113653845429!2d-75.55760332415356!3d39.73709779672395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd66239de7f7%3A0xb89847a87ae22294!2s1007n%20Orange%20St%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2s!4v1763489410568!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoaded(true)}
              />
            )}
          </div>
        )}
      </div>
    </div>
    </Container>
  );
};

export default ContactForm;
