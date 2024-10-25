import React, {useState} from 'react';
import LoginStyle from './SignIn.module.css';
import style from "../SignUp/SignUp.module.css";
import InputI from "../../../stories/Input I/input-I";
import ButtonII from "../../../stories/Button II/button-II";
import ButtonIII from "../../../stories/Button III/button-III";
import {Link} from "react-router-dom";
const SignIn = () => {
    const [stage, setStage] = useState<number>(0);
    const [password, setPassword] = useState("");

    const handleNext = () => {
        if(stage <= 0){
            setStage(stage + 1);
        }

    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    return (
        <div className={style.cont}>
            <div className={style.contMain}>
                {stage === 0 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Find your perfect home</div>
                            <div className={style.ContHeaderSubText}>We have a carefully curated list of short lets, apartments and homes.</div>
                        </div>

                        <InputI isTextArea={false}  type='email' label='Email Address' placeholder='myamani@gmail.com'/>


                    </>
                )}

                {stage === 1 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Enter Your Password</div>
                            <div className={style.ContHeaderSubText}>Enter the password for this account.</div>
                        </div>
                        <InputI isTextArea={false}  type='email' label='Email Address' placeholder='myamani@gmail.com'/>
                        <InputI isTextArea={false}  type='password' label='Password' placeholder='Enter Password' onChange={handlePasswordChange}/>
                       <div style={{ width: '80%'}}>
                           <div className={LoginStyle.Frgt}><Link to='/password-reset'>Forgot Password?</Link></div>
                       </div>


                    </>
                )}
                <div className={style.BtnCtn}>
                    <ButtonII label='Login'  onClick={handleNext}/>
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

    );
};


export default SignIn;