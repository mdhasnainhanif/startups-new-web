"use client";

import React, { useState } from "react";
import Container from "../Container";
import styles from "./ContactTwo.module.css";
import Button from "../Button";

interface ContactTwoData {
  leftSection: {
    text1: string;
    text2: string;
    image: {
      src: string;
      alt: string;
    };
  };
  rightSection: {
    heading: {
      part1: string;
      highlight: string;
    };
    form: {
      fields: {
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
      };
      submitButton: {
        text: string;
        icon?: React.ReactNode;
      };
    };
  };
}

const CONTACT_TWO_DATA: ContactTwoData = {
  leftSection: {
    text1:
      "Got questions or need a clear next step? Drop your details and get the answers that move your business forward. Simple. Fast. Straight to the point.",
    text2:
      "Use this form to reach the team that gives you direction, solves your blockers, and shows you what to do next without wasting time.",
    image: {
      src: "/assets/images/graph.png",
      alt: "Growth Chart",
    },
  },
  rightSection: {
    heading: {
      part1: "Ready To ",
      highlight: "Connect",
    },
    form: {
      fields: {
        name: "Name*",
        email: "Email*",
        phone: "Phone Number*",
        company: "Company Name*",
        message: "Message*",
      },
      submitButton: {
        text: "Submit",
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        ),
      },
    },
  },
};

const ContactTwo = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const { leftSection, rightSection } = CONTACT_TWO_DATA;

  return (
    <section className={`${styles.contactSection} sectionPadding`}>
      <Container maxWidth="xl" className="px-0">
        <div className={styles.contactCard}>
          {/* Left Section - Text and Image */}
          <div className={styles.leftSection}>
            <div className={styles.infoContent}>
              {/* Text 1 */}
              <p className={styles.descriptionText}>{leftSection.text1}</p>

              {/* Graph Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={leftSection.image.src}
                  alt={leftSection.image.alt}
                  className={styles.graphImage}
                />
              </div>

              {/* Text 2 */}
              <p className={styles.descriptionText}>{leftSection.text2}</p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className={styles.rightSection}>
            <div className={styles.formContent}>
              {/* Form Heading */}
              <h2 className={styles.formHeading}>
                {rightSection.heading.part1}
                <span className={styles.highlightText}>
                  {rightSection.heading.highlight}
                </span>
                ?
              </h2>

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

              {/* Form */}
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                {/* Name and Email Row */}
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={rightSection.form.fields.name}
                      className={styles.inputField}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className={styles.formField}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={rightSection.form.fields.email}
                      className={styles.inputField}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={rightSection.form.fields.phone}
                      className={styles.inputField}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={rightSection.form.fields.company}
                      className={styles.inputField}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={rightSection.form.fields.message}
                      rows={5}
                      className={styles.textareaField}
                      required
                      disabled={loading}
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  variant="green"
                  size="lg"
                  type="submit"
                  className="w-full text-center justify-center items-center"
                  disabled={loading}
                >
                  <span>{loading ? "Sending..." : rightSection.form.submitButton.text}</span>
                  {!loading && rightSection.form.submitButton.icon && (
                    <span className="inline-flex items-center">
                      {rightSection.form.submitButton.icon}
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactTwo;
