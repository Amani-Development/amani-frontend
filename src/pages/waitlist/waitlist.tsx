import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import "../waitlist/waitlist.css";
import "animate.css";
import amaniX from "assets/icons/amani-x.svg";
import amaniIG from "assets/icons/amani-ig.svg";
import amaniFB from "assets/icons/amani-fb.svg";
import mail from "assets/icons/sms.svg";
import person from "assets/icons/basil_user-solid.svg";
import CustomInput from "components/textInputs/CustomInput";
import CustomRadio from "components/selectInputs/customRadio";
import { subscribeToEmail } from "store/actions";
import WaitlistButton from "components/buttons/waitlistButton/waitlistButton";
import SuccessModal from "./waitlistPartials/successModal";
import Joinwaitlistbtn from "../../components/buttons/JoinWaitListBtn/Joinwaitlistbtn";
import { Link } from "react-router-dom";
import SearchBar from "components/SearchBar/SearchBar";

function Waitlist(props: any) {
    const {  button_loading, subscribeToEmail } = props;
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
        // console.log(newData);
    };
    // const containerRef = useRef<HTMLUListElement>(null); // Adjusted the ref type to HTMLUListElement
    // let previousElementRef = useRef<HTMLElement | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        "• In-app Messaging",
        "• Ease of Access",
        "• No Agency Fees",
        "• Save more",
        "• Secure Payment Channel",
        "• Transparent Pricing",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000); // Adjust the time as needed
        return () => clearInterval(interval);
    }, [items.length]);

    const mediaQueryStyles: React.CSSProperties = {
        flexDirection: "row-reverse",
    };

    // Check if the screen width is less than or equal to 768px
    const isSmallScreen = window.innerWidth >= 768;

    return (
      <>
        <div>
          {/*Header*/}
          <div className="Header">
            <div className="join_community" onClick={openAmaniWhatsapp}>
              Join Our Community
            </div>
          </div>


          {/*Hero*/}
          <div className="Hero_container">
            <img
              className="amani-logo"
              src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179234/Am/amarin/Vector_zmenxp.svg"
              alt="amani-logo"
            />

            <h1 className="hero_text">
              Say goodbye to <br />
              <ul className="hero_text_green anim-slide animate-shake">
                <li className="slide">Agency Fees!</li>
                <li className="slide">Middlemen!</li>
              </ul>
            </h1>

                    <div className="hero_sub_text">
                        Skip house agents and{" "}
                        <span className="hero_text_green">connect </span> <br />{" "}
                        easily to Landlords
                    </div>

                    <div className="avatar_section">
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179247/Am/amarin/List_keiyli.svg"
                            alt="avatarList"
                        />
                        <div className="AS_text">
                            <div className="Community_Number">1000+</div>
                            <div className="Community_Text">
                                Joined the Waitlist
                            </div>
                        </div>
                    </div>
                    <SearchBar/>

                    <div className="button_section">
                        <Joinwaitlistbtn
                            text="Join Waitlist"
                            onClick={scrollToElement}
                            icon="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179234/Am/amarin/uil_arrow-right_ouw5cu.svg"
                        />
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
                                Easily put up your properties <br /> for sale,
                                browse verified <br /> listing, schedule
                                viewings, <br /> and apply for rentals directly{" "}
                                <br /> through our platform
                            </div>
                            <div className="section_1_img">
                                <img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179259/Am/amarin/Frame_1618868496_zmwvcg.svg"
                                    alt="phones"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/*section 2*/}
                {/* @ts-ignore */}
                <div ref={scrollRefForm} className="section_2_cont">
                    <div className="section_2_text hero_text_green">
                        Join our waitlist
                    </div>
                    <div className="section_2_subtext hero_text_green">
                        Get early access, news & updates
                    </div>
                </div>

                {/*form*/}

                <div className="form_container_1">
                    <form
                        className="form_container_2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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
                            onClick={()=>{}}
                            title="Submit"
                            disabled={false}
                            button_loading={button_loading}
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
                <div className="section_3_container">
                    <div className="section_3_text">Why Amani?</div>
                    <div
                        style={{
                            overflow: "hidden",
                            width: "100%",
                            position: "relative",
                            padding: "2px",
                        }}
                    >
                        <ul id="shuffleContainer" className="section_3_list">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className={`section_3_listItems ${
                                        index === currentIndex ? "active" : ""
                                    }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/*Section 4*/}
                <div className="Section_4_container">
                    <div className="section_4_first">
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179233/Am/amarin/Frame_1618868491_hx5gct.svg"
                            alt="house"
                            className="house_img"
                        />
                        <div className="section_4_first_textcontainer">
                            <div className="section_4_first_text">
                                Amani for Tenants:
                            </div>
                            <div className="section_4_first_subText">
                                Accommodation seekers/tourists/vacationers stand
                                to gain:
                            </div>

                            <ul className="section_4_first_list">
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>
                                        Direct connection between landlords and
                                        tenants.
                                    </div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>Elimination of agent fees.</div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>
                                        {" "}
                                        Access to a wider pool of properties.
                                    </div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>
                                        {" "}
                                        Streamlined search and application
                                        processes.
                                    </div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>
                                        {" "}
                                        Secure and transparent transactions.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="section_4_first"
                        style={{ ...(isSmallScreen && mediaQueryStyles) }}
                    >
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179232/Am/amarin/Frame_1618868489_dp1hog.svg"
                            alt="house"
                            className="house_img"
                        />
                        <div className="section_4_first_textcontainer">
                            <div className="section_4_first_text">
                                Amani for Landlord:
                            </div>
                            <div className="section_4_first_subText">
                                Property owners, Developers and hotels stand to
                                gain:
                            </div>

                            <ul className="section_4_first_list">
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>Automated Rent Collection.</div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div>Pre-Selected Tenants.</div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div> Reduced Vacancy Rates.</div>
                                </li>
                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div> Simplified Property Management.</div>
                                </li>

                                <li className="section_4_first_listItem">
                                    <span className="dot">•</span>
                                    <div> Direct Access to Buyers.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*Section 5*/}
                <div className="button_section2">
                    <Joinwaitlistbtn
                        text="Join Waitlist"
                        onClick={scrollToElement}
                        icon="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717236865/Am/amarin/uil_arrow-right_up_oxabap.svg"
                    />
                </div>
            </div>



        {/*Footer*/}
        <div className="footer_container">

                <div className="mobile_tab_footer">
                    <div className="first_sec">
                        <Link to="/">
                            <img
                                className="footerLogo"
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717179236/Am/amarin/Vector2_izp518.svg"
                                alt="amani-logo"
                            />
                        </Link>

                        <div className="second_sec1">
                            <div className="">
                                <img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717280239/Am/amarin/MacBook_Pro_16-inch_Space_Black_Front_ep4m1e.svg"
                                    alt="mac"
                                />
                            </div>
                        </div>

                        <div className="social_media_container">
                            <div className="social_media">
                                <img
                                    src={amaniX}
                                    alt="x"
                                    className="x"
                                    onClick={openAmaniX}
                                />
                                <img
                                    src={amaniFB}
                                    alt="facebook"
                                    className="facebook"
                                    onClick={openAmaniFacebook}
                                />
                                <img
                                    src={amaniIG}
                                    alt="instagram"
                                    className="instagram"
                                    onClick={openAmaniIG}
                                />
                            </div>
                            <div className="copyrRight">
                                All rights reserved. 2024
                            </div>
                        </div>
                    </div>

                    <div className="second_sec2">
                        <div className="">
                            <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1717280239/Am/amarin/MacBook_Pro_16-inch_Space_Black_Front_ep4m1e.svg"
                                alt="mac"
                            />
                        </div>
                    </div>
                </div>
            </div>

        {/*modal*/}
        <div>
          {showSuccessModal ? (
            <SuccessModal
              modalIsOpen={showSuccessModal}
              closeModal={closeSuccessModal}
              heading="We’ve added you to our waiting list"
              text="We’ll let you know when Amani is ready.."
              setShowSuccessModal={setShowSuccessModal}
            />
          ) : null}
        </div>
      </>
    );
}

// export default Waitlist

const mapStateToProps = (state: any) => {
    const { button_loading } = state.waitlist;
    return { button_loading };
};

export default connect(mapStateToProps, { subscribeToEmail })(Waitlist);
