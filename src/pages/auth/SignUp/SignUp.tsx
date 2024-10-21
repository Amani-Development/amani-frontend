import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SignUp.module.css';
import {FcGoogle} from "react-icons/fc";
import ReactCountryFlag from "react-country-flag"
import { Country, State, City }  from 'country-state-city';

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


    return (
        <div className={style.cont}>
            <br/>
            <br/>

            <br/>

            <br/>
            <br/>
            Dev in progress.....

            {/*{countries.map((country) => (*/}
            {/*<div>*/}
            {/*    <ReactCountryFlag countryCode={country.value} svg />*/}
            {/*    {country.label}*/}
            {/*</div>*/}
            {/*))}*/}


        </div>
    );
};

export default SignUp;



