import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import '../waitlist/waitlist.css'
import 'animate.css'
import amani from "assets/logos/amaniii.svg";
import amanifull from "assets/logos/amani-white.svg";
import amaniX from "assets/icons/amani-x.svg";
import amaniIG from "assets/icons/amani-ig.svg";
import amaniFB from "assets/icons/amani-fb.svg";
import avatar from "assets/icons/List.svg";
import arrowR from "assets/icons/arrow-right.svg";
import amaniHouse from "assets/icons/amani-house.svg";
import amaniIll from "assets/icons/amani-ill.svg";
import mac from "assets/logos/macc.svg";
import mail from "assets/icons/sms.svg";
import person from "assets/icons/basil_user-solid.svg";
import CustomInput from "components/textInputs/CustomInput";
import CustomRadio from "components/selectInputs/customRadio";
import { subscribeToEmail } from "store/actions";
import WaitlistButton from "components/buttons/waitlistButton/waitlistButton";
import SuccessModal from "./waitlistPartials/successModal";
import iphone from "assets/logos/iphones.svg";
import zig from "assets/banner/zigzag.png";
import Joinwaitlistbtn from "../../components/buttons/JoinWaitListBtn/Joinwaitlistbtn";

function Waitlist(props: any) {
    const { loading, button_loading, subscribeToEmail } = props;
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [landlord, setLandlord] = useState(true);
    const [tenant, setTenant] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    // const scrollRef = useRef<HTMLElement | null>(null);
    const scrollRefMac = useRef<HTMLElement | null>(null);
    const scrollRefForm = useRef<HTMLElement | null>(null);

    const scrollToElement = () => {
        //@ts-ignore
        scrollRefMac.current.scrollIntoView({ behavior: "smooth" });

        // Pause for a few seconds (you can adjust the delay as needed)
        setTimeout(() => {
            //@ts-ignore
            scrollRefForm.current.scrollIntoView({ behavior: "smooth" });
        }, 1500);
    };

    const openAmaniWhatsapp = () => {
        window.open(
            " https://chat.whatsapp.com/BYriTzUIPY94N9y351jluB",
            "_blank"
        );
    };

    const openAmaniX = () => {
        window.open(
            " https://twitter.com/my_amani123/status/1753347277802856515?t=BD4rr8oQHGIdkmR2TzRj8g",
            "_blank"
        );
    };
    const openAmaniIG = () => {
        window.open(
            " https://www.instagram.com/rankingamani?igsh=MWh3a3l5bjZ4NGRsZg==",
            "_blank"
        );
    };
    const openAmaniFacebook = () => {
        window.open(
            " https://www.facebook.com/profile.php?id=61554519375256&mibextid=LQQJ4d",
            "_blank"
        );
    };

    const openSuccessModal = () => {
        setShowSuccessModal(true);
    };

    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const onSubmit = (data: any) => {
        const newData = {
            fullname: data?.fullname,
            email: data?.email,
            landlord: landlord,
            tenant: tenant,
        };
        subscribeToEmail(newData, openSuccessModal);
        console.log(newData);
    };
    const containerRef = useRef<HTMLUListElement>(null); // Adjusted the ref type to HTMLUListElement
    let previousElementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        function shuffleChildren(container: HTMLElement) {
            for (let i = container.children.length; i >= 0; i--) {
                container.appendChild(container.children[(Math.random() * i) | 0]);
            }

            if (previousElementRef.current) {
                previousElementRef.current.classList.remove("animated", "specific-class");
            }

            const newElement = container.children[2] as HTMLElement;
            newElement.classList.add("animated", "specific-class", "bounceOutRight");
            previousElementRef.current = newElement;
        }

        if (container) {
            const intervalId = setInterval(() => {
                shuffleChildren(container);
            }, 3000);

            return () => clearInterval(intervalId);
        }
    }, []);

    const mediaQueryStyles: React.CSSProperties = {
        flexDirection: 'row-reverse',
    };

    // Check if the screen width is less than or equal to 768px
    const isSmallScreen = window.innerWidth >= 768;




    return (
        <>
            <div>
                {/*Header*/}
                <div className="Header">
                    <div className="join_community" onClick={openAmaniWhatsapp}>Join Our Community</div>
                </div>

                {/*Hero*/}
                <div className="Hero_container">
                    <img className='amani-logo' src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179234/Am/amarin/Vector_zmenxp.svg' alt="amani-logo" />

                    <h1 className="hero_text">
                        Say goodbye to{" "}
                        <ul className='hero_text_green'>
                            <li>Agency Fees!</li>
                            <li>Middlemen!</li>
                        </ul>
                    </h1>

                    <div className="hero_sub_text">
                        Skip house agents and{" "} <span className="hero_text_green">connect{" "}</span> <br/> easily to Landlords
                    </div>

                    <div className="avatar_section">
                        <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179247/Am/amarin/List_keiyli.svg' alt="avatarList" />
                        <div className="AS_text">
                            <div className="Community_Number">47+</div>
                            <div className="Community_Text">Joined the Waitlist</div>
                        </div>
                    </div>

                    <div className="button_section">
                        <Joinwaitlistbtn text='Join Waitlist' onClick={scrollToElement} icon='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179234/Am/amarin/uil_arrow-right_ouw5cu.svg'/>
                    </div>

                </div>
               {/*Section 1*/}
               <div className="wrapper_cont">
                   <div
                       className="section_1_container"
                       // @ts-ignore
                       ref={scrollRefMac}
                   >
                       <div className="section_1_main">
                           <div className="section_1_text">
                               Easily put up your properties <br/> for sale, browse
                               verified <br/> listing, schedule viewings, <br/> and apply
                               for rentals directly <br/> through our platform
                           </div>
                           <div className="section_1_img">
                               <img
                                   src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179259/Am/amarin/Frame_1618868496_zmwvcg.svg'
                                   alt="phones"
                               />
                           </div>
                       </div>
                   </div>
               </div>

                {/*section 2*/}
                <div className="section_2_cont">
                    <div className="section_2_text hero_text_green">
                        Join our waitlist
                    </div>
                    <div className="section_2_subtext hero_text_green">
                        Get early access, news & updates
                    </div>
                </div>

                {/*form*/}
                {/* @ts-ignore */}
                <div className="form_container_1" ref={scrollRefForm}>
                    <form className="form_container_2" onSubmit={handleSubmit(onSubmit)}>

                            <div className="fields_container">
                                <CustomInput
                                    control={control}
                                    name={"fullname"}
                                    id={"fullname"}
                                    label={""}
                                    placeholder={"Full Name"}
                                    isRequired={true}
                                    type={"text"}
                                    errors={errors}
                                    isDisabled={false}
                                    defaultValue={""}
                                    min={""}
                                    max={""}
                                    icon={person}
                                />
                                <CustomInput
                                    control={control}
                                    name={"email"}
                                    id={"email"}
                                    label={""}
                                    placeholder={"Email Address"}
                                    isRequired={true}
                                    type={"email"}
                                    errors={errors}
                                    isDisabled={false}
                                    defaultValue={""}
                                    min={""}
                                    max={""}
                                    icon={mail}
                                />
                            </div>
                            <div className="radio_container">
                                    <CustomRadio
                                        selected={landlord}
                                        label={"Landlord"}
                                        onClick={() => {
                                            setLandlord(true);
                                            setTenant(false);
                                        }}
                                    />

                                    <CustomRadio
                                        selected={tenant}
                                        label={"Tenant"}
                                        onClick={() => {
                                            setLandlord(false);
                                            setTenant(true);
                                        }}
                                    />

                            </div>

                        {/* @ts-ignore */}
                        <WaitlistButton
                            title="Submit"
                            disabled={false}
                            button_loading={loading}
                            icon={""}
                            style={{
                                height: "50px",
                                marginTop: "20px",
                                color: "white",
                            }}
                        />
                    </form>
                </div>

                {/*Section 3*/}
                <div className="section_3_container" >
                        <div className="section_3_text">
                            Why Amani?
                        </div>
                        <ul
                            id="shuffleContainer"
                            className="section_3_list"
                            ref={containerRef}
                        >
                            <li className="section_3_listItems">
                                • In-app Messaging
                            </li>

                            <li className="section_3_listItems">
                                • Ease of Access
                            </li>

                            <li className="section_3_listItems">
                                • No Agency Fees
                            </li>

                            <li className="section_3_listItems">
                                • Save more
                            </li>

                            <li className="section_3_listItems">
                                   • Secure Payment Channel
                            </li>

                            <li className="section_3_listItems">
                                • Transparent Pricing
                            </li>
                    </ul>
                </div>

                {/*Section 4*/}
                <div className="Section_4_container">
                    <div className="section_4_first">
                            <img
                                src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179233/Am/amarin/Frame_1618868491_hx5gct.svg'
                                alt="house"
                                className="house_img"
                            />
                            <div className="section_4_first_textcontainer">
                                <div className="section_4_first_text">
                                    Amani for Tenants:
                                </div>
                                <div className="section_4_first_subText">
                                    Property owners, Developers and hotels stand
                                    to gain
                                </div>

                                <ul className="section_4_first_list">
                                    <li className="section_4_first_listItem">
                                        <span className="dot">
                                            •
                                        </span>
                                        <div>
                                            Direct connection between landlords and
                                            tenants.
                                        </div>

                                    </li>
                                    <li className="section_4_first_listItem">
                                        <span className="dot">
                                            •
                                        </span>   <div>
                                        Booking tours in advance for physical
                                        viewing.
                                    </div>
                                    </li>
                                    <li className="section_4_first_listItem">
                                        <span className="dot">
                                            •
                                        </span>  <div>Monthly plans for commission payments.</div>
                                    </li>
                                    <li className="section_4_first_listItem">
                                       <span className="dot">
                                            •
                                        </span>  <div> Safeguarding landlords and tenants
                                        equally.</div>
                                    </li>
                                </ul>
                            </div>
                    </div>

                    <div className="section_4_first"  style={{ ...(isSmallScreen && mediaQueryStyles) }}>
                            <img
                                src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179232/Am/amarin/Frame_1618868489_dp1hog.svg'
                                alt="house"
                                className="house_img"
                            />
                            <div className="section_4_first_textcontainer">
                                <div className="section_4_first_text">
                                    Amani for Landlord:
                                </div>
                                <div className="section_4_first_subText">
                                    Property owners, Developers and hotels stand to gain:
                                </div>

                                <ul className="section_4_first_list">
                                    <li className="section_4_first_listItem">
                                        <span className="dot">
                                            •
                                        </span>
                                        <div>
                                            Automated Rent Collection.
                                        </div>

                                    </li>
                                    <li className="section_4_first_listItem">
                                        <span className="dot">
                                            •
                                        </span>   <div>
                                        Pre-Selected Tenants.
                                    </div>
                                    </li>
                                    <li className="section_4_first_listItem">
                                        <span className="dot">
                                            •
                                        </span>  <div> Reduced Vacancy Rates.</div>
                                    </li>
                                    <li className="section_4_first_listItem">
                                       <span className="dot">
                                            •
                                        </span>  <div>  Simplified Property Management.</div>
                                    </li>

                                    <li className="section_4_first_listItem">
                                       <span className="dot">
                                            •
                                        </span>  <div>  Direct Access to Buyers.</div>
                                    </li>
                                </ul>
                            </div>
                    </div>


                </div>

                {/*Section 5*/}
                <div className="button_section2">
                    <Joinwaitlistbtn text='Join Waitlist' onClick={scrollToElement} icon='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717236865/Am/amarin/uil_arrow-right_up_oxabap.svg'/>
                </div>
            </div>

            {/*Footer*/}
            <div className="footer_container">
                <div className="mobile_tab_footer">
                    <div className="first_sec">
                        <img className='footerLogo' src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179236/Am/amarin/Vector2_izp518.svg' alt="amani-logo" />

                        <div className="second_sec1">
                            <div className="">
                                <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179247/Am/amarin/Group_1_trc5wk.svg' alt="mac" width={"100%"} />
                            </div>
                        </div>

                        <div className="social_media_container">
                            <div className="social_media">
                                <img src={amaniX} alt="x"  className='x' onClick={openAmaniX} />
                                <img src={amaniFB} alt="facebook"  className='facebook' onClick={openAmaniFacebook} />
                                <img src={amaniIG} alt="instagram" className='instagram' onClick={openAmaniIG}/>
                            </div>
                            <div className="copyrRight">
                                All rights reserved. 2024
                            </div>
                        </div>
                    </div>

                    <div className="second_sec2">
                        <div className="">
                            <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179247/Am/amarin/Group_1_trc5wk.svg' alt="mac" width={"100%"} />
                        </div>
                    </div>

                </div>
            </div>

            {showSuccessModal ? (
                <SuccessModal
                    modalIsOpen={showSuccessModal}
                    closeModal={closeSuccessModal}
                    heading="We’ve added you to our waiting list"
                    text="We’ll let you know when Amani is ready.."
                    setShowSuccessModal={setShowSuccessModal}
                />
            ) : null}
        </>
    );
}

// export default Waitlist

const mapStateToProps = (state: any) => {
    const { button_loading } = state.waitlist;
    return { button_loading };
};

export default connect(mapStateToProps, { subscribeToEmail })(Waitlist);
