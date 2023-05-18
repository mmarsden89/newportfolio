import React, { useState, useEffect } from "react";
import "./Customize.scss";
const Customize = () => {
    const [backgroundColor, setBackgroundColor] = useState("#0e0c0e");
    const [primaryColor, setPrimaryColor] = useState("#211c21");
    const [secondaryColor, setSecondaryColor] = useState("#f3bd05");
    const [accentColor, setAccentColor] = useState("#707070");
    const [textColor, setTextColor] = useState("#e8e196");

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

    useEffect(() => {}, [backgroundColor, primaryColor]);

    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className="customize-container"
        >
            <div className="customize-top">
                <svg
                    width="800"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        stroke-width="0"
                        rx="6"
                        id="svg_1"
                        height="71"
                        width="266"
                        y="113"
                        x="13"
                        stroke="#000"
                        fill={primaryColor}
                    />
                    <path
                        stroke-width="0"
                        id="svg_2"
                        d="m295,119c0,-3.26027 2.73973,-6 6,-6l282,0c3.26027,0 6,2.73973 6,6l0,247c0,3.26027 -2.73973,6 -6,6l-282,0c-3.26027,0 -6,-2.73973 -6,-6l0,-247z"
                        opacity="undefined"
                        stroke="#000"
                        fill={secondaryColor}
                    />
                    <rect
                        stroke="#000"
                        stroke-width="0"
                        rx="6"
                        id="svg_3"
                        height="171"
                        width="41"
                        y="200"
                        x="238"
                        fill={textColor}
                    />
                    <rect
                        stroke-width="0"
                        stroke="#000"
                        rx="6"
                        id="svg_4"
                        height="62"
                        width="209"
                        y="200"
                        x="13"
                        fill={secondaryColor}
                    />
                    <rect
                        stroke-width="0"
                        rx="6"
                        id="svg_5"
                        height="93"
                        width="92"
                        y="278"
                        x="13"
                        stroke="#000"
                        fill={primaryColor}
                    />
                    <rect
                        stroke-width="0"
                        rx="6"
                        id="svg_6"
                        height="93"
                        width="92"
                        y="278"
                        x="130"
                        stroke="#000"
                        fill={accentColor}
                    />
                    <rect
                        rx="6"
                        id="svg_9"
                        height="53"
                        width="186"
                        y="113"
                        x="601"
                        stroke-width="0"
                        stroke="#000"
                        fill={secondaryColor}
                    />
                    <rect
                        stroke-width="0"
                        rx="6"
                        id="svg_10"
                        height="93"
                        width="92"
                        y="175"
                        x="695"
                        stroke="#000"
                        fill={primaryColor}
                    />
                    <rect
                        rx="6"
                        id="svg_11"
                        height="39"
                        width="79"
                        y="175"
                        x="601"
                        stroke-width="0"
                        stroke="#000"
                        fill={accentColor}
                    />
                    <rect
                        rx="6"
                        id="svg_12"
                        height="39"
                        width="79"
                        y="229"
                        x="601"
                        stroke-width="0"
                        stroke="#000"
                        fill={primaryColor}
                    />
                    <path
                        id="svg_13"
                        d="m602,291c0,-3.26027 2.73973,-6 6,-6l174,0c3.26027,0 6,2.73973 6,6l0,75c0,3.26027 -2.73973,6 -6,6l-174,0c-3.26027,0 -6,-2.73973 -6,-6l0,-75z"
                        opacity="undefined"
                        stroke-width="0"
                        stroke="#000"
                        fill={textColor}
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
                        class="icon icon-tabler icon-tabler-calendar-bolt"
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
                        <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5"></path>
                        <path d="M16 3v4"></path>
                        <path d="M8 3v4"></path>
                        <path d="M4 11h16"></path>
                        <path d="M19 16l-2 3h4l-2 3"></path>
                    </svg>
                    <p className="text" style={{ color: textColor }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
            </div>
            <div className="color-picker-container">
                <div className="background-container color-picker">
                    <input
                        type="color"
                        className="background"
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
                        {primaryColor}
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
                        {primaryColor}
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
            </div>
        </div>
    );
};

export default Customize;
