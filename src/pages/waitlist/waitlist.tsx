import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
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
import WaitlistButton from "components/buttons/waitlistButton";
import SuccessModal from "./waitlistPartials/successModal";
import iphone from "assets/logos/iphones.svg";
import zig from "assets/banner/zigzag.png";

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

    document.addEventListener("DOMContentLoaded", function () {
        // Your JavaScript code here
        const container = document.getElementById("shuffleContainer");

        function shuffleChildren(container) {
            for (let i = container.children.length; i >= 0; i--) {
                container.appendChild(
                    container.children[(Math.random() * i) | 0]
                );
            }
            container.children[2].classList.add("specific-class");
        }

        setInterval(() => {
            shuffleChildren(container);
        }, 2000);
    });

    return (
        <>
            <div className="bg-[#FFFFFF] overflow-hidden custom-tabs-container">
                <div className="py-8 px-10">
                    <div className="flex pb-5">
                        <p></p>
                        <div
                            className="ml-auto community-br py-3 px-8 rounded-full text-xs cursor-pointer text-center"
                            onClick={openAmaniWhatsapp}
                        >
                            <p className="text-[#4A4A4A] font-[500] text-[14px]">
                                Join Our Community
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-3 px-8">
                    <div></div>
                    <div className="login-logo">
                        <img src={amani} alt="amani-logo" />
                    </div>
                    <div></div>
                </div>

                <div className="flex justify-center items-center lg:pt-14">
                    <div className="text-center">
                        <p className="text-center xl:text-[96px] lg:text-[67.2px] text-[47.04px] font-[900] text-[#4A4A4A] lg-leading-[105.6px]">
                            Say goodbye to{" "}
                        </p>
                        <p className="xl:text-[96px] lg:text-[67.2px] text-[47.04px] leading-[51.76px] font-[900] text-[#639418] animate-slideOutDown">
                            Agency Fees!
                        </p>
                        <p className="xl:text-[96px] lg:text-[67.2px] text-[47.04px] leading-[51.76px] font-[900] text-[#639418] animate-slideOutUp">
                            Middlemen!
                        </p>
                        <div className="py-6">
                            <p className="font-light xl:text-[40px] lg:text-[28px] text-[18px] font-[400] lg-leading-5 text-[#4A4A4A]">
                                Skip house agents and{" "}
                                <span className="text-[#639418]">connect</span>
                            </p>
                            <p className="font-light  xl:text-[40px] lg:text-[28px] text-[18px] font-[400] text-[#4A4A4A]">
                                easily to Landlords
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <img src={avatar} alt="avatarList" />
                            <div className="xl:px-3 px-1">
                                <p className="text-left text-[#545A62] lg:text-[12px] font-[700] xl:text-[18px] text-[10px] lg:leading-[10.96px] xl:leading-[22.37px]">
                                    47K +
                                </p>
                                <p className="text-[#545A62] font-[400] text-[8px] xl:text-[12px] lg:text[10px] leading-[14.68px]">
                                    Joined the Waitlist
                                </p>
                            </div>
                        </div>
                        <div
                            className="pt-10 xl:mb-12"
                            onClick={scrollToElement}
                        >
                            <div className="flex items-center justify-center cursor-pointer">
                                <div className="bg-[#222436] community-br py-5 px-10 rounded-full text-xs cursor-pointer text-center">
                                    <p className="text-[#FFFFFF] font-light text-[12px] text-left leading-[15px] mr-[10px]">
                                        Join Waitlist
                                    </p>
                                </div>
                                <div className="arrow-br rounded-full bg-[#639418] px-6 py-3.5 -ml-10">
                                    <i className="ion-ios-arrow-round-down text-xl text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="lg:py-32 py-10 xl:px-24 lg:px-10 px-4 zigzag-image"
                    // @ts-ignore
                    ref={scrollRefMac}
                >
                    <div className="solid-br bg-[#639418] rounded-3xl">
                        <div className="flex xl:py-12">
                            <p className="text-[14px] xl:text-[32px] lg:text-[22px] font-[500] lg:ml-14 xl:ml-12 py-10 px-4 text-[white] w-[220px] xl:w-[550px] lg:w-[358.4px] leading-[14.84px] lg:leading-[33.92px] xl:leading-[33.92px]">
                                Easily put up your properties for sale, browse
                                verified listing, schedule viewings, and apply
                                for rentals directly through our platform
                            </p>
                            <div className="desktop-only absolute xl:right-48 lg:right-[-30px] xl:top-[840px] lg:top-[720px] top-auto">
                                {/* style={{ top: "840px" }} > */}
                                <img
                                    src={iphone}
                                    className=" w-full sm:w-[50%] md:w-[50%] lg:w-[75%] xl:w-[90%]"
                                    alt="phones"
                                />
                            </div>
                            <div className="mobile-only absolute top-[570px] ml-[200px]">
                                <img src={iphone} width={"90%"} alt="phones" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* @ts-ignore */}
                <div className="xl:pt-14" ref={scrollRefForm}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-center">
                            <p className="text-[40px] font-[500] text-[#639418] px-6">
                                Join our waitlist
                            </p>
                            <p className="text-[18px] font-[500] font-light text-[#639418] ">
                                Get early access, news & updates
                            </p>
                        </div>
                        <div className="login-logo">
                            <div className="py-2 justify-center xl:w-4/12 lg:w-6/12 w-10/12">
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
                            </div>
                            <div className="pb-3 justify-center xl:w-4/12 lg:w-6/12 w-10/12">
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
                            <div className="py-3 inline-flex">
                                <div className="lg:px-6 px-10">
                                    <CustomRadio
                                        selected={landlord}
                                        label={"Landlord"}
                                        onClick={() => {
                                            setLandlord(true);
                                            setTenant(false);
                                        }}
                                    />
                                </div>

                                <div className="px-6">
                                    <CustomRadio
                                        selected={tenant}
                                        label={"Tenant"}
                                        onClick={() => {
                                            setLandlord(false);
                                            setTenant(true);
                                        }}
                                    />
                                </div>
                            </div>
                            {/* @ts-ignore */}
                            <WaitlistButton
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
                        </div>
                    </form>
                </div>

                <div className="tablet-grid px-4">
                    <div className="login-logo lg:py-14 pt-10">
                        <p className="lg:text-3xl text-xl text-[#1E1E1E]">
                            Why Amani?
                        </p>
                        <div
                            id="shuffleContainer"
                            className="horizontal-list py-8 flex space-x-4"
                        >
                            <div className="horizontal-list-item tablet desktop-only animate-slide-in-right headshake-custom animate-slide-in-left">
                                <span className="grey-circle"></span>
                                <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                    In-app Messaging
                                </p>
                            </div>
                            <div className="horizontal-list-item tablet animate-slide-in-left animate-slide-in-right headshake-custom">
                                <span className="grey-circle"></span>
                                <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                    Ease of Access
                                </p>
                            </div>
                            <div className="horizontal-list-item tablet animate-zoom-out animate-slide-in-right headshake-custom animate-slide-in-left">
                                <span className="grey-circle"></span>
                                <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                    No Agency Fees
                                </p>
                            </div>
                            <div className="horizontal-list-item tablet animate-slide-in-left animate-slide-in-right headshake-custom">
                                <span className="grey-circle"></span>
                                <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                    Save more
                                </p>
                            </div>
                            <div className="horizontal-list-item tablet animate-slide-through-right animate-slide-in-left ">
                                <span className="grey-circle"></span>
                                <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                    Secure Payment Channel
                                </p>
                            </div>
                            <div className="horizontal-list-item tablet animate-slide-in-left animate-slide-in-right headshake-custom desktop-only">
                                <span className="grey-circle"></span>
                                <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                    Transparent Pricing
                                </p>
                            </div>
                        </div>

                        {/* <div className="horizontal-list py-8 flex space-x-4">
                            <div className="horizontal-list">
                                {items.map((item, index) => {
                                    const isFirst = index === randomIndices[0];
                                    const isSecond = index === randomIndices[1];
                                    let animationClass = "";

                                    if (isFirst) {
                                        animationClass = switching
                                            ? animationClasses[0]
                                            : animationClasses[2];
                                    } else if (isSecond) {
                                        animationClass = switching
                                            ? animationClasses[1]
                                            : animationClasses[3];
                                    }

                                    return (
                                        <div
                                            key={index}
                                            className={`horizontal-list-item tablet ${animationClass} ${
                                                shaking ? "shake" : ""
                                            }`}
                                        >
                                            <span className="grey-circle"></span>
                                            <p className="text-[10px] lg:text-[11.2px] xl:text-[16px] font-[400]">
                                                {item}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="px-4">
                    <div className="xl:py- lg:py-8 lg:flex gap-x-12 justify-center">
                        <div className="xl:w-[1000px] lg:w-[473.07px]">
                            <img
                                src={amaniHouse}
                                width={"1200px"}
                                height={"1200px"}
                                alt="house"
                            />
                        </div>
                        <div>
                            <div className="p-6 lg:w-[393px] text-center">
                                <p className="lg:text-[24px] text-[#639418] text-left font-[500] xl:text-[40.7px] leading-[18.9px] lg:leading-[32.4px]">
                                    Amani for Tenants{" "}
                                </p>
                                <p className="text-[#1A1A1F] text-left font-[500] text-[13px] lg:text-[14px] xl:text-[25.44px] text-[14px] lg:leading[18.9px] xl:leading-[34.34px]">
                                    Property owners, Developers and hotels stand
                                    to gain:
                                </p>

                                <div className="py-2 lg:w-[393px] list px-2">
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Direct connection between landlords and
                                        tenants.
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Booking tours in advance for physical
                                        viewing.
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Monthly plans for commission payments.
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Safeguarding landlords and tenants
                                        equally.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="justify-center flex flex-col-reverse lg:flex-row xl:py-14 py-10 gap-x-12">
                        <div>
                            <div className="p-6 lg:w-[393px] text-center">
                                <p className="lg:text-[24px] text-[#639418] text-left font-[500] xl:text-[40.7px] leading-[18.9px] lg:leading-[32.4px]">
                                    Amani for Landlord{" "}
                                </p>
                                <p className="text-[#1A1A1F] text-left font-[500] text-[13px] lg:text-[14px] xl:text-[25.44px] text-[14px] lg:leading[18.9px] xl:leading-[34.34px]">
                                    Property owners, Developers and hotels stand
                                    to gain:
                                </p>

                                <div className="py-2 lg:w-[393px] list px-2">
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Automated Rent Collection
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Pre-Selected Tenants
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Reduced Vacancy Rates
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Simplified Property Management
                                    </p>
                                    <p className="text-[#222436] text-left list-item pt-[8px] pb-[8px] font-[300] xl:text-[25.44px] lg:text-[14px] text-[14px] lg:leading-[14.84px] xl:leading-[26.96px]">
                                        Direct Access to Buyers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-[1000px] lg:w-[473.07px]">
                            <img
                                src={amaniIll}
                                width={"1200px"}
                                height={"1200px"}
                                alt="house"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:pt-14 lg:pb-56" onClick={scrollToElement}>
                    <div className="lg:py-5 pb-24">
                        <div className="flex items-center justify-center cursor-pointer">
                            <div
                                className="bg-[#222436] community-br py-5 px-10 rounded-full text-xs cursor-pointer"
                                style={{ textAlign: "center" }}
                            >
                                <p
                                    className="text-[#FFFFFF] font-light text-[12px] text-left"
                                    style={{
                                        lineHeight: "15px",
                                        marginRight: "10px",
                                    }}
                                >
                                    Join Waitlist
                                </p>
                            </div>
                            <div
                                className="arrow-br rounded-[100%] bg-[#639418] px-6 py-3.5"
                                style={{ marginLeft: "-40px" }}
                            >
                                <i className="ion-ios-arrow-round-up text-xl text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="zigzag-image">
                <div className="pt-10 bg-[#477206]">
                    <div className="desktop-only flex flex-col md:flex-row px-14">
                        <div className="pt-24">
                            <img src={amanifull} alt="amani-logo" />
                        </div>
                        <div className="xl:pl-20">
                            <img src={mac} alt="amani-logo" width={"100%"} />
                        </div>
                        <div className="desktop-only ml-auto pt-24">
                            <div className="flex justify-left">
                                <div className="mt-1 px-3" onClick={openAmaniX}>
                                    <img src={amaniX} alt="x" />
                                </div>
                                <div
                                    className="px-3"
                                    onClick={openAmaniFacebook}
                                >
                                    <img src={amaniFB} alt="facebook" />
                                </div>
                                <div className="px-3" onClick={openAmaniIG}>
                                    <img src={amaniIG} alt="instagram" />
                                </div>
                            </div>
                            <p className="text-left py-2 text-[#F0F0F0] font-[32] text-sm">
                                All rights reserved. 2024
                            </p>
                        </div>
                    </div>
                    <div className="mobile-only">
                        {/* Mobile Only */}
                        <div className="flex pt-10 px-5">
                            <div className="">
                                <img
                                    src={amanifull}
                                    width={"60%"}
                                    alt="amani-logo"
                                />
                            </div>
                            <div className=" ml-auto">
                                <div className="flex justify-left">
                                    <div className="mt-1" onClick={openAmaniX}>
                                        <img
                                            src={amaniX}
                                            width={"100%"}
                                            alt="x"
                                        />
                                    </div>
                                    <div
                                        className="px-3"
                                        onClick={openAmaniFacebook}
                                    >
                                        <img
                                            src={amaniFB}
                                            width={"100%"}
                                            alt="facebook"
                                        />
                                    </div>
                                    <div className="" onClick={openAmaniIG}>
                                        <img
                                            src={amaniIG}
                                            width={"100%"}
                                            alt="instagram"
                                        />
                                    </div>
                                </div>
                                <p className="text-left py-2 text-[#F0F0F0] font-[32] lg:text-sm text-[8px]">
                                    All rights reserved. 2024
                                </p>
                            </div>
                        </div>
                        <div className="lg:pl-20 pb-8">
                            <img src={mac} alt="amani-logo" width={"100%"} />
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
