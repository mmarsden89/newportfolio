import "./App.scss";
import React, { useState, useEffect } from "react";
import {
    Welcome,
    Designer,
    Sunset,
    WorkForYou,
    Messaging,
    Navigation,
    DragAndDrop,
    DisplayInfo,
    Customize,
} from "./Components/_index";
import Developer from "./Components/Developer/Developer";

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [classArr, setClassArr] = useState(["", "", "", "", ""]);
    const [value, setValue] = useState(0);
    const [colorRange, setColorRange] = useState(false);
    const [zip, setZip] = useState("02144");
    const [showBalloons, setShowBalloons] = useState(false);
    const [day, setDay] = useState(false);
    const [displayMessage, setDisplayMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [msgBool, setMsgBool] = useState(true);
    const [toolbar, setToolbar] = useState(false);

    useEffect(() => {}, [classArr, value, zip, day]);

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
                console.log("current slide does not equal 2");
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

    const releaseBallons = () => {
        setShowBalloons(true);
        const removeBalloons = () => {
            setShowBalloons(false);
        };
        renderMessage("Balloons launched", true);
        setTimeout(removeBalloons, 60000);
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
        setToolbar(!toolbar);
    };

    return (
        <div className="App">
            <WorkForYou />
            {/* <Sunset className={classArr[4]} showBalloons={showBalloons} /> */}
            <Developer className={classArr[4]} />
            <DragAndDrop
                className={classArr[3]}
                zip={zip}
                day={day}
                setTheme={setTheme}
                renderMessage={renderMessage}
                currentslide={currentSlide}
                setZip={setZip}
            />
            <Customize
                className={classArr[2]}
                renderMessage={renderMessage}
                toolbar={toolbar}
                displayToolbar={displayToolbar}
            />
            <Designer className={classArr[1]} style={value} />
            <Welcome className={classArr[0]} style={value} />
            <Messaging
                currentSlide={currentSlide}
                handleNextSlide={handleNextSlide}
                handlePreviousSlide={handlePreviousSlide}
                day={day}
                renderMessage={renderMessage}
            />
            <Navigation
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                setClassArr={setClassArr}
                setValue={setValue}
                value={value}
                handleColorRange={handleColorRange}
                colorRange={colorRange}
                handleZipCode={handleZipCode}
                releaseBallons={releaseBallons}
                day={day}
                showBalloons={showBalloons}
                renderMessage={renderMessage}
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
