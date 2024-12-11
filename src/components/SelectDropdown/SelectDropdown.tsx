import React, { FC, useState } from "react";
import styles from "./SelectDropdown.module.css";

interface Option {
  FullName?: string; // Optional FullName property
  [key: string]: any; // Allows additional properties
}

interface SelectDropdownProps {
  label?: string;
  options: Option[];
  placeholder?: string;
  selectedOption: Option | null;
  onOptionSelect: (option: Option) => void;
  error?: string;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  label,
  options,
  placeholder = "Select an option",
  selectedOption,
  onOptionSelect,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isTouched) setIsTouched(true); // Mark dropdown as touched when opened
  };

  const handleOptionSelect = (option: Option) => {
    onOptionSelect(option);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div className={styles.selectContainer}>
      <div
        className={`${styles.sourceLabelRow} d-flex justify-content-between`}
      >
        {label && <label className={styles.label}>{label}</label>}
      </div>

      <div className={styles.customSelect} onClick={toggleDropdown}>
        <span
          className={`${styles.selectedOption} ${
            !selectedOption ? styles.unSelected : ""
          }`}
        >
          {selectedOption?.FullName || placeholder}
        </span>
        <i className="bi bi-chevron-down"></i>
      </div>

      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index}
                className={`${styles.option} ${
                  option === selectedOption ? styles.selected : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {option?.FullName || option}
              </div>
            ))
          ) : (
            <div className={styles.noOptions}>No options available</div>
          )}
        </div>
      )}

      {isTouched && !selectedOption && error && (
        <div className={styles.errorMessage}>{error}</div>
      )}
    </div>
  );
};

export default SelectDropdown;
