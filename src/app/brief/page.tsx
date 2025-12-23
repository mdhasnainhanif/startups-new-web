"use client";

import { useState, useEffect } from "react";
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

const STORAGE_KEY = "brief-progress";

interface SavedProgress {
  currentStep: string;
  answers: QuestionnaireAnswers;
  stepHistory: string[];
  personalDetails?: {
    name: string;
    contact: string;
    email: string;
    country: string;
  };
}

// Function to get initial state from localStorage synchronously
function getInitialState() {
  if (typeof window === "undefined") {
    return {
      currentStep: "step-1",
      answers: {} as QuestionnaireAnswers,
      stepHistory: ["step-1"],
      personalDetails: null as {
        name: string;
        contact: string;
        email: string;
        country: string;
      } | null,
    };
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const progress: SavedProgress = JSON.parse(saved);
      return {
        currentStep: progress.currentStep || "step-1",
        answers: progress.answers || {},
        stepHistory: progress.stepHistory && progress.stepHistory.length > 0 
          ? progress.stepHistory 
          : ["step-1"],
        personalDetails: progress.personalDetails || null,
      };
    }
  } catch (error) {
    console.error("Error restoring progress:", error);
  }

  return {
    currentStep: "step-1",
    answers: {} as QuestionnaireAnswers,
    stepHistory: ["step-1"],
    personalDetails: null as {
      name: string;
      contact: string;
      email: string;
      country: string;
    } | null,
  };
}

export default function BriefPage() {
  const router = useRouter();
  const initialState = getInitialState();
  const [currentStep, setCurrentStep] = useState<string>(initialState.currentStep);
  const [answers, setAnswers] = useState<QuestionnaireAnswers>(initialState.answers);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepHistory, setStepHistory] = useState<string[]>(initialState.stepHistory);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  // Initialize immediately - state is already loaded synchronously from localStorage
  const [isInitialized, setIsInitialized] = useState(typeof window !== "undefined");
  const [savedPersonalDetails, setSavedPersonalDetails] = useState<{
    name: string;
    contact: string;
    email: string;
    country: string;
  } | null>(initialState.personalDetails);

  // Ensure initialized state is set on client-side
  useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized]);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    if (!isInitialized || typeof window === "undefined") return;
    
    try {
      const progress: SavedProgress = {
        currentStep,
        answers,
        stepHistory,
        ...(savedPersonalDetails && { personalDetails: savedPersonalDetails }),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  }, [currentStep, answers, stepHistory, savedPersonalDetails, isInitialized]);

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
        // Clear saved progress and cookies on successful submission
        if (typeof window !== "undefined") {
          try {
            // Clear localStorage
            localStorage.removeItem(STORAGE_KEY);
            
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
            console.error("Error clearing progress and cookies:", error);
          }
        }
        // Redirect to thank-you page
        router.push("/thank-you");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePersonalDetailsChange = (formData: {
    name: string;
    contact: string;
    email: string;
    country: string;
  }) => {
    setSavedPersonalDetails(formData);
  };

  const currentStepData = questionnaireData.steps.find((s) => s.id === currentStep);
  
  // Calculate total steps (needed for both initialized and non-initialized states)
  const totalSteps = questionnaireData.steps.length + 1; // +1 for personal details form
  
  // Calculate progress
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


  const showBackButton = stepHistory.length > 1 || currentStep !== "step-1";

  return (
    <>
      <div className={`relative w-full ${briefStyles.briefPage}`}>
        {/* Remove fade wrapper - load state directly without animation */}
        <section className={`${styles.questionnaireSection} ${briefStyles.questionnaireSection}`}>
          <Container maxWidth="2xl" className={styles.container}>
            <div className={`${styles.questionnaireWrapper} ${briefStyles.questionnaireWrapper}`}>
              {/* Header - Always visible, fixed position */}
              <div className={styles.header}>
                <h1 className={styles.mainHeading}>
                  Just Tell Us What You Need & Get
                  The <span className="text-[#0fdac2]">Best Price</span> Instantly
                </h1>
                <div className={styles.separator}></div>
                
                {/* Progress Indicator - only show when initialized */}
                {isInitialized && (
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

              {/* Form Area - Only show content when initialized */}
              <div className={styles.formArea}>
                {!isInitialized ? (
                  // Empty state while loading - maintains layout
                  <div style={{ minHeight: '400px' }}></div>
                ) : (
                  <>
                    {currentStep === "questionnaire-personal-detail" ? (
                      <div>
                        <PersonalDetailsForm
                          key="personal-details-form"
                          onSubmit={handlePersonalDetailsSubmit}
                          onBack={handleBack}
                          isSubmitting={isSubmitting}
                          showBack={false}
                          initialData={savedPersonalDetails}
                          onDataChange={handlePersonalDetailsChange}
                        />
                      </div>
                    ) : (
                      <>
                        {currentStepData && (
                          <div className={styles.stepWrapper}>
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
                  </>
                )}
              </div>
            </div>
          </Container>
        </section>
      </div>
      <BriefFooter onBack={handleBack} showBack={isInitialized ? showBackButton : false} />
    </>
  );
}
