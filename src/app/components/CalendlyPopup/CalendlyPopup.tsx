"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./CalendlyPopup.module.css";

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;

  // same props you already use
  calLink?: string; // e.g. "inhouse-team-loexw9/30min"
  calOrigin?: string; // default cal.com (change only if self-hosted)
  layout?: "month_view" | "week_view" | "column_view";
}

export default function CalendlyPopup({
  isOpen,
  onClose,
  calLink = "inhouse-team-loexw9/30min",
  calOrigin = "https://cal.com",
  layout = "month_view",
}: CalendlyPopupProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock background scroll
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  const iframeSrc = useMemo(() => {
    // Cal embed parameters (simple + stable)
    const base = `${calOrigin.replace(/\/$/, "")}/${calLink.replace(/^\//, "")}`;
    const params = new URLSearchParams({
      embed: "1",
      layout,
    });
    return `${base}?${params.toString()}`;
  }, [calOrigin, calLink, layout]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close popup">
          ✕
        </button>

        <div className={styles.iframeWrap}>
          <iframe
            key={iframeSrc} // force reload when link changes
            src={iframeSrc}
            title="Schedule a call"
            className={styles.iframe}
            loading="eager"
            allow="camera; microphone; fullscreen; payment"
            // If you want extra safety, keep sandbox. If any issue, remove sandbox.
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
