import React, { useEffect } from "react";
import "./Developer.scss";

const Developer = (props) => {
    const { className, imageOrder, shuffleBool } = props;

    useEffect(() => {}, [imageOrder]);

    return (
        <div className={`developer-container ${className}`}>
            <div className="row-1">
                {imageOrder.map((item, idx) => (
                    <div
                        className={`${shuffleBool ? "shuffle" : ""} image`}
                        key={idx}
                    >
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
