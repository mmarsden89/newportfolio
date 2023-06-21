import React from "react";
import { Reorder } from "framer-motion/dist/framer-motion";

const Card = (props) => {
    const {
        primaryColor,
        accentColor,
        heading,
        body,
        textColor,
        svg,
        secondary,
        key,
        item,
        idee,
    } = props;
    return (
        <Reorder.Item
            style={{ backgroundColor: primaryColor }}
            id={idee}
            value={item}
            className="card"
        >
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
        </Reorder.Item>
    );
};

export default Card;
