import React from "react";

const CardContainer = ({ weather, position, children }) => {
    const withProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { weather })
    );
    return <div className={`icon-container ${position}`}>{withProps}</div>;
};
export default CardContainer;
