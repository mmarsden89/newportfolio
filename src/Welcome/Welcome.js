import React from "react";
import "./Welcome.scss";

const Welcome = (props) => {
    const { className } = props;
    return (
        <div className={`welcome-container ${className}`}>
            <div className="sub-container"></div>
        </div>
    );
};

export default Welcome;
