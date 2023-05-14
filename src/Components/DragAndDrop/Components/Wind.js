import React from "react";
import { wind } from "../../../Assets/Images/_index";

const Wind = (props) => {
    const { weather } = props;
    return (
        <div className="icon weather-container">
            <div
                className="wind-direction"
                style={{
                    transform: `rotate(${
                        weather.current && weather.current.wind_degree
                    }deg)`,
                }}
            >
                <img src={wind} />
            </div>
            <div>
                {weather.current &&
                    `${weather.current.wind_mph}mph ${weather.current.wind_dir}`}
            </div>
            <div>
                Gusts of {weather.current && weather.current.gust_mph}
                mph
            </div>
            <p>Wind</p>
        </div>
    );
};

export default Wind;
