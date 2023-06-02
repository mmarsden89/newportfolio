import React, { useState } from "react";

const State = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [classArr, setClassArr] = useState(["", "", "", "", ""]);
    const [value, setValue] = useState(0);
    const [colorRange, setColorRange] = useState(false);
    const [zip, setZip] = useState("02144");
    const [day, setDay] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [msgBool, setMsgBool] = useState(true);
    const [toolbar, setToolbar] = useState(false);
    const [primary, setPrimary] = useState("Augillion");
    const [secondary, setSecondary] = useState("Sans serif");
    const [fontsBool, setFontsBool] = useState(false);

    const handleNextSlide = () => {
        if (currentSlide < 5) {
            let copy = classArr;
            copy[currentSlide] = "move-left";
            setValue(0);
            setClassArr(copy);
            setCurrentSlide(currentSlide + 1);
            setColorRange(false);
            if (currentSlide + 1 !== 2) {
                setDay(false);
            }
        }
    };

    const handlePreviousSlide = () => {
        console.log("current slide", currentSlide);
        if (currentSlide > 0) {
            let copy = classArr;
            copy[currentSlide - 1] = "";
            setValue(0);
            setClassArr(copy);
            setCurrentSlide(currentSlide - 1);
            setColorRange(false);

            if (currentSlide - 1 !== 2) {
                setDay(false);
            }
        }
    };

    const handleColorRange = () => {
        setColorRange(!colorRange);
        setValue(0);
    };

    const handleZipCode = (e) => {
        e.preventDefault();
        setZip(e.target.value);
    };

    const setTheme = () => {
        setDay(!day);
    };

    const renderMessage = (msg, good) => {
        setShowMessage(true);
        setDisplayMessage(msg);
        setMsgBool(good ? true : false);
        setTimeout(() => setShowMessage(false), 4000);
    };

    const displayToolbar = () => {
        const toolBool = !toolbar;
        setToolbar(toolBool);
        !toolBool && setFontsBool(false);
    };

    const displayFonts = () => {
        setFontsBool(!fontsBool);
    };

    let touchstartX = 0;
    let touchendX = 0;

    const checkDirection = () => {
        const totalGreater = Math.abs(touchstartX - touchendX) > 75;
        if (touchendX < touchstartX && totalGreater) handleNextSlide();
        if (touchendX > touchstartX && totalGreater) handlePreviousSlide();
    };

    const touchStart = (e) => {
        touchstartX = e.changedTouches[0].screenX;
    };

    const touchEnd = (e) => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    };

    const props = {
        currentSlide,
        setCurrentSlide,
        classArr,
        setClassArr,
        value,
        setValue,
        colorRange,
        setColorRange,
        zip,
        setZip,
        day,
        setDay,
        displayMessage,
        setDisplayMessage,
        showMessage,
        setShowMessage,
        msgBool,
        setMsgBool,
        toolbar,
        setToolbar,
        primary,
        setPrimary,
        secondary,
        setSecondary,
        fontsBool,
        setFontsBool,
        handleNextSlide,
        handleColorRange,
        handlePreviousSlide,
        handlePreviousSlide,
        handleZipCode,
        setTheme,
        renderMessage,
        displayFonts,
        displayToolbar,
        touchStart,
        touchEnd,
    };
    const withProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { props })
    );
    return <div className="App">{withProps}</div>;
};

export default State;
