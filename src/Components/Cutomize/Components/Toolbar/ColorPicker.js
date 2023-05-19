import React from "react";

const ColorPicker = (props) => {
    const { className, color, handleColorChange, handleLabelClick } = props;
    return (
        <div className={`${className}-container color-picker`}>
            <input
                type="color"
                className="color"
                name={className}
                onChange={handleColorChange}
                style={{ background: color }}
                value={color}
            />
            <label for={className} className="hex" onClick={handleLabelClick}>
                {color}
            </label>
            <label for={className} onClick={handleLabelClick}>
                {className}
            </label>
        </div>
    );
};

export default ColorPicker;
