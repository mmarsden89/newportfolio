import React from "react";
import differentSlides from "./Slides";
import "./Messaging.scss";
import { email, linkedinicon, codepen } from "../../Assets/Images/_index";
import { useSelector } from "react-redux";

const Messaging = (props) => {
    const {
        handlePreviousSlide,
        handleNextSlide,
        day,
        renderMessage,
        primary,
        secondary,
    } = props;

    // useEffect(() => {}, [currentSlide]);
    const { currentSlide } = useSelector((state) => state.currentSlide);

    const handleClick = () => {
        navigator.clipboard.writeText("mattmarsdendev@gmail.com");
        renderMessage("Email copied to clipboard!", true);
    };

    return (
        <div className={`messaging-container ${day ? " day" : " night"}`}>
            <div className="messaging">
                <h1 style={{ fontFamily: currentSlide === 2 && primary }}>
                    Hi! I'm Matt
                </h1>
                <div className="sub-header">
                    <h2
                        key={currentSlide}
                        style={{ fontFamily: currentSlide === 2 && secondary }}
                    >
                        {differentSlides[currentSlide][0]}
                    </h2>
                    <h2
                        key={currentSlide + "-two"}
                        style={{ fontFamily: currentSlide === 2 && secondary }}
                    >
                        {differentSlides[currentSlide][1] || " "}
                    </h2>
                </div>
                {currentSlide === 0 && (
                    <div className="mobile-swipe">Swipe to navigate</div>
                )}
                {currentSlide === 1 && (
                    <a
                        href="https://codepen.io/mmarsden89-the-scripter"
                        target="_blank"
                        className="codepen"
                    >
                        <img src={codepen} className="" />
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
                {currentSlide === 5 && (
                    <div className="mobile-contact">
                        <>
                            <a href="mailto:mattmarsdendev@gmail.com">
                                <img src={email} autoFocus />
                            </a>
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
