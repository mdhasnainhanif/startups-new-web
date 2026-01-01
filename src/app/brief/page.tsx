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
import { submitBriefEmail } from '../lib/api/email';
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
  };
}
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
  const [isInitialized, setIsInitialized] = useState(typeof window !== "undefined");
  const [savedPersonalDetails, setSavedPersonalDetails] = useState<{
    name: string;
    contact: string;
    email: string;
  } | null>(initialState.personalDetails);
  useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized]);
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
        } else {
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
        message: JSON.stringify(submissionData, null, 2),
        title: "Brief request from website",
      };
      // Submit to API
      const response = await submitBriefEmail(submissionPayload);
      if (response.ok) {
        if (typeof window !== "undefined") {
          try {
            localStorage.removeItem(STORAGE_KEY);   
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
            console.error("Error clearing progress and cookies:", error);
          }
        }
        router.push("/key-growth");
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
  }) => {
    setSavedPersonalDetails(formData);
  };
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
  const showBackButton = stepHistory.length > 1 || currentStep !== "step-1";
  return (
    <>
      <div className={`relative w-full ${briefStyles.briefPage}`}>
        <section className={`${styles.questionnaireSection} ${briefStyles.questionnaireSection}`}>
          <Container maxWidth="2xl" className={styles.container}>
            <div className={`${styles.questionnaireWrapper} ${briefStyles.questionnaireWrapper}`}>
              {isInitialized && (
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
              )}
              <div className={styles.formArea}>
                {!isInitialized ? (
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
                                ? (() => {
                                    const answer = answers[currentStepData.id];
                                    if (!answer || answer.trim() === "") {
                                      return [];
                                    }
                                    // Always try JSON first
                                    try {
                                      const parsed = JSON.parse(answer);
                                      if (Array.isArray(parsed)) {
                                        return parsed;
                                      }
                                      return [];
                                    } catch {
                                      // If not JSON, check if it's step 7 (has values with commas)
                                      // For step 7, never use comma-separated - return empty to force re-selection
                                      if (currentStepData.id === "step-7") {
                                        return [];
                                      }
                                      // For other steps, try comma-separated as fallback
                                      const splitValues = answer.split(",").map(v => v.trim()).filter(v => v !== "");
                                      return splitValues;
                                    }
                                  })()
                                : answers[currentStepData.id]
                              }
                              showBack={false}
                              hideButtons={true}
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
      {/* Footer with Back and Continue buttons */}
      {isInitialized && currentStepData && (
        <BriefFooter 
          onBack={handleBack} 
          showBack={showBackButton && currentStep !== "step-1"}
          showContinue={true}
          continueDisabled={
            currentStepData.multiSelect
              ? (() => {
                  // For multiple select: disabled when no selections
                  const answer = answers[currentStepData.id];
                  if (!answer || answer.trim() === "") return true;
                  try {
                    const parsed = JSON.parse(answer);
                    return !Array.isArray(parsed) || parsed.length === 0;
                  } catch {
                    // Fallback for old format
                    const splitValues = answer.split(",").filter(v => v.trim());
                    return splitValues.length === 0;
                  }
                })()
              : (() => {
                  // For single select: disabled when no selection, enabled when selection exists (for back navigation)
                  const answer = answers[currentStepData.id];
                  return !answer || answer.trim() === "";
                })()
          }
          onContinue={() => {
            const nextStep = currentStepData.options[0]?.nextStep;
            if (nextStep) {
              if (currentStepData.multiSelect) {
                const answer = answers[currentStepData.id];
                const currentValue = answer || JSON.stringify([]);
                handleOptionSelect(currentStepData.id, currentValue, nextStep);
              } else {
                const selectedValue = answers[currentStepData.id] || '';
                handleOptionSelect(currentStepData.id, selectedValue, nextStep);
              }
            }
          }}
        />
      )}
      
      {/* Back Button for Last Step (Personal Details) on Brief Page */}
      {isInitialized && currentStep === "questionnaire-personal-detail" && stepHistory.length > 1 && (
        <BriefFooter 
          onBack={handleBack} 
          showBack={true}
          showContinue={false}
        />
      )}
    </>
  );
}
