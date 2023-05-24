import React from "react";
import "./Wave.scss";

const Wave = (props) => {
    const { handleClick } = props;
    return (
        <div className="wave-container" onClick={handleClick}>
            <div className="title">Zenty</div>
            <div className="sub-header">
                Find some moments of <span>ZEN</span>
            </div>
            <div className="air air1"></div>
            <div className="air air2"></div>
            <div className="air air3"></div>
            <div className="air air4"></div>
        </div>
    );
};

export default Wave;
