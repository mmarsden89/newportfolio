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
                <div onClick={handleHome}>home</div>
                {!colorRange && currentSlide < 2 && (
                    <img
                        src={colorwheelicon}
                        className="colorwheel"
                        onClick={handleColorRange}
                    />
                )}
                {colorRange && (
                    <div className="popup">
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
