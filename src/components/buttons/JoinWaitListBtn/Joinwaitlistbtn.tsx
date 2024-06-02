import React, {FC} from "react";
import '../JoinWaitListBtn/JoinWaitListBtn.css';

interface Props {
    text: string;
    onClick: () => void;
    icon: string;
}

const JoinWaitListBtn: FC<Props> = ({text, onClick, icon}) => {
    return (
        <div className="btn_cont" onClick={onClick}>
            <div className="btn1">
                {text}
            </div>
            <div className="btn2">
                <img src={icon} alt="arrow-down"/>
            </div>

        </div>

    );
};

export default JoinWaitListBtn;

// <button className="join-waitlist-btn" onClick={onClick}>
//     <img src={icon} alt="icon" className="icon" />
//
// </button>