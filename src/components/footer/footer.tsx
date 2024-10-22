import { FooterNavigation as navigation } from "api/navigation/footernav";
import footerShare from "../../assets/icons/footerShare.svg";
import { useState } from "react";
import CautionModal  from "components/Modal/cautionModal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="bg-armaniDarkGreen pt-24 text-white flex flex-col gap-8 font-inter">
      <div className="w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left section */}
        <div className="w-full md:w-4/5">
          <h2 className="text-3xl md:text-5xl mb-4">
            <span className="text-[#D4E4B8] font-medium">Amani </span>
            offers you everything you need all in one place.
          </h2>
          <a
            href="#"
            className="inline-block font-medium underline mt-2 text-gray-50 text-lg md:text-xl"
          >
            Contact Us Today
          </a>
        </div>

  
        <div className="flex flex-col gap-8 text-gray-200 text-base">
         <div className="p-8">
            <button
              onClick={openModal}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Open Modal
            </button>

            <CautionModal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="My Modal Title"
            text= "Payments made outside of Amani website and applications are not secured by Amani. Therefore it is advised that all short lets, rentals and home purchases are done within the Amani website and applications"
            />
             
       
          </div> 
          <div className="flex flex-col gap-4">
            <p>Our Location</p>
            <div className="flex items-center font-semibold">
              <p className="mr-2">Victoria Island, Lagos Nigeria</p>
              <img
                src={footerShare}
                alt="Footer Share Icon"
                className="h-6 w-6"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Learn Section */}
            <div className="space-y-6">
              <h3 className="">Learn</h3>
              <ul>
                {navigation.learn.map((item) => (
                  <li key={item.name} className="mt-2">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="space-y-6">
              <h3 className="">Company</h3>
              <ul>
                {navigation.company.map((item) => (
                  <li key={item.name} className="mt-2">
                    <a href={item.href} className="hover:underline">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap space-x-4 pt-6">
            {navigation.social.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-8 w-8" // Adjust size as needed
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 ">
        <img src={navigation.vector} alt="Navigation Graphic" />
      </div>
    </footer>
  );
};

export default Footer;
