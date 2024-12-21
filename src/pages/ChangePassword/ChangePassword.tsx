import { useNavigate } from "react-router-dom";
import styles from "./ChangePassword.module.css";
import { useState } from "react";
import arrow from "../../assets/icons/arrowLeft.svg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ChangePassword = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [passwordVisible, setPasswordVisible] = useState({
    current: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordError, setPasswordError] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [validationErrors, setValidationErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = (
    field: "current" | "newPassword" | "confirmPassword"
  ) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    const errors: string[] = [];

    if (password.length >= 8) strength++;
    else errors.push("At least 8 characters");

    if (/[A-Z]/.test(password)) strength++;
    else errors.push("One uppercase letter");

    if (/\d/.test(password)) strength++;
    else errors.push("One number");

    if (/[!@#$%^&*]/.test(password)) strength++;
    else errors.push("One special character");

    setPasswordStrength(strength);
    setPasswordError(strength < 4 ? errors.join(", ") : "");

    if (strength > 0) {
      setPasswordText(getStrengthText(strength).text);
    } else {
      setPasswordText("");
    }
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "current" | "newPassword" | "confirmPassword"
  ) => {
    const value = e.target.value;
    if (type === "current") {
      setCurrentPassword(value);
    } else if (type === "newPassword") {
      setNewPassword(value);
      checkPasswordStrength(value);
    } else if (type === "confirmPassword") {
      setConfirmPassword(value);
    }

    validateForm();
  };

  const validateForm = () => {
    const errors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    if (newPassword === currentPassword) {
      errors.newPassword =
        "New password cannot be the same as the current password.";
    }

    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "New password and confirm password must match.";
    }

    if (passwordStrength < 3) {
      errors.newPassword = errors.newPassword
        ? errors.newPassword + " Password strength must be at least 'Good'."
        : "Password strength must be at least 'Good'.";
    }

    setValidationErrors(errors);

    const isValid = !Object.values(errors).some((error) => error !== "");
    setIsButtonDisabled(!isValid);
  };

  const getSegmentColor = (index: number) => {
    const colors = ["#FF8968", "#F1DDA4", "#B5D089", "#7CA83B"];
    return passwordStrength > index ? colors[index] : "#e0e0e0";
  };

  const getStrengthText = (strength: number) => {
    switch (strength) {
      case 1:
        return { text: "Weak", color: "#FF8968" };
      case 2:
        return { text: "OK", color: "#F1DDA4" };
      case 3:
        return { text: "Good", color: "#B5D089" };
      case 4:
        return { text: "Excellent", color: "#7CA83B" };
      default:
        return { text: "", color: "#e0e0e0" };
    }
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
        <p>Update Password</p>
      </div>

      <section className={styles.section}>
        <div className={styles.inputGroup}>
          <label>Current Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={passwordVisible.current ? "text" : "password"}
              placeholder="Enter current password"
              className={styles.passwordInput}
              value={currentPassword}
              onChange={(e) => handlePasswordChange(e, "current")}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => togglePasswordVisibility("current")}
            >
              {passwordVisible.current ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </span>
          </div>
          {validationErrors.currentPassword && (
            <p className={styles.passwordError}>
              {validationErrors.currentPassword}
            </p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>New Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={passwordVisible.newPassword ? "text" : "password"}
              placeholder="Enter new password"
              className={styles.passwordInput}
              value={newPassword}
              onChange={(e) => handlePasswordChange(e, "newPassword")}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => togglePasswordVisibility("newPassword")}
            >
              {passwordVisible.newPassword ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </span>
          </div>
          {validationErrors.newPassword && (
            <p className={styles.passwordError}>
              {validationErrors.newPassword}
            </p>
          )}
          <p>Choose a strong password</p>
        </div>

        <div className={styles.passwordStrengthCtn}>
          <div className={styles.passwordStrength}>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={styles.strengthSegment}
                style={{ backgroundColor: getSegmentColor(index) }}
              ></div>
            ))}
          </div>
          {passwordText && (
            <div
              className={styles.strengthText}
              style={{ color: getStrengthText(passwordStrength).color }}
            >
              {passwordText}
            </div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>Confirm New Password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={passwordVisible.confirmPassword ? "text" : "password"}
              placeholder="Confirm new password"
              className={styles.passwordInput}
              value={confirmPassword}
              onChange={(e) => handlePasswordChange(e, "confirmPassword")}
            />
            <span
              className={styles.eyeIcon}
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              {passwordVisible.confirmPassword ? (
                <AiOutlineEye size={24} />
              ) : (
                <AiOutlineEyeInvisible size={24} />
              )}
            </span>
          </div>
          {validationErrors.confirmPassword && (
            <p className={styles.passwordError}>
              {validationErrors.confirmPassword}
            </p>
          )}
        </div>
      </section>

      <button
        type="button"
        className={`${styles.submitButton} mb-4`}
        onClick={() => alert("Password Updated!")}
        disabled={isButtonDisabled}
        style={{
          backgroundColor: isButtonDisabled ? "#e0e0e0" : "#7CA83B",
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ChangePassword;
