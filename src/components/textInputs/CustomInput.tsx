import {FC, ReactNode, useState} from "react";
import "./index.css";
import {Controller} from "react-hook-form";

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
    min: string;
    max: string;
    extra?: boolean;
    style?: any;
    isMargined?: boolean;
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
                                    min,
                                    max,
                                    extra = false,
                                    style,
                                    isMargined = true,
                                }): JSX.Element => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordStatus, setPasswordStatus] = useState(0);
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className={`${isMargined ? "mb-3" : ""}`}>
            <label className="text-sm font-light grey-text" htmlFor={id}>
                {label}
            </label>
            <div className={`${isMargined ? "mt-1" : "mt-3"}`}>
                <Controller
                    //@ts-ignore
                    control={control}
                    defaultValue={defaultValue}
                    name={name}
                    rules={{
                        required: isRequired ? true : false,
                    }}
                    render={({field: {onChange, value}}) => {
                        return (
                            <>
                                <div className="d-flex align-items-center">
                                    <div className="relative">
                                        <input
                                            id={id}
                                            name={name}
                                            autoComplete="off"
                                            className={`px-4 py-4 custom-input w-full font-light black-text  ${
                                                isDisabled
                                                    ? "input-disabled"
                                                    : ""
                                            } ${
                                                isInputFocused
                                                    ? "input-active"
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
                                            }
                                            defaultValue={
                                                type === "number"
                                                    ? parseFloat(defaultValue)
                                                    : type === "date"
                                                        ? defaultValue
                                                        : defaultValue
                                            }
                                            onFocus={() =>
                                                setIsInputFocused(true)
                                            }
                                            onBlur={() =>
                                                setIsInputFocused(false)
                                            }
                                        />
                                    </div>
                                </div>
                            </>
                        );
                    }}
                />
                {errors[name] && (
                    <div className="mt-2 font-light" style={{color: "pink"}}>
                        {errors[name]["message"] ? (
                            <p className="font-light capitalize text-xs text-left">
                                {errors[name]["message"]}
                            </p>
                        ) : (
                            <p className="font-light capitalize text-xs text-left">
                                {label ? label : name} is required.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
