import React, { useState } from "react";
import "./Navigation.scss";
import {
    colorwheelicon,
    githubicon,
    linkedinicon,
} from "../../Assets/Images/_index";
import Instagram from "./Instagram";
import { useDispatch, useSelector } from "react-redux";
import { makeZero } from "../../Redux/currentSlideSlice";
import { replace } from "../../Redux/slideArraySlice";
import { replaceColorValue } from "../../Redux/colorValueSlice";
import { setZipcode } from "../../Redux/zipcodeSlice";

const Navigation = (props) => {
    const dispatch = useDispatch();
    const { colorValue } = useSelector((state) => state.colorValue);
    const { zipcode } = useSelector((state) => state.zipcode);
    const { colorRangeBool } = useSelector((state) => state.colorRangeBool);
    const [editZip, setEditZip] = useState(false);
    const [newZip, setNewZip] = useState("");
    const { colorBool } = useSelector((state) => state.colorBool);
    const { day } = useSelector((state) => state.day);
    const { handleColorRange, handleZipCode, renderMessage, handleClick } =
        props;

    const { currentSlide } = useSelector((state) => state.currentSlide);

    const handleHome = () => {
        dispatch(makeZero());
        dispatch(replace(["", "", "", "", ""]));
    };

    const handleChangeZip = () => {
        setEditZip(true);
    };

    const handleZip = (e) => {
        console.log(e.target.value);
        if (e.target.value.length < 6) {
            setNewZip(e.target.value);
            dispatch(setZipcode(e.target.value));
        }
    };

    const submitZip = (e) => {
        setEditZip(false);
        handleZipCode(e);
        setNewZip("");
    };

    const handleCancel = () => {
        setEditZip(false);
        setNewZip("");
    };

    return (
        <div
            className={`navigation-container ${day ? " day" : " night"} ${
                colorBool && currentSlide === 1 ? "bnw" : ""
            }`}
        >
            <div className="navigation-subcontainer">
                <div onClick={handleHome} className="nav-link">
                    <div className="nav">home</div>
                </div>
                <div className="resume nav-link">
                    <div className="nav">resume</div>
                </div>
                {!colorRangeBool && currentSlide === 0 && (
                    <div className="nav-link cw">
                        <img
                            src={colorwheelicon}
                            className="colorwheel"
                            onClick={handleColorRange}
                            alt="colorwheel icon"
                        />
                    </div>
                )}
                {colorRangeBool && currentSlide === 0 && (
                    <div className="popup nav-link">
                        <input
                            type="range"
                            min="0"
                            max={360}
                            onChange={(e) =>
                                dispatch(replaceColorValue(e.target.value))
                            }
                            value={colorValue}
                        />
                        <div onClick={handleColorRange}>x</div>
                    </div>
                )}
                {currentSlide === 1 && (
                    <div className="nav-link" onClick={handleClick}>
                        {colorBool ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-paint-filled"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path
                                    d="M17 2a3 3 0 0 1 2.995 2.824l.005 .176a3 3 0 0 1 3 3a6 6 0 0 1 -5.775 5.996l-.225 .004h-4l.15 .005a2 2 0 0 1 1.844 1.838l.006 .157v4a2 2 0 0 1 -1.85 1.995l-.15 .005h-2a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-4a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a1 1 0 0 1 .883 -.993l.117 -.007h5a4 4 0 0 0 4 -4a1 1 0 0 0 -.883 -.993l-.117 -.007l-.005 .176a3 3 0 0 1 -2.819 2.819l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h10z"
                                    stroke-width="0"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-paint-off"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M7 3h10a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4m-4 0h-2a2 2 0 0 1 -2 -2v-2"></path>
                                <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5m-4 0h-1v2"></path>
                                <path d="M10 15m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                                <path d="M3 3l18 18"></path>
                            </svg>
                        )}
                    </div>
                )}
                {currentSlide === 2 && <div className="nav-link"></div>}
                {currentSlide === 3 && !editZip && (
                    <div className="nav-link change-zip">
                        <div onClick={handleChangeZip} className="nav">
                            change zip
                        </div>
                    </div>
                )}
                {currentSlide === 3 && editZip && (
                    <div className="nav-link zip">
                        <form>
                            <input
                                className="edit-zip"
                                type="number"
                                onChange={handleZip}
                                placeholder="zipcode"
                                maxLength="6"
                                value={newZip}
                                autoFocus
                            />
                            <button onClick={submitZip} value={zipcode}>
                                ✓
                            </button>
                            <button onClick={handleCancel}>✕</button>
                        </form>
                    </div>
                )}

                {currentSlide === 4 && (
                    <div className="nav-link social-container">
                        <a
                            href="https://github.com/mmarsden89"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubicon}
                                className="github-icon"
                                alt="github icon"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/matthewjmarsden"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedinicon}
                                className="github-icon"
                                alt="github icon"
                            />
                        </a>
                        <Instagram renderMessage={renderMessage} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
