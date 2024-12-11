import React, { useState, useEffect, useRef } from "react";
import styles from "./GuestsDropdown.module.css";

interface Guests {
  adults: number;
  teens: number;
  children: number;
  babies: number;
}

interface GuestsDropdownProps {
  guests: Guests;
  onGuestsChange: (guests: Guests) => void;
  handleFocus: (inputName: string) => void;
  handleBlur: () => void;
}

// Labels for the input field (without age ranges)
const inputLabels: { [key in keyof Guests]: string } = {
  adults: "Adults",
  teens: "Teens",
  children: "Children",
  babies: "Babies",
};

// Labels for the dropdown (with age ranges)
const dropdownLabels: { [key in keyof Guests]: string } = {
  adults: "Adults (+16 years)",
  teens: "Teens (13 - 15 years)",
  children: "Children (3 - 12 years)",
  babies: "Babies (0 - 2 years)",
};

const GuestsDropdown = ({
  guests,
  onGuestsChange,
  handleFocus,
  handleBlur,
}: GuestsDropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        handleBlur(); // Call handleBlur when dropdown closes
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, handleBlur]);

  const handleGuestChange = (
    type: keyof Guests,
    operation: "increment" | "decrement"
  ) => {
    const updatedGuests = {
      ...guests,
      [type]:
        operation === "increment"
          ? guests[type] + 1
          : Math.max(0, guests[type] - 1),
    };
    onGuestsChange(updatedGuests);
  };

  // Get the guest label for the input field without age ranges
  const getGuestLabel = () => {
    return (
      Object.keys(guests)
        .filter((key) => guests[key as keyof Guests] > 0)
        .map(
          (key) =>
            `${guests[key as keyof Guests]} ${inputLabels[key as keyof Guests]}`
        )
        .join(", ") || "How many guests"
    );
  };

  return (
    <div className={styles.guestDropdownContainer} ref={dropdownRef}>
      <div
        className={styles.inputField}
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
          handleFocus("guests");
        }}
      >
        <input
          id={styles.code}
          type="text"
          readOnly
          value={getGuestLabel()}
          placeholder="How many guests"
        />
      </div>

      {dropdownOpen && (
        <div className={styles.dropdown}>
          {Object.keys(dropdownLabels).map((type) => {
            const [label, ageRange] =
              dropdownLabels[type as keyof Guests].split(" (");
            return (
              <div className={styles.guestRow} key={type}>
                <span>
                  <span className={styles.label}>{label}</span>
                  {ageRange && (
                    <span className={styles.ageRange}> ({ageRange.trim()}</span>
                  )}
                </span>
                <div className={styles.counter}>
                  <button
                    type="button" // Prevent default form submission
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior
                      handleGuestChange(type as keyof Guests, "decrement");
                    }}
                    className={styles.counterBtn}
                  >
                    -
                  </button>
                  <span className={styles.number}>
                    {guests[type as keyof Guests]}
                  </span>
                  <button
                    type="button" // Prevent default form submission
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior
                      handleGuestChange(type as keyof Guests, "increment");
                    }}
                    className={styles.counterBtn}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GuestsDropdown;
