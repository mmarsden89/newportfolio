import React from "react";
import differentSlides from "./Slides";
import "./Messaging.scss";
import { email, linkedinicon, codepen } from "../../Assets/Images/_index";
import { useSelector } from "react-redux";

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
                    >
                        <img src={codepen} className="" />
                    </a>
                )}
                {currentSlide === 4 && (
                    <div className="contact">
                        <>
                            <img src={email} autoFocus onClick={handleClick} />
                            <img src={linkedinicon} autoFocus />
                        </>
                    </div>
                )}
                {currentSlide === 4 && (
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-caret-left"
                            width="75"
                            height="75"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M14 6l-6 6l6 6v-12"></path>
                        </svg>
                    </div>
                )}
                {currentSlide < 4 && (
                    <div onClick={handleNextSlide} className="right">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-caret-right"
                            width="75"
                            height="75"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M10 18l6 -6l-6 -6v12"></path>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messaging;
