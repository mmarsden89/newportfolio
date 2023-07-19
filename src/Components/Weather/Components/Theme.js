import React, { useEffect } from "react";
import { night, sun } from "../../../Assets/Images/_index";

const Theme = (props) => {
    const { day, setTheme } = props;

    useEffect(() => {}, [day]);
    return (
        <div className="theme-container">
            {day ? (
                <img src={night} onClick={setTheme} alt="night icon" />
            ) : (
                <img src={sun} onClick={setTheme} alt="day icon" />
            )}
        </div>
    );
};

export default Theme;
