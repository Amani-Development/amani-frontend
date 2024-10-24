import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SignUp.module.css';
import {FcGoogle} from "react-icons/fc";
import ReactCountryFlag from "react-country-flag"
import { Country, State, City }  from 'country-state-city';
import Dropdown from "../../../stories/Input III/dropdown";
import PhoneInput from "../../../stories/Input III/phone";
import ButtonII from "../../../stories/Button II/button-II";
import InputI from "../../../stories/Input I/input-I";
import InputII from "../../../stories/Input II/input-II";

const SignUp = () => {

    interface OptionType {
        value: string;
        label: string;
    }

    const [countries, setCountries] = useState<OptionType[]>([]);

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


    return (
        <div className={style.cont}>
            <div className={style.contMain}>
                <div className={style.userNameCtn}>
                    <InputII  type='text' label='First Name' placeholder='John'/>
                    <InputII  type='text' label='Last Name' placeholder='Doe'/>
                </div>
                <InputI isTextArea={false}  type='email' label='Email Address' placeholder='myamani@gmail.com'/>
                <Dropdown options={countries} isTextArea={false} label='Country' placeholder='Nigeria'/>
                <PhoneInput options={countriesPhone} label='Phone' placeholder='00 000 000' />
                <ButtonII label='Proceed'/>
            </div>



        </div>
    );
};

export default SignUp;



