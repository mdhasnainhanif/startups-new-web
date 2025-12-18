"use client";

import { useState, useEffect } from "react";
import Container from "../Container";
import styles from "./PoppupStepQuestionnaire.module.css";
import { questionnaireData } from "./questionnaireData";
import QuestionnaireStep from "./QuestionnaireStep";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Button from "../Button";
import { ArrowLeftIcon } from "../../icons";

export interface QuestionnaireAnswers {
  [key: string]: string;
}

interface PoppupStepQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PoppupStepQuestionnaire({
  isOpen,
  onClose,
}: PoppupStepQuestionnaireProps) {
  const [currentStep, setCurrentStep] = useState<string>("step-1");
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepHistory, setStepHistory] = useState<string[]>(["step-1"]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep("step-1");
      setAnswers({});
      setShowThankYou(false);
      setStepHistory(["step-1"]);
      setFadeIn(true);
    }
  }, [isOpen]);

  const handleOptionSelect = (stepId: string, value: string, nextStep: string) => {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: value,
    }));

    // Navigate to next step with delay for tick animation
    if (nextStep) {
      setIsTransitioning(true);
      setFadeIn(false);
      
      // Wait for tick animation (600ms) then transition to next step
      setTimeout(() => {
        // Only add to history if it's a new step
        setStepHistory((prev) => {
          const lastStep = prev[prev.length - 1];
          if (lastStep !== nextStep) {
            return [...prev, nextStep];
          }
          return prev;
        });
        setCurrentStep(nextStep);
        
        // Fade in the next step
        setTimeout(() => {
          setFadeIn(true);
          setIsTransitioning(false);
        }, 50);
      }, 600);
    }
  };

  const handleBack = () => {
    setFadeIn(false);
    setTimeout(() => {
      // First try to use stepHistory
      if (stepHistory.length > 1) {
        const newHistory = [...stepHistory];
        newHistory.pop(); // Remove current step
        const previousStep = newHistory[newHistory.length - 1];
        
        // Ensure we're not going to the same step
        if (previousStep !== currentStep) {
          setStepHistory(newHistory);
          setCurrentStep(previousStep);
        } else if (newHistory.length > 1) {
          // If previous step is same, go one more step back
          newHistory.pop();
          const earlierStep = newHistory[newHistory.length - 1];
          setStepHistory(newHistory);
          setCurrentStep(earlierStep);
        }
      } else {
        // Fallback to backTo if available
        const currentStepData = questionnaireData.steps.find((s) => s.id === currentStep);
        if (currentStepData?.backTo) {
          const backToStep = currentStepData.backTo;
          if (backToStep !== currentStep) {
            setCurrentStep(backToStep);
            setStepHistory([backToStep]);
          }
        }
      }
      setTimeout(() => {
        setFadeIn(true);
      }, 50);
    }, 200);
  };

  const handlePersonalDetailsSubmit = async (formData: {
    name: string;
    contact: string;
    email: string;
    country: string;
  }) => {
    setIsSubmitting(true);
    try {
      // Combine all answers with personal details
      const submissionData = {
        ...answers,
        ...formData,
      };

      // Submit to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.contact,
          company: formData.country,
          message: JSON.stringify(submissionData, null, 2),
        }),
      });

      if (response.ok) {
        setShowThankYou(true);
        // Close popup after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  const currentStepData = questionnaireData.steps.find((s) => s.id === currentStep);

  return (
    <div className={styles.popupOverlay} onClick={handleClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          ×
        </button>
        
        {showThankYou ? (
          <div className={styles.thankYouArea}>
            <h1 className={styles.thankYouHeading}>Thank You!</h1>
            {/* <div className={styles.separator}></div> */}
            <div className={styles.thankYouMessage}>
              <h2 className={styles.thankYouSubheading}>
                We Will Get In Touch You Shortly
              </h2>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.questionnaireWrapper}>
              {/* Header */}
              <div className={styles.header}>
                <h1 className={styles.mainHeading}>
                  Just Tell Us What You Need & Get <br />
                  The Best Price Instantly!
                </h1>
                <div className={styles.separator}></div>
              </div>

              {/* Form Area */}
              <div className={styles.formArea}>
                {currentStep === "questionnaire-personal-detail" ? (
                  <PersonalDetailsForm
                    key="personal-details-form"
                    onSubmit={handlePersonalDetailsSubmit}
                    onBack={handleBack}
                    isSubmitting={isSubmitting}
                    showBack={false}
                  />
                ) : (
                  <>
                    {currentStepData && (
                      <div className={`${styles.stepWrapper} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
                        <QuestionnaireStep
                          key={currentStepData.id}
                          step={currentStepData}
                          onSelect={handleOptionSelect}
                          onBack={handleBack}
                          selectedValue={answers[currentStepData.id]}
                          showBack={false}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            
            {/* Footer with Back Button - Outside scrollable area */}
            {!showThankYou && (stepHistory.length > 1 || currentStep !== "step-1") && (
              <div className={styles.popupFooter}>
                <Button
                  type="button"
                  onClick={handleBack}
                  variant="primary"
                  size="md"
                  className={styles.footerBackButton}
                  icon={<ArrowLeftIcon />}
                  iconPosition="left"
                >
                  Back
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
