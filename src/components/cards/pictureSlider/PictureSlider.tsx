import React, { useEffect, useState } from "react";
import "./index.css";
import Like from "components/images/Like";

type PictureSliderProp = {
  src: string;
  alt: string;
};

type PictureSliderProps = {
  images: PictureSliderProp[];
};

const PictureSlider = ({ images }: PictureSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(+index);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, []);
  return (
    <div className=" w-full h-[200px] rounded relative ">
      <img
        src={images[currentIndex].src}
        alt=""
        className="w-full h-full rounded cursor-pointer"
      />
      <div className="absolute flex justify-between w-full top-6 align-middle px-2">
        <div className="tag">Luxury</div>
        <Like />
      </div>

      <div className="flex justify-center absolute bottom-4 left-1/2">
        {images.map((item, index) => {
          return (
            <input
              key={index}
              checked={index === currentIndex}
              type="radio"
              id="images"
              name="images"
              className="radio"
              onClick={() => handleClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PictureSlider;
