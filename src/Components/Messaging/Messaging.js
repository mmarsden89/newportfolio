import React, { useEffect, useState } from "react";
import differentSlides from "./Slides";
import "./Messaging.scss";
import { email, linkedinicon, codepen } from "../../Assets/Images/_index";

const Messaging = (props) => {
    const {
        handlePreviousSlide,
        handleNextSlide,
        currentSlide,
        day,
        renderMessage,
    } = props;

    useEffect(() => {
        console.log("hi hi hi");
    }, [currentSlide, day]);

    const handleClick = () => {
        navigator.clipboard.writeText("mattmarsdendev@gmail.com");
        renderMessage("Email copied to clipboard!", true);
    };

    return (
        <div className={`messaging-container ${day ? " day" : " night"}`}>
            <div className="messaging">
                <h1>
                    Hi! I'm <span>Matt</span>
                </h1>
                <div className="sub-header">
                    <h2 key={currentSlide}>
                        {differentSlides[currentSlide][0]}
                    </h2>
                    <h2 key={currentSlide + "-two"}>
                        {differentSlides[currentSlide][1] || " "}
                    </h2>
                </div>
                {currentSlide === 1 && (
                    <a
                        href="https://codepen.io/mmarsden89-the-scripter"
                        target="_blank"
                        className="codepen"
                    >
                        <img src={codepen} />
                    </a>
                )}
                {currentSlide === 5 && (
                    <div className="contact">
                        <>
                            <img src={email} autoFocus onClick={handleClick} />
                            <img src={linkedinicon} autoFocus />
                        </>
                    </div>
                )}
            </div>
            <div className="wayfinder-container">
                {currentSlide > 0 && (
                    <div onClick={handlePreviousSlide} className="left">
                        &lsaquo;
                    </div>
                )}
                {currentSlide < 5 && (
                    <div onClick={handleNextSlide} className="right">
                        &rsaquo;
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messaging;
