import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Currency.module.css";
import arrow from "../../assets/icons/arrowLeft.svg";
import SelectDropdown from "../../components/SelectDropdown/SelectDropdown";

interface DropdownOption {
  FullName?: string;
  Symbol?: string;
}

const Currency = () => {
  const navigate = useNavigate();
  const [currencies, setCurrencies] = useState<DropdownOption[]>([]);
  const [languages, setLanguages] = useState<DropdownOption[]>([]);
  const [timezones, setTimezones] = useState<DropdownOption[]>([]);
  const [formData, setFormData] = useState({
    currency: null as DropdownOption | null,
    language: null as DropdownOption | null,
    timezone: null as DropdownOption | null,
  });

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyData: DropdownOption[] = [
        { FullName: "United States Dollar", Symbol: "$" },
        { FullName: "British Pound Sterling", Symbol: "£" },
        { FullName: "Euro", Symbol: "€" },
      ];
      setCurrencies(currencyData);
    };

    const fetchLanguages = () => {
      const languageData: DropdownOption[] = [
        { FullName: "English (US)" },
        { FullName: "English (UK)" },
        { FullName: "French" },
        { FullName: "Spanish" },
      ];
      setLanguages(languageData);
    };

    const fetchTimezones = async () => {
      const response = await fetch("https://worldtimeapi.org/api/timezone");
      const timezoneData = await response.json();

      const formattedTimezones = timezoneData.map((timezone: string) => {
        const parts = timezone.split("/");
        const region = parts[0];
        const city = parts[1] || "";
        const gmtOffset = new Date()
          .toLocaleString("en-US", {
            timeZone: timezone,
            timeZoneName: "short",
          })
          .split(" ")[2];

        return {
          FullName: `(${gmtOffset}) ${region.replace(
            "_",
            " "
          )} / ${city.replace("_", " ")}`,
        };
      });

      setTimezones(formattedTimezones);
    };

    fetchCurrencies();
    fetchLanguages();
    fetchTimezones();
  }, []);

  const handleDropdownChange =
    (key: keyof typeof formData) => (option: DropdownOption) => {
      setFormData((prev) => ({
        ...prev,
        [key]: option,
      }));
    };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <img
          src={arrow}
          alt="Go Back"
          onClick={handleGoBack}
          className={styles.backButton}
          style={{ cursor: "pointer" }}
        />
        <p>Currency, Language & Time Zone Settings</p>
      </div>

      <div className={styles.settingsContainer}>
        <SelectDropdown
          label="Preferred Currency"
          options={currencies.map((currency) => ({
            ...currency,
            FullName: `${currency.Symbol} - ${currency.FullName}`,
          }))}
          placeholder="Select Currency"
          selectedOption={formData.currency}
          onOptionSelect={handleDropdownChange("currency")}
          error={!formData.currency ? "Currency is required" : undefined}
        />

        <SelectDropdown
          label="Preferred Language"
          options={languages}
          placeholder="Select Language"
          selectedOption={formData.language}
          onOptionSelect={handleDropdownChange("language")}
          error={!formData.language ? "Language is required" : undefined}
        />

        <SelectDropdown
          label="Preferred Time Zone"
          options={timezones}
          placeholder="Select Time Zone"
          selectedOption={formData.timezone}
          onOptionSelect={handleDropdownChange("timezone")}
          error={!formData.timezone ? "Time Zone is required" : undefined}
        />
      </div>
    </div>
  );
};

export default Currency;
