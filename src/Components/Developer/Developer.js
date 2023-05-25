import React from "react";
import "./Developer.scss";
import Wave from "./Wave/Wave";
import {
    exploremars,
    mountainview,
    designbox,
    rainbow,
    moderndesign,
    donuts,
    designconcept,
    moderndesign3,
    designboxanimated,
} from "../../Assets/Images/_index";

const Developer = (props) => {
    const { className } = props;
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div className={`developer-container ${className}`}>
            <div className="row-1">
                <Wave handleClick={handleClick} />
                <div className="headphones">
                    <div className="feel">FEEL THE MUSIC</div>
                    <div className="button">shop now</div>
                </div>
                <div className="image">
                    <img src={designbox} />
                </div>
                <div className="image">
                    <img src={rainbow} />
                </div>
                <div className="image">
                    <img src={moderndesign} />
                </div>
            </div>
            <div className="row-2">
                <div className="image">
                    <img src={exploremars} />
                </div>

                <div className="image">
                    <img src={mountainview} />
                </div>
                <div className="image">
                    <img src={donuts} />
                </div>
                <div className="image">
                    <img src={designconcept} />
                </div>
                <div className="image">
                    <img src={moderndesign3} />
                </div>
            </div>
            <div className="overlay"></div>
            <div className="nav-bar"></div>
        </div>
    );
};

export default Developer;
