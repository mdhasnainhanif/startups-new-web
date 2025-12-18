"use client";

import { useState } from "react";
import Container from "../components/Container";
import styles from "../components/Questionnaire/Questionnaire.module.css";
import briefStyles from "./page.module.css";
import { questionnaireData } from "../components/Questionnaire/questionnaireData";
import QuestionnaireStep from "../components/Questionnaire/QuestionnaireStep";
import PersonalDetailsForm from "../components/Questionnaire/PersonalDetailsForm";
import BriefFooter from "../components/BriefFooter/BriefFooter";
import { useRouter } from "next/navigation";

export interface QuestionnaireAnswers {
  [key: string]: string;
}

export default function BriefPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<string>("step-1");
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepHistory, setStepHistory] = useState<string[]>(["step-1"]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);

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
        } else {
          // If no backTo and no history, go to home
          router.push("/");
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
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

  if (showThankYou) {
    return (
      <section className={`${styles.questionnaireSection} sectionPadding`}>
        <Container maxWidth="2xl" className={styles.container}>
          <div className={styles.thankYouArea}>
            <h1 className={styles.thankYouHeading}>Thank You!</h1>
            <div className={styles.separator}></div>
            <div className={styles.thankYouMessage}>
              <h2 className={styles.thankYouSubheading}>
                We Will Get In Touch You Shortly
              </h2>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  const showBackButton = stepHistory.length > 1 || currentStep !== "step-1";

  return (
    <>
      <div className={`relative w-full ${briefStyles.briefPage}`}>
        <div className={`w-full ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
          <section className={`${styles.questionnaireSection} ${briefStyles.questionnaireSection}`}>
            <Container maxWidth="2xl" className={styles.container}>
              <div className={`${styles.questionnaireWrapper} ${briefStyles.questionnaireWrapper}`}>
                {/* Header */}
                <div className={styles.header}>
                  <h1 className={styles.mainHeading}>
                    Just Tell Us What You Need & Get <br />
                    The Best Price Instantly!
                  </h1>
                  <div className={styles.separator}></div>
                  
                  {/* Progress Indicator */}
                  {!showThankYou && (
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
                  )}
                </div>

                {/* Form Area */}
                <div className={styles.formArea}>
                {currentStep === "questionnaire-personal-detail" ? (
                  <div>
                    <PersonalDetailsForm
                      key="personal-details-form"
                      onSubmit={handlePersonalDetailsSubmit}
                      onBack={handleBack}
                      isSubmitting={isSubmitting}
                      showBack={false}
                    />
                  </div>
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
            </Container>
          </section>
        </div>
      </div>
      <BriefFooter onBack={handleBack} showBack={showBackButton} />
    </>
  );
}
