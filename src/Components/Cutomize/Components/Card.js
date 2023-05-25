import React from "react";

const Card = (props) => {
    const {
        primaryColor,
        accentColor,
        heading,
        body,
        textColor,
        svg,
        secondary,
    } = props;
    return (
        <div style={{ backgroundColor: primaryColor }}>
            <h1 style={{ color: accentColor, fontFamily: secondary }}>
                {heading}
            </h1>
            {svg}
            <p
                className="text"
                style={{ color: textColor, fontFamily: secondary }}
            >
                {body}
            </p>
        </div>
    );
};

export default Card;
