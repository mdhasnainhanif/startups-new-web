'use client';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './OfferPopup.module.css';
import Image from 'next/image';
import Button from '../Button';
import { ArrowRightIcon } from '../icons';
import { COMPANY_INFO } from '../../constants';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

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
                  <div className={styles.characterImage}>
                    <Image
                      src="/assets/images/offerpopup/1.webp"
                      alt="Character"
                      width={400}
                      height={500}
                      className={styles.characterImg}
                    />
                  </div>
                  <div className={styles.leftContent}>
                    <h2 className={styles.leftHeadline}>
                      <span className={styles.leftHeadlinePart1}>Supercharge Your</span>
                      <span className={styles.leftHeadlinePart2}>Entire Creative</span>
                      <span className={styles.leftHeadlinePart2}>Operations In 2026</span>
                    </h2>
                    <p className={styles.leftSubtitle}>
                      Unlock Startup Advisory's Biggest New Year Sale
                    </p>
                    <div className={styles.cursor}>
                      <Image
                        src="/assets/images/offerpopup/cursor.webp"
                        alt="Cursor"
                        width={80}
                        height={80}
                        className={styles.cursorImg}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.rightSection}>
                  <div className={styles.fireworks}></div>
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
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={formData.phone}
                        onChange={(value) => setFormData((prev) => ({ ...prev, phone: value || "" }))}
                        placeholder="Phone Number *"
                        className={styles.phoneInput}
                        numberInputProps={{
                          className: styles.phoneNumberInput,
                          required: true,
                        }}
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