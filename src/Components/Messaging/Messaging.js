import React from "react";
import differentSlides from "./Slides";
import "./Messaging.scss";
import { email, linkedinicon, codepen } from "../../Assets/Images/_index";
import { useSelector } from "react-redux";
import CaretRight from "./CaretRight";
import CaretLeft from "./CaretLeft";

const Messaging = (props) => {
    const { handlePreviousSlide, handleNextSlide, renderMessage } = props;
    const { colorBool } = useSelector((state) => state.colorBool);
    const { currentSlide } = useSelector((state) => state.currentSlide);
    const { primaryFont } = useSelector((state) => state.primaryFont);
    const { secondaryFont } = useSelector((state) => state.secondaryFont);
    const { day } = useSelector((state) => state.day);

    const handleClick = () => {
        navigator.clipboard.writeText("mattmarsdendev@gmail.com");
        renderMessage("Email copied to clipboard!", true);
    };

    return (
        <div
            className={`messaging-container ${
                day && currentSlide === 3 ? " day" : " night"
            } ${colorBool && currentSlide === 1 ? "bnw" : ""}`}
        >
            <div className="messaging">
                <h1 style={{ fontFamily: currentSlide === 2 && primaryFont }}>
                    Hi! I'm Matt
                </h1>
                <div className="sub-header">
                    <h2
                        key={currentSlide}
                        style={{
                            fontFamily: currentSlide === 2 && secondaryFont,
                        }}
                    >
                        {differentSlides[currentSlide][0]}
                    </h2>
                    <h2
                        key={currentSlide + "-two"}
                        style={{
                            fontFamily: currentSlide === 2 && secondaryFont,
                        }}
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
                        rel="noopener noreferrer"
                    >
                        <img src={codepen} alt="codepen logo" />
                    </a>
                )}
                {currentSlide === 4 && (
                    <>
                        <div className="contact">
                            <>
                                <img
                                    src={email}
                                    autoFocus
                                    onClick={handleClick}
                                    alt="email icon"
                                />
                                <img
                                    src={linkedinicon}
                                    autoFocus
                                    alt="linkedin icon"
                                />
                            </>
                        </div>
                        <div className="mobile-contact">
                            <>
                                <a href="mailto:mattmarsdendev@gmail.com">
                                    <img
                                        src={email}
                                        autoFocus
                                        alt="email icon"
                                    />
                                </a>
                                <img
                                    src={linkedinicon}
                                    autoFocus
                                    alt="linkedin icon"
                                />
                            </>
                        </div>
                    </>
                )}
            </div>
            <div className="wayfinder-container">
                {currentSlide > 0 && (
                    <CaretLeft handlePreviousSlide={handlePreviousSlide} />
                )}
                {currentSlide < 4 && (
                    <CaretRight handleNextSlide={handleNextSlide} />
                )}
            </div>
        </div>
    );
};

export default Messaging;
