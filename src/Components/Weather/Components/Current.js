import React from "react";

const Current = (props) => {
    const { weather } = props;
    return (
        <div className="icon weather-container">
            <div className="weather-subcontainer">
                <div>
                    <img
                        src={
                            (weather.current &&
                                weather.current.condition.icon) ||
                            null
                        }
                        alt="current condition"
                    />
                    <p>{weather.current && weather.current.condition.text}</p>
                </div>
                <div className="condition-container">
                    <p>{weather.location && weather.location.name}</p>
                    <p>{weather.current && weather.current.temp_f}°F</p>
                    <p>
                        {weather.current && weather.current.feelslike_f}
                        °F
                    </p>
                </div>
            </div>
            <p className="current-conditions-p">Current Conditions</p>
        </div>
    );
};

export default Current;
