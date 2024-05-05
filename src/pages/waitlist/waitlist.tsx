import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import amani from 'assets/logos/amani.svg';
import amanifull from 'assets/icons/amanifull.svg';
import amaniX from 'assets/icons/amani-x.svg'
import amaniIG from 'assets/icons/amani-ig.svg'
import amaniFB from 'assets/icons/amani-fb.svg'
import arrowR from 'assets/icons/arrow-right.svg'
import mac from 'assets/banner/mac.svg';
import mail from "assets/icons/sms.svg";
import person from "assets/icons/basil_user-solid.svg";
import CustomInput from "components/textInputs/CustomInput"
import CustomRadio from 'components/selectInputs/customRadio';
import { subscribeToEmail } from 'store/actions';
import WaitlistButton from "components/buttons/waitlistButton";
import SuccessModal from './waitlistPartials/successModal';


function Waitlist(props: any) {
    const { loading, button_loading, subscribeToEmail } = props
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [landlord, setLandlord] = useState(true)
    const [tenant, setTenant] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    // const scrollRef = useRef<HTMLElement | null>(null);
    const scrollRefMac = useRef<HTMLElement | null>(null);
    const scrollRefForm = useRef<HTMLElement | null>(null);

    const scrollToElement = () => {
        // Scroll to the div with the mac image
        //@ts-ignore
        scrollRefMac.current.scrollIntoView({ behavior: 'smooth' });

        // Pause for a few seconds (you can adjust the delay as needed)
        setTimeout(() => {
            // Scroll to the form section
            //@ts-ignore
            scrollRefForm.current.scrollIntoView({ behavior: 'smooth' });
        }, 1500); // 2000 milliseconds = 2 seconds
    };

    const openAmaniWhatsapp = () => {
        window.open(" https://chat.whatsapp.com/BYriTzUIPY94N9y351jluB", "_blank");
    };

    const openAmaniX = () => {
        window.open(" https://twitter.com/my_amani123/status/1753347277802856515?t=BD4rr8oQHGIdkmR2TzRj8g", "_blank");
    };
    const openAmaniIG = () => {
        window.open(" https://www.instagram.com/rankingamani?igsh=MWh3a3l5bjZ4NGRsZg==", "_blank");
    };
    const openAmaniFacebook = () => {
        window.open(" https://www.facebook.com/profile.php?id=61554519375256&mibextid=LQQJ4d", "_blank");
    };


    const openSuccessModal = () => {
        setShowSuccessModal(true)
    }
    const closeSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const onSubmit = (data: any) => {
        const newData = {
            fullname: data?.fullname,
            email: data?.email,
            landlord: landlord,
            tenant: tenant
        };
        subscribeToEmail(newData, openSuccessModal);
        console.log(newData)
    };

    document.addEventListener('DOMContentLoaded', function () {
        // Your JavaScript code here
        const container = document.getElementById('shuffleContainer');

        function shuffleChildren(container) {
            for (let i = container.children.length; i >= 0; i--) {
                container.appendChild(container.children[Math.random() * i | 0]);
            }
            container.children[2].classList.add('specific-class');
            // container.children[2].classList.add('text-gray-200 lg:text-xl text-xs');
        }

        setInterval(() => {
            shuffleChildren(container);
        }, 2000);
    });


    return (
        <div className='bg-[#07070D] overflow-hidden custom-tabs-container'>
            <div className='lg:px-24 p-4'>
                <div className='flex pb-3'>
                    <p></p>
                    <div className='ml-auto solid-br py-3 px-8 rounded-lg text-xs cursor-pointer'
                        style={{ textAlign: 'center' }}
                        onClick={openAmaniWhatsapp}
                    >
                        <p className='text-[#D9DCE9]'>Join Our Community</p>
                    </div>
                </div>
            </div>
            <div className='lg:px-20'>
                <div className='modal-bottom-divider'></div>
            </div>

            <div className="lg:grid lg:grid-cols-3 p-8">
                <div></div>
                <div className='login-logo'>
                    <img src={amani} alt="amani-logo" />
                </div>
                <div></div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <div>
                    <p className='text-5xl text-[#FFFFFF] px-6'>Making real estate, REAL</p>
                </div>
                <div className='lg:py-3 mobile-padding login-logo'>
                    <div className='h-[30px] w-[372.4px]'>
                        <p className='text-sm font-light text-[#FFFFFF] '>NO AGENCY FEES!: Skip the middleman and SAVE with DIRECT connections to landlords or tenants</p>
                    </div>
                </div>

                <div className='flex pb-3 justify-center py-4 cursor-pointer' onClick={scrollToElement}>
                    <div className='flex py-3 px-24 rounded-lg text-xs bg-[#222436]'>
                        <p className='text-[#D9DCE9] pt-1'>Join Waitlist</p>
                        <p className='text-white px-1 '> <img src={arrowR} alt="button-arrow-right" /></p>
                    </div>
                </div>
            </div>
            {/* @ts-ignore */}
            <div className='lg:py-20 lg:px-52 px-6' ref={scrollRefMac}>
                <div className='dark-br rounded-2xl py-4 lg:py-10 login-logo'>
                    <img src={mac} alt="mac" />
                </div>
            </div>
            {/* @ts-ignore */}
            <div ref={scrollRefForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='text-center'>
                        <p className='text-2xl text-[#FFFFFF] px-6'>Join our waitlist</p>
                        <p className='text-xs font-[32] font-light text-[#FFFFFF] '>Be the first to know when we launch</p>
                    </div>
                    <div className='login-logo'>
                        <div className='py-2 justify-center lg:w-2/12 w-8/12'>
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
                                defaultValue={''}
                                min={""}
                                max={""}
                                icon={person}
                            />
                        </div>

                        <div className='pb-3 justify-center lg:w-2/12 w-8/12'>
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
                                defaultValue={''}
                                min={""}
                                max={""}
                                icon={mail}
                            />
                        </div>

                        <div className="py-3" style={{ display: 'inline-flex' }}>
                            <div className='px-3'>
                                <CustomRadio
                                    selected={landlord}
                                    label={"Landlord"}
                                    onClick={() => {
                                        setLandlord(true);
                                        setTenant(false);
                                    }}
                                />

                            </div>

                            <div className='px-3'>
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
                            style={{ height: "50px", marginTop: '20px', color: 'white' }}
                        />
                    </div>
                </form>
            </div>



            <div className='tablet-grid desktop-grid'>
                <div className='login-logo lg:py-32 py-4'>
                    <p className='lg:text-3xl text-xl text-white'>Why Amani?</p>
                    {/* <div id="shuffleContainer" className='horizontal-list py-8 flex overflow-x-auto space-x-4 animate-slide-in-right'>
                        <div className='horizontal-list-item tablet animate-shake animate-slide-through-right  desktop-only' >
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-md text-xs'>In-app Messaging</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-shake '>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-md text-xs'>Ease of Access</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-shake animate-slide-through-right'>
                            <span className='circle'></span>
                            <p className='text-[white] font-[32] lg:text-xl text-xs font-base'>No Agency Fees</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-shake '>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-md text-xs'>Save more</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-shake animate-slide-through-right '>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-md text-xs'>Secure Payment Channel</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-shake desktop-only'>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-md text-xs'>Transparent Pricing</p>
                        </div>
                    </div> */}

                    <div id="shuffleContainer" className='horizontal-list py-8 flex overflow-x-auto space-x-4'>
                        <div className='horizontal-list-item tablet desktop-only animate-slide-in-right headshake-custom animate-slide-in-left'>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-base text-xs'>In-app Messaging</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-slide-in-left animate-slide-in-right headshake-custom'>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-base text-xs'>Ease of Access</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-zoom-out animate-slide-in-right headshake-custom animate-slide-in-left'>
                            <span className='circle'></span>
                            <p className='text-[white] font-[32] lg:text-xl text-xs font-base'>No Agency Fees</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-slide-in-left animate-slide-in-right headshake-custom'>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-base text-xs'>Save more</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-slide-through-right animate-slide-in-left '>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-base text-xs'>Secure Payment Channel</p>
                        </div>
                        <div className='horizontal-list-item tablet animate-slide-in-left  animate-slide-in-right headshake-custom desktop-only'>
                            <span className='grey-circle'></span>
                            <p className='text-[#545A62] font-[32] lg:text-base text-xs'>Transparent Pricing</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className='lg:px-48 lg:pb-60 pb-20'>
                <div className='flex justify-center flex-col md:flex-row md:space-x-8 px-8'>
                    <div className='mb-8 md:mb-0 rounded-2xl' style={{ backgroundImage: 'linear-gradient(to top, #222436 55%, #07070D 100%)', }}>
                        <div className='rounded-2xl dark-br py-24 px-14 lg:h-[496px] lg:w-[459px]' style={{ textAlign: 'center' }}>
                            <div className='lg:h-[380.84px] lg:w-[314.38px]'>
                                <p className='text-3xl text-[#10B278] text-left'>Amani for Landlords </p>
                                <p className='text-white text-left font-medium font-[32] text-xl'>Property owners, Developers and hotels stand to gain:</p>

                                <div className='py-2 lg:h-[34px] lg:w-[264px] list px-2'>
                                    <p className='text-white text-left font-medium font-[32] text-sm list-item' style={{ paddingTop: '8px', paddingBottom: '8px' }}>Increased visibility of properties through our extensive reach.</p>
                                    <p className='text-white text-left font-medium font-[32] text-sm list-item' style={{ paddingTop: '8px', paddingBottom: '8px' }}>Simplifying the process of receiving and managing payments. </p>
                                    <p className='text-white text-left font-medium font-[32] text-sm list-item' style={{ paddingTop: '8px', paddingBottom: '8px' }}>In-app messaging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-2xl ' style={{ backgroundImage: 'linear-gradient(to top, #222436 55%, #07070D 100%)', }}>
                        <div className='rounded-2xl dark-br py-24 lg:px-14 px-6 lg:h-[496px] lg:w-[459px]' style={{ textAlign: 'center' }}>
                            <div className='lg:h-[380.84px] lg:w-[314.38px]'>
                                <p className='text-3xl text-[#10B278] text-left'>Amani for Tenants </p>
                                <p className='text-white text-left font-medium font-[32] text-xl'>Property owners, Developers and hotels stand to gain:</p>

                                <div className='py-2 lg:h-[34px] lg:w-[264px] list px-2'>
                                    <p className='text-white text-left font-medium font-[32] text-sm list-item' style={{ paddingTop: '8px', paddingBottom: '8px' }}>Increased visibility of properties through our extensive reach.</p>
                                    <p className='text-white text-left font-medium font-[32] text-sm list-item' style={{ paddingTop: '8px', paddingBottom: '8px' }}>Simplifying the process of receiving and managing payments. </p>
                                    <p className='text-white text-left font-medium font-[32] text-sm list-item' style={{ paddingTop: '8px', paddingBottom: '8px' }}>In-app messaging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='p-24'>
                <div className='lg:grid lg:grid-cols-2 flex-col md:flex-row'>
                    <div>
                        <img src={amanifull} alt="amani-logo" />
                    </div>
                    <div className='desktop-only ml-auto'>
                        <div className='flex justify-end'>
                            <div className='mt-1 px-3'
                                onClick={openAmaniX}
                            >
                                <img src={amaniX} alt="x" />
                            </div>
                            <div className='px-3'
                                onClick={openAmaniFacebook}
                            >
                                <img src={amaniFB} alt="facebook" />
                            </div>
                            <div className='px-3'
                                onClick={openAmaniIG}
                            >
                                <img src={amaniIG} alt="instagram" />
                            </div>

                        </div>
                        <p className='text-left py-2 text-[#F0F0F0] font-[32] text-sm'>All rights reserved. 2024</p>
                    </div>

                    {/* Mobile Only */}
                    <div className='mobile-only ml-auto py-14'>
                        <div className='flex justify-center'>
                            <div className='mt-1 px-3'>
                                <img src={amaniX} alt="x"
                                    onClick={openAmaniX}
                                />
                            </div>
                            <div className='px-3'
                                onClick={openAmaniFacebook}
                            >
                                <img src={amaniFB} alt="facebook" />
                            </div>
                            <div className='px-3'
                                onClick={openAmaniIG}
                            >
                                <img src={amaniIG} alt="instagram" />
                            </div>

                        </div>
                        <p className='text-center py-2 text-[#F0F0F0] font-[32] text-xl'>All rights reserved. 2024</p>
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
        </div>
    )
}

// export default Waitlist

const mapStateToProps = (state: any) => {
    const { loading, button_loading } = state.waitlist
    return { loading, button_loading };
};

export default connect(mapStateToProps, { subscribeToEmail })(Waitlist);

