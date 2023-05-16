import React from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
    const { displayMessage, msgBool, showMessage } = props;
    return (
        showMessage && (
            <div className="display-container">
                <div className="display-icon">{msgBool ? "✔" : "✕"}</div>
                <div className="disply-text">{displayMessage}</div>
            </div>
        )
    );
};

export default DisplayInfo;
