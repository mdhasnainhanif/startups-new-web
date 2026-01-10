"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import styles from "./BriefFooter.module.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@/app/icons";

interface BriefFooterProps {
  onBack: () => void;
  showBack: boolean;
  onContinue?: () => void;
  continueDisabled?: boolean;
  showContinue?: boolean;
}

export default function BriefFooter({ 
  onBack, 
  showBack, 
  onContinue,
  continueDisabled = false,
  showContinue = false
}: BriefFooterProps) {
  const router = useRouter();

  const handleBack = () => {
    onBack();
  };

  if (!showBack && !showContinue) {
    return null;
  }

  return (
    <footer className={styles.briefFooter}>
      <div className={styles.footerContainer}>
        {showBack && (
          <Button
            type="button"
            onClick={handleBack}
            variant="green"
            size="md"
            className={styles.backButton}
            icon={<ArrowLeftIcon style={{ fill: "#000" }} />}
            iconPosition="left"
          >
            Back
          </Button>
        )}
        {showContinue && (
          <Button
            type="button"
            onClick={onContinue}
            variant="green"
            size="md"
            className={`${styles.continueButton} ${continueDisabled ? styles.disabled : ''}`}
            icon={<ArrowRightIcon style={{ fill: "#000" }} />}
            iconPosition="right"
            disabled={continueDisabled}
          >
            Continue
          </Button>
        )}
      </div>
    </footer>
  );
}
