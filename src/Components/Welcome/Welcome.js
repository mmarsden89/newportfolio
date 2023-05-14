import React from "react";
import "./Welcome.scss";

const Welcome = (props) => {
    const { className, style } = props;
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
