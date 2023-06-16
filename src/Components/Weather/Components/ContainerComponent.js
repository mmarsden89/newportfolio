import React from "react";

const ContainerComponent = ({ weather, className, theme, children }) => {
    const withProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { weather })
    );
    return (
        <div className={`weather-parent-container ${className + theme}`}>
            {withProps}
        </div>
    );
};

export default ContainerComponent;
