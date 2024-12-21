import { useNavigate } from "react-router-dom";
import styles from "./ChangeEmail.module.css";
import { useState } from "react";
import arrow from "../../assets/icons/arrowLeft.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import CautionModal from "components/Modal/cautionModal";
const ChangeEmail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => setIsModalOpen(true);
const closeModal = () => setIsModalOpen(false);
  const handleContinue = () => {
    setShowForm(true);
  };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <img
          src={arrow}
          alt="Go Back"
          onClick={handleGoBack}
          className={styles.backButton}
          style={{ cursor: "pointer" }}
        />
        <p>Change Email</p>
      </div>

      {!showForm && (
        <section className={styles.section}>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter password"
                className={styles.passwordInput}
              />
              <span
                className={styles.eyeIcon}
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <AiOutlineEye size={24} />
                ) : (
                  <AiOutlineEyeInvisible size={24} />
                )}
              </span>
            </div>
            <p>Enter your Amani account password for verification</p>
          </div>

          <button
            type="button"
            className={styles.submitButton}
            onClick={handleContinue}
          >
            Continue
          </button>
        </section>
      )}

      {showForm && (
        <form>
          <section className={styles.section}>
            <div className={styles.inputGroup}>
              <label>Current email</label>
              <input type="text" placeholder="Enter your current Email" />
            </div>

            <div className={styles.inputGroup}>
              <label>New email</label>
              <input type="text" placeholder="Enter your New email" />
            </div>
          </section>

          <button
            type="button"
            className={`${styles.submitButton} mb-4`}
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Change Email
          </button>
        </form>
      )}

      <CautionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Verication Mail"
        text="A verification link has been sent to your new email check your mail and verify to finish the process."
        action="Go Back"
      />
    </div>
  );
};

export default ChangeEmail;
