import React, { useEffect } from "react";
import { ColorPicker, Randomize, CopyColors, Home, Typography } from "./_index";

const ToolBar = (props) => {
    const {
        toolbar,
        handleChange,
        backgroundColor,
        primaryColor,
        secondaryColor,
        accentColor,
        textColor,
        handleLabelClick,
        handleSecondaryChange,
        handleAccentChange,
        handlePrimaryChange,
        handleTextChange,
        randomize,
        copyColors,
        returnDefaults,
        displayToolbar,
        setSecondary,
        secondary,
        displayFonts,
    } = props;

    return (
        <div className={`color-picker-container ${toolbar ? " " : "hidden"}`}>
            <ColorPicker
                className="background"
                color={backgroundColor}
                handleColorChange={handleChange}
                handleLabelClick={handleLabelClick}
            />
            <ColorPicker
                className="primary"
                color={primaryColor}
                handleColorChange={handlePrimaryChange}
                handleLabelClick={handleLabelClick}
            />
            <ColorPicker
                className="secondary"
                color={secondaryColor}
                handleColorChange={handleSecondaryChange}
                handleLabelClick={handleLabelClick}
            />
            <ColorPicker
                className="accent"
                color={accentColor}
                handleColorChange={handleAccentChange}
                handleLabelClick={handleLabelClick}
            />
            <ColorPicker
                className="text"
                color={textColor}
                handleColorChange={handleTextChange}
                handleLabelClick={handleLabelClick}
            />
            <Randomize randomize={randomize} />
            <CopyColors copyColors={copyColors} />
            <Typography
                setSecondary={setSecondary}
                secondary={secondary}
                displayFonts={displayFonts}
            />
            <Home returnDefaults={returnDefaults} />
            <div onClick={displayToolbar} className="cancel">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-circle-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                </svg>
            </div>
        </div>
    );
};

export default ToolBar;
