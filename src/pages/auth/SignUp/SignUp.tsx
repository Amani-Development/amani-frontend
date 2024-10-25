import React, {useEffect, useState } from 'react';
import style from './SignUp.module.css';
import { Country, State, City }  from 'country-state-city';
import Dropdown from "../../../stories/Input III/dropdown";
import PhoneInput from "../../../stories/Input III/phone";
import ButtonII from "../../../stories/Button II/button-II";
import InputI from "../../../stories/Input I/input-I";
import InputII from "../../../stories/Input II/input-II";

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordError, setPasswordError] = useState("");

    interface OptionType {
        value: string;
        label: string;
    }

    const [countries, setCountries] = useState<OptionType[]>([]);
    const [stage, setStage] = useState<number>(0);

    useEffect(() => {
        const countries = Country.getAllCountries();
        const countryOptions = countries.map((country) => ({
            value: country.isoCode,
            label: country.name,
        }));
        setCountries(countryOptions);
    }, []);

    interface OptionType2 {
        value: string;
        CountryCode: string;
        Country: string;
    }

    const [countriesPhone, setCountriesPhone] = useState<OptionType2[]>([]);

    useEffect(() => {
        const countriesPhone = Country.getAllCountries();
        const countriesPhoneOptions = countriesPhone.map((country) => ({
            value: country.isoCode,
            CountryCode: country.phonecode,
            Country: country.name,
        }));
        setCountriesPhone(countriesPhoneOptions);
    }, []);

    const handleNext = () => {
        setStage(stage + 1);

    }

    const checkPasswordStrength = (password: string) => {
        let strength = 0;
        let errorMessages :string[]  = [];

        // Check password length
        if (password.length >= 8) {
            strength++;
        } else {
            errorMessages.push("At least 8 characters");
        }

        // Check for uppercase letters
        if (/[A-Z]/.test(password)) {
            strength++;
        } else {
            errorMessages.push("One uppercase letter");
        }

        // Check for numbers
        if (/\d/.test(password)) {
            strength++;
        } else {
            errorMessages.push("One number");
        }

        // Check for special characters
        if (/[!@#$%^&*]/.test(password)) {
            strength++;
        } else {
            errorMessages.push("One special character");
        }

        setPasswordStrength(strength);

        // Set error message if password doesn't meet criteria
        if (strength < 4) {
            setPasswordError(errorMessages.join(", "));
        } else {
            setPasswordError("");
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };


    const getSegmentColor = (index: number) => {
        if (passwordStrength > index) {
            switch (index) {
                case 0:
                    return "red";
                case 1:
                    return "orange";
                case 2:
                    return "rgb(128, 194, 63)";
                case 3:
                    return "green";
                default:
                    return "#e0e0e0";
            }
        }
        return "#e0e0e0";
    };

    const [User, setUser] = React.useState('Host');

    const handleUser = (value: string) => {
        setUser(value);
    }

    return (
        <div className={style.cont}>
            <div className={style.contMain}>
                {stage === 0 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Tell us a bit about yourself</div>
                            <div className={style.ContHeaderSubText}>we have a carefully curated list of short lets, apartments and homes.</div>
                        </div>
                        <div className={style.userNameCtn}>
                            <InputII  type='text' label='First Name' placeholder='John'/>
                            <InputII  type='text' label='Last Name' placeholder='Doe'/>
                        </div>
                        <InputI isTextArea={false}  type='email' label='Email Address' placeholder='myamani@gmail.com'/>
                        <Dropdown options={countries} isTextArea={false} label='Country' placeholder='Nigeria'/>
                        <PhoneInput options={countriesPhone} label='Phone' placeholder='00 000 000' />
                    </>
                )}

                {stage === 1 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Set a Password</div>
                            <div className={style.ContHeaderSubText}>We use this to keep your account safe.</div>
                        </div>
                        <InputI isTextArea={false}  type='password' label='Password' placeholder='Enter Password' onChange={handlePasswordChange}/>
                       <div className={style.passwordStrengthCtn}>
                           {passwordError && <div className={style.error}>{passwordError}</div>}

                           {/* Password strength indicator with broken segments */}
                           <div className={style.passwordStrength}>
                               {[0, 1, 2, 3].map((index) => (
                                   <div
                                       key={index}
                                       className={style.strengthSegment}
                                       style={{ backgroundColor: getSegmentColor(index) }}
                                   ></div>
                               ))}
                           </div>
                       </div>

                        <InputI isTextArea={false}  type='password' onChange={handleConfirmPasswordChange} label='Confirm Password' placeholder='Enter Password'/>

                    </>
                )}

                {stage === 2 && (
                    <>
                        <div className={style.ContHeader}>
                            <div className={style.ContHeaderText}>Choose User Category</div>
                            <div className={style.ContHeaderSubText}>Select either to sign up as an Amani Host (Landlord) or Tenant to continue</div>
                        </div>


                        <div className={style.UserTypeCtn}>
                            <div className={style.UserTypeText}
                                 style={{
                                     backgroundColor: User === 'Host' ? 'rgba(214, 214, 215, 0.6)' : '',
                                 }} onClick={() => handleUser(('Host'))}
                            >Host</div>
                            <div className={style.UserTypeText}
                                 style={{
                                     backgroundColor: User === 'Tenant' ? 'rgba(214, 214, 215, 0.6)' : '',
                                 }} onClick={() => handleUser(('Tenant'))}
                            >Tenant</div>
                        </div>


                    </>
                )}
                <div className={style.BtnCtn}>
                    <ButtonII label='Proceed'  disabled={stage === 1 ? password !== confirmPassword || passwordStrength < 4 : false} onClick={handleNext}/>
                </div>
            </div>



        </div>
    );
};

export default SignUp;



