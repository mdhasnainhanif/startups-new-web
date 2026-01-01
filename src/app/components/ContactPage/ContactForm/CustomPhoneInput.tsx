"use client";

import React, { useState, useRef, useEffect } from "react";
import CustomCountrySelect from "./CustomCountrySelect";
import styles from "./ContactForm.module.css";

interface CustomPhoneInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  defaultCountry?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function CustomPhoneInput({
  value,
  onChange,
  defaultCountry = "PK",
  placeholder = "Phone number",
  required = false,
  disabled = false,
  className = "",
}: CustomPhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const phoneInputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [phoneInputWidth, setPhoneInputWidth] = useState<number | undefined>();

  // Get country data (simplified - you might want to import from a shared file)
  const getCountryData = (countryCode: string) => {
    const countries: Record<string, { callingCode: string }> = {
      US: { callingCode: "1" },
      GB: { callingCode: "44" },
      CA: { callingCode: "1" },
      AU: { callingCode: "61" },
      DE: { callingCode: "49" },
      FR: { callingCode: "33" },
      IT: { callingCode: "39" },
      ES: { callingCode: "34" },
      NL: { callingCode: "31" },
      BE: { callingCode: "32" },
      AT: { callingCode: "43" },
      CH: { callingCode: "41" },
      SE: { callingCode: "46" },
      NO: { callingCode: "47" },
      DK: { callingCode: "45" },
      FI: { callingCode: "358" },
      PL: { callingCode: "48" },
      PT: { callingCode: "351" },
      GR: { callingCode: "30" },
      IE: { callingCode: "353" },
      CZ: { callingCode: "420" },
      HU: { callingCode: "36" },
      RO: { callingCode: "40" },
      BG: { callingCode: "359" },
      HR: { callingCode: "385" },
      SK: { callingCode: "421" },
      SI: { callingCode: "386" },
      LT: { callingCode: "370" },
      LV: { callingCode: "371" },
      EE: { callingCode: "372" },
      CY: { callingCode: "357" },
      MT: { callingCode: "356" },
      LU: { callingCode: "352" },
      IS: { callingCode: "354" },
      JP: { callingCode: "81" },
      CN: { callingCode: "86" },
      IN: { callingCode: "91" },
      KR: { callingCode: "82" },
      SG: { callingCode: "65" },
      MY: { callingCode: "60" },
      TH: { callingCode: "66" },
      ID: { callingCode: "62" },
      PH: { callingCode: "63" },
      VN: { callingCode: "84" },
      TW: { callingCode: "886" },
      HK: { callingCode: "852" },
      NZ: { callingCode: "64" },
      ZA: { callingCode: "27" },
      BR: { callingCode: "55" },
      MX: { callingCode: "52" },
      AR: { callingCode: "54" },
      CL: { callingCode: "56" },
      CO: { callingCode: "57" },
      PE: { callingCode: "51" },
      VE: { callingCode: "58" },
      EG: { callingCode: "20" },
      NG: { callingCode: "234" },
      KE: { callingCode: "254" },
      GH: { callingCode: "233" },
      ET: { callingCode: "251" },
      TZ: { callingCode: "255" },
      UG: { callingCode: "256" },
      DZ: { callingCode: "213" },
      MA: { callingCode: "212" },
      TN: { callingCode: "216" },
      LY: { callingCode: "218" },
      SD: { callingCode: "249" },
      SA: { callingCode: "966" },
      AE: { callingCode: "971" },
      IL: { callingCode: "972" },
      TR: { callingCode: "90" },
      IR: { callingCode: "98" },
      IQ: { callingCode: "964" },
      JO: { callingCode: "962" },
      LB: { callingCode: "961" },
      KW: { callingCode: "965" },
      QA: { callingCode: "974" },
      BH: { callingCode: "973" },
      OM: { callingCode: "968" },
      YE: { callingCode: "967" },
      AF: { callingCode: "93" },
      PK: { callingCode: "92" },
      BD: { callingCode: "880" },
      LK: { callingCode: "94" },
      NP: { callingCode: "977" },
      MM: { callingCode: "95" },
      KH: { callingCode: "855" },
      LA: { callingCode: "856" },
      MN: { callingCode: "976" },
      KZ: { callingCode: "7" },
      UZ: { callingCode: "998" },
      TJ: { callingCode: "992" },
      KG: { callingCode: "996" },
      TM: { callingCode: "993" },
      GE: { callingCode: "995" },
      AM: { callingCode: "374" },
      AZ: { callingCode: "994" },
      BY: { callingCode: "375" },
      UA: { callingCode: "380" },
      MD: { callingCode: "373" },
      RS: { callingCode: "381" },
      ME: { callingCode: "382" },
      BA: { callingCode: "387" },
      MK: { callingCode: "389" },
      AL: { callingCode: "355" },
      RU: { callingCode: "7" },
    };
    return countries[countryCode];
  };

  // Helper function to find country by calling code
  const findCountryByCallingCode = (callingCode: string): string | null => {
    const countryMap: Record<string, string> = {
      "1": "US",
      "44": "GB",
      "33": "FR",
      "49": "DE",
      "39": "IT",
      "34": "ES",
      "31": "NL",
      "32": "BE",
      "43": "AT",
      "41": "CH",
      "46": "SE",
      "47": "NO",
      "45": "DK",
      "358": "FI",
      "48": "PL",
      "351": "PT",
      "30": "GR",
      "353": "IE",
      "420": "CZ",
      "36": "HU",
      "40": "RO",
      "359": "BG",
      "385": "HR",
      "421": "SK",
      "386": "SI",
      "370": "LT",
      "371": "LV",
      "372": "EE",
      "357": "CY",
      "356": "MT",
      "352": "LU",
      "354": "IS",
      "81": "JP",
      "86": "CN",
      "91": "IN",
      "82": "KR",
      "65": "SG",
      "60": "MY",
      "66": "TH",
      "62": "ID",
      "63": "PH",
      "84": "VN",
      "886": "TW",
      "852": "HK",
      "64": "NZ",
      "27": "ZA",
      "55": "BR",
      "52": "MX",
      "54": "AR",
      "56": "CL",
      "57": "CO",
      "51": "PE",
      "58": "VE",
      "20": "EG",
      "234": "NG",
      "254": "KE",
      "233": "GH",
      "251": "ET",
      "255": "TZ",
      "256": "UG",
      "213": "DZ",
      "212": "MA",
      "216": "TN",
      "218": "LY",
      "249": "SD",
      "966": "SA",
      "971": "AE",
      "972": "IL",
      "90": "TR",
      "98": "IR",
      "964": "IQ",
      "962": "JO",
      "961": "LB",
      "965": "KW",
      "974": "QA",
      "973": "BH",
      "968": "OM",
      "967": "YE",
      "93": "AF",
      "92": "PK",
      "880": "BD",
      "94": "LK",
      "977": "NP",
      "95": "MM",
      "855": "KH",
      "856": "LA",
      "976": "MN",
      "7": "KZ",
      "998": "UZ",
      "992": "TJ",
      "996": "KG",
      "993": "TM",
      "995": "GE",
      "374": "AM",
      "994": "AZ",
      "375": "BY",
      "380": "UA",
      "373": "MD",
      "381": "RS",
      "382": "ME",
      "387": "BA",
      "389": "MK",
      "355": "AL",
    };
    return countryMap[callingCode] || null;
  };

  // Extract phone number from value and sync selectedCountry
  useEffect(() => {
    if (value) {
      // Try to extract country code from value
      const match = value.match(/^\+(1|44|33|49|39|34|31|32|43|41|46|47|45|358|48|351|30|353|420|36|40|359|385|421|386|370|371|372|357|356|352|354|81|86|91|82|65|60|66|62|63|84|886|852|64|27|55|52|54|56|57|51|58|20|234|254|233|251|255|256|213|212|216|218|249|966|971|972|90|98|964|962|961|965|974|973|968|967|93|92|880|94|977|95|855|856|976|7|998|992|996|993|995|374|994|375|380|373|381|382|387|389|355)/);
      if (match) {
        const callingCode = match[1];
        const detectedCountry = findCountryByCallingCode(callingCode);
        
        // Update selectedCountry if different
        if (detectedCountry && detectedCountry !== selectedCountry) {
          setSelectedCountry(detectedCountry);
        }
        
        // Extract phone number after country code
        const phonePart = value.substring(match[0].length);
        setPhoneNumber(phonePart);
      } else {
        // No valid country code found, use default
        if (selectedCountry !== defaultCountry) {
          setSelectedCountry(defaultCountry);
        }
        // Try to extract just the number part
        const phonePart = value.replace(/^\+/, "");
        setPhoneNumber(phonePart);
      }
    } else {
      // Value is empty, reset to default country
      if (selectedCountry !== defaultCountry) {
        setSelectedCountry(defaultCountry);
      }
      setPhoneNumber("");
    }
  }, [value, defaultCountry]);

  // Update width when component mounts or resizes
  useEffect(() => {
    const updateWidth = () => {
      if (phoneInputRef.current) {
        const width = phoneInputRef.current.offsetWidth;
        setPhoneInputWidth(width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    // Update the full phone number with new country code
    const countryData = getCountryData(country);
    if (countryData) {
      if (phoneNumber) {
        // If there's a phone number, update with new country code
        onChange(`+${countryData.callingCode}${phoneNumber}`);
      } else {
        // If no phone number, just set the country code
        onChange(`+${countryData.callingCode}`);
      }
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Only allow digits
    const digitsOnly = inputValue.replace(/\D/g, "");
    setPhoneNumber(digitsOnly);
    
    const countryData = getCountryData(selectedCountry);
    if (countryData) {
      const fullNumber = digitsOnly ? `+${countryData.callingCode}${digitsOnly}` : undefined;
      onChange(fullNumber);
    } else {
      onChange(undefined);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent non-numeric characters
    if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const countryData = getCountryData(selectedCountry);
  const countryCode = countryData ? `+${countryData.callingCode}` : "";

  return (
    <div ref={phoneInputRef} className={`${styles.phoneInput} ${className}`}>
      <div className={styles.phoneInputContainer}>
        <CustomCountrySelect
          value={value}
          onChange={handleCountryChange}
          defaultCountry={defaultCountry as any}
          disabled={disabled}
          phoneInputWidth={phoneInputWidth}
        />
        <div className={styles.phoneInputWrapper}>
          <span className={styles.countryCodePrefix}>{countryCode}</span>
          <input
            ref={inputRef}
            type="tel"
            inputMode="numeric"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={styles.phoneNumberInput}
          />
        </div>
      </div>
    </div>
  );
}

