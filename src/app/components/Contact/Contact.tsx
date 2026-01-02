"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import styles from "./Contact.module.css";
import { submitEmail } from '../../lib/api/email';
import CustomPhoneInput from '../ContactPage/ContactForm/CustomPhoneInput';
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
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", response, errorData);
        setErrorMessage(errorData.message || "Failed to send message. Please try again.");
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
                  <a href="tel:+923172016810" className="flex items-center gap-3 text-white">
                    <div className="rounded-full bg-[#2E2277] p-2 flex items-center justify-center">
                      <Image 
                        src="/assets/images/contact-icons/phone.svg" 
                        alt="Phone" 
                        width={18}
                        height={18}
                      />
                    </div>
                    +92 317 2016810
                  </a>
                <a href="mailto:habib.developer8899@gmail.com" className="flex items-center gap-3 text-white">
                  <div className="rounded-full bg-[#2E2277] p-2 flex items-center justify-center">
                    <Image 
                    src="/assets/images/contact-icons/email.svg" 
                    alt="Email" 
                    width={18}
                    height={18}
                  />
                  </div>
                  habib.developer8899@gmail.com
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
                  Shop No MC39 Green Town Shah faisal colony No3 Karachi (Near Shahzad Medical)
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
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
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
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
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
                      <CustomPhoneInput
                        value={formData.phone}
                        onChange={(value: string | undefined) => setFormData((prev) => ({ ...prev, phone: value || "" }))}
                        defaultCountry="PK"
                        placeholder="Phone Number*"
                        required={true}
                        disabled={loading}
                        className={styles.phoneInput}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <div className={styles.inputWrapper}>
                      <div className={styles.inputIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
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
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
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

