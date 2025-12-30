"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import styles from "./Contact.module.css";
import { submitEmail } from '../../lib/api/email';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {

      const response = await submitEmail(formData);

      if (response.ok) {
        setSuccessMessage("Thank you! Your message has been sent successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        console.error("API Error:", response);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`${styles.contactSection} sectionPadding`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contactCard}>
          <div className={styles.leftSection}>
            <div className={styles.infoContent}>
              <div className={styles.headingWithIcon}>
                <h2 className={`${styles.formHeading}`}>
                  Share what you're <span className={styles.highlightText}>building and what you</span> want to fix
                </h2>
              </div>
              <p className={`${styles.descriptionText} hidden md:block`}>
                Tell us what you are working on and what challenges you want solved so we can guide you with clarity and next steps.
              </p>
              <p className={`${styles.descriptionText2} hidden md:block`}>Share as much detail as you like so our team can understand your goals and offer the best support possible for your business growth and needs today.</p>
              <div className="flex flex-col gap-4 mt-[2.5rem] hidden md:flex">
                  <a href="tel:+13466269169" className="flex items-center gap-3 text-white">
                    <div className="rounded-full bg-[#2E2277] p-2 flex items-center justify-center">
                      <Image 
                        src="/assets/images/contact-icons/phone.svg" 
                        alt="Phone" 
                        width={18}
                        height={18}
                      />
                    </div>
                    +1 346-626-9169
                  </a>
                <a href="mailto:info@startupsadvisory.ai" className="flex items-center gap-3 text-white">
                  <div className="rounded-full bg-[#2E2277] p-2 flex items-center justify-center">
                    <Image 
                    src="/assets/images/contact-icons/email.svg" 
                    alt="Email" 
                    width={18}
                    height={18}
                  />
                  </div>
                  info@startupsadvisory.ai
                </a>
                <span className="flex items-center gap-3 text-white">
                  <div className="rounded-full bg-[#2E2277] p-2 flex items-center justify-center">
                  <Image 
                    src="/assets/images/contact-icons/location.svg" 
                    alt="Location" 
                    width={18}
                    height={18}
                  />
                  </div>
                  1007n Orange St, Wilmington, DE 19801, United States
                </span>
                </div>
              </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.formContent}>
              <h2 className={`${styles.formHeading} hidden md:block`}>
                Ready To <span className={styles.highlightText}>Connect</span>?
              </h2>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <div className={styles.inputWrapper}>
                      <div className={styles.inputIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className={styles.inputField}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <div className={styles.inputWrapper}>
                      <div className={styles.inputIcon}>
                        <Image 
                          src="/assets/images/contact-icons/email.svg" 
                          alt="Email" 
                          width={18}
                          height={18}
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className={styles.inputField}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <div className={`${styles.inputWrapper}`}>
                      {/* <div className={styles.inputIcon}>
                        <Image 
                          src="/assets/images/contact-icons/phone.svg" 
                          alt="Phone" 
                          width={18}
                          height={18}
                        />
                      </div> */}
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={formData.phone}
                        onChange={(value) => setFormData((prev) => ({ ...prev, phone: value || "" }))}
                        placeholder="Phone Number*"
                        className={styles.phoneInput}
                        numberInputProps={{
                          className: styles.phoneNumberInput,
                          required: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <div className={styles.inputWrapper}>
                      <div className={styles.inputIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name*"
                        className={styles.inputField}
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <div className={styles.inputWrapper}>
                      <div className={styles.inputIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <textarea
                        name="message"
                        placeholder="Message*"
                        rows={5}
                        className={styles.textareaField}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                {successMessage && (
                  <div style={{ color: "green", marginBottom: "1rem", fontSize: "0.9rem" }}>
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div style={{ color: "red", marginBottom: "1rem", fontSize: "0.9rem" }}>
                    {errorMessage}
                  </div>
                )}
                <Button
                  variant="green"
                  type="submit"
                  className="w-full text-center justify-center items-center"
                  disabled={loading}
                  icon={
                    !loading ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    ) : undefined
                  }
                  iconPosition="right"
                >
                  {loading ? "Sending..." : "Submit Your Query"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Image 
        src="/assets/images/rocket1.webp" 
        alt="Rocket" 
        width={500}
        height={500}
        className={`img-fluid ${styles.rocket1}`}
      />
    </section>
  );
}

