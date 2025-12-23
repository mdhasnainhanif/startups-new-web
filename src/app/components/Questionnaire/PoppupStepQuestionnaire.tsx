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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepHistory, setStepHistory] = useState<string[]>(["step-1"]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep("step-1");
      setAnswers({});
      setStepHistory(["step-1"]);
      setFadeIn(true);
    }
  }, [isOpen]);

  const handleOptionSelect = (stepId: string, value: string, nextStep: string) => {
    setAnswers((prev) => ({
      ...prev,
      [stepId]: value,
    }));

    const currentStepData = questionnaireData.steps.find((s) => s.id === stepId);
    const isMultiSelect = currentStepData?.multiSelect === true;
    const maxSelections = currentStepData?.maxSelections || 3;
    
    // Check if max selections reached (count comma-separated values)
    const selectionCount = value ? value.split(",").filter(v => v.trim()).length : 0;
    const maxReached = isMultiSelect && selectionCount >= maxSelections;
    
    // Navigate to next step
    if (nextStep) {
      // Auto-advance for single select OR when max selections reached in multi-select
      if (!isMultiSelect || maxReached) {
        setIsTransitioning(true);
        setFadeIn(false);
        
        // Wait for tick animation (600ms) then transition to next step
        setTimeout(() => {
          setStepHistory((prev) => {
            const lastStep = prev[prev.length - 1];
            if (lastStep !== nextStep) {
              return [...prev, nextStep];
            }
            return prev;
          });
          setCurrentStep(nextStep);
          
          setTimeout(() => {
            setFadeIn(true);
            setIsTransitioning(false);
          }, 50);
        }, 600);
      } else if (isMultiSelect && !maxReached) {
        // For multi-select with continue button (not max reached)
        setIsTransitioning(true);
        setFadeIn(false);
        
        setTimeout(() => {
          setStepHistory((prev) => {
            const lastStep = prev[prev.length - 1];
            if (lastStep !== nextStep) {
              return [...prev, nextStep];
            }
            return prev;
          });
          setCurrentStep(nextStep);
          
          setTimeout(() => {
            setFadeIn(true);
            setIsTransitioning(false);
          }, 50);
        }, 300);
      }
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
        // Clear cookies on successful submission
        if (typeof window !== "undefined") {
          try {
            // Clear all cookies
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i];
              const eqPos = cookie.indexOf("=");
              const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
              if (name) {
                // Clear cookie for current path
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
                // Clear cookie for current domain
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
                // Clear cookie for parent domain (if applicable)
                const hostnameParts = window.location.hostname.split(".");
                if (hostnameParts.length > 1) {
                  const parentDomain = "." + hostnameParts.slice(-2).join(".");
                  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${parentDomain}`;
                }
              }
            }
          } catch (error) {
            console.error("Error clearing cookies:", error);
          }
        }
        // Close popup and redirect to thank-you page
        onClose();
        window.location.href = "/thank-you";
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
  
  // Calculate progress
  const totalSteps = questionnaireData.steps.length + 1; // +1 for personal details form
  let currentStepNumber: number;
  let progressPercentage: number;
  
  if (currentStep === "questionnaire-personal-detail") {
    currentStepNumber = totalSteps;
    progressPercentage = 100;
  } else {
    const currentStepIndex = questionnaireData.steps.findIndex((s) => s.id === currentStep);
    currentStepNumber = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;
    progressPercentage = currentStepData?.progress || ((currentStepNumber / totalSteps) * 100);
  }

  return (
    <div className={styles.popupOverlay} onClick={handleClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          ×
        </button>
        
        <div className={styles.questionnaireWrapper}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={`${styles.mainHeading} lg:max-w-3xl`}>
              Just Tell Us What You Need & Get
              The <span className="text-[#0fdac2]">Best Price</span> Instantly!
            </h1>
            <div className={styles.separator}></div>
            
            {/* Progress Indicator */}
            <div className={styles.progressContainer}>
              <div className={styles.progressInfo}>
                <span className={styles.progressText}>
                  Step {currentStepNumber} of {totalSteps}
                </span>
              </div>
              <div className={styles.progressBar}>
                <div 
                  className={styles.progressBarFill}
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
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
                      selectedValue={currentStepData.multiSelect 
                        ? (answers[currentStepData.id] ? answers[currentStepData.id].split(",") : [])
                        : answers[currentStepData.id]
                      }
                      showBack={false}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        {/* Footer with Back Button - Outside scrollable area */}
        {(stepHistory.length > 1 || currentStep !== "step-1") && (
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
      </div>
    </div>
  );
}
