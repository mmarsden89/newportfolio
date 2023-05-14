import React, { useState, useEffect } from "react";
import "./DragAndDrop.scss";
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
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const DragAndDrop = (props) => {
    const { className, zip, setTheme, day } = props;
    const [weather, setWeather] = useState({});
    const [hourly, setHourly] = useState([]);
    const [slides, setSlides] = useState([]);

    const getWeather = async () => {
        const getWeather = await axios(`${apiUrl}/weather?zip=${zip}`);
        if (getWeather.data.error) return;
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

    const weatherSlides = [
        {
            id: "current",
            name: "current weather",
            html: <Current weather={weather} />,
        },
        {
            id: "forecast",
            name: "forecast",
            html: <Forecast weather={weather} />,
        },
    ];
    useEffect(() => {
        getWeather();
        setSlides(weatherSlides);
    }, [zip, className, day]);

    function handleOnDragEnd(result, list) {
        console.log(list);
        if (!result.destination) return;

        const items = Array.from(slides);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setSlides(items);
    }

    return (
        <ContainerComponent
            weather={weather}
            className={className}
            theme={day ? " day" : " night"}
            slides={slides}
            setSlides={setSlides}
        >
            <Theme setTheme={setTheme} day={day} />
            <Hourly hourly={hourly} />
            <CardContainer>
                <Provider>
                    <DragDropContext
                        onDragEnd={(event) => handleOnDragEnd(event, slides)}
                    >
                        {slides.map(({ id, name, html }, index) => {
                            return (
                                <Draggable
                                    key={id}
                                    draggableId={id}
                                    index={index}
                                >
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {html}
                                        </li>
                                    )}
                                </Draggable>
                            );
                        })}
                    </DragDropContext>
                </Provider>
            </CardContainer>
            <CardContainer>
                <Wind />
                <Astro />
                <AirQuality />
            </CardContainer>
        </ContainerComponent>
    );
};

export default DragAndDrop;
