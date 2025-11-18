"use client";

import React from "react";
import { ContactFormAddressProps } from "@/app/types/types";
import { contactFormAddressData } from "./data";
import styles from "./ContactFormAddress.module.css";

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
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    pinterest: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path
          d="M8 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm6 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm6 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
          fill="white"
        />
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="18.406" cy="5.594" r="0.6" />
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
      </svg>
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
                background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
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
