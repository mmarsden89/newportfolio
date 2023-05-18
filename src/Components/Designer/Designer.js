import React from "react";
import "./Designer.scss";

const Designer = (props) => {
    const { className, style } = props;

    const rotate = (e) => {
        const div = e.target;

        if (div.classList.contains("rotate")) {
            //     div.style.transform = "rotate(0deg)";
            //     div.classList.remove("rotate");
            div.classList.remove("rotate");
        } else {
            div.classList.add("rotate");
            //     div.classList.add("rotate");
            //     div.style.transition = "1s";
            //     div.style.transform = " rotate(90deg)";
        }
    };
    return (
        <div
            className={`designer-container ${className}`}
            style={{ filter: `hue-rotate(${style}deg)` }}
        >
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
        </div>
    );
};

export default Designer;
