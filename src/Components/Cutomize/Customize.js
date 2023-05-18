import React, { useState, useEffect } from "react";
import "./Customize.scss";
const Customize = (props) => {
    const { renderMessage, className } = props;
    const [backgroundColor, setBackgroundColor] = useState("#0e0c0e");
    const [primaryColor, setPrimaryColor] = useState("#211c21");
    const [secondaryColor, setSecondaryColor] = useState("#f3bd05");
    const [accentColor, setAccentColor] = useState("#707070");
    const [textColor, setTextColor] = useState("#e6dc75");
    const [toolbar, setToolbar] = useState(false);

    const handleChange = (e) => {
        console.log(e.target.value);
        setBackgroundColor(e.target.value);
    };

    const handlePrimaryChange = (e) => {
        console.log(e.target.value);
        setPrimaryColor(e.target.value);
    };

    const handleSecondaryChange = (e) => {
        console.log(e.target.value);
        setSecondaryColor(e.target.value);
    };
    const handleAccentChange = (e) => {
        console.log(e.target.value);
        setAccentColor(e.target.value);
    };

    const handleTextChange = (e) => {
        console.log(e.target.value);
        setTextColor(e.target.value);
    };

    const handleLabelClick = (e) => {
        console.dir(e.target);
        e.target.parentElement.children[0].click();
    };

    const displayToolbar = () => {
        setToolbar(!toolbar);
    };

    const randomize = () => {
        setBackgroundColor(
            `#${Math.floor(Math.random() * 16777215).toString(16)}`
        );
        setPrimaryColor(
            `#${Math.floor(Math.random() * 16777215).toString(16)}`
        );
        setSecondaryColor(
            `#${Math.floor(Math.random() * 16777215).toString(16)}`
        );
        setAccentColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        setTextColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    };

    const copyColors = () => {
        navigator.clipboard.writeText(
            `background: ${backgroundColor}\nprimary: ${primaryColor}\nsecondary: ${secondaryColor}\naccent: ${accentColor}\ntext: ${textColor}`
        );

        renderMessage("Color scheme copied to clipboard", true);
    };

    // useEffect(() => {}, [backgroundColor, primaryColor]);

    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className={`customize-container ${className}`}
        >
            <div className="customize-top">
                <svg
                    width="800"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        stroke="#000"
                        fill={primaryColor}
                        x="13"
                        y="113"
                        width="266"
                        height="46"
                        id="svg_1"
                        rx="6"
                        stroke-width="0"
                    />
                    <path
                        stroke="#000"
                        fill={secondaryColor}
                        opacity="undefined"
                        d="m295,118.18919c0,-2.81969 2.73973,-5.18919 6,-5.18919l282,0c3.26027,0 6,2.3695 6,5.18919l0,213.62163c0,2.81969 -2.73973,5.18919 -6,5.18919l-282,0c-3.26027,0 -6,-2.3695 -6,-5.18919l0,-213.62163z"
                        id="svg_2"
                        stroke-width="0"
                    />
                    <rect
                        stroke="#000"
                        fill={textColor}
                        x="238"
                        y="171"
                        width="41"
                        height="166"
                        id="svg_3"
                        rx="6"
                        stroke-width="0"
                    />
                    <rect
                        stroke="#000"
                        fill={secondaryColor}
                        x="13"
                        y="174"
                        width="209"
                        height="51"
                        id="svg_4"
                        rx="6"
                        stroke-width="0"
                    />
                    <rect
                        fill={primaryColor}
                        stroke="#000"
                        x="13"
                        y="244"
                        width="92"
                        height="93"
                        id="svg_5"
                        rx="6"
                        stroke-width="0"
                    />
                    <rect
                        fill={accentColor}
                        stroke="#000"
                        x="130"
                        y="244"
                        width="92"
                        height="93"
                        id="svg_6"
                        rx="6"
                        stroke-width="0"
                    />
                    <rect
                        stroke="#000"
                        fill={secondaryColor}
                        stroke-width="0"
                        x="601"
                        y="113"
                        width="186"
                        height="41"
                        id="svg_9"
                        rx="6"
                    />
                    <rect
                        fill={primaryColor}
                        stroke="#000"
                        x="695"
                        y="170"
                        width="92"
                        height="93"
                        id="svg_10"
                        rx="6"
                        stroke-width="0"
                    />
                    <rect
                        fill={accentColor}
                        stroke="#000"
                        stroke-width="0"
                        x="601"
                        y="170"
                        width="79"
                        height="39"
                        id="svg_11"
                        rx="6"
                    />
                    <rect
                        fill={primaryColor}
                        stroke="#000"
                        stroke-width="0"
                        x="601"
                        y="224"
                        width="79"
                        height="39"
                        id="svg_12"
                        rx="6"
                    />

                    <path
                        stroke="#000"
                        fill={textColor}
                        stroke-width="0"
                        opacity="undefined"
                        d="m602,281.93103c0,-2.13604 2.73973,-3.93103 6,-3.93103l174,0c3.26027,0 6,1.795 6,3.93103l0,49.13793c0,2.13604 -2.73973,3.93103 -6,3.93103l-174,0c-3.26027,0 -6,-1.795 -6,-3.93103l0,-49.13793z"
                        id="svg_13"
                    />
                </svg>
            </div>
            <div className="customize-bottom">
                <div style={{ backgroundColor: primaryColor }}>
                    <h1 style={{ color: accentColor }}>
                        Front-end Development
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-devices-code"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke={secondaryColor}
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1 -1 1"></path>
                        <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7"></path>
                        <path d="M20 21l2 -2l-2 -2"></path>
                        <path d="M17 17l-2 2l2 2"></path>
                        <path d="M16 9h2"></path>
                    </svg>
                    <p className="text" style={{ color: textColor }}>
                        Three years of experience developing full stack
                        applications with a focus on the front end
                    </p>
                </div>
                <div style={{ backgroundColor: primaryColor }}>
                    <h1 style={{ color: accentColor }}>
                        Custom Code Solutions
                    </h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-a-b"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke={secondaryColor}
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5"></path>
                        <path d="M12 6l0 12"></path>
                        <path d="M16 16v-8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3"></path>
                    </svg>
                    <p className="text" style={{ color: textColor }}>
                        Scalable custom coding solutions for a variety of
                        Content Management Systems
                    </p>
                </div>
                <div style={{ backgroundColor: primaryColor }}>
                    <h1 style={{ color: accentColor }}>A/B Testing</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-3d-cube-sphere"
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke={secondaryColor}
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M6 17.6l-2 -1.1v-2.5"></path>
                        <path d="M4 10v-2.5l2 -1.1"></path>
                        <path d="M10 4.1l2 -1.1l2 1.1"></path>
                        <path d="M18 6.4l2 1.1v2.5"></path>
                        <path d="M20 14v2.5l-2 1.12"></path>
                        <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
                        <path d="M12 12l2 -1.1"></path>
                        <path d="M18 8.6l2 -1.1"></path>
                        <path d="M12 12l0 2.5"></path>
                        <path d="M12 18.5l0 2.5"></path>
                        <path d="M12 12l-2 -1.12"></path>
                        <path d="M6 8.6l-2 -1.1"></path>
                    </svg>
                    <p className="text" style={{ color: textColor }}>
                        Hundreds of successful A/B experiments run on household
                        name's products
                    </p>
                </div>
            </div>
            <div
                className={`customize-button ${toolbar ? "hidden" : ""}`}
                onClick={displayToolbar}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-settings"
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
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
            </div>
            <div
                className={`color-picker-container ${toolbar ? " " : "hidden"}`}
            >
                <div className="background-container color-picker">
                    <input
                        type="color"
                        className="color"
                        name="background"
                        onChange={handleChange}
                        style={{ background: backgroundColor }}
                        value={backgroundColor}
                    />
                    <label
                        for="background"
                        className="hex"
                        onClick={handleLabelClick}
                    >
                        {backgroundColor}
                    </label>
                    <label for="background" onClick={handleLabelClick}>
                        Background
                    </label>
                </div>
                <div className="primary-container color-picker">
                    <input
                        type="color"
                        className="color"
                        name="primary"
                        onChange={handlePrimaryChange}
                        style={{ background: primaryColor }}
                        value={primaryColor}
                    />
                    <label
                        for="primary"
                        className="hex"
                        onClick={handleLabelClick}
                    >
                        {primaryColor}
                    </label>
                    <label for="primary" onClick={handleLabelClick}>
                        Primary Color
                    </label>
                </div>
                <div className="secondary-container color-picker">
                    <input
                        type="color"
                        className="color"
                        name="secondary"
                        onChange={handleSecondaryChange}
                        style={{ background: secondaryColor }}
                        value={secondaryColor}
                    />
                    <label
                        for="secondary"
                        className="hex"
                        onClick={handleLabelClick}
                    >
                        {secondaryColor}
                    </label>
                    <label for="secondary" onClick={handleLabelClick}>
                        Secondary Color
                    </label>
                </div>
                <div className="accent-container color-picker">
                    <input
                        type="color"
                        className="color"
                        name="accent"
                        onChange={handleAccentChange}
                        style={{ background: accentColor }}
                        value={accentColor}
                    />
                    <label
                        for="accent"
                        className="hex"
                        onClick={handleLabelClick}
                    >
                        {accentColor}
                    </label>
                    <label for="accent" onClick={handleLabelClick}>
                        Accent Color
                    </label>
                </div>
                <div className="text-container color-picker">
                    <input
                        type="color"
                        className="color"
                        name="text"
                        onChange={handleTextChange}
                        style={{ background: textColor }}
                        value={textColor}
                    />
                    <label
                        for="text"
                        className="hex"
                        onClick={handleLabelClick}
                    >
                        {textColor}
                    </label>
                    <label for="text" onClick={handleLabelClick}>
                        Text Color
                    </label>
                </div>
                <div className="dice-roll" onClick={randomize}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-dice"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                        <circle
                            cx="8.5"
                            cy="8.5"
                            r=".5"
                            fill="currentColor"
                        ></circle>
                        <circle
                            cx="15.5"
                            cy="8.5"
                            r=".5"
                            fill="currentColor"
                        ></circle>
                        <circle
                            cx="15.5"
                            cy="15.5"
                            r=".5"
                            fill="currentColor"
                        ></circle>
                        <circle
                            cx="8.5"
                            cy="15.5"
                            r=".5"
                            fill="currentColor"
                        ></circle>
                    </svg>
                </div>
                <div className="copy" onClick={copyColors}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-copy"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                    </svg>
                </div>
                <div onClick={displayToolbar} className="cancel">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-x"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Customize;
