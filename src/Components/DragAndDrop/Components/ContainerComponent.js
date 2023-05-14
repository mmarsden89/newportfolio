import React from "react";

function ContainerComponent({ weather, className, theme, children }) {
    const withProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { weather })
    );
    return (
        <div className={`dragdrop-container ${className + theme}`}>
            {withProps}
        </div>
    );
}

export default ContainerComponent;
