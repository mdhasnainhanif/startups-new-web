'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './OfferPopup.module.css';
import Image from 'next/image';
import Button from '../Button';
import { ArrowRightIcon } from '../icons';

const avatars = [
  '/assets/images/avatar-without-icons/graphic-designer.webp',
  '/assets/images/avatar-without-icons/ui-ux-designer.webp',
  '/assets/images/avatar-without-icons/brand-designer.webp',
  '/assets/images/avatar-without-icons/video-animation.webp',
  '/assets/images/avatar-without-icons/content-writer.webp',
];

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [activeAvatar, setActiveAvatar] = useState(2); // Third avatar highlighted

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <>
      {/* Trigger Button - This will be added to header */}
      <button
        onClick={() => setIsOpen(true)}
        className={styles.triggerButton}
        aria-label="Open offer popup"
      >
        300+ Companies
      </button>

      {/* Popup Modal */}
      {isOpen &&
        createPortal(
          <div className={styles.overlay} onClick={() => setIsOpen(false)}>
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className={styles.closeButton}
                aria-label="Close popup"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Decorative Fireworks */}
              <div className={styles.fireworks}>
                <div className={styles.firework1}></div>
                <div className={styles.firework2}></div>
                <div className={styles.firework3}></div>
              </div>

              <div className={styles.modalContent}>
                {/* Left Section */}
                <div className={styles.leftSection}>
                  <div className={styles.leftBackground}>
                    <div className={styles.leftText}>
                      <p className={styles.leftSubtext}>Simplifying Access to Capital</p>
                      <p className={styles.leftAmount}>$25,321</p>
                    </div>
                  </div>
                  <div className={styles.avatarsSection}>
                    <div className={styles.avatarsContainer}>
                      {avatars.map((avatar, index) => (
                        <div
                          key={index}
                          className={`${styles.avatarWrapper} ${
                            index === activeAvatar ? styles.avatarActive : ''
                          }`}
                          onMouseEnter={() => setActiveAvatar(index)}
                        >
                          <div className={styles.avatarGlow}></div>
                          <Image
                            src={avatar}
                            alt={`Creative Director ${index + 1}`}
                            width={60}
                            height={60}
                            className={styles.avatar}
                          />
                          {index === activeAvatar && (
                            <div className={styles.cursor}>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#0fdac2"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className={styles.avatarsLabel}>Creative Directors</p>
                  </div>
                </div>

                {/* Right Section */}
                <div className={styles.rightSection}>
                  <div className={styles.logo}>
                    <span className={styles.logoPart1}>Startups</span>
                    <span className={styles.logoPart2}> ADVISORY</span>
                    <span className={styles.logoPart3}>.Ai</span>
                  </div>
                  <h2 className={styles.headline}>
                    <span className={styles.headlinePart1}>Supercharge your entire creative operations</span>
                    <span className={styles.headlinePart2}> in 2026</span>
                  </h2>
                  <p className={styles.subtitle}>
                    Unlock Startup Advisory's Biggest New Year Sale
                  </p>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Your email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="green"
                      icon={<ArrowRightIcon style={{ fill: "#000" }} />}
                      iconPosition="right"
                      className={styles.submitButton}
                    >
                      Unlock Offer
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default OfferPopup;

