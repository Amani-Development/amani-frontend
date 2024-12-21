import Star from "components/images/Star";
import "./index.css";
import PictureSlider from "./pictureSlider/PictureSlider";

const ApartmentCard = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/pauliski/image/upload/v1727197580/home_k5d6qv.jpg",
      alt: "apartment",
    },
    {
      src: "https://res.cloudinary.com/pauliski/image/upload/v1727197901/homes_ycldda.jpg",
      alt: "apartment",
    },
    {
      src: "https://res.cloudinary.com/pauliski/image/upload/v1727197580/home_k5d6qv.jpg",
      alt: "apartment",
    },
    {
      src: "https://res.cloudinary.com/pauliski/image/upload/v1727197901/homes_ycldda.jpg",
      alt: "apartment",
    },
  ];

  return (
    <div className="max-w-[250px] mr-6 border-2 rounded m-4 ">
      <PictureSlider images={images} />
      <div className="p-6">
        <div className="flex justify-between mb-2 title">
          <p>Ikoyi, Lagos</p>
          <div className="flex justify-center items-center">
            <p className="mr-2">4.7 </p>
            <Star />
          </div>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas ipsam
          assumenda, perspiciatis nesciunt quo minima veniam reprehenderit ex
          consequuntur officia quia quaerat doloribus nemo provident rerum
          obcaecati eos, aspernatur eius.
        </p>
        <p className="price">
          ₦ 30,000 <span>per night</span>
        </p>
      </div>
    </div>
  );
};

export default ApartmentCard;
