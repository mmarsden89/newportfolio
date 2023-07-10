import React, { useState } from "react";
import "./Animation.scss";
import { rocket } from "../../Assets/Images/_index";

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
            {/* <img src={rocket} className="rocket" /> */}
        </div>
    );
};

export default Animation;
