import React, { useState, useRef } from "react";
import GuestsDropdown from "./GuestsDropdown";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import styles
import styles from "./SearchBar.module.css";
import { log } from "console";

interface Guests {
  adults: number;
  teens: number;
  children: number;
  babies: number;
}

const SearchBar: React.FC = () => {
  const [formData, setFormData] = useState({
    location: "",
    checkIn: null as Date | null, // Specify the type here
    checkOut: null as Date | null, // Specify the type here
    guests: "",
  });

  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    teens: 0,
    children: 0,
    babies: 0,
  });

  // Create refs for the input fields
  const locationInputRef = useRef<HTMLInputElement>(null);

  // Focus event handler to set the active input
  const handleFocus = (inputName: string) => {
    setActiveInput(inputName);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGuestsChange = (updatedGuests: Guests) => {
    setGuests(updatedGuests);
  };

 const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();

   // Log the form data values
   console.log("Location:", formData.location);
   console.log("Check In:", formData.checkIn);
   console.log("Check Out:", formData.checkOut);
   console.log("Guests:", guests); // Log guests object directly

   // Handle search logic here
 };

  return (
    <div
      className={`${styles.searchBarContainer} ${activeInput ? styles.active : ""}`}
    >
      <form
        onSubmit={handleSearchSubmit}
        className={`${styles.searchForm} ${activeInput ? styles.active : ""}`}
      >
        <div
          className={`${styles.inputGroup} ${activeInput === "location" ? styles.active : ""}`}
          onClick={() => {
            handleFocus("location");
            locationInputRef.current?.focus();
          }}
        >
          <label className={styles.label}>Location</label>
          <input
            ref={locationInputRef}
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Search destinations"
            className={styles.inputField}
          />
        </div>

        <div
          className={`${styles.inputGroup} ${activeInput === "checkIn" ? styles.active : ""}`}
          onClick={() => handleFocus("checkIn")} // Click to focus on Check In
        >
          <label className={styles.label}>Check In</label>
          <DatePicker
            selected={formData.checkIn}
            onChange={(date: Date | null) =>
              setFormData({ ...formData, checkIn: date })
            }
            className={styles.inputField}
            placeholderText="Select a date"
            onFocus={() => handleFocus("checkIn")} // Set active input
            onBlur={() => setActiveInput(null)} // Clear active input on blur
          />
        </div>

        <div
          className={`${styles.inputGroup} ${activeInput === "checkOut" ? styles.active : ""}`}
          onClick={() => handleFocus("checkOut")} // Click to focus on Check Out
        >
          <label className={styles.label}>Check Out</label>
          <DatePicker
            selected={formData.checkOut}
            onChange={(date: Date | null) =>
              setFormData({ ...formData, checkOut: date })
            }
            className={styles.inputField}
            placeholderText="Select a date"
            onFocus={() => handleFocus("checkOut")} // Set active input
            onBlur={() => setActiveInput(null)} // Clear active input on blur
          />
        </div>

        <div
          className={`${styles.inputGroup} ${activeInput === "guests" ? styles.active : ""}`}
          onBlur={() => setActiveInput(null)}
        >
          <label className={styles.label}>Guests</label>
          <GuestsDropdown
            guests={guests}
            onGuestsChange={handleGuestsChange}
            handleFocus={handleFocus}
            handleBlur={() => setActiveInput(null)}
          />
        </div>

        <button type="submit" className={styles.searchButton}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8.8254"
              cy="9.3254"
              r="6.74142"
              stroke="#F3F3F4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5146 14.3643L16.1577 17.0004"
              stroke="#F3F3F4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p> Search</p>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
