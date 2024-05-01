import React from 'react'
import Amani from "assets/logos/Amani Logo.svg"
import PrimaryButton from "components/buttons/PrimaryButton";
import { Link, NavLink } from "react-router-dom";
import '../../../App.css'


function HomepageParials(props: any) {
    const { loading } = props

    return (
        <>
            <div className='lg:grid grid-cols-3 py-4 px-20'>
                <div>
                    <img src={Amani} alt="" />
                </div>
                <div>
                    <div className='flex' style={{ textAlign: 'center' }}>
                        {/* <p className='text-[#38393D] px-3 pt-1 font-light'>Places to stay </p> */}
                        <NavLink to="/homepage">
                            {({ isActive }) => (
                                <div
                                    className={isActive ? "flex items-center mb-4 text-[#639418] font-light" : "flex items-center mb-4 font-light"}
                                >
                                    <div className="flex items-center ">
                                        <p className='text-[#38393D] px-3 pt-1 font-light'>Places to stay </p>
                                    </div>
                                </div>
                            )}
                        </NavLink>
                        {/* <p className='text-[#38393D] px-3 pt-1 font-light'>Buy an Amani</p> */}
                        <NavLink to="/homepage">
                            {({ isActive }) => (
                                <div
                                    className={isActive ? "flex items-center mb-4 text-[#639418] font-light" : "flex items-center mb-4 font-light"}
                                >
                                    <div className="flex items-center ">
                                        <p className='text-[#38393D] px-3 pt-1 font-light'>Buy an Amani</p>
                                    </div>
                                </div>
                            )}
                        </NavLink>
                        {/* <p className='text-[#38393D] px-3 pt-1 font-light'>Rent an Amani</p> */}
                        <NavLink to="/homepage">
                            {({ isActive }) => (
                                <div
                                    className={isActive ? "flex items-center mb-4 text-[#639418] font-light" : "flex items-center mb-4 font-light"}
                                >
                                    <div className="flex items-center ">
                                        <p className='text-[#38393D] px-3 pt-1 font-light'>Rent an Amani</p>
                                    </div>
                                </div>
                            )}
                        </NavLink>
                    </div>
                </div>
                <div className='ml-auto'>
                    <div className='flex'>
                        <p className='text-[#38393D] px-4 pt-1 font-light'>Become a Host</p>
                        <div className=''>
                            {/* //@ts-ignore */}
                            <PrimaryButton
                                onClick={''}
                                title="Sign Up"
                                disabled={false}
                                loading={loading}
                                icon={""}
                                style={{ height: "35px", paddingLeft: "20px", paddingRight: "20px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr className=' border: 0.1px' />
        </>
    )
}

export default HomepageParials
