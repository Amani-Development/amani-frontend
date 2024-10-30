import CustomButton from "components/buttons/CustomButton";
import "./index.css";
import { useState } from "react";
import MiniSearch from "../minisearch/MiniSearch";

const Search = () => {
  const [checkIn, setCheckIn] = useState<string>("February 9th");
  const [checkOut, setCheckOut] = useState<string>("February 9th");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "checkIn") {
      setCheckIn(value);
    } else {
      setCheckOut(value);
    }
  };
  const handleClick = () => {};

  return (
    <div>
      <MiniSearch />

      <div className="items-center justify-between border mx-4 rounded-[50px] bg-[#DCDDDF] search-wrapper ">
        <div className="flex flex-col relative cursor-pointer search-section first-child">
          <label
            htmlFor="location"
            className="search-label z-10 mt-[-1rem] self-start ml-4 mb-4"
          >
            Location
          </label>
          <input
            type="text"
            className="w-full outline-none bg-transparent search-input first-input"
            placeholder="Search destinations"
          />
        </div>
        <div className="flex flex-col py-2 relative cursor-pointer search-section">
          <label htmlFor="CheckIn" className="mb-2 search-label text-left">
            Check In
          </label>
          <input
            type="date"
            name="checkIn"
            onChange={(e) => handleChange(e)}
            placeholder="February 9th"
            className="outline-none absolute date"
          />
          <p className="search-input">{checkIn}</p>
        </div>
        <div className="flex flex-col justify-center py-2 relative cursor-pointer search-section">
          <label htmlFor="Checkout" className="mb-2 search-label">
            Check Out
          </label>
          <input
            type="date"
            name="checkOut"
            onChange={(e) => handleChange(e)}
            placeholder="February 9th"
            className="outline-none absolute date"
          />
          <p className="search-input">{checkOut}</p>
        </div>
        <div className="flex  pr-4 items-center py-2 relative cursor-pointer search-section  last-child">
          <div className="flex flex-col">
            <label htmlFor="guest" className="mb-2 search-label">
              Guest
            </label>
            <span className="search-input">2 Adults, 1 Child</span>
          </div>

          <CustomButton
            icon={`${require("./../../assets/icons/Search.png")}`}
            text="Search"
            onClick={handleClick}
            className="text-white ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
