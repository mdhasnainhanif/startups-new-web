"use client";

import { useState, useEffect } from "react";
import Container from "../Container";
import styles from "./PoppupStepQuestionnaire.module.css";
import { questionnaireData } from "./questionnaireData";
import QuestionnaireStep from "./QuestionnaireStep";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Button from "../Button";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons";
import { submitBriefEmail } from '../../lib/api/email';
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
    
    // If nextStep is provided, advance to next step
    // For single select: nextStep is always provided on click (auto-advance)
    // For multiple select: nextStep is only provided when Continue button is clicked
    if (nextStep) {
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
      }, 600);
    }
  };
  const handleBack = () => {
    setFadeIn(false);
    setTimeout(() => {
      if (stepHistory.length > 1) {
        const newHistory = [...stepHistory];
        newHistory.pop(); 
        const previousStep = newHistory[newHistory.length - 1];    
        if (previousStep !== currentStep) {
          setStepHistory(newHistory);
          setCurrentStep(previousStep);
        } else if (newHistory.length > 1) {
          newHistory.pop();
          const earlierStep = newHistory[newHistory.length - 1];
          setStepHistory(newHistory);
          setCurrentStep(earlierStep);
        }
      } else {
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
  }) => {
    setIsSubmitting(true);
    try {
      const submissionData = {
        ...answers,
        ...formData,
      };

   // Combine all answers with personal details
      const submissionPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.contact,
        company: "",
        message: JSON.stringify(submissionData),
        title: "Brief request from website",
      };
      // Submit to API
      const response = await submitBriefEmail(submissionPayload);

      if (response.ok) {
        
        if (typeof window !== "undefined") {
          try {
            
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i];
              const eqPos = cookie.indexOf("=");
              const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
              if (name) {
                
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
                
                document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
                
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
        
        onClose();
        window.location.href = "/key-growth";
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
  
  
  const totalSteps = questionnaireData.steps.length + 1; 
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
      <div className={`${styles.popupContent} popup-questionnaire`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          ×
        </button>
        
        <div className={styles.questionnaireWrapper}>
          {/* Header - Heading/Title and Progress Indicator */}
          <div className={styles.header}>
            {currentStep === "questionnaire-personal-detail" ? (
              <h2 className={styles.personalDetailsHeading}>
                Just Tell Us What You Need & Get The <span className={styles.highlightText}>Best Price</span> Instantly
              </h2>
            ) : (
              currentStepData && (
                <h2 className={styles.stepTitle}>{currentStepData.title}</h2>
              )
            )}
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
          <div className={`${styles.formArea} ${currentStep === "questionnaire-personal-detail" ? styles.formAreaLastStep : ""}`}>
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
                      selectedValue={
                        currentStepData.multiSelect
                          ? (answers[currentStepData.id] 
                              ? (() => {
                                  try {
                                    const parsed = JSON.parse(answers[currentStepData.id]);
                                    return Array.isArray(parsed) ? parsed : [];
                                  } catch {
                                    // Fallback for old format (comma-separated)
                                    return answers[currentStepData.id].split(",").filter(v => v.trim());
                                  }
                                })()
                              : [])
                          : answers[currentStepData.id]
                      }
                      showBack={currentStep !== "step-1"}
                      hideButtons={true}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        {/* Fixed Buttons at Bottom */}
        {currentStep !== "questionnaire-personal-detail" && currentStepData && (
          <div className={styles.fixedButtonsContainer}>
            {currentStep !== "step-1" && (
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
            )}
            <Button
              onClick={() => {
                // Prevent multiple clicks during transition
                if (isTransitioning) return;
                
                const nextStep = currentStepData.options[0]?.nextStep;
                if (nextStep) {
                  if (currentStepData.multiSelect) {
                    const currentAnswer = answers[currentStepData.id];
                    let selectedValues: string[] = [];
                    if (currentAnswer) {
                      try {
                        const parsed = JSON.parse(currentAnswer);
                        selectedValues = Array.isArray(parsed) ? parsed : [];
                      } catch {
                        selectedValues = currentAnswer.split(",").filter(v => v.trim());
                      }
                    }
                    const currentValue = JSON.stringify(selectedValues);
                    handleOptionSelect(currentStepData.id, currentValue, nextStep);
                  } else {
                    const selectedValue = answers[currentStepData.id] || '';
                    handleOptionSelect(currentStepData.id, selectedValue, nextStep);
                  }
                }
              }}
              variant="primary"
              size="md"
              className={styles.continueButton}
              icon={<ArrowRightIcon />}
              iconPosition="right"
              disabled={
                isTransitioning ||
                (currentStepData.multiSelect
                  ? (() => {
                      // For multiple select: disabled when no selections
                      const currentAnswer = answers[currentStepData.id];
                      if (!currentAnswer) return true;
                      try {
                        const parsed = JSON.parse(currentAnswer);
                        return !Array.isArray(parsed) || parsed.length === 0;
                      } catch {
                        return currentAnswer.split(",").filter(v => v.trim()).length === 0;
                      }
                    })()
                  : (() => {
                      // For single select: disabled when no selection, enabled when selection exists (for back navigation)
                      const answer = answers[currentStepData.id];
                      return !answer || answer.trim() === "";
                    })())
              }
            >
              Continue
            </Button>
          </div>
        )}
        
        {/* Fixed Back Button for Last Step (Personal Details) */}
        {currentStep === "questionnaire-personal-detail" && stepHistory.length > 1 && (
          <div className={styles.fixedButtonsContainer}>
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
        )}
      </div>
    </div>
  );
}
