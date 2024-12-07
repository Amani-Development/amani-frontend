import React, {useState} from 'react';
import style from "../SignUp/SignUp.module.css";
import ButtonII from "../../../stories/Button II/button-II";
import InputI from "../../../stories/Input I/input-I";
import {useNavigate} from "react-router-dom";
import BackBtn from "../../../components/buttons/BackBtn/backBtn";
import {toast} from "react-toastify";
import {resetUserPassword} from "../../../store/auth/actions";
import {connect, useDispatch} from "react-redux";


interface FormValues {
    email: string;
}
const ResetPassword = (props :any) => {
    let nav = useNavigate();

    const {auth} = props;

    const defaultFormValues: FormValues = {
        email: "",
    };


    const [formValues, setFormValues] = useState<FormValues>( defaultFormValues);
    // const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
    const [stage, setStage] = useState<number>(0);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = (): boolean => {
        const errors: Partial<FormValues> = {};
        if (!formValues.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Invalid email format";
        }
        // setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
const dispatch = useDispatch();
    const handleReset=()=>{
        dispatch(resetUserPassword(formValues, (error: any, response: any) => {
            if (error) {
                console.error('Registration failed:', error);
            } else {
                console.log('Registration successful:', response);
                setStage(1);
                // window.location.href= `https://jaromtravels.com/password-reset/${response.uidb64}/${response.token}`
            }
        }));
    }

    const handleSubmit = () => {
        if (validateForm()) {
            handleReset();
        } else {
            toast.error("Please fill in all required fields");
        }
    }

    const handlenav =()=>{
        nav('/signin')
    }



    return (
        <div className={style.cont}>
            <div className={style.cont2}>
                <div className={style.contMain}>
                    { stage === 0 &&
                        <>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Forgot password?</div>
                                <div className={style.ContHeaderSubText}>No worries, enter your registered email address and we will send you a reset code.</div>
                            </div>
                            <InputI isTextArea={false}  type='email' label='Email Address' placeholder='myamani@gmail.com' onChange={handleInputChange} name='email'/>

                        </>
                    }

                    { stage === 1 &&
                        <>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Check your mail</div>
                                <div className={style.ContHeaderSubText}>A passwort reset link has been sent to your mail</div>
                            </div>

                        </>
                    }

                    <div className={style.BtnCtn}>
                        <ButtonII label={ auth.loading ? 'Loading...' : stage===0? 'Reset Password' : 'Reset Link Sent' }  onClick={handleSubmit}/>
                            <div style={{marginTop: '15px'}}>
                                <BackBtn text='Back to Login' handleClick={handlenav} />
                            </div>
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

export default connect(mapStateToProps)(ResetPassword);