"use client";

import React, { useState } from "react";
import { ContactFormProps, FormData, FormFieldConfig } from "@/app/types/types";
import { contactFormData } from "./data";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC<ContactFormProps> = ({ config = contactFormData }) => {
  const [formData, setFormData] = useState<FormData>(
    config.fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as FormData)
  );

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage(
          config.successMessage || "Thank you! Your message has been sent."
        );
        setFormData(
          config.fields.reduce((acc, field) => {
            acc[field.name] = "";
            return acc;
          }, {} as FormData)
        );
      } else {
        setErrorMessage(
          config.errorMessage || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage(
        config.errorMessage || "An error occurred. Please try again."
      );
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.contactFormContainer} ${config.className || ""}`}>
      <div className={styles.formWrapper}>
        {/* Form Section */}
        <div className={styles.formSection}>
          <h2 className={styles.heading}>
            {config.heading}{" "}
            {config.headingHighlight && (
              <span className={styles.highlight}>{config.headingHighlight}</span>
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
              {config.fields.slice(0, 2).map((field) => (
                <div key={field.id} className={`${styles.inputGroup} ${styles.half}`}>
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
              ))}
            </div>

            {/* --- REMAINING FIELDS --- */}
            {config.fields.slice(2).map((field) => {
              const isTextarea = field.type === "textarea";

              return (
                <div
                  key={field.id}
                  className={`${styles.inputGroup} ${styles.full}`}
                >
                  {isTextarea ? (
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
                  ) : (
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
                  )}
                </div>
              );
            })}

            <button
              type="submit"
              disabled={loading}
              className={styles.submitButton}
            >
              {loading && <span className={styles.loadingSpinner} />}
              {config.submitButtonText}
              {!loading && config.submitButtonIcon && (
                <span>{config.submitButtonIcon}</span>
              )}
            </button>
          </form>
        </div>

        {/* Map Section */}
        {config.showMap && config.mapLocation && (
          <div className={styles.mapSection}>
            <iframe
              title="Contact Location"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d${config.mapLocation.longitude}!3d${config.mapLocation.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${config.mapLocation.latitude}%2C${config.mapLocation.longitude}!5e0!3m2!1sen!2sus!4v`}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
