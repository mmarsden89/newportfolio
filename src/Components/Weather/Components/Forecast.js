import React from "react";

const Forecast = (props) => {
    const { weather } = props;

    const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    const forecastMap =
        weather.forecast &&
        weather.forecast.forecastday.slice(0, 5).map((item) => (
            <div className="weather-day-container">
                <div>{days[new Date(item.date).getDay() + 1] || days[0]}</div>
                <img
                    src={item.day.condition.icon}
                    className="forecast-image"
                    alt="forecast icon"
                />
                <div>{Math.round(item.day.mintemp_f)}°F</div>
                <div className="min-max-container">
                    <div
                        className="min-max-box"
                        style={{
                            left: item.day.mintemp_f,
                            width: item.day.maxtemp_f - item.day.mintemp_f,
                        }}
                    >
                        <div
                            className="min-max"
                            style={{
                                transform: `translateX(-${item.day.mintemp_f}px)`,
                            }}
                        ></div>
                    </div>
                </div>
                <div>{Math.round(item.day.maxtemp_f)}°F</div>
            </div>
        ));

    return (
        <div className="icon forecast-map">
            {forecastMap}
            <p>5-day forecast</p>
        </div>
    );
};

export default Forecast;
