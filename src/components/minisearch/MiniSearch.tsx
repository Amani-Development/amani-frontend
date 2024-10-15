import CustomButton from "components/buttons/CustomButton";
import React from "react";
import './index.css'
import SearchIcon from "components/search/SearchIcon";

const MiniSearch = () => {
  return (
    <div className="items-center border rounded-[50px] pl-6 py-2 md:hidden min-search-wrapper">
      <div>
        <SearchIcon fill="#38393D" />
      </div>
      <div className="pl-4">
        <p className="search-desc">Where to?</p>
        <div className="flex relative">
          <div className="search-placeholder">Anywhere</div>
          <div className="search-placeholder bullet-text">Any week</div>
          <div className="search-placeholder bullet-text">Add guests</div>
        </div>
      </div>
    </div>
  );
};

export default MiniSearch;
