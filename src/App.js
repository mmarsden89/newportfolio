import "./App.scss";
import React, { useState, useEffect } from "react";
import Triangle from "./Triangles/Triangles.js";
import Aframe from "./A-frame/AFrame.js";
import Welcome from "./Welcome/Welcome.js";
import Designer from "./Designer/Designer.js";
import WereAllTheSame from "./WereAllTheSame/WereAllTheSame.js";
import MaterialUI from "./MaterialUI/MaterialUI";
import Sunset from "./Sunset/Sunset";
import WorkForYou from "./WorkForYou/WorkForYou";
import Messaging from "./Messaging/Messaging";
import Navigation from "./Navigation/Navigation";
import DroppableSlide from "./DroppableSlide/DroppableSlide";
import DragAndDrop from "./DragAndDrop/DragAndDrop";

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [classArr, setClassArr] = useState(["", "", "", ""]);
    const [value, setValue] = useState(0);
    const [colorRange, setColorRange] = useState(false);

    useEffect(() => {
        console.log("value-->", value);
    }, [classArr, value]);

    const handleNextSlide = () => {
        if (currentSlide < 4) {
            let copy = classArr;
            copy[currentSlide] = "move-left";
            setValue(0);
            setClassArr(copy);
            setCurrentSlide(currentSlide + 1);
            setColorRange(false);
        }
    };

    const handlePreviousSlide = () => {
        if (currentSlide > 0) {
            let copy = classArr;
            copy[currentSlide - 1] = "";
            setValue(0);
            setClassArr(copy);
            setCurrentSlide(currentSlide - 1);
            setColorRange(false);
        }
    };

    const handleColorRange = () => {
        setColorRange(!colorRange);
        setValue(0);
    };

    return (
        <div className="App">
            {/* <div className="overlay"> */}
            {/* <Triangle /> */}
            {/* <Aframe /> */}
            {/* </div> */}
            {/* <WereAllTheSame /> */}
            <WorkForYou />
            <Sunset className={classArr[3]} />
            {/* <MaterialUI className={classArr[2]} /> */}
            <DragAndDrop className={classArr[2]} />
            <Designer className={classArr[1]} style={value} />
            <Welcome className={classArr[0]} style={value} />
            {/* <DroppableSlide className={classArr[0]} style={value} /> */}
            <Messaging
                currentSlide={currentSlide}
                handleNextSlide={handleNextSlide}
                handlePreviousSlide={handlePreviousSlide}
            />
            {/* {slideArr[slideIdx]} */}
            {/* <Sunset /> */}
            {/* <MaterialUI /> */}
            {/* <div className="message-container"></div> */}
            <Navigation
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                setClassArr={setClassArr}
                setValue={setValue}
                value={value}
                handleColorRange={handleColorRange}
                colorRange={colorRange}
            />
        </div>
    );
}

export default App;
