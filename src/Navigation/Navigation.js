import React, { useEffect, useState } from "react";
import "./Navigation.scss";
import colorwheelicon from "../Assets/Images/colorwheelicon.png";

const Navigation = (props) => {
    const {
        currentSlide,
        setCurrentSlide,
        setClassArr,
        setValue,
        value,
        handleColorRange,
        colorRange,
    } = props;

    useEffect(() => {}, [currentSlide]);

    const handleHome = () => {
        setCurrentSlide(0);
        setClassArr(["", "", "", ""]);
    };

    return (
        <div className="navigation-container">
            <div className="navigation-subcontainer">
                <div onClick={handleHome} className="nav-link">
                    home
                </div>
                <div className="resume nav-link">resume</div>
                {!colorRange && currentSlide < 2 && (
                    <div className="nav-link">
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
                            // style={getBackgroundSize()}
                            value={value}
                        />
                        <div onClick={handleColorRange}>x</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
