
import { createPortal } from "react-dom";
import disclaimerImage from "../../assets/icons/disclaimer.svg";

interface CautionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  imageSrc?: string; 
}
const CautionModal = ({ isOpen, onClose, title, text, imageSrc} :CautionModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-60">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-[30%]  flex flex-col space-y-2 justify-center items-center font-satoshi">
        <img src={imageSrc || disclaimerImage} alt="" className="size-12" />
        <h2 className="text-xl font-bold flex-grow text-[#141414]  pt-2">
          {title}
        </h2>

        {/* <button
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700"
      >
        &times;
      </button> */}

        <p className="text-center  text-[#5A5B78]">{text}</p>
        <div className="px-8 pt-2 w-full flex justify-center">
          <button
            onClick={onClose}
            className="bg-armaniGreen text-white py-2   w-full rounded-lg "
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CautionModal;
