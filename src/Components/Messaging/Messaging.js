import React, { useEffect, useState } from "react";
import differentSlides from "./Slides";
import "./Messaging.scss";
import { email, linkedinicon } from "../../Assets/Images/_index";

const Messaging = (props) => {
    const { handlePreviousSlide, handleNextSlide, currentSlide, day } = props;

    useEffect(() => {
        console.log("hi hi hi");
    }, [currentSlide, day]);

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
                    <h2>{differentSlides[currentSlide][1] || " "}</h2>
                </div>
                <div className="contact">
                    {currentSlide === 4 && (
                        <>
                            <img src={email} autoFocus />
                            <img src={linkedinicon} autofocus />
                        </>
                    )}
                </div>
            </div>
            <div className="wayfinder-container">
                {currentSlide > 0 && (
                    <div onClick={handlePreviousSlide} className="left">
                        &lsaquo;
                    </div>
                )}
                {currentSlide < 4 && (
                    <div onClick={handleNextSlide} className="right">
                        &rsaquo;
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messaging;
