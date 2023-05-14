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
} from "./Components/_index";

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [classArr, setClassArr] = useState(["", "", "", ""]);
    const [value, setValue] = useState(0);
    const [colorRange, setColorRange] = useState(false);
    const [zip, setZip] = useState("02144");
    const [showBalloons, setShowBalloons] = useState(false);
    const [day, setDay] = useState(false);

    useEffect(() => {}, [classArr, value, zip, day]);

    const handleNextSlide = () => {
        console.log("current slide", currentSlide);
        if (currentSlide < 4) {
            let copy = classArr;
            copy[currentSlide] = "move-left";
            setValue(0);
            setClassArr(copy);
            setCurrentSlide(currentSlide + 1);
            setColorRange(false);
            if (currentSlide + 1 !== 2) {
                console.log("current slide does not equal 2");
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
        console.log(e.target.value);
        setZip(e.target.value);
    };

    const releaseBallons = () => {
        setShowBalloons(true);
        const removeBalloons = () => {
            setShowBalloons(false);
        };
        setTimeout(removeBalloons, 60000);
    };

    const setTheme = () => {
        console.log("day", day);
        setDay(!day);
    };

    return (
        <div className="App">
            <WorkForYou />
            <Sunset className={classArr[3]} showBalloons={showBalloons} />
            <DragAndDrop
                className={classArr[2]}
                zip={zip}
                day={day}
                setTheme={setTheme}
            />
            <Designer className={classArr[1]} style={value} />
            <Welcome className={classArr[0]} style={value} />
            <Messaging
                currentSlide={currentSlide}
                handleNextSlide={handleNextSlide}
                handlePreviousSlide={handlePreviousSlide}
                day={day}
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
            />
        </div>
    );
}

export default App;
