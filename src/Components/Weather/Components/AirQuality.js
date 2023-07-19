import React from "react";
import { airquality, co } from "../../../Assets/Images/_index";

const AirQuality = (props) => {
    const { weather } = props;
    const aqi = [
        "Good",
        "Moderate",
        "Unhealthy for Sensitive Group",
        "Unhealthy",
        "Very Unhealthy",
        "Hazardous",
    ];
    return (
        <div className="icon air-quality">
            <div className="air-quality-container">
                <div>
                    <img
                        src={airquality}
                        className="air-quality-img"
                        alt="air quality icon"
                    />
                    <p style={{ margin: 0 }}>
                        {weather.forecast &&
                            aqi[
                                weather.forecast.forecastday[0].day.air_quality[
                                    "us-epa-index"
                                ]
                            ]}
                    </p>
                </div>
                <div>
                    <img src={co} className="co-img" alt="co icon" />
                    <p style={{ margin: 0 }}>
                        {`${Math.round(
                            weather.forecast &&
                                weather.forecast.forecastday[0].day.air_quality
                                    .co
                        )} co`}
                    </p>
                </div>
            </div>
            <p>Air Quality</p>
        </div>
    );
};

export default AirQuality;
