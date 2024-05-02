import React, { useState, useEffect } from 'react';
import Modal from "react-modal";
import success from "assets/icons/success.svg";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        transform: "translate(0%, 0%)", // Center the modal
        width: "90%", // Adjust the width as needed
        maxWidth: "420px", // Set a maximum width for larger screens
        padding: "1.5rem",
        borderRadius: "10px",
        backgroundImage: 'linear-gradient(to top, #07070D 75%, #222436 100%)'
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
};

interface SuccessProps {
    modalIsOpen?: any;
    heading?: any;
    text?: any;
    subtext?: any;
    toDashboard?: any;
    setShowSuccessModal?: any;
    closeModal?: any;
}

const SuccessModal = ({ modalIsOpen, heading, text, subtext, setShowSuccessModal }: SuccessProps) => {

    useEffect(() => {
        const body = document.body;
        if (modalIsOpen) {
            body.style.overflow = "hidden"; // Disable scrolling
        } else {
            body.style.overflow = "auto"; // Enable scrolling
        }
        return () => {
            body.style.overflow = "auto"; // Ensure scrolling is enabled when the component unmounts
        };
    }, [modalIsOpen]);

    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            className={"successmodal"}
            contentLabel="Amani Waitlist Success Modal"
        >
            <div className="flex">
                <p></p>
                <p className="ion-ios-close text-4xl ml-auto cursor-pointer py-5 px-8" style={{ color: "white" }} onClick={() => setShowSuccessModal(false)}></p>
            </div>
            <div className="flex flex-col p-14">
                <img src={success} alt="success" width={95} className="mx-auto" />
                <div className="" style={{ color: "white" }}>
                    <p className="text-2xl white-text font-semibold text-center my-3" style={{ color: "white" }}>
                        {heading}
                    </p>
                </div>
                <div style={{ color: "#676877" }}>
                    <p className=" text-sm font-light text-center">{text}</p>
                    {subtext && <p className="text-sm font-light white-text text-center mt-2">{subtext}</p>}
                </div>

            </div>
        </Modal>


    )
}


export default SuccessModal;
