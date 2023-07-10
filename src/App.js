import "./App.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Welcome,
    Designer,
    WorkForYou,
    Messaging,
    Navigation,
    Weather,
    DisplayInfo,
    Customize,
    Animation,
} from "./Components/_index";
import Developer from "./Components/Developer/Developer";
import {
    exploremars,
    mountainview,
    designbox,
    rainbow,
    moderndesign,
    donuts,
    designconcept,
    moderndesign3,
    headphones,
    poster,
} from "./Assets/Images/_index";
import { decrement, increment } from "./Redux/currentSlideSlice";
import { replace } from "./Redux/slideArraySlice";
import { replaceColorValue } from "./Redux/colorValueSlice";
import { setColorRangeBool } from "./Redux/colorRangeBoolSlice";
import { setZipcode } from "./Redux/zipcodeSlice";

function App() {
    const dispatch = useDispatch();
    const { currentSlide } = useSelector((state) => state.currentSlide);
    const { slideArray } = useSelector((state) => state.slideArray);
    const { colorValue } = useSelector((state) => state.colorValue);
    const { colorRangeBool } = useSelector((state) => state.colorRangeBool);
    // const { zipcode } = useSelector((state) => state.zipcode);

    // const [zip, setZip] = useState("02144");
    const [day, setDay] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [msgBool, setMsgBool] = useState(true);
    const [toolbar, setToolbar] = useState(false);
    const [primary, setPrimary] = useState("Augillion");
    const [secondary, setSecondary] = useState("Sans serif");
    const [fontsBool, setFontsBool] = useState(false);
    const [color, setColor] = useState(false);

    const handleNextSlide = () => {
        if (currentSlide < 4) {
            let copy = [...slideArray];
            copy[currentSlide] = "move-left";
            dispatch(replace(copy));
            dispatch(increment());
            if (currentSlide >= 1) {
                dispatch(setColorRangeBool(false));
            }
        }
    };

    const handlePreviousSlide = () => {
        if (currentSlide > 0) {
            let copy = [...slideArray];
            copy[currentSlide - 1] = "";
            dispatch(replace(copy));
            dispatch(decrement());
            // dispatch(setColorRangeBool(false));
        }
    };

    const handleColorRange = () => {
        dispatch(setColorRangeBool(!colorRangeBool));
        dispatch(replaceColorValue(0));
    };

    const handleZipCode = (e) => {
        console.log("handlezipcode", e.target.value);
        e.preventDefault();
        setZipcode(e.target.value);
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
        console.dir(e);
        touchstartX = e.changedTouches[0].screenX;
    };

    const touchEnd = (e) => {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            handleNextSlide();
        } else if (e.key === "ArrowLeft") {
            handlePreviousSlide();
        }
    };

    const handleClick = () => {
        setColor(!color);
    };

    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            console.log("do something");
        }
    };

    return (
        <div
            className="App"
            onTouchStart={(e) => touchStart(e)}
            onTouchEnd={(e) => touchEnd(e)}
            onKeyDown={handleKeyDown}
            tabIndex="0"
        >
            {/* <Animation /> */}
            <WorkForYou />
            <Weather
                className={slideArray[3]}
                day={day}
                setTheme={setTheme}
                renderMessage={renderMessage}
            />
            <Customize
                className={slideArray[2]}
                renderMessage={renderMessage}
                toolbar={toolbar}
                displayToolbar={displayToolbar}
                setPrimary={setPrimary}
                setSecondary={setSecondary}
                primary={primary}
                secondary={secondary}
                fontsBool={fontsBool}
                displayFonts={displayFonts}
                setFontsBool={setFontsBool}
            />
            <Designer
                className={slideArray[1]}
                style={colorValue}
                color={color}
            />
            <Welcome className={slideArray[0]} style={colorValue} />
            <Messaging
                handleNextSlide={handleNextSlide}
                handlePreviousSlide={handlePreviousSlide}
                day={day}
                renderMessage={renderMessage}
                primary={primary}
                secondary={secondary}
                color={color}
            />
            <Navigation
                handleColorRange={handleColorRange}
                handleZipCode={handleZipCode}
                day={day}
                renderMessage={renderMessage}
                color={color}
                handleClick={handleClick}
            />
            <DisplayInfo
                displayMessage={displayMessage}
                msgBool={msgBool}
                showMessage={showMessage}
            />
        </div>
    );
}

export default App;
