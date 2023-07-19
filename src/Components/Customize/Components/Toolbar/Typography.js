import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fontList from "./FontList";
import { setPrimaryFont } from "../../../../Redux/primaryFontSlice";
import { setSecondaryFont } from "../../../../Redux/secondaryFontSlice";
import { setFontsBool } from "../../../../Redux/fontsBoolSlice";

const Typography = (props) => {
    const dispatch = useDispatch();
    const { displayFonts } = props;
    const { primaryFont } = useSelector((state) => state.primaryFont);
    const { secondaryFont } = useSelector((state) => state.secondaryFont);
    const { fontsBool } = useSelector((state) => state.fontsBool);

    const changePrimaryFont = (e) => {
        dispatch(setPrimaryFont(e.target.value));
    };
    const changeSecondaryFont = (e) => {
        dispatch(setSecondaryFont(e.target.value));
    };
    return (
        <div className="typography-container">
            <div className="typography tooltip" onClick={displayFonts}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-typography"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className={`font ${fontsBool ? "rotate-in" : "rotate-out"}`}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20l3 0"></path>
                    <path d="M14 20l7 0"></path>
                    <path d="M6.9 15l6.9 0"></path>
                    <path d="M10.2 6.3l5.8 13.7"></path>
                    <path d="M5 20l6 -16l2 0l7 16"></path>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-circle-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    onClick={() => dispatch(setFontsBool(false))}
                    className={`font-cancel ${
                        fontsBool ? "rotate-out" : "rotate-in"
                    }`}
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                </svg>
                {!fontsBool && <span className="span-text">Typography</span>}
            </div>
            <div
                className={`edit-typography ${
                    fontsBool ? "show-font" : "hide-font"
                }`}
            >
                <label for="primary">Primary</label>
                <select
                    onChange={changePrimaryFont}
                    value={primaryFont}
                    id="primary"
                >
                    {fontList.map((font) => (
                        <option value={font.value}>{font.name}</option>
                    ))}
                </select>
                <label for="secondary">Secondary</label>
                <select
                    onChange={changeSecondaryFont}
                    value={secondaryFont}
                    id="secondary"
                >
                    {fontList.map((font) => (
                        <option value={font.value}>{font.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Typography;
