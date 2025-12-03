"use client";

import React from "react";
import { ContactFormAddressProps } from "@/app/types/types";
import { contactFormAddressData } from "./data";
import styles from "./ContactFormAddress.module.css";
import { LinkedInIcon2, PinterestIcon, TwitterIcon } from "@/app/icons";

// Icon component - simple SVG-based icons
const IconComponent: React.FC<{ icon: string; className?: string }> = ({
  icon,
  className = "",
}) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    linkedin: (
      <LinkedInIcon2 />
    ),
    pinterest: (
      <PinterestIcon />
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="18.406" cy="5.594" r="0.6" />
      </svg>
    ),
    twitter: (
      <TwitterIcon />
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" />
      </svg>
    ),
  };

  return (
    <span className={`${styles.icon} ${className}`}>
      {iconMap[icon] || null}
    </span>
  );
};

const ContactFormAddress: React.FC<ContactFormAddressProps> = ({
  config = contactFormAddressData,
}) => {
  return (
    <div className={styles.container}>
      {/* Contact Items */}
      <div className={styles.itemsWrapper}>
        {config.items.map((item) => (
          <div key={item.id} className={styles.item}>
            <div
              className={styles.iconWrapper}
              style={{
                background: "#643BFF",
              }}
            >
              <IconComponent icon={item.icon} />
            </div>
            <div className={styles.content}>
              <div className={styles.label}>{item.label}</div>
              <div className={styles.value}>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      {config.socialLinks && config.socialLinks.length > 0 && (
        <div className={styles.socialLinksWrapper}>
          {config.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              style={{
                background:
                  link.id === "linkedin"
                    ? "#0077B5"
                    : link.id === "pinterest"
                      ? "#E60023"
                      : link.id === "instagram"
                        ? "linear-gradient(45deg, #F09433 0%, #E6683C 25%, #DC2743 50%, #CC2366 75%, #BC1888 100%)"
                        : link.id === "twitter"
                          ? "#000000"
                          : link.id === "facebook"
                            ? "#1877F2"
                            : "#666666",
              }}
              aria-label={link.label}
              title={link.label}
            >
              <IconComponent icon={link.icon} className={styles.socialIcon} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactFormAddress;
