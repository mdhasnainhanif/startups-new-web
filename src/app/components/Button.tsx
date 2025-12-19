"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ButtonProps, ButtonAsLink, ButtonAsButton } from "../types/types";
import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  iconSpanClassName = "",
  iconPosition = "right",
  isDropdown = false,
  dropdownItems = [],
  selectedDropdownItem,
  onDropdownSelect,
  ...props
}: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const iconElement = icon && <span className={iconSpanClassName}>{icon}</span>;

  // Build classes based on variant
  let combinedClasses = `${styles.btnPrimary}`;

  if (variant === "purple") {
    combinedClasses += ` ${styles.purple}`;
  } else if (variant === "green") {
    combinedClasses += ` ${styles.green}`;
  }

  // Add size classes from CSS module
  const sizeClasses = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
    xl: styles.xl,
  };

  // Apply size class
  combinedClasses += ` ${sizeClasses[size]}`;

  // Add custom className
  combinedClasses += ` ${className}`;

  // Add disabled cursor class for all buttons
  if ('disabled' in props && props.disabled) {
    combinedClasses += ` cursor-not-allowed`;
  }

  // Add dropdown class if dropdown
  if (isDropdown) {
    combinedClasses += ` ${styles.dropdownButton}`;
  }

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownItemClick = (item: typeof dropdownItems[0]) => {
    if (onDropdownSelect) {
      onDropdownSelect(item);
    }
    if (item.onClick) {
      item.onClick();
    }
    setIsOpen(false);
  };

  // Get display text for dropdown button
  const getButtonText = () => {
    if (isDropdown && selectedDropdownItem) {
      return selectedDropdownItem;
    }
    return children;
  };

  // Dropdown button
  if (isDropdown) {
    return (
      <div className={styles.dropdownWrapper} ref={dropdownRef}>
        <button
          className={`${combinedClasses} ${isOpen ? styles.dropdownOpen : ""}`}
          onClick={handleDropdownToggle}
          {...(props as ButtonAsButton)}
        >
          {iconPosition === "left" && iconElement}
          {getButtonText()}
          {iconPosition === "right" && iconElement}
          <svg
            className={styles.dropdownArrow}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && dropdownItems.length > 0 && (
          <div className={styles.dropdownMenu}>
            {dropdownItems.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={styles.dropdownItem}
                    onClick={() => handleDropdownItemClick(item)}
                  >
                    {item.icon && <span className={styles.dropdownItemIcon}>{item.icon}</span>}
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={styles.dropdownItem}
                    onClick={() => handleDropdownItemClick(item)}
                  >
                    {item.icon && <span className={styles.dropdownItemIcon}>{item.icon}</span>}
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Regular button or link
  if ("href" in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {iconPosition === "left" && iconElement}
        {children}
        {iconPosition === "right" && iconElement}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={combinedClasses} {...buttonProps}>
      {iconPosition === "left" && iconElement}
      {children}
      {iconPosition === "right" && iconElement}
    </button>
  );
}
