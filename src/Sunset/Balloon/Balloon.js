import React from "react";
import "./Balloon.scss";
import balloon from "../../Assets/Images/balloon.png";

const Balloon = () => {
    return (
        <div className="balloon-container">
            <img src={balloon} className="img-balloon" />
        </div>
    );
};

export default Balloon;
