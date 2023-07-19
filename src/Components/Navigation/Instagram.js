import React, { useState, useEffect } from "react";
import { instagram } from "../../Assets/Images/_index";

const Instagram = (props) => {
    const { renderMessage } = props;
    const [igLocation, setIgLocation] = useState([0, 0]);
    const [translate, setTranslate] = useState([0, 0]);
    const [clicked, setClicked] = useState(0);

    function getPosition(element) {
        var rect = element.getBoundingClientRect();
        setIgLocation([rect.left, rect.top]);
    }

    useEffect(() => {
        const insta = document.getElementById("ig");
        getPosition(insta);
    }, [translate]);

    const getRandom = (axis) => {
        let num = Math.floor(Math.random() * 25) + 10; // this will get a number between 1 and 99;
        num *= Math.round(Math.random()) ? 1 : -1;
        if (axis === "x") {
            return num + igLocation[0] <= window.innerWidth &&
                num + igLocation[0] >= 25
                ? num
                : getRandom("x");
        } else {
            return num + igLocation[1] <= window.innerHeight &&
                num + igLocation[1] >= 25
                ? num
                : getRandom("y");
        }
    };

    const handleCounter = () => {
        console.log("clicked!", clicked);
        setClicked(clicked + 1);
        if (clicked === 1) {
            setClicked(0);
            renderMessage("Let's stay friends on LinkedIn", true);
        }
    };

    const handleClick = () => {
        setTranslate([
            translate[0] + getRandom("x"),
            translate[1] + getRandom("y"),
        ]);
    };

    return (
        <div className="instagram-container">
            <img
                src={instagram}
                className="instagram"
                id="ig"
                style={{
                    transform: `translate(${translate[0]}px, ${translate[1]}px)`,
                }}
                onMouseOver={handleClick}
                onClick={handleCounter}
                onMouseEnter={handleClick}
                alt="instagram icon"
            />
        </div>
    );
};

export default Instagram;
