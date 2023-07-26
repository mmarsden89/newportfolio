import "./App.scss";
import React from "react";
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
} from "./Components/_index";
import {
    decrement,
    increment,
    replace,
    replaceColorValue,
    setColorRangeBool,
    setZipcode,
    setDay,
    setDisplayMessage,
    setMsgBool,
    setToolbar,
    setFontsBool,
    setColorBool,
    setShowMessage,
} from "./Redux/index";

function App() {
    const dispatch = useDispatch();
    const { currentSlide } = useSelector((state) => state.currentSlide);
    const { slideArray } = useSelector((state) => state.slideArray);
    const { colorValue } = useSelector((state) => state.colorValue);
    const { colorRangeBool } = useSelector((state) => state.colorRangeBool);
    const { day } = useSelector((state) => state.day);
    const { displayMessage } = useSelector((state) => state.displayMessage);
    const { showMessage } = useSelector((state) => state.showMessage);
    const { msgBool } = useSelector((state) => state.msgBool);
    const { toolbar } = useSelector((state) => state.toolbar);
    const { fontsBool } = useSelector((state) => state.fontsBool);
    const { colorBool } = useSelector((state) => state.colorBool);

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
        dispatch(setDay(!day));
    };

    const renderMessage = (msg, good) => {
        dispatch(setShowMessage(true));
        dispatch(setDisplayMessage(msg));
        dispatch(setMsgBool(good ? true : false));
        setTimeout(() => dispatch(setShowMessage(false)), 4000);
    };

    const displayToolbar = () => {
        const toolBool = !toolbar;
        dispatch(setToolbar(toolBool));
        !toolBool && dispatch(setFontsBool(false));
    };

    const displayFonts = () => {
        dispatch(setFontsBool(!fontsBool));
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

    const handleKeyDown = (e) => {
        if (e.key === "ArrowRight") {
            handleNextSlide();
        } else if (e.key === "ArrowLeft") {
            handlePreviousSlide();
        }
    };

    const handleClick = () => {
        dispatch(setColorBool(!colorBool));
    };

    return (
        <div
            className="App"
            onTouchStart={(e) => touchStart(e)}
            onTouchEnd={(e) => touchEnd(e)}
            onKeyDown={handleKeyDown}
            tabIndex="0"
        >
            <WorkForYou />
            <Weather
                className={slideArray[3]}
                setTheme={setTheme}
                renderMessage={renderMessage}
            />
            <Customize
                className={slideArray[2]}
                renderMessage={renderMessage}
                toolbar={toolbar}
                displayToolbar={displayToolbar}
                displayFonts={displayFonts}
            />
            <Designer className={slideArray[1]} style={colorValue} />
            <Welcome className={slideArray[0]} style={colorValue} />
            <Messaging
                handleNextSlide={handleNextSlide}
                handlePreviousSlide={handlePreviousSlide}
                renderMessage={renderMessage}
            />
            <Navigation
                handleColorRange={handleColorRange}
                handleZipCode={handleZipCode}
                renderMessage={renderMessage}
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
