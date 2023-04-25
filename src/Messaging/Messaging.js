import React from "react";
import "./Messaging.scss";

const Messaging = (props) => {
    const { handlePreviousSlide, handleNextSlide, currentSlide } = props;
    const slideOne = [
        "a creative developer who loves to develop",
        "aesthetic solutions that captivates users",
    ];

    const slideTwo = [
        "a creative designer who loves to develop",
        "aesthetic solutions that captivates users",
    ];

    const slideThree = [
        "an inquisitive developer who loves to explore",
        "new solutions that benefits users",
    ];

    const slideFour = [
        "a creative developer who loves to develop",
        "fun animations that captivates users",
    ];

    const slideFive = ["and I want to work with you"];

    const differentSlides = [
        slideOne,
        slideTwo,
        slideThree,
        slideFour,
        slideFive,
    ];

    return (
        <div className="messaging-container">
            <div className="messaging">
                <h1>
                    Hi! I'm <span>Matt</span>
                </h1>
                <div className="sub-header">
                    <h2>{differentSlides[currentSlide][0]}</h2>
                    <h2>{differentSlides[currentSlide][1] || ""}</h2>
                </div>
            </div>
            <div className="navigation-container">
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
