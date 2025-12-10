"use client";

import { useState } from "react";
import Container from "../Container";
import styles from "./Questionnaire.module.css";
import { questionnaireData } from "./questionnaireData";
import QuestionnaireStep from "./QuestionnaireStep";
import PersonalDetailsForm from "./PersonalDetailsForm";
import HeroBanner from "../HeroBanner/HeroBanner";
import { HERO_BANNER } from "../../constants";

export interface QuestionnaireAnswers {
  [key: string]: string;
}

export default function Questionnaire() {
  const [showSteps, setShowSteps] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>("step-1");
  const [answers, setAnswers] = useState<QuestionnaireAnswers>({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stepHistory, setStepHistory] = useState<string[]>(["step-1"]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const [heroBannerFadeOut, setHeroBannerFadeOut] = useState(false);

  const handleGetStarted = () => {
    // First fade out HeroBanner
    setHeroBannerFadeOut(true);
    // Then show steps after fade out animation
    setTimeout(() => {
      setShowSteps(true);
      setFadeIn(false);
      // Then fade in steps
      setTimeout(() => {
        setFadeIn(true);
      }, 50);
    }, 500); // Wait for fade out animation to complete
  };

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

  return (
    <div className="relative w-full">
      {!showSteps && (
        <div className={`w-full ${heroBannerFadeOut ? styles.fadeOut : styles.fadeIn}`}>
          <HeroBanner {...HERO_BANNER} onButtonClick={handleGetStarted} />
        </div>
      )}
      {showSteps && (
        <div className={`w-full ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
          <section className={styles.questionnaireSection}>
            <Container maxWidth="2xl" className={styles.container}>
              <div className={styles.questionnaireWrapper}>
                {/* Header */}
                <div className={styles.header}>
                  <h1 className={styles.mainHeading}>
                    Just Tell Us What You Need & Get <br />
                    The Best Price Instantly!
                  </h1>
                  <div className={styles.separator}></div>
                </div>

                {/* Progress Bar */}

                {/* Form Area */}
                <div className={styles.formArea}>
                  {currentStep === "questionnaire-personal-detail" ? (
                    <PersonalDetailsForm
                      key="personal-details-form"
                      onSubmit={handlePersonalDetailsSubmit}
                      onBack={handleBack}
                      isSubmitting={isSubmitting}
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
                            showBack={stepHistory.length > 1}
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
      )}
    </div>
  );
}

