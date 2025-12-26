"use client";

import { useState, useEffect } from "react";
import styles from "./Questionnaire.module.css";
import Button from "../Button";

// Countries list with name and value same
const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica",
  "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
              placeholder="Enter Your Name"
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
              placeholder="Enter Your Contact Number"
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
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
            disabled={isSubmitting}
          />
        </div>
        
        <div className={styles.formGroup}>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            autoComplete="country-name"
            className={`${styles.formInput} ${styles.formInputSmall} ${styles.greenInput}`}
            disabled={isSubmitting}
          >
            <option value="">Select Country</option>
            {COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* <div className={styles.formGroup}>
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
        </div> */}
        
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

