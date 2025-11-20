"use client";

import { GlobeIcon } from "../../Icons";
import Button from "../Button";
import Container from "../Container";
import styles from "./Contact.module.css";

export default function Contact() {
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
              <form className={styles.contactForm}>
                {/* Name and Email Row */}
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <input
                      type="text"
                      placeholder="Name*"
                      className={styles.inputField}
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <input
                      type="email"
                      placeholder="Email*"
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
                      placeholder="Phone Number*"
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
                      placeholder="Company Name*"
                      className={styles.inputField}
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formRow}>
                  <div className={styles.formFieldFull}>
                    <textarea
                      placeholder="Message*"
                      rows={5}
                      className={styles.textareaField}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <Button variant="green" type="submit" className="w-full text-center justify-center items-center">
                  <span>Submit</span>
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

