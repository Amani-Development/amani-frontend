import React, {useState} from 'react';
import style from "../SignUp/SignUp.module.css";
import ButtonII from "../../../stories/Button II/button-II";
import InputI from "../../../stories/Input I/input-I";
import {useNavigate} from "react-router-dom";
import resetStyle from "./ResetPasssword.module.css";

const ResetPassword = () => {
    let navigate = useNavigate();

    const [stage, setStage] = useState<number>(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordError, setPasswordError] = useState("");

    const handleNext = () => {
        if(stage <= 2){
            setStage(stage + 1);

        }


        if(stage ===3){
            navigate('/signin')
        }

    }

    const checkPasswordStrength = (password: string) => {
        let strength = 0;
        let errorMessages :string[]  = [];

        // Check password length
        if (password.length >= 8) {
            strength++;
        } else {
            errorMessages.push("At least 8 characters");
        }

        // Check for uppercase letters
        if (/[A-Z]/.test(password)) {
            strength++;
        } else {
            errorMessages.push("One uppercase letter");
        }

        // Check for numbers
        if (/\d/.test(password)) {
            strength++;
        } else {
            errorMessages.push("One number");
        }

        // Check for special characters
        if (/[!@#$%^&*]/.test(password)) {
            strength++;
        } else {
            errorMessages.push("One special character");
        }

        setPasswordStrength(strength);

        // Set error message if password doesn't meet criteria
        if (strength < 4) {
            setPasswordError(errorMessages.join(", "));
        } else {
            setPasswordError("");
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };


    const getSegmentColor = (index: number) => {
        if (passwordStrength > index) {
            switch (index) {
                case 0:
                    return "red";
                case 1:
                    return "orange";
                case 2:
                    return "rgb(128, 194, 63)";
                case 3:
                    return "green";
                default:
                    return "#e0e0e0";
            }
        }
        return "#e0e0e0";
    };

    return (
        <div className={style.cont}>
            <div className={style.contMain}>
                {stage === 0 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Forgot password?</div>
                            <div className={style.ContHeaderSubText}>No worries, enter your registered email address and we will send you a reset code.</div>
                        </div>
                        <InputI isTextArea={false}  type='email' label='Email Address' placeholder='myamani@gmail.com'/>

                    </>
                )}

                {stage === 1 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>OTP code verification</div>
                            <div className={style.ContHeaderSubText}>Please enter the 4 digit code sent to your email.</div>
                        </div>
                        <InputI isTextArea={false}  type='text' label='Enter OTP' placeholder='****'/>

                    </>
                )}

                {stage === 2 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Create new password</div>
                            <div className={style.ContHeaderSubText}>Create and confirm new password.</div>
                        </div>
                        <InputI isTextArea={false}  type='password' label='New Password' placeholder='Enter Password' onChange={handlePasswordChange}/>
                        <div className={style.passwordStrengthCtn}>
                            {passwordError && <div className={style.error}>{passwordError}</div>}

                            {/* Password strength indicator with broken segments */}
                            <div className={style.passwordStrength}>
                                {[0, 1, 2, 3].map((index) => (
                                    <div
                                        key={index}
                                        className={style.strengthSegment}
                                        style={{ backgroundColor: getSegmentColor(index) }}
                                    ></div>
                                ))}
                            </div>
                        </div>

                        <InputI isTextArea={false}  type='password' onChange={handleConfirmPasswordChange} label='Confirm Password' placeholder='Enter Password'/>

                    </>
                )}

                {stage === 3 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Password changed successfully!</div>
                            <div className={style.ContHeaderSubText}>Go back to log in page to log in with your new password</div>
                        </div>

                    </>
                )}
                <div className={style.BtnCtn}>
                    <ButtonII label={stage === 3 ? 'Back to Login' : 'Reset Password'} disabled={stage === 2 ? password !== confirmPassword || passwordStrength < 4 : false} onClick={handleNext}/>
                    {stage === 0 && (
                        <div className={resetStyle.BtnCtn}>
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1729856771/Am/Amani/Left_dfvzmx.svg" alt="back"/>
                            Back to Login
                        </div>
                    )}

                    {stage === 1 && (
                        <div className={resetStyle.resend}>
                            0s  <span> Resend code</span>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ResetPassword;