import React, { useState, useEffect } from "react";
import "./Sunset.scss";
import { balloon, desertbg } from "../../Assets/Images/_index";
import Transmalfadorian from "./Transmalfadorian";

const Sunset = (props) => {
    const { className, showBalloons } = props;

    useEffect(() => {}, [showBalloons]);

    const starArr = new Array(100).fill(0, 0, 99);
    const starMap = starArr.map((star, idx) => (
        <div
            className="star"
            style={{
                bottom: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                height: `${Math.round(Math.random() * 2)}px`,
                width: `${Math.round(Math.random() * 2)}px`,
                animation: `animation: starshine ${
                    Math.random() * 15
                }s linear infinite`,
            }}
            key={idx}
        ></div>
    ));

    const balloonsArr = new Array(25).fill(0, 0, 25);
    const balloonsMap = balloonsArr.map((ballon, idx) => (
        <div
            className="balloon-container"
            key={idx}
            style={{ animationDelay: `${Math.random() * 10}s` }}
        >
            <img
                src={balloon}
                className="img-balloon"
                alt=""
                style={{
                    left: `${Math.random() * 90}vw`,
                    width: `${Math.random() * 100 + 15}px`,
                    animationDelay: `${Math.random() * 5}s`,
                    position: "absolute",
                    filter: `hue-rotate(${Math.random() * 360}deg)`,
                }}
            />
        </div>
    ));

    return (
        <div className={`sunset-container ${className}`}>
            <div className="sunset"></div>
            <div className="stars-container">{starMap}</div>
            <div className="sun-container">
                <div className="sun"></div>
            </div>
            <div className="foreground-container">
                <img src={desertbg} className="bg-image" alt="" />
            </div>
            {showBalloons && balloonsMap}
            <Transmalfadorian />
        </div>
    );
};

export default Sunset;
