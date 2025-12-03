"use client";

import { useState } from "react";
import { GlobeIcon } from "../../icons";
import Button from "../Button";
import Container from "../Container";
import styles from "./Contact.module.css";

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

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
        // Display detailed error message
        const errorMsg = data.details 
          ? `${data.error}: ${data.details}${data.code ? ` (Code: ${data.code})` : ''}`
          : data.error || "Failed to send message. Please try again.";
        setErrorMessage(errorMsg);
        console.error("API Error:", data);
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
          {/* Left Section - Information */}
          <div className={styles.leftSection}>
            <div className={styles.infoContent}>
              {/* Heading 1 */}
              <div className={styles.headingWithIcon}>
                <div className={styles.globeIcon}>
                  <GlobeIcon />
                </div>
                <h2 className={`${styles.heading1} max-w-lg`}>Tell Us Where You Are and Where You Want to Go</h2>
              </div>

              {/* Heading 2 */}
              <div className={styles.headingWithIcon}>
                <div className={styles.globeIcon}>
                  <GlobeIcon />
                </div>
                <h3 className={styles.heading2}>
                Share what you’re building and what you want to fix
                </h3>
              </div>

              <img src="/assets/images/contact-client.webp" className={`img-fluid ${styles.client_image}`}/>

              {/* Lorem Ipsum Text */}
              <p className={styles.descriptionText}>
              Tell us what you are working on and what challenges you want solved so we can guide you with clarity and next steps. Share as much detail as you like so our team can understand your goals and offer the best support possible for your business growth and needs today.
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className={styles.rightSection}>
            <div className={styles.formContent}>
              {/* Form Heading */}
              <h2 className={styles.formHeading}>
                Ready To <span className={styles.highlightText}>Connect</span>?
              </h2>

              {/* Form */}
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                {/* Name and Email Row */}
                <div className={styles.formRow}>
                  <div className={styles.formField}>
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
                  <div className={styles.formField}>
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

                {/* Phone Number */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      className={styles.inputField}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
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

                {/* Message */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
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

                {/* Success/Error Messages */}
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

                {/* Submit Button */}
                <Button 
                  variant="green" 
                  type="submit" 
                  className="w-full text-center justify-center items-center"
                  disabled={loading}
                >
                  <span>{loading ? "Sending..." : "Submit"}</span>
                  {!loading && (
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
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <img src="/assets/images/rocket1.webp" className={`img-fluid ${styles.rocket1}`}/>
    </section>
  );
}

