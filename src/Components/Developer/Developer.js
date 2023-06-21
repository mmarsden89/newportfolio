import React from "react";
import "./Developer.scss";
import Wave from "./Wave/Wave";

const Developer = (props) => {
    const { className, imageOrder } = props;

    return (
        <div className={`developer-container ${className}`}>
            <div className="row-1">
                {imageOrder.slice(0, 5).map((item) => (
                    <div className="image">
                        <img src={item} />
                    </div>
                ))}
            </div>
            <div className="row-2">
                {imageOrder.slice(5, 10).map((item) => (
                    <div className="image">
                        <img src={item} />
                    </div>
                ))}
            </div>
            <div className="overlay"></div>
            <div className="nav-bar"></div>
        </div>
    );
};

export default Developer;
