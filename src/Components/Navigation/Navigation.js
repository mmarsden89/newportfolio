import React, { useEffect, useState } from "react";
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
    const { handleColorRange, handleZipCode, day, renderMessage, randomize } =
        props;

    useEffect(() => {}, [currentSlide]);
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
        <div className={`navigation-container ${day ? " day" : " night"}`}>
            <div className="navigation-subcontainer">
                <div onClick={handleHome} className="nav-link">
                    <div className="nav">home</div>
                </div>
                <div className="resume nav-link">
                    <div className="nav">resume</div>
                </div>
                {!colorRangeBool && currentSlide < 2 && (
                    <div className="nav-link cw">
                        <img
                            src={colorwheelicon}
                            className="colorwheel"
                            onClick={handleColorRange}
                        />
                    </div>
                )}
                {colorRangeBool && (
                    <div className="popup nav-link">
                        <input
                            type="range"
                            min="0"
                            max={360}
                            onChange={(e) =>
                                dispatch(replaceColorValue(e.target.value))
                            }
                            // value={colorValue}
                            // onChange={handleChange}
                            value={colorValue}
                        />
                        <div onClick={handleColorRange}>x</div>
                    </div>
                )}
                {currentSlide == 2 && <div className="nav-link"></div>}
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
                    <div className="nav-link randomize" onClick={randomize}>
                        randomize
                    </div>
                )}

                {currentSlide === 5 && (
                    <div className="nav-link social-container">
                        <a href="https://github.com/mmarsden89" target="_blank">
                            <img src={githubicon} className="github-icon" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={linkedinicon} className="github-icon" />
                        </a>
                        <Instagram renderMessage={renderMessage} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;
