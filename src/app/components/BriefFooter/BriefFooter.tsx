"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./BriefFooter.module.css";
import { ArrowLeftIcon } from "@/app/icons";

interface BriefFooterProps {
  onBack: () => void;
  showBack: boolean;
}

export default function BriefFooter({ onBack, showBack }: BriefFooterProps) {
  const router = useRouter();

  const handleBack = () => {
    onBack();
  };

  if (!showBack) {
    return null;
  }

  return (
    <footer className={styles.briefFooter}>
      <div className={styles.footerContainer}>
        <Button
          type="button"
          onClick={handleBack}
          variant="primary"
          size="md"
          className={styles.backButton}
          icon={<ArrowLeftIcon />}
          iconPosition="left"
        >
          Back
        </Button>
      </div>
    </footer>
  );
}
