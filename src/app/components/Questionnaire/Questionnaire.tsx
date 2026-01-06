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

  
  useEffect(() => {
    
    if (!buttonClickedRef.current) {
      popupTimerRef.current = setTimeout(() => {
        
        if (!buttonClickedRef.current) {
          setShowPopup(true);
        }
      }, 40000); 
    }

    
    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
        popupTimerRef.current = null;
      }
    };
  }, []);

  const handleGetStarted = () => {
    
    buttonClickedRef.current = true;
    
    
    if (popupTimerRef.current) {
      clearTimeout(popupTimerRef.current);
      popupTimerRef.current = null;
    }
    
    
    setShowPopup(false);
    
    
    router.push("/brief");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative w-full">
      <HeroBanner {...HERO_BANNER} onButtonClick={handleGetStarted} isHomePage={true} />
      <PoppupStepQuestionnaire isOpen={showPopup} onClose={handleClosePopup} />
    </div>
  );
}

