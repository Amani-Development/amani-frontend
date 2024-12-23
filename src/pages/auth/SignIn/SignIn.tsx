import React, {useState} from 'react';
import LoginStyle from './SignIn.module.css';
import style from "../SignUp/SignUp.module.css";
import InputI from "../../../stories/Input I/input-I";
import ButtonII from "../../../stories/Button II/button-II";
import ButtonIII from "../../../stories/Button III/button-III";
import {Link, useNavigate} from "react-router-dom";
import BackBtn from "../../../components/buttons/BackBtn/backBtn";
import {toast} from "react-toastify";
import {connect, useDispatch} from "react-redux";
import {loginUser} from "../../../store/auth/actions";

interface FormValues {
    email: string;
    password: string;
}
const SignIn = (props:any) => {
    let nav = useNavigate()

    const {auth} = props;



    const defaultFormValues: FormValues = {
        email: "",
        password: "",
    };


    const [formValues, setFormValues] = useState<FormValues>( defaultFormValues);
    const [stage, setStage] = useState<number>(0);
    // const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
    const handleNext = () => {
        if (stage === 0) {
            if (validateForm()) {
                setStage(1);
            } else {
                toast.error("Please fill in all required fields");
            }
        } else if (stage === 1) {
            if (validateForm()) {
                handleLogin();
            } else {
                toast.error("Password is required");
            }
        }

    }


    const handleBack = () =>{
        if (stage === 0) {
            nav('/');
        } else {
            setStage(stage - 1);
        }
    }

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
        if (stage === 1) {
            if (!formValues.password) {
                errors.password = "Password is required";
            } else {
                if (formValues.password.length < 8) {
                    errors.password = "Password must be at least 8 characters long";
                }
                if (!/[A-Z]/.test(formValues.password)) {
                    errors.password = "Password must contain at least one uppercase letter";
                }
                if (!/[a-z]/.test(formValues.password)) {
                    errors.password = "Password must contain at least one lowercase letter";
                }
                if (!/[0-9]/.test(formValues.password)) {
                    errors.password = "Password must contain at least one number";
                }
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(formValues.password)) {
                    errors.password = "Password must contain at least one special character";
                }
            }
        }
        // setFormErrors(errors);
        return Object.keys(errors).length === 0;
     };

     const dispatch = useDispatch();

     const handleLogin=()=>{
         dispatch(loginUser(formValues, (error: any, response: any) => {
             if (error) {
                 console.error('Registration failed:', error);
             } else {
                 localStorage.setItem('AMANITKN', response.token);
                 // console.log('Registration successful:', response);
                 nav('/home');
             }
         }));
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
                            <div className={style.ContHeaderText}>Find your perfect home</div>
                            <div className={style.ContHeaderSubText}>We have a carefully curated list of short lets, apartments and homes.</div>
                        </div>

                        <InputI isTextArea={false} name='email' type='email' label='Email Address' placeholder='myamani@gmail.com' onChange={handleInputChange}/>


                    </>
                )}

                {stage === 1 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Enter Your Password</div>
                            <div className={style.ContHeaderSubText}>Enter the password for this account.</div>
                        </div>
                        <InputI isTextArea={false} name='email' type='email' label='Email Address' value={formValues.email} placeholder='myamani@gmail.com' onChange={handleInputChange}/>
                        <InputI isTextArea={false} name='password'  type='password' label='Password' placeholder='Enter Password' onChange={handleInputChange}/>
                       <div style={{ width: '80%'}}>
                           <div className={LoginStyle.Frgt}><Link to='/password-reset'>Forgot Password?</Link></div>
                       </div>


                    </>
                )}
                <div className={style.BtnCtn}>
                    <ButtonII label={auth.loading? 'Loading...' : 'Login'}  onClick={handleNext}/>
                    {stage === 0 && (<div className={LoginStyle.BtnText}>Don’t have an account? <span  className={LoginStyle.BtnTextSpan}><Link to='/signup'>Sign Up</Link></span></div>)}
                </div>

                <div className={LoginStyle.LoginOptionsCtn}>
                    <div  className={LoginStyle.LoginOptionsOr}><div className={LoginStyle.LoginOptionsHr}></div> <div>or</div> <div className={LoginStyle.LoginOptionsHr}></div> </div>
                    <ButtonIII label='Continue with Google'  backgroundColor='rgb(255, 255, 255)'  textColour='rgb(74, 75, 81)' iconLink='https://res.cloudinary.com/do5wu6ikf/image/upload/v1725453799/Am/Amani/google_symbol.svg_rbuaaj.svg'/>
                    <ButtonIII label='Continue with Apple'  textColour='rgb(255, 255, 255)'  backgroundColor='rgb(74, 75, 81)' iconLink='https://res.cloudinary.com/do5wu6ikf/image/upload/v1725453799/Am/Amani/apple_logo.svg_nedn4o.svg'/>
                </div>

                {stage === 0 && (<div className={LoginStyle.BtnText} style={{textAlign: 'center', width: '80%'}}>
                    By continuing you agree to our <span className={LoginStyle.BtnTextSpan}>Terms and Conditions.</span>
                </div>)}


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

export default connect(mapStateToProps)(SignIn);