import React from 'react';
import style from './SignUp.module.css';
import {useNavigate} from "react-router-dom";
import ButtonI from "../../../stories/Button I/button-I";

const AccountCreated = () => {
    let nav = useNavigate();

    const handlenav =()=>{
        nav('/home')
    }


    return (
        <div className={style.cont}>
            <div className={style.cont2}>
                <div className={style.contMainGreen}>
                    <img style={{marginTop: '10px'}} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1729893182/Am/Amani/25th%20Oct/Amani_x8lm6i.svg" alt="logo"/>
                    <div className={style.ContHeader}>
                        <div className={style.ContHeaderTextGreen}>Account Created</div>
                        <div className={style.ContHeaderSubTextGreen}>You have successfully created an Amani account. Check your registered email for verification.</div>
                        <br/>
                        <br/>
                        <ButtonI primary={true} label='Find a home' onClick={handlenav}/>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default AccountCreated;



