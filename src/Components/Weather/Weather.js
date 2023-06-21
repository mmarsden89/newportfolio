import React, { useState, useEffect } from "react";
import "./Weather.scss";
import axios from "axios";
import apiUrl from "../../ApiConfig";
import {
    Hourly,
    Forecast,
    Current,
    Wind,
    Astro,
    AirQuality,
    CardContainer,
    ContainerComponent,
    Theme,
} from "./Components/_index.js";
import dummyData from "./DummyData";

const Weather = (props) => {
    const { className, zip, setTheme, day, renderMessage, setZip } = props;
    const [weather, setWeather] = useState(dummyData);
    const [hourly, setHourly] = useState(
        dummyData.forecast.forecastday[0].hour
    );

    const getWeather = async () => {
        const getWeather = await axios(`${apiUrl}/weather?zip=${zip}`);
        if (getWeather.data.error) {
            renderMessage("Invalid zipcode. Please try again", false);
            setZip("02144");
            return;
        }
        setWeather(getWeather.data);
        let hours = 24;
        let today = getWeather.data.forecast.forecastday[0].hour.filter(
            (item) => new Date(item.time) > new Date()
        );
        hours = hours - today.length;
        const tomorrow = getWeather.data.forecast.forecastday[1].hour.slice(
            0,
            hours
        );
        const hourlyData = today.concat(tomorrow);

        console.log(today, tomorrow, hourlyData);
        setHourly(
            hourlyData.filter((item) => new Date(item.time) > new Date())
        );

        console.log(getWeather);
    };

    useEffect(() => {
        getWeather();
    }, [zip]);

    return (
        <ContainerComponent
            weather={weather}
            className={className}
            theme={day ? " day" : " night"}
        >
            <Theme setTheme={setTheme} day={day} />
            <Hourly hourly={hourly} />
            <CardContainer position={"top"}>
                <Current />
                <Forecast />
            </CardContainer>
            <CardContainer position={"bottom"}>
                <Wind />
                <Astro />
                <AirQuality />
            </CardContainer>
        </ContainerComponent>
    );
};

export default Weather;