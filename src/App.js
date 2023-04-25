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

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [classArr, setClassArr] = useState(["", "", "", ""]);

    useEffect(() => {}, [classArr]);

    const handleNextSlide = () => {
        console.log("currentslide -->", currentSlide);
        if (currentSlide < 4) {
            console.log("hello", currentSlide);
            let copy = classArr;
            copy[currentSlide] = "move-left";
            setClassArr(copy);
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handlePreviousSlide = () => {
        if (currentSlide > 0) {
            console.log("hello", currentSlide);
            let copy = classArr;
            copy[currentSlide - 1] = "";
            setClassArr(copy);
            setCurrentSlide(currentSlide - 1);
        }
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
            <MaterialUI className={classArr[2]} />
            <Designer className={classArr[1]} />
            <Welcome className={classArr[0]} />
            <Messaging
                currentSlide={currentSlide}
                handleNextSlide={handleNextSlide}
                handlePreviousSlide={handlePreviousSlide}
            />
            {/* {slideArr[slideIdx]} */}
            {/* <Sunset /> */}
            {/* <MaterialUI /> */}
            <div className="message-container"></div>
        </div>
    );
}

export default App;
