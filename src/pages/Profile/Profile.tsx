import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css';
import userStyle from "../auth/UserOnboarding/UserOnboarding.module.css";
// import style from "../auth/SignUp/SignUp.module.css";
// import BackBtn from "../../components/buttons/BackBtn/backBtn";
import edit from '../../assets/icons/edit.svg'
import InputI from "../../stories/Input I/input-I";
import ButtonI from "../../stories/Button I/button-I";
import person from "../../assets/icons/profile.svg";
import Dropdown from "../../stories/Input III/dropdown";
import {Country} from "country-state-city";
import {useNavigate} from "react-router-dom";
import ApartmentCard from "../../components/cards/ApartmentCard";

const Profile = () => {

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        console.log(file);
    }

    const [headerNav, setHeaderNav] = React.useState('Profile');

    const handleheaderNav = (value: string) => {
        setHeaderNav(value);
    }


    const [inputWidth, setInputWidth] = useState(100); // Default width
    const [BtnWidth, setBtnWidth] = useState('100%'); // Default width

    useEffect(() => {
        const updateInputWidth = () => {
            if (window.matchMedia('(min-width: 1280px)').matches) {
                setInputWidth(100); // Width for large screens
                setBtnWidth('11%')

            }else if (window.matchMedia('(min-width: 1024px)').matches) {
                setBtnWidth('11%')
                setInputWidth(100); // Width for large screens
            } else if (window.matchMedia('(min-width: 768px)').matches) {
                setInputWidth(100); // Width for medium screens
                setBtnWidth('100%')
            } else {
                setInputWidth(100); // Width for small screens
                setBtnWidth('100%')
            }
        };

        // Initial check on mount
        updateInputWidth();

        // Add event listener for resize
        window.addEventListener('resize', updateInputWidth);

        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', updateInputWidth);
    }, []);

    interface OptionType {
        value: string;
        label: string;
    }

    const banks :OptionType[] = [
        { value: 'GTCO', label: 'GTCO' },
        { value: 'First Bank', label: 'First Bank' },
        { value: 'Access Bank', label: 'Access Bank' },
        { value: 'Zenith Bank', label: 'Zenith Bank' },
        { value: 'UBA', label: 'UBA' },
        { value: 'Stanbic IBTC', label: 'Stanbic IBTC' },
        { value: 'Ecobank', label: 'Ecobank' },
        { value: 'Fidelity Bank', label: 'Fidelity Bank' },
        { value: 'Union Bank', label: 'Union Bank' },
        { value: 'Sterling Bank', label: 'Sterling Bank' },
        { value: 'Wema Bank', label: 'Wema Bank' },
        { value: 'Providus Bank', label: 'Providus Bank' },
        { value: 'Jaiz Bank', label: 'Jaiz Bank' },
        { value: 'Citibank', label: 'Citibank' },
    ];

    const [countries, setCountries] = useState<OptionType[]>([]);

    useEffect(() => {
        const countries = Country.getAllCountries();
        const countryOptions = countries.map((country) => ({
            value: country.isoCode,
            label: country.name,
        }));
        setCountries(countryOptions);
    }, []);

    let nav = useNavigate();

    const handleNavgation =()=>{
        nav('/accountcreated')
    }

    const card = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1, // Unique identifier
        name: `Item ${index + 1}`, // Example property
    }));

    return (
        <div className={userStyle.Ctn}>

            <div className={userStyle.Ctn2}>
                {/*<div style={{width: BtnWidth}} className={style.HeaderBtn}>*/}
                {/*    /!*<BackBtn text='Go Back'/>*!/*/}
                {/*</div>*/}
                <div className={userStyle.ProfileCtn}>
                    <div className={userStyle.ProfileImgCtn}>
                        <img
                            src={person}
                            style={{borderRadius: '50%', width: '140px', height: '140px', marginBottom: '10px'}}
                            alt="ProfileImgUpload"/>
                        <div className={userStyle.ProfileImgBtn}
                             onClick={() => document.getElementById('file')?.click()}>
                            <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1729893182/Am/Amani/25th%20Oct/Camera_wqhkis.svg"
                                alt="camera"/>
                            {' '}
                            Change Profile picture
                        </div>


                        <div className={styles.ReviewCtn}>
                            <div className={styles.ReviewText}>Reviews</div>
                            <div className={styles.RaatingText}>4.2 <span  className={styles.Star1}>★</span></div>
                            <div className={styles.ReviewedTextCtn}>
                                <div className={styles.ReviewedText}>Amanis reviewed - 14</div>
                                <div className={styles.ReviewedText}>Tenants reviewed - 14</div>
                            </div>

                            <div className={styles.StarCtn}>
                                <div className={styles.StarItemCtn}>
                                    <div className={styles.StarImg}>5 star <span  className={styles.Star2}>★</span></div>
                                    <div className={styles.StarText}> 3</div>
                                </div>
                                <div className={styles.StarItemCtn}>
                                    <div className={styles.StarImg}>4 star <span  className={styles.Star2}>★</span></div>
                                    <div className={styles.StarText}> 3</div>
                                </div>
                                <div className={styles.StarItemCtn}>
                                    <div className={styles.StarImg}>3 star <span  className={styles.Star2}>★</span></div>
                                    <div className={styles.StarText}> 3</div>
                                </div>
                                <div className={styles.StarItemCtn}>
                                    <div className={styles.StarImg}>2 star <span  className={styles.Star2}>★</span></div>
                                    <div className={styles.StarText}> 3</div>
                                </div>
                                <div className={styles.StarItemCtn}>
                                    <div className={styles.StarImg}>1 star <span  className={styles.Star2}>★</span></div>
                                    <div className={styles.StarText}> 3</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.DetailsCtn}>
                            <div className={styles.DetailsText}>Joined August 2024</div>
                            <div className={styles.DetailsShare}><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1734861365/Am/Amani/mynaui_share_rdovir.svg" alt="shareIcon"/>Share Profile</div>

                        </div>

                        <input type="file" accept="image/*" id="file" style={{display: 'none'}}
                               onChange={handleImageChange}/>

                    </div>

                    <div className={userStyle.ProfileDetailsCtn}>
                        <div className={userStyle.ProfileDetailsNav1}>
                            <div className={userStyle.ProfileDetailsNav}>
                                <div className={userStyle.ProfileDetailsNavText}
                                     style={{
                                         color: headerNav === 'Amanis' ? 'rgb(56, 57, 61)' : '',
                                         borderBottom: headerNav === 'Amanis' ? '1px solid rgb(56, 57, 61)' : '',
                                     }} onClick={() => handleheaderNav(('Amanis'))}
                                >Amanis
                                </div>
                                <div className={userStyle.ProfileDetailsNavText}
                                     style={{
                                         color: headerNav === 'Profile' ? 'rgb(56, 57, 61)' : '',
                                         borderBottom: headerNav === 'Profile' ? '1px solid rgb(56, 57, 61)' : '',
                                     }} onClick={() => handleheaderNav(('Profile'))}
                                >Profile
                                </div>
                                <div className={userStyle.ProfileDetailsNavText}
                                     style={{
                                         color: headerNav === 'Personal' ? 'rgb(56, 57, 61)' : '',
                                         borderBottom: headerNav === 'Personal' ? '1px solid rgb(56, 57, 61)' : '',
                                     }} onClick={() => handleheaderNav(('Personal'))}
                                >Personal Profile
                                </div>
                            </div>
                        </div>
                        {headerNav === 'Amanis' && (
                            <div className={userStyle.ProCtn}>
                                <div className={styles.CardCtn}>
                                    {card.map((item) => (
                                        <div key={item.id}>
                                            <ApartmentCard/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {headerNav === 'Profile' && (
                            <div className={userStyle.ProCtn}>
                                <div className={userStyle.ProDataCtn1}>
                                    <InputI isTextArea={false} width={inputWidth} type='text' label='First Name'
                                            placeholder='John'/>
                                    <InputI isTextArea={false} width={inputWidth} type='text' label='Last Name'
                                            placeholder='Doe'/>

                                </div>
                                <div className={userStyle.ProDataCtn2}>
                                    <div className={userStyle.ProDataCtn2Wrapper}>
                                        <div className={userStyle.ProDataCtn2HeadText}>Location</div>
                                        <div className={userStyle.ProDataCtn2SubText}>Osun, Nigeria</div>
                                    </div>

                                    <div className={userStyle.ProDataCtn2Wrapper}>
                                        <div className={userStyle.ProDataCtn2HeadText}>Status</div>
                                        <div className={userStyle.ProDataCtn2SubText}>Landlord</div>
                                    </div>

                                    <div className={userStyle.ProDataCtn2Wrapper}>
                                        <div className={userStyle.ProDataCtn2HeadText}>Activities</div>
                                        <div className={userStyle.ProDataCtn2SubText}>--</div>
                                    </div>


                                </div>
                                <div className={userStyle.ProDataCtn3}>
                                    <InputI isTextArea={true} width={inputWidth} type='text' label='Bio'
                                            placeholder='I am ....'/>

                                </div>
                                <ButtonI primary={true} label='Next'/>
                            </div>
                        )}

                        {headerNav === 'Personal' && (
                            <div className={userStyle.ProCtn}>
                                <div className={userStyle.PeronalProWrapper}>
                                    <div className={userStyle.PeronalProHeaderText}>Valid ID Document</div>

                                    <div className={userStyle.PeronalProDocumentUpload}
                                         onClick={() => document.getElementById('IDDocument')?.click()}>
                                        Drag or <span
                                        className={userStyle.PeronalProDocumentSpecialText}> upload Amani</span> files
                                    </div>

                                    <input type="file" accept="image/*" id="IDDocument" style={{display: 'none'}}
                                           onChange={handleImageChange}/>

                                    <div className={userStyle.PeronalProSubText}>
                                        <p>Add valid Identification documents, of any of the following :</p>
                                        <ol>
                                            <li>1. Valid National Identification card</li>
                                            <li>2. Drivers License</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className={userStyle.PeronalProWrapper}>
                                    <div className={userStyle.PeronalProHeaderText}>Birth Certificate</div>

                                    <div className={userStyle.PeronalProDocumentUpload}
                                         onClick={() => document.getElementById('IDDocument2')?.click()}>
                                        Drag or <span
                                        className={userStyle.PeronalProDocumentSpecialText}> upload Amani</span> files
                                    </div>

                                    <input type="file" accept="image/*" id="IDDocument2" style={{display: 'none'}}
                                           onChange={handleImageChange}/>

                                    <div className={userStyle.PeronalProSubText}>
                                        <p>Add valid Birth Certificate</p>
                                    </div>
                                </div>
                                <div className={userStyle.PeronalProWrapper}>
                                    <div className={userStyle.PeronalProHeaderText}>Payment Account Details</div>

                                    <div style={{margin: '10px 0'}} className={userStyle.inputPersonal}>
                                        <Dropdown img={true} width={inputWidth} options={countries} isTextArea={false}
                                                  label='Country' placeholder='Nigeria'/>

                                        <Dropdown img={false} width={inputWidth} options={banks} isTextArea={false}
                                                  label='Bank Name' placeholder='GTCO'/>
                                        <InputI isTextArea={false} width={inputWidth} type='text' label='Account Number'
                                                placeholder='Input valid account number'/>
                                        <InputI isTextArea={false} width={inputWidth} type='text' label='Account Name'
                                                placeholder='Input valid account number'/>


                                    </div>

                                    <div className={userStyle.PeronalProSubText}>
                                        <p>Kindly add your bank account details to receive amani payments</p>
                                        <p><span style={{textDecoration: 'underline'}}>Note:</span> Microfinance banks
                                            and fintech companies are not accepted by Amani for payments. </p>
                                    </div>
                                </div>
                                <div className={userStyle.PeronalProWrapper}>
                                    <div className={userStyle.PeronalProHeaderText}>Current Residential Address</div>

                                    <div style={{margin: '10px 0'}} className={userStyle.inputPersonal}>
                                        <Dropdown img={true} width={inputWidth} options={countries} isTextArea={false}
                                                  label='Country' placeholder='Nigeria'/>
                                        <InputI isTextArea={false} width={inputWidth} type='text' label='State'
                                                placeholder='Osun'/>
                                        <InputI isTextArea={false} width={inputWidth} type='text' label='City'
                                                placeholder='Ile-Ife'/>
                                        <InputI isTextArea={false} width={inputWidth} type='text'
                                                label='Residential Address' placeholder='No 211, Obafemi Street'/>

                                    </div>
                                    <div className={userStyle.PeronalProSubText}>
                                        <p>Kindly add your current address of residence</p>
                                    </div>
                                </div>
                                <div>
                                    <ButtonI primary={true} label='Submit' onClick={handleNavgation}/>
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Profile;