import React from "react";

const Astro = (props) => {
    const { weather } = props;
    const astro = weather.forecast && weather.forecast.forecastday[0].astro;

    const getHours = () => {
        const morning =
            astro &&
            new Date(
                new Date()
                    .toISOString()
                    .replace("-", "/")
                    .split("T")[0]
                    .replace("-", "/") +
                    " " +
                    astro.sunrise
            );

        const evening =
            astro &&
            new Date(
                new Date()
                    .toISOString()
                    .replace("-", "/")
                    .split("T")[0]
                    .replace("-", "/") +
                    " " +
                    astro.sunset
            );
        return (new Date(Math.abs(evening - morning)) / 36e5).toFixed(2);
    };

    return (
        <div className="icon astro">
            <div className="astro-container">
                <div className="sunrise">
                    <img
                        src="http://cdn.weatherapi.com/weather/64x64/day/113.png"
                        alt="day icon"
                    />
                    {astro && astro.sunrise}
                </div>
                <div className="hours-of-daylight">
                    {getHours()} hours <pre>••••••••••••••</pre>
                </div>
                <div className="sunset">
                    <img
                        src="http://cdn.weatherapi.com/weather/64x64/night/113.png"
                        alt="night icon"
                    />
                    {astro && astro.sunset}
                </div>
            </div>
            <p>Daylight Hours</p>
        </div>
    );
};

export default Astro;
