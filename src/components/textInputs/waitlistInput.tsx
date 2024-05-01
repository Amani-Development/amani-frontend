import { FC, ReactNode, useState } from "react";
import "./index.css";
import { Controller } from "react-hook-form";
import moment from "moment";

import eye from "assets/dock/eye.svg";
import eyeclose from "assets/dock/eyeclose.svg";
import green from "assets/dock/caretright-green.svg";

interface Props {
    control: object;
    name: string;
    id: string;
    label: string | ReactNode;
    isRequired: boolean;
    isDisabled: boolean;
    type: string;
    placeholder: string;
    icon?: any;
    errors: object;
    defaultValue: string;
    min: string; //for date type
    max: string;
    extra?: boolean;
    style?: any;
    isMargined?: boolean;
    customOnChange?: (e: any) => void;
}

const CustomInput: FC<Props> = ({
    control,
    name,
    id,
    label,
    isRequired,
    isDisabled = false,
    type,
    placeholder,
    icon,
    errors,
    defaultValue,
    min, //for date type
    max,
    extra = false,
    style,
    isMargined = true,
    customOnChange
}): JSX.Element => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordStatus, setPasswordStatus] = useState(0);
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    // console.log("object>>>", defaultValue);

    return (
        <div className={`${isMargined ? "mb-3" : ""}`}>
            {label
                ? <label className="text-sm font-light grey-text" htmlFor={id}>{label}</label>
                : <></>
            }
            <div className={`${isMargined ? "mt-1" : "mt-3"}`}>
                <Controller
                    //  @ts-ignore
                    control={control}
                    defaultValue={defaultValue}
                    name={name}
                    rules={{
                        required: isRequired ? true : false,
                    }}
                    // @ts-ignore
                    render={({ field: { onChange, value } }) => {
                        return (
                            <>
                                <div className="d-flex align-items-center">
                                    <div className="relative">
                                        <input
                                            id={id}
                                            name={name}
                                            autoComplete="off"
                                            className={`form-input px-4 py-2 custom-input w-full font-light white-text border-grey-2 ${isDisabled
                                                ? "input-disabled"
                                                : ""
                                                }`}
                                            style={style}
                                            type={
                                                type === "number"
                                                    ? "number"
                                                    : type ===
                                                        "password-with-strength-meter" ||
                                                        type === "password"
                                                        ? passwordShown
                                                            ? "text"
                                                            : "password"
                                                        : type
                                            }
                                            value={value}
                                            onChange={(val) => {
                                                onChange(val);
                                                if (customOnChange) customOnChange(val.target.value);
                                                setPasswordValue(
                                                    val.target.value
                                                );
                                            }}
                                            placeholder={placeholder}
                                            disabled={isDisabled}
                                            min={
                                                type === "number" && !min
                                                    ? "0"
                                                    : min
                                            }
                                            max={max}
                                            step={
                                                type === "number"
                                                    ? "any"
                                                    : undefined
                                            } // Adding step attribute for decimal input
                                            defaultValue={
                                                type === "number"
                                                    ? parseFloat(defaultValue) // Parse float for decimal input
                                                    : type === "date"
                                                        ? defaultValue
                                                        : defaultValue
                                            }
                                        />

                                    </div>


                                </div>
                            </>
                        );
                    }}
                />
                {/* @ts-ignore */}
                {errors[name] && (
                    <div className="mt-2 error-text">
                        {/* @ts-ignore */}
                        {errors[name]["message"] ? (
                            //  @ts-ignore
                            <p>{errors[name]["message"]}</p>
                        ) : (
                            <p>{label ? label : name} is required.</p>
                        )}
                    </div>
                )}


            </div>
        </div>
    );
};

CustomInput.displayName = "CustomInput";

export default CustomInput;