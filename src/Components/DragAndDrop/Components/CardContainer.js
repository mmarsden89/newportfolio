import React from "react";

function CardContainer({ weather, children }) {
    const withProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { weather })
    );
    return <div className="icon-container">{withProps}</div>;
}
export default CardContainer;
