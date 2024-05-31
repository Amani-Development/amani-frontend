import React, { FC } from "react";
// import "./index.scss";

interface Props {
    title: string;
    style: object;
    onClick: any;
    button_loading: boolean;
    disabled: boolean;
    icon: string;
}
const PrimaryButton: FC<Props> = (props): JSX.Element => {
    const {
        title,
        style = {},
        onClick,
        button_loading = false,
        disabled = false,
        icon,
    } = props;
    return (
        <div>
            <button
                className={`bg-[#222436] ${
                    button_loading && "opacity-75"
                } white-text text-xs w-8/12 lg:w-3/12 rounded-full`}
                type="submit"
                style={style}
                onClick={onClick}
                disabled={button_loading || disabled}
            >
                <div className="flex items-center justify-center">
                    {button_loading && (
                        <i className="fa fa-spinner fa-pulse mr-2"></i>
                    )}
                    {title}
                    {icon ? <i className={`${icon} ml-2 text-xl`}></i> : <></>}
                </div>
            </button>
        </div>
    );
};

export default PrimaryButton;
