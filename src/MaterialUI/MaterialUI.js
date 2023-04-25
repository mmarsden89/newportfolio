import React from "react";
import "./MateriualUI.scss";
import horse from "../Assets/Images/horse1.png";
import sass from "../Assets/Images/sass.png";

const MaterialUI = (props) => {
    const { className } = props;

    return (
        <div className={`material-container ${className}`}>
            <div className="icon-container">
                <div className="icon">
                    <p className="javascript">JS</p>
                    <p>JavaScript</p>
                </div>
                <div className="icon">
                    <p className="typescript">TS</p>
                    <p>TypeScript</p>
                </div>
                <div className="icon sass-icon">
                    <div className="sass-container">
                        <img className="sass" src={sass} />
                    </div>
                    <p>SCSS</p>
                </div>
            </div>
            <div className="icon-container">
                <div className="icon"></div>
                <div className="blank-area"></div>
                <div className="icon"></div>
            </div>
            <div className="icon-container">
                <div className="icon">
                    <p className="x">|</p>
                    <p>Animation</p>
                </div>
                <div className="icon design-container">
                    <div className="design">
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <p>Design</p>
                </div>
                <div className="icon a-b-container">
                    <div className="a-b"></div>
                    <p>A/B Testing</p>
                </div>
            </div>
        </div>
    );
};

export default MaterialUI;
