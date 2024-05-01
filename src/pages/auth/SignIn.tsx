import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import "./index.css";
import PrimaryButton from "components/buttons/PrimaryButton";
import CustomInput from "components/textInputs/CustomInput"
import amani from "assets/logos/amani-logo.svg"
//redux
import { ValidateEmailAndPassword, loginUser, clearErrors } from "store/actions";
//helpers
import { getRedirect } from "helpers";

const SignIn = (props: any): JSX.Element => {
    const { handleSubmit, control, formState: { errors } } = useForm();
    const { loginUser, clearErrors, error, loading } = props;


    return (
        <div className="lg:grid lg:grid-cols-3 p-8">
            <div></div>
            <div className="lg:py-52 max-h-screen h-screen">
                <div className="login-logo">
                    <Link
                        to="/"
                    >
                        <img src={amani} alt="" />
                    </Link>

                    <hr style={{ marginTop: '30px' }} />

                    <div>
                        <p className="login-text py-10">Log in</p>
                        <CustomInput
                            control={control}
                            name={"email"}
                            id={"email"}
                            label={"Email Address"}
                            placeholder={"Enter your email"}
                            isRequired={true}
                            type={"email"}
                            errors={errors}
                            isDisabled={false}
                            defaultValue={''}
                            min={""}
                            max={""}
                            icon=""
                        />
                    </div>
                    {/* @ts-ignore */}
                    <PrimaryButton
                        title="Continue to Payment"
                        disabled={false}
                        loading={loading}
                        icon={""}
                        style={{ height: "50px", marginTop: '20px' }}
                    />

                    <div className="flex items-center py-6">
                        <div className="border-b border-gray-300 flex-grow"></div>
                        <p className="mx-3 text-gray-500">or</p>
                        <div className="border-b border-gray-300 flex-grow"></div>
                    </div>

                    <div className="py-3">
                        <button type="button" className="flex items-center justify-center w-full py-4 rounded-3xl text-xs text-black shadow-sm solid-br bg-[#FFFFFF] text-center inline-flex items-center  ">
                            <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                            Continue with Google
                        </button>
                    </div>
                    <div>
                        <button type="button" className="flex items-center justify-center w-full py-4 rounded-3xl text-xs text-white bg-[#38393D] text-center inline-flex items-center  ">
                            <svg className="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Continue with Apple
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center py-4 text-xs ">
                    <p className="text-[#717279]">New to Amani?</p> <span className="text-[#4C7F00]" style={{ textDecoration: 'underline' }}>Sign Up!</span>
                </div>
            </div>
            <div></div>
        </div>

    );
};

const mapStateToProps = (state: any) => {
    const { error, loading } = state.auth;
    return { error, loading };
};

export default connect(mapStateToProps, { ValidateEmailAndPassword, loginUser, clearErrors })(SignIn);
