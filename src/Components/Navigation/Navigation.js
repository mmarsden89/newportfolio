import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import {
    colorwheelicon,
    githubicon,
    linkedinicon,
} from "../../Assets/Images/_index";
import Instagram from "./Instagram";

const Navigation = (props) => {
    const [editZip, setEditZip] = useState(false);
    const [zip, setZip] = useState("02144");
    const [newZip, setNewZip] = useState("");
    const {
        currentSlide,
        setCurrentSlide,
        setClassArr,
        setValue,
        value,
        handleColorRange,
        colorRange,
        handleZipCode,
        releaseBallons,
        day,
        showBalloons,
        renderMessage,
    } = props;

    useEffect(() => {}, [currentSlide]);

    const handleHome = () => {
        setCurrentSlide(0);
        setClassArr(["", "", "", ""]);
    };
    console.log(currentSlide);

    const handleChangeZip = () => {
        setEditZip(true);
    };

    const handleZip = (e) => {
        if (e.target.value.length < 6) {
            setNewZip(e.target.value);
            setZip(e.target.value);
        }
    };

    const submitZip = (e) => {
        setEditZip(false);
        handleZipCode(e);
        setNewZip("");
    };

    const handleCancel = () => {
        setEditZip(false);
        setNewZip("");
    };

    return (
        <div className={`navigation-container ${day ? " day" : " night"}`}>
            <div className="navigation-subcontainer">
                <div onClick={handleHome} className="nav-link">
                    <div className="nav">home</div>
                </div>
                <div className="resume nav-link">
                    <div className="nav">resume</div>
                </div>
                {!colorRange && currentSlide < 2 && (
                    <div className="nav-link cw">
                        <img
                            src={colorwheelicon}
                            className="colorwheel"
                            onClick={handleColorRange}
                        />
                    </div>
                )}
                {colorRange && (
                    <div className="popup nav-link">
                        <input
                            type="range"
                            min="0"
                            max={360}
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                        <div onClick={handleColorRange}>x</div>
                    </div>
                )}
                {currentSlide === 2 && !editZip && (
                    <div className="nav-link change-zip">
                        <div onClick={handleChangeZip} className="nav">
                            change zip
                        </div>
                    </div>
                )}
                {currentSlide === 2 && editZip && (
                    <div className="nav-link zip">
                        <form>
                            <input
                                className="edit-zip"
                                type="number"
                                onChange={handleZip}
                                placeholder="zipcode"
                                maxLength="6"
                                value={newZip}
                                autoFocus
                            />
                            <button onClick={submitZip} value={zip}>
                                ✓
                            </button>
                            <button onClick={handleCancel}>✕</button>
                        </form>
                    </div>
                )}

                {currentSlide === 3 &&
                    (!showBalloons ? (
                        <button
                            className="release-balloons"
                            onClick={releaseBallons}
                        >
                            balloons
                        </button>
                    ) : (
                        <div className="nav-link"></div>
                    ))}

                {currentSlide === 4 && (
                    <div className="nav-link social-container">
                        <a href="https://github.com/mmarsden89" target="_blank">
                            <img src={githubicon} className="github-icon" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={linkedinicon} className="github-icon" />
                        </a>
                        <Instagram renderMessage={renderMessage} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
