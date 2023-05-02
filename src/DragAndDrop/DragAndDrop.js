import React, { useState, useEffect } from "react";
import "./DragAndDrop.scss";
import sass from "../Assets/Images/sass.png";
import axios from "axios";
import apiUrl from "../ApiConfig";

const DragAndDrop = (props) => {
    const { className } = props;
    const [weather, setWeather] = useState({});
    const [hourly, setHourly] = useState([]);

    const getWeather = async () => {
        const getWeather = await axios(`${apiUrl}/weather`);
        setWeather(getWeather.data);
        console.log("hello", getWeather.data);
        setHourly(
            getWeather.data.forecast.forecastday[0].hour.filter(
                (item) => new Date(item.time) > new Date()
            )
        );
        console.log(getWeather.data);
    };

    useEffect(() => {
        getWeather();
    }, []);

    const forecastMap =
        weather.forecast &&
        weather.forecast.forecastday.slice(0, 5).map((item) => (
            <div className="weather-day-container">
                {/* <div>{item}</div> */}
                <img src={item.day.condition.icon} className="forecast-image" />
                <div>{Math.round(item.day.maxtemp_f)}°F</div>
                <div>{Math.round(item.day.mintemp_f)}°F</div>
            </div>
        ));

    var options = {
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
                <img src={item.condition.icon} className="forecast-image" />
                <p className="hourly-text">{item.temp_f}°F</p>
            </div>
        ));

    return (
        <div className={`dragdrop-container ${className}`}>
            <div
                className="weather-hourly-container"
                style={{ justifyContent: hourly < 9 ? "flex-start" : "center" }}
            >
                {hourlyMap}
            </div>
            <div className="icon-container">
                <div className="icon weather-container">
                    <div className="weather-subcontainer">
                        <div>
                            <img
                                src={
                                    (weather.current &&
                                        weather.current.condition.icon) ||
                                    null
                                }
                            />
                            <p>
                                {weather.current &&
                                    weather.current.condition.text}
                            </p>
                        </div>
                        <div className="condition-container">
                            <p>
                                {weather.location && weather.location.name}, MA
                            </p>
                            <p>{weather.current && weather.current.temp_f}°F</p>
                            <p>
                                {weather.current && weather.current.feelslike_f}
                                °F
                            </p>
                        </div>
                    </div>
                    <p>current</p>
                </div>
                <div className="icon">
                    {forecastMap}
                    <p>5-day forecast</p>
                </div>
            </div>
            <div className="icon-container">
                <div className="icon weather-container">
                    <div
                        className="wind-direction"
                        style={{
                            transform: `rotate(${
                                weather.current && weather.current.wind_degree
                            }deg)`,
                        }}
                    >
                        <p>&uarr;</p>
                    </div>
                    <div>
                        {weather.current &&
                            `${weather.current.wind_mph}mph ${weather.current.wind_dir}`}
                    </div>
                    <p>wind</p>
                </div>
                <div className="icon">
                    {forecastMap}
                    <p>5-day forecast</p>
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
