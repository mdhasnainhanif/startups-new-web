'use client';

import React, { useState } from 'react';
import Container from '../Container';
import styles from './ContactTwo.module.css';

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
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum. Lorem Ipsum",
    text2:
      "Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    image: {
      src: '/assets/images/graph.png',
      alt: 'Growth Chart',
    },
  },
  rightSection: {
    heading: {
      part1: 'Ready To ',
      highlight: 'Connect',
    },
    form: {
      fields: {
        name: 'Name*',
        email: 'Email*',
        phone: 'Phone Number*',
        company: 'Company Name*',
        message: 'Message*',
      },
      submitButton: {
        text: 'Submit',
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
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  const { leftSection, rightSection } = CONTACT_TWO_DATA;

  return (
    <section className={`${styles.contactSection} sectionPadding ${styles.noPaddingBottom}`}>
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
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.submitButton}>
                  <span>{rightSection.form.submitButton.text}</span>
                  {rightSection.form.submitButton.icon && (
                    <span className="inline-flex items-center">
                      {rightSection.form.submitButton.icon}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactTwo;

