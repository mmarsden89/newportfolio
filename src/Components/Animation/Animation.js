import React, { useState } from "react";
import "./Animation.scss";
import {
    rocket,
    cloud,
    window1,
    window2,
    window3,
    window4,
} from "../../Assets/Images/_index";

const Animation = () => {
    const [runAnimation, setRunAnimation] = useState(false);

    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            setRunAnimation(true);
        }
    };

    return (
        <div className={runAnimation ? "animation-container" : "animation"}>
            <div className="hello">
                <div className="h1">
                    <h1>Hi</h1>
                </div>
                <div className="h2">
                    <h2>I'm Matt</h2>
                </div>
            </div>
            <div className="variety">
                <p>I have experience working on a variety of projects</p>
                <div className="windows">
                    <img src={window1} className="window" />
                    <img src={window2} className="window" />
                    <img src={window4} className="window" />
                </div>
            </div>
            <div className="space-background">
                <div className="space-text-wrapper">
                    <p>and I like to build things for the web</p>
                </div>
                <img src={rocket} className="rocket" />
                <img src={cloud} className="cloud" />
            </div>
            <div className="work">
                <div className="work-background"></div>
                <p>and I want to work with you</p>
            </div>
        </div>
    );
};

export default Animation;
