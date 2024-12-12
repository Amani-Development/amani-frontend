import { createPortal } from "react-dom";
import disclaimerImage from "../../assets/icons/disclaimer.svg";
import styles from "./CautionModal.module.css"; // Import CSS module

interface CautionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  imageSrc?: string;
  action? :string
}

const CautionModal = ({ isOpen, onClose, title, text, imageSrc, action }: CautionModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <img
          src={imageSrc || disclaimerImage}
          alt=""
          className={styles.modalImage}
        />
        <h2 className={styles.modalTitle}>{title}</h2>
        <p className={styles.modalText}>{text}</p>
        <div className=" pt-2 w-full flex justify-center">
          <button onClick={onClose} className={styles.closeButton}>
            {action || 'Close'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CautionModal;
