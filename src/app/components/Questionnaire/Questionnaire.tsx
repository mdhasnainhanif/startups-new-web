"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import HeroBanner from "../HeroBanner/HeroBanner";
import { HERO_BANNER } from "../../constants";
import PoppupStepQuestionnaire from "./PoppupStepQuestionnaire";

export default function Questionnaire() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const buttonClickedRef = useRef(false);
  const popupTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Set up timer for popup after 40 seconds if button not clicked
  useEffect(() => {
    // Only set timer if button hasn't been clicked
    if (!buttonClickedRef.current) {
      popupTimerRef.current = setTimeout(() => {
        // Only show popup if button still hasn't been clicked
        if (!buttonClickedRef.current) {
          setShowPopup(true);
        }
      }, 40000); // 40 seconds
    }

    // Cleanup timer on unmount or when conditions change
    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
    };
  }, []);

  const handleGetStarted = () => {
    // Mark button as clicked
    buttonClickedRef.current = true;
    
    // Clear popup timer if it exists
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
      popupTimerRef.current = null;
    }
    
    // Close popup if it's open
    setShowPopup(false);
    
    // Navigate to brief page
    router.push("/brief");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative w-full">
      <HeroBanner {...HERO_BANNER} onButtonClick={handleGetStarted} isHomePage={true} />
      
      {/* Popup Questionnaire */}
      <PoppupStepQuestionnaire isOpen={showPopup} onClose={handleClosePopup} />
    </div>
  );
}

