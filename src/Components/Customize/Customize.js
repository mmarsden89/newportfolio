import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    ABSVG,
    Card,
    CustomSVG,
    FrontEndSVG,
    ToolBar,
    Hero,
} from "./Components/_index";
import "./Customize.scss";
import colors from "./colors";
import { setPrimaryFont } from "../../Redux/primaryFontSlice";
import { setSecondaryFont } from "../../Redux/secondaryFontSlice";

const Customize = (props) => {
    const dispatch = useDispatch();
    const { renderMessage, className, toolbar, displayToolbar, displayFonts } =
        props;
    const [backgroundColor, setBackgroundColor] = useState("#0e0c0e");
    const [primaryColor, setPrimaryColor] = useState("#211c21");
    const [secondaryColor, setSecondaryColor] = useState("#f3bd05");
    const [accentColor, setAccentColor] = useState("#707070");
    const [textColor, setTextColor] = useState("#e6dc75");

    const handleChange = (e) => {
        setBackgroundColor(e.target.value);
    };

    const handlePrimaryChange = (e) => {
        setPrimaryColor(e.target.value);
    };

    const handleSecondaryChange = (e) => {
        setSecondaryColor(e.target.value);
    };
    const handleAccentChange = (e) => {
        setAccentColor(e.target.value);
    };

    const handleTextChange = (e) => {
        setTextColor(e.target.value);
    };

    const handleLabelClick = (e) => {
        e.target.parentElement.children[0].click();
    };

    const randomize = () => {
        const colorIdx = Math.round(Math.random() * (colors.length - 1));
        setBackgroundColor(colors[colorIdx][0]);
        setPrimaryColor(colors[colorIdx][1]);
        setSecondaryColor(colors[colorIdx][2]);
        setAccentColor(colors[colorIdx][3]);
        setTextColor(colors[colorIdx][4]);
    };

    const copyColors = () => {
        navigator.clipboard.writeText(
            `background: ${backgroundColor}\nprimary: ${primaryColor}\nsecondary: ${secondaryColor}\naccent: ${accentColor}\ntext: ${textColor}`
        );

        renderMessage("Colors copied to clipboard", true);
    };

    const returnDefaults = () => {
        setBackgroundColor("#0e0c0e");
        setPrimaryColor("#211c21");
        setSecondaryColor("#f3bd05");
        setAccentColor("#707070");
        setTextColor("#e6dc75");
        dispatch(setPrimaryFont("Augillion"));
        dispatch(setSecondaryFont("Sans serif"));
    };

    const toolBarProps = {
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
        displayFonts,
    };

    return (
        <div
            style={{ backgroundColor: backgroundColor }}
            className={`customize-container ${className}`}
        >
            <div className="customize-top">
                <Hero
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                    accentColor={accentColor}
                    textColor={textColor}
                />
            </div>
            <div className="customize-bottom">
                <Card
                    primaryColor={primaryColor}
                    accentColor={accentColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                    heading="Front End Development"
                    body="Three years of experience developing full-stack applications with a focus on the front-end"
                    svg={<FrontEndSVG secondaryColor={secondaryColor} />}
                />
                <Card
                    primaryColor={primaryColor}
                    accentColor={accentColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                    heading="Custom Code Solutions"
                    body="Scalable custom coding solutions for a variety of
                    Content Management Systems"
                    svg={<CustomSVG secondaryColor={secondaryColor} />}
                />
                <Card
                    primaryColor={primaryColor}
                    accentColor={accentColor}
                    secondaryColor={secondaryColor}
                    textColor={textColor}
                    heading="A/B Testing"
                    body="Hundreds of successful A/B experiments run on household
                name's products"
                    svg={<ABSVG secondaryColor={secondaryColor} />}
                />
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
            <ToolBar {...toolBarProps} />
        </div>
    );
};

export default Customize;
