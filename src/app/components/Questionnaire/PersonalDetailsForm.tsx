"use client";

import { useState, useEffect } from "react";
import styles from "./Questionnaire.module.css";
import Button from "../Button";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface PersonalDetailsFormProps {
  onSubmit: (data: {
    name: string;
    contact: string;
    email: string;
  }) => void;
  onBack: () => void;
  isSubmitting: boolean;
  showBack?: boolean;
  initialData?: {
    name: string;
    contact: string;
    email: string;
  } | null;
  onDataChange?: (data: {
    name: string;
    contact: string;
    email: string;
  }) => void;
}

export default function PersonalDetailsForm({
  onSubmit,
  onBack,
  isSubmitting,
  showBack = true,
  initialData,
  onDataChange,
}: PersonalDetailsFormProps) {
  // Only use initialData for the initial state, don't sync back from it
  // This prevents overwriting user input when initialData changes
  // useState initializer only runs once on mount, so it won't overwrite user input
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    contact: initialData?.contact || "",
    email: initialData?.email || "",
  });

  // Save form data whenever it changes
  useEffect(() => {
    if (onDataChange) {
      onDataChange(formData);
    }
  }, [formData, onDataChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className={`${styles.stepContainer} ${styles.personalDetailsContainer}`}
    >
      <form onSubmit={handleSubmit} className={styles.personalDetailsForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
                disabled={isSubmitting}
              />
              {formData.name && formData.name.trim().length > 0 && (
                <span className={styles.filledIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#0fdac2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              )}
            </div>
          </div>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.contact}
                onChange={(value: string | undefined) => setFormData((prev) => ({ ...prev, contact: value || "" }))}
                placeholder="Enter Your Contact Number"
                className={`${styles.phoneInput} ${styles.formInputSmall} ${styles.greenInput}`}
                numberInputProps={{
                  className: styles.phoneNumberInput,
                  required: true,
                  autoComplete: "tel",
                  disabled: isSubmitting,
                }}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
              disabled={isSubmitting}
            />
            {formData.email && formData.email.trim().length > 0 && (
              <span className={styles.filledIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="#0fdac2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            )}
          </div>
        </div>
        
        <Button
          type="submit"
          variant="green"
          size="md"
          className="w-full flex justify-center items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        
        {showBack && (
          <button
            type="button"
            onClick={onBack}
            className={styles.backButton}
          >
            ← Back
          </button>
        )}
      </form>
    </div>
  );
}

