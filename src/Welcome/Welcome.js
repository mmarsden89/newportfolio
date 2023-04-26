import React from "react";
import "./Welcome.scss";

const Welcome = (props) => {
    const { className, style } = props;

    console.log("style comes through as", style);
    return (
        <div
            className={`welcome-container ${className}`}
            style={{
                filter: `hue-rotate(${style}deg)`,
            }}
        >
            <div className="sub-container"></div>
        </div>
    );
};

export default Welcome;
