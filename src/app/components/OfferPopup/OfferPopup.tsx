'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './OfferPopup.module.css';
import Image from 'next/image';
import Button from '../Button';
import { ArrowRightIcon } from '../icons';
import { COMPANY_INFO } from '../../constants';

const avatars = [
  '/assets/images/avatar-without-icons/graphic-designer.webp',
  '/assets/images/avatar-without-icons/ui-ux-designer.webp',
  '/assets/images/avatar-without-icons/brand-designer.webp',
  '/assets/images/avatar-without-icons/video-animation.webp',
  '/assets/images/avatar-without-icons/content-writer.webp',
];

interface OfferPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
  showTrigger?: boolean;
}

const OfferPopup = ({ isOpen: externalIsOpen, onClose: externalOnClose, showTrigger = false }: OfferPopupProps = {}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
  });
  const [activeAvatar, setActiveAvatar] = useState(2);
  
  // Use external control if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  
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
        if (externalOnClose) {
          externalOnClose();
        } else {
          setInternalIsOpen(false);
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, externalOnClose]);
  
  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    handleClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  if (!mounted) return null;
  return (
    <>
      {showTrigger && (
        <button
          onClick={() => setInternalIsOpen(true)}
          className={styles.triggerButton}
          aria-label="Open offer popup"
        >
          300+ Companies
        </button>
      )}
      {isOpen &&
        createPortal(
          <div className={styles.overlay} onClick={handleClose}>
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
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
              <div className={styles.modalContent}>
                <div className={styles.leftSection}>
                  <div className={styles.leftBackground}>
                    <div className={styles.leftText}>
                      <p className={styles.leftSubtext}>Simplifying Access to Capital</p>
                      <p className={styles.leftAmount}>$25,321</p>
                    </div>
                  </div>
                  <div className={styles.leftContent}>
                    <h2 className={styles.leftHeadline}>
                      <span className={styles.leftHeadlinePart1}>Supercharge your</span>
                      <span className={styles.leftHeadlinePart2}>entire creative</span>
                      <span className={styles.leftHeadlinePart2}>operations in 2026</span>
                    </h2>
                    <p className={styles.leftSubtitle}>
                      Unlock Startup Advisory's Biggest New Year Sale
                    </p>
                    <div className={styles.characterImage}>
                      <Image
                        src="/assets/images/popup-character.webp"
                        alt="Creative character"
                        width={200}
                        height={300}
                        className={styles.characterImg}
                        onError={(e) => {
                          // Hide image if not found
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className={styles.cursor}>
                      <div className={styles.cursorBackground}></div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#0fdac2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.cursorIcon}
                      >
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.rightSection}>
                  <div className={styles.fireworks}>
                    <div className={styles.firework1}></div>
                    <div className={styles.firework2}></div>
                    <div className={styles.firework3}></div>
                  </div>
                  <div className={styles.logo}>
                    <Image
                      src={COMPANY_INFO.logo}
                      alt="Startups ADVISORY.Ai Logo"
                      width={140}
                      height={40}
                      loading="lazy"
                      style={{ objectFit: "contain" }}
                      className={styles.logoImage}
                    />
                  </div>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="Email *"
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="company" className={styles.label}>
                        Your Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="Your Company *"
                        required
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="Phone Number *"
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