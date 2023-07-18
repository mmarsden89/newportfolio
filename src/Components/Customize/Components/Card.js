import React from "react";
import { useSelector } from "react-redux";

const Card = (props) => {
    const { secondaryFont } = useSelector((state) => state.secondaryFont);
    const { primaryColor, accentColor, heading, body, textColor, svg } = props;
    return (
        <div style={{ backgroundColor: primaryColor }}>
            <h1 style={{ color: accentColor, fontFamily: secondaryFont }}>
                {heading}
            </h1>
            {svg}
            <p
                className="text"
                style={{ color: textColor, fontFamily: secondaryFont }}
            >
                {body}
            </p>
        </div>
    );
};

export default Card;
