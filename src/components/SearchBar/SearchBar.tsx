import React, { useState, useRef, useEffect } from "react";
import GuestsDropdown from "./GuestsDropdown";
import SuggestionsDropdown from "./SuggestionsDropdown";
import { addDays } from "date-fns";

import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import styles from "./SearchBar.module.css";


interface Guests {
  adults: number;
  teens: number;
  children: number;
  babies: number;
}

const SearchBar: React.FC = () => {
   const locationOptions = [
     "Ikeja, Lagos",
     "Ikoyi, Lagos",
     "Ikeja G.R.A, Lagos",
     "Ikorodu, Lagos",
     "Ikate, Lagos",
   ];

  // Use States
  const [formData, setFormData] = useState({
    location: "",
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guests: "",
  });
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    teens: 0,
    children: 0,
    babies: 0,
  });
  const [months, setMonths] = useState(2);
  const [datePicker, setDatePicker] = useState(false);
    const [direction, setDirection] = useState<"horizontal" | "vertical">(
      "horizontal"
    );
 const [suggestions, setSuggestions] = useState<string[]>([]);
 const [showSuggestions, setShowSuggestions] = useState(false);

  const locationInputRef = useRef<HTMLInputElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);


// Functions
  function handleClickOutside(event: MouseEvent) {

      
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node) 
    ) {
   
    
      setActiveInput(null);
      setDatePicker(false)
        setShowSuggestions(false);
    }
  }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);



useEffect(() => {
  if (activeInput === "checkIn" || activeInput === "checkOut") {
    setDatePicker(true);
  // datePickerRef.current?.focus();
    const observer = new MutationObserver(() => {
      const definedRangesWrapper = document.getElementsByClassName(
        "rdrDefinedRangesWrapper"
      )[0];

      if (definedRangesWrapper) {
            (definedRangesWrapper as HTMLElement).style.display = "none";
        observer.disconnect(); // Stop observing once the element is found and modified
      }
    });

    // Start observing the body or a parent container of the DateRangePicker
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  } 
}, [activeInput]);




useEffect(() => {

}, []);

  useEffect(() => {
    const updateCalendarLayout = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
  
        setDirection("vertical");
              setMonths(1);
      } else {
       
        setDirection("horizontal");
         setMonths(2);
      }
    };

    updateCalendarLayout(); // Initial check
    window.addEventListener("resize", updateCalendarLayout);

    return () => {
      window.removeEventListener("resize", updateCalendarLayout);
    };
  }, []);
  const handleFocus = (inputName: string) => {

      setShowSuggestions(false);
    setActiveInput(inputName);
    if(inputName!=="checkIn" && inputName!=="checkOut" ){
      setDatePicker(false)
        
    }
   
  };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const value = e.target.value;
   setFormData({ ...formData, location: value });

   if (value.trim()) {
     // Show suggestions only if the input is not empty
     const filteredSuggestions = locationOptions.filter((location) =>
       location.toLowerCase().includes(value.toLowerCase())
     );
     setSuggestions(filteredSuggestions);
     setShowSuggestions(true);
   } else {
     setShowSuggestions(false); // Hide suggestions if input is empty
   }
 };
  const handleSuggestionClick = (suggestion: string) => {
     setShowSuggestions(false);
    setFormData({ ...formData, location: suggestion });
    // Hide suggestions after selecting one
  };

  const handleGuestsChange = (updatedGuests: Guests) => {
    setGuests(updatedGuests);
  };

  const handleDateRangeChange = (ranges: any) => {



    // Check if `ranges.selection` exists before destructuring
    if (ranges.selection) {
      const { startDate, endDate } = ranges.selection;
      setDateRange([ranges.selection]);
      setFormData({
        ...formData,
        checkIn: startDate,
        checkOut: endDate,
      });
    }
    
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("Location:", formData.location);
    // console.log("Check In:", formData.checkIn);
    // console.log("Check Out:", formData.checkOut);
    // console.log("Guests:", guests);
  };

  return (
    <div
      ref={searchBarRef}
      className={`${styles.searchBarContainer} ${
        activeInput ? styles.active : ""
      }`}
    >
      <form
        onSubmit={handleSearchSubmit}
        className={`${styles.searchForm} ${activeInput ? styles.active : ""}`}
      >
        <div
          className={`${styles.inputGroup} ${
            activeInput === "location" ? styles.active : ""
          }`}
          onClick={() => {
            handleFocus("location");
            locationInputRef.current?.focus();
          }}
        >
          <label className={styles.label}>Location</label>
          <input
            ref={locationInputRef}
            type="text"
            id={styles.location}
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Search destinations"
            className={styles.inputField}
          />
          <SuggestionsDropdown
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            showSuggestions={showSuggestions}
          />
        </div>
        <div
          className={`${styles.inputGroup} ${
            activeInput === "checkIn" ? styles.active : ""
          }`}
          id={styles.checkDate}
          onClick={() => handleFocus("checkIn")}
        >
          <div className="flex flex-col">
            <label className={styles.label}>Check In</label>
            {/* <p className={styles.inputField}>
            {formData.checkIn
              ? formData.checkIn.toLocaleDateString()
              : "Select  Date"}
          </p> */}
            <input
              type="text"
              name="checkIn"
              value={
                formData.checkIn ? formData.checkIn.toLocaleDateString() : ""
              }
              placeholder="Select  Date"
              className={styles.inputField}
              readOnly
            />
          </div>
        </div>
        {datePicker && (
          <div
            // ref={datePickerRef}
            className={styles.dateRangePickerContainer}
          >
            <DateRangePicker
              ranges={dateRange}
              // showSelectionPreview={true}
              rangeColors={["#639418"]}
              moveRangeOnFirstSelection={true}
              onChange={handleDateRangeChange}
              preventSnapRefocus={true}
              months={months}
              scroll={{ enabled: true }}
              direction={direction}
              minDate={addDays(new Date(), 0)}
              maxDate={addDays(new Date(), 900)}
              staticRanges={[]}
              inputRanges={[]}
            />
          </div>
        )}

        <div
          id={styles.checkDate}
          className={`${styles.inputGroup} ${
            activeInput === "checkOut" ? styles.active : ""
          }`}
          onClick={() => handleFocus("checkOut")}
        >
          <div className="flex flex-col ">
            <label className={styles.label}>Check Out</label>
            {/* <p className={styles.inputField}>
            {formData.checkOut
              ? formData.checkOut.toLocaleDateString()
              : "Select  Date"}
          </p> */}
            <input
              type="text"
              name="location"
              value={
                formData.checkOut ? formData.checkOut.toLocaleDateString() : ""
              }
              placeholder="Select  Date"
              className={styles.inputField}
              readOnly
            />
          </div>
        </div>
        <div
          id={styles.date}
          className={`${styles.inputGroup} `}
          onClick={() => handleFocus("checkOut")}
        >
          <label className={styles.label}>Dates</label>
          <p className={styles.inputField}>
            {formData.checkIn && formData.checkOut
              ? `${new Date(formData.checkIn).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })} - ${new Date(formData.checkOut).toLocaleDateString(
                  "en-US",
                  { month: "short", day: "numeric" }
                )} (${Math.floor(
                  (new Date(formData.checkOut).getTime() -
                    new Date(formData.checkIn).getTime()) /
                    (1000 * 60 * 60 * 24)
                )} Days)`
              : "Select Date"}
          </p>
        </div>
        <div
          onClick={() => handleFocus("guests")}
          className={`${styles.inputGroup} ${
            activeInput === "guests" ? styles.active : ""
          }`}
        >
          <div className="flex justify-between">
            <div id={styles.guest}>
              <label className={styles.label}>Guests</label>
              <GuestsDropdown
                guests={guests}
                onGuestsChange={handleGuestsChange}
                handleFocus={handleFocus}
                handleBlur={() => setActiveInput(null)}
              />
            </div>
            <button type="submit" className={styles.searchButton}>
              <p>
                {" "}
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5146 14.3643L16.1577 17.0004"
                    stroke="#F3F3F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <p> Search</p>
            </button>
          </div>
        </div>
        <button type="submit" className={styles.searchButton2}>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5146 14.3643L16.1577 17.0004"
              stroke="#F3F3F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p> Search</p>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
