"use client";

import { useState, useEffect } from "react";
import styles from "./Questionnaire.module.css";
import Button from "../Button";

interface PersonalDetailsFormProps {
  onSubmit: (data: {
    name: string;
    contact: string;
    email: string;
    country: string;
  }) => void;
  onBack: () => void;
  isSubmitting: boolean;
  showBack?: boolean;
  initialData?: {
    name: string;
    contact: string;
    email: string;
    country: string;
  } | null;
  onDataChange?: (data: {
    name: string;
    contact: string;
    email: string;
    country: string;
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
    country: initialData?.country || "",
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
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
              disabled={isSubmitting}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              required
              autoComplete="tel"
              className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
              disabled={isSubmitting}
            />
          </div>
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
            disabled={isSubmitting}
          />
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
            autoComplete="country-name"
            className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
            disabled={isSubmitting}
          />
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

