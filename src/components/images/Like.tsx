import React, { useState } from "react";

interface LikeProps extends React.SVGAttributes<HTMLOrSVGElement>{}

const Like = ({className}: LikeProps) => {
  const [iconFill, setIconFill] = useState<string>("none");
  const handleClick = () => {
    console.log("checking");

    if (iconFill === "none") {
      setIconFill("#639418");
      return;
    }
    setIconFill("none");
  };

  return (
    <div className="top-4 w-8 h-8 p-1 bg-[#ffffff80] rounded-md">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill={iconFill}
        xmlns="http://www.w3.org/2000/svg"
        className={`cursor-pointer ${className}`}
        onClick={handleClick}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.48541C12.689 5.67941 13.881 4.77441 15.696 4.77441C18.871 4.77441 21 7.75441 21 10.5294C21 16.3304 13.778 20.7744 12 20.7744C10.222 20.7744 3 16.3304 3 10.5294C3 7.75441 5.129 4.77441 8.304 4.77441C10.119 4.77441 11.311 5.67941 12 6.48541Z"
          stroke="#639418"
          strokeWidth="1.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Like;
