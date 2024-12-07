import React from 'react';
import resetStyle from "../../../pages/auth/Reset/ResetPasssword.module.css";


interface BackBtnProps {
    text: string;
    handleClick?: () => void;
}
const BackBtn = ({text, handleClick} :BackBtnProps) => {
    return (
        <div>
            <div className={resetStyle.BtnCtn} onClick={handleClick}>
                <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1729856771/Am/Amani/Left_dfvzmx.svg" alt="back"/>
                {text}
            </div>
        </div>
    );
};

export default BackBtn;