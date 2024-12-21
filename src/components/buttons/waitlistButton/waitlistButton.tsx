import React, {FC} from "react";
// import "./index.scss";
import '../waitlistButton/waitlistButton.css'

interface Props {
    title: string;
    style: object;
    onClick: any;
    button_loading: boolean;
    disabled: boolean;
    icon: string | JSX.Element;
}

const PrimaryButton: FC<Props> = (props): JSX.Element => {
    const {
        title,
        style = {},
        onClick,
        button_loading = false,
        disabled = false,
        icon,
    } = props
    // console.log(button_loading)
    return (
        <div>
            <button
                className={`btn-wait ${button_loading && "btn-load"}`}
                type="submit"
                style={style}
                onClick={onClick}
                disabled={button_loading || disabled}
            >

                {button_loading && (
                    <div className="">
                        <i className="fa fa-spinner fa-pulse mr-2"></i>
                    </div>
                )}
                {title}
                {icon ? <i className={`${icon} ml-2 text-xl`}></i> : <></>}
            </button>
        </div>
    );
};

export default PrimaryButton;
