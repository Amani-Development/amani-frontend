import React, { useEffect, useState } from 'react';
import style from './SignUp.module.css';
import { Country } from 'country-state-city';
import Dropdown from "../../../stories/Input III/dropdown";
import PhoneInput from "../../../stories/Input III/phone";
import ButtonII from "../../../stories/Button II/button-II";
import InputI from "../../../stories/Input I/input-I";
import InputII from "../../../stories/Input II/input-II";
import BackBtn from "../../../components/buttons/BackBtn/backBtn";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {connect, useDispatch} from "react-redux";
import {registerUser, ResendActivationUser} from "../../../store/auth/actions";

interface FormValues {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    country: string;
    username: string;
    phone_number: string;
    userType: string;
}

interface OptionType {
    value: string;
    label: string;
    CountryCode: string;
    Country: string;
}


const SignUp = (props:any) => {
    const {auth} = props
    const defaultFormValues: FormValues = {
        first_name: "",
        last_name: "",
        email: "",
        username: 'Akin125',
        password: "",
        country: '',
        phone_number: "",
        userType: "Host",
    };


    const [formValues, setFormValues] = useState<FormValues>(() => {
        const savedFormValues = localStorage.getItem("signUpForm");
        return savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;
    });

    // const [formErrors, setFormErrors] = useState<Partial<FormValues>>({});
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordError, setPasswordError] = useState("");
    const [countries, setCountries] = useState<OptionType[]>([]);
    const [stage, setStage] = useState<number>(0);
    const navigate = useNavigate();

    useEffect(() => {
        // Your effect logic here, ensure it's only triggered once or with a specific dependency
        const countryList = Country.getAllCountries();
        const formattedCountries = countryList.map((country) => ({
            value: country.isoCode,
            label: country.name,
            CountryCode: country.phonecode,
            Country: country.name,
        }));

        // Only set state if necessary
        if (countries.length === 0) {
            setCountries(formattedCountries); // Avoid setting state on every render
        }
    }, [countries.length]); // Dependency array to ensure it runs only when countriesPhone changes


    const validateForm = (): boolean => {
        const errors: Partial<FormValues> = {};

        if (!formValues.first_name) errors.first_name = "First name is required";
        if (!formValues.last_name) errors.last_name = "Last name is required";
        if (!formValues.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Invalid email format";
        }
        if (!formValues.country) errors.country = "Country is required";
        if (!formValues.phone_number) errors.phone_number = "phone_number is required";

        // setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const checkPasswordStrength = (password: string) => {
        let strength = 0;
        const errors: string[] = [];

        if (password.length >= 8) strength++;
        else errors.push("At least 8 characters");

        if (/[A-Z]/.test(password)) strength++;
        else errors.push("One uppercase letter");

        if (/\d/.test(password)) strength++;
        else errors.push("One number");

        if (/[!@#$%^&*]/.test(password)) strength++;
        else errors.push("One special character");

        setPasswordStrength(strength);
        setPasswordError(strength < 4 ? errors.join(", ") : "");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        setFormValues({ ...formValues, password: e.target.value });
    };

    const handleNext = () => {
        if (stage === 0) {
            if (validateForm()) {
                setStage(1);
            } else {
                toast.error("Please fill in all required fields");
            }
        } else if (stage === 1) {
            if (password !== confirmPassword || passwordStrength < 4) {
                toast.error("Password requirements not met");
            } else {
                // handleRegister()
                setStage(2);
            }
        } else if (stage === 2) {
            submit();
            // console.log("Form Data:", formValues);
            localStorage.setItem("signUpForm", JSON.stringify(formValues));
        }
    };


    const handleBack = () =>{
        if (stage === 0) {
            navigate('/');
        } else {
            setStage(stage - 1);
        }
    }
    const handleUserSelection = (userType: string) => {
        setFormValues({ ...formValues, userType });
    };

    const getSegmentColor = (index: number) => {
        if (passwordStrength > index) {
            return ["red", "orange", "rgb(128, 194, 63)", "green"][index] || "#e0e0e0";
        }
        return "#e0e0e0";
    };
    const dispatch = useDispatch();

    const submit = ()=>{
        dispatch(registerUser(formValues, (error: any, response: any) => {
            if (error) {
                console.error('Registration failed:', error);
            } else {
                console.log('Registration successful:', response);
                navigate('/accountcreated');
            }
        }));
    }
    const email = {email: 'philipoluseyi@gmail.com'}

    const ResendLink = () => {
        dispatch(ResendActivationUser(email, (error: any, response: any) => {
            if (error) {
                console.error('Resend failed:', error);
            } else {
                console.log('Resend successful:', response);
            }
        }));
    }

    // console.log(auth);


    return (
        <div className={style.cont}>
            <div className={style.cont2}>
                <div className={style.HeaderBtn}>
                    {stage !== 0 &&  <BackBtn handleClick={handleBack} text="Go Back" />}
                </div>
                <div className={style.contMain}>
                    {stage === 0 && (
                        <>
                            <div onClick={ResendLink}>click</div>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Tell us a bit about yourself</div>
                                <div className={style.ContHeaderSubText}>We have a carefully curated list of short lets, apartments, and homes.</div>
                            </div>
                            <div className={style.userNameCtn}>
                                <InputII name="first_name" type="text" label="First Name" placeholder="John" value={formValues.first_name} onChange={handleInputChange} />
                                <InputII name="last_name" type="text" label="Last Name" placeholder="Doe" value={formValues.last_name} onChange={handleInputChange} />
                            </div>
                            <InputI isTextArea={false} name="email" type="email" label="Email Address" placeholder="myamani@gmail.com" value={formValues.email} onChange={handleInputChange} />
                            <Dropdown value={formValues.country}  isTextArea={false} name="country" img options={countries} label="Country" placeholder="Select Country" getValue={(x) => setFormValues({ ...formValues, country: x.label })} />
                            <PhoneInput value={formValues.phone_number} name="phone_number" options={countries} label="Phone" placeholder="Phone" getValue={(x) => setFormValues({ ...formValues, phone_number: x })} />
                        </>
                    )}

                    {stage === 1 && (
                        <>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Set a Password</div>
                                <div className={style.ContHeaderSubText}>We use this to keep your account safe.</div>
                            </div>
                            <InputI isTextArea={false} type="password" label="Password" placeholder="Enter Password" onChange={handlePasswordChange} />
                            <div className={style.passwordStrengthCtn}>
                                {passwordError && <div className={style.error}>{passwordError}</div>}
                                <div className={style.passwordStrength}>
                                    {[0, 1, 2, 3].map((index) => (
                                        <div key={index} className={style.strengthSegment} style={{ backgroundColor: getSegmentColor(index) }}></div>
                                    ))}
                                </div>
                            </div>
                            <InputI isTextArea={false} type="password" label="Confirm Password" placeholder="Re-enter Password" onChange={handleConfirmPasswordChange} />
                        </>
                    )}

                    {stage === 2 && (
                        <>
                            <div className={style.ContHeader}>
                                <div className={style.ContHeaderText}>Choose User Category</div>
                                <div className={style.ContHeaderSubText}>Select either to sign up as a Host (Landlord) or Tenant to continue</div>
                            </div>
                            <div className={style.UserTypeCtn}>
                                {["Host", "Tenant"].map((userType) => (
                                    <div
                                        key={userType}
                                        className={style.UserTypeText}
                                        style={{ backgroundColor: formValues.userType === userType ? "rgba(214, 214, 215, 0.6)" : "" }}
                                        onClick={() => handleUserSelection(userType)}
                                    >
                                        {userType}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    <div className={style.BtnCtn}>
                        <ButtonII label={auth.loading ? 'Loading..': "Proceed"} disabled={stage === 1 && (password !== confirmPassword || passwordStrength < 4)} onClick={handleNext} />
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

export default connect(mapStateToProps)(SignUp);