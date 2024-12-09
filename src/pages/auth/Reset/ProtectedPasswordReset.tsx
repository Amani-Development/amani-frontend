import React, {useState} from 'react';
import style from "../SignUp/SignUp.module.css";
import ButtonII from "../../../stories/Button II/button-II";
import InputI from "../../../stories/Input I/input-I";
import {useNavigate} from "react-router-dom";
import BackBtn from "../../../components/buttons/BackBtn/backBtn";
import {toast} from "react-toastify";
import {connect, useDispatch} from "react-redux";
import {confirmResetUserPassword} from "../../../store/auth/actions";


interface FormValues {
    password: string;
    password_confirm: string;
}
const ProtectedPasswordReset = (props:any) => {
    let nav = useNavigate();

    const {auth} = props;

    const defaultFormValues: FormValues = {
        password: "",
        password_confirm: "",
    };

    const [formValues, setFormValues] = useState<FormValues>( defaultFormValues);


    const [stage, setStage] = useState<number>(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordError, setPasswordError] = useState("");

    const dispatch = useDispatch();
    const handleConfirm = () => {
        dispatch(confirmResetUserPassword(formValues, (error: any, response: any) => {
            if (error) {
                console.error('Registration failed:', error);
            } else {
                console.log('Registration successful:', response);
                setStage(1);
            }
        }
        ));

    }

    const handleNext = () => {
        if (stage === 0) {
            if (password !== confirmPassword || passwordStrength < 4) {
                toast.error("Please fill in all required fields");
            } else {
                handleConfirm();
            }
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
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
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

    const handleBack = () =>{
        if (stage === 0) {
            nav('/');
        } else {
            setStage(stage - 1);
        }
    }


    const handlenav =()=>{
        nav('/signin')
    }




    return (
        <div className={style.cont}>
            <div className={style.cont2}>
                <div className={style.HeaderBtn}>
                    {stage !== 0 &&  <BackBtn handleClick={handleBack} text="Go Back" />}
                </div>
                <div className={style.contMain}>
                    {stage === 0 && (
                        <>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Create new password</div>
                                <div className={style.ContHeaderSubText}>Create and confirm new password.</div>
                            </div>
                            <InputI isTextArea={false}  type='password' label='New Password' name='password' placeholder='Enter Password' onChange={handlePasswordChange}/>
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

                            <InputI isTextArea={false}  type='password' name='password_confirm' onChange={handleConfirmPasswordChange} label='Confirm Password' placeholder='Enter Password'/>

                        </>
                    )}

                    {stage === 1 && (
                        <>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Password changed successfully!</div>
                                <div className={style.ContHeaderSubText}>Go back to log in page to log in with your new password</div>
                            </div>

                        </>
                    )}
                    <div className={style.BtnCtn}>
                        <ButtonII label={ auth.loading ? 'Loading...' : stage === 1 ? 'Back to Login' : 'Reset Password'} disabled={stage === 0 ? password !== confirmPassword || passwordStrength < 4 : false} onClick={stage === 0 ? handleNext : handlenav}/>
                        {stage === 0 && (
                            <div style={{marginTop: '15px'}}>
                                <BackBtn text='Back to Login' handleClick={handlenav}/>

                            </div>
                        )}

                        {/*{stage === 1 && (*/}
                        {/*    <div className={resetStyle.resend}>*/}
                        {/*        0s  <span> Resend code</span>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>
                </div>
            </div>


        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(ProtectedPasswordReset);