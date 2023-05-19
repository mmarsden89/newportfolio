import React from "react";

const Card = (props) => {
    const {
        primaryColor,
        accentColor,
        heading,
        body,
        secondaryColor,
        textColor,
        svg,
    } = props;
    return (
        <div style={{ backgroundColor: primaryColor }}>
            <h1 style={{ color: accentColor }}>{heading}</h1>
            {svg}
            <p className="text" style={{ color: textColor }}>
                {body}
            </p>
        </div>
    );
};

export default Card;
