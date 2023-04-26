import React, { useState, useEffect } from "react";
import "./MateriualUI.scss";
import horse from "../Assets/Images/horse1.png";
import sass from "../Assets/Images/sass.png";
import axios from "axios";
import apiUrl from "../ApiConfig";

const MaterialUI = (props) => {
    const { className } = props;
    const [weather, setWeather] = useState({});

    const getWeather = async () => {
        const getWeather = await axios(apiUrl);
        setWeather(getWeather.data);
        console.log(getWeather);
    };

    useEffect(() => {
        getWeather();
    }, []);

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
                    <p>API Integration</p>
                </div>
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
