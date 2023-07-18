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
import { useDispatch, useSelector } from "react-redux";
import { setZipcode } from "../../Redux/zipcodeSlice";

const Weather = (props) => {
    const dispatch = useDispatch();
    const { className, setTheme, renderMessage } = props;
    const { zipcode } = useSelector((state) => state.zipcode);
    const { day } = useSelector((state) => state.day);
    const [weather, setWeather] = useState(dummyData);
    const [hourly, setHourly] = useState(
        dummyData.forecast.forecastday[0].hour
    );

    const getWeather = async () => {
        const getWeather = await axios(`${apiUrl}/weather?zip=${zipcode}`);
        if (getWeather.data.error) {
            renderMessage("Invalid zipcode. Please try again", false);
            dispatch(setZipcode("02144"));
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

        setHourly(
            hourlyData.filter((item) => new Date(item.time) > new Date())
        );
    };

    useEffect(() => {
        getWeather();
    }, [zipcode]);

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
