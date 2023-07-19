import React from "react";

const Hourly = (props) => {
    const { weather, hourly } = props;

    const options = {
        hour: "numeric",
        hour12: true,
    };

    const hourlyMap =
        weather.forecast &&
        hourly.map((item) => (
            <div className="hourly-container">
                <p className="hourly-text">
                    {new Date(item.time).toLocaleString("en-US", options)}
                </p>
                <img
                    src={item.condition.icon}
                    className="forecast-image"
                    alt="hourly weather icon"
                />
                <p className="hourly-text">{item.temp_f}°F</p>
            </div>
        ));

    return (
        <div
            className="weather-hourly-container"
            style={{
                justifyContent:
                    hourly.length > 9 ? "flex-start" : "space-evenly",
            }}
        >
            {hourlyMap}
        </div>
    );
};

export default Hourly;
