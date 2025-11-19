import Link from "next/link";
import { ButtonProps, ButtonAsLink, ButtonAsButton } from "../types/types";
import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const iconElement = icon && <span>{icon}</span>;

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
  };

  // Apply size class
  combinedClasses += ` ${sizeClasses[size]}`;

  // Add custom className
  combinedClasses += ` ${className}`;

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
