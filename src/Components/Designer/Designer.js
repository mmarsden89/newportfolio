import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Designer.scss";

const Designer = (props) => {
    const { className, style } = props;
    const { colorBool } = useSelector((state) => state.colorBool);

    const rotate = (e) => {
        const div = e.target;

        if (div.classList.contains("rotate")) {
            div.classList.remove("rotate");
        } else {
            div.classList.add("rotate");
        }
    };

    return (
        <div
            className={`designer-container ${className} ${
                colorBool ? "bnw" : ""
            }`}
            style={{ filter: `hue-rotate(${style}deg)` }}
        >
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
            </div>
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
            <div>
                <div onMouseOver={rotate}></div>
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
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
            <div>
                <div></div>
                <div onMouseOver={rotate}></div>
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
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
                <div></div>
                <div onMouseOver={rotate}></div>
                <div></div>
            </div>
        </div>
    );
};

export default Designer;
