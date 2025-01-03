import React from "react";

type SearchIconProps = {
  fill?: string
}
const SearchIcon = ({fill}: SearchIconProps) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8.8254"
        cy="9.32345"
        r="6.74142"
        stroke={fill || "#F3F3F4"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5137 14.3633L16.1567 16.9994"
        stroke={fill || "#F3F3F4"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
