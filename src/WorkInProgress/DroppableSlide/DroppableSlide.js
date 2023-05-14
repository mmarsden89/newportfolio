import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./DroppableSlide.scss";
import axios from "axios";
import apiUrl from "../../ApiConfig";

const DroppableSlide = () => {
    const [weather, setWeather] = useState({});
    const getWeather = async () => {
        const getWeather = await axios(apiUrl);
        setWeather(getWeather.data);
        console.log(getWeather);
    };

    useEffect(() => {
        getWeather();
    }, []);
    const finalSpaceCharacters = [
        {
            id: "gary",
            name: "Gary Goodspeed",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon">
                    <p className="javascript">JS</p>
                    <p>JavaScript</p>
                </div>
            ),
        },
        {
            id: "cato",
            name: "Little Cato",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon">
                    <p className="typescript">TS</p>
                    <p>TypeScript</p>
                </div>
            ),
        },
        {
            id: "kvn",
            name: "KVN",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon sass-icon">
                    <div className="sass-container">
                        {/* <img className="sass" src={sass} /> */}
                    </div>
                    <p>SCSS</p>
                </div>
            ),
        },
    ];
    const characters2 = [
        {
            id: "mooncake",
            name: "Mooncake",
            thumb: "../Assets/Images/sass.png",
            html: (
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
            ),
        },
        {
            id: "quinn",
            name: "Quinn Ergon",
            thumb: "../Assets/Images/sass.png",
            html: (
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
            ),
        },
        {
            id: "garyh",
            name: "Gary Goodspeed",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon">
                    <p className="javascript">JS</p>
                    <p>JavaScript</p>
                </div>
            ),
        },
    ];
    const characters3 = [
        {
            id: "garyyyy",
            name: "Gary Goodspeed",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon">
                    <p className="javascript">JS</p>
                    <p>hello</p>
                </div>
            ),
        },
        {
            id: "garyyy",
            name: "Gary Goodspeed",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon">
                    <p className="javascript">JS</p>
                    <p>barbewue</p>
                </div>
            ),
        },
        {
            id: "garyy",
            name: "Gary Goodspeed",
            thumb: "../Assets/Images/sass.png",
            html: (
                <div className="icon">
                    <p className="javascript">JS</p>
                    <p>fight me</p>
                </div>
            ),
        },
    ];

    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    function handleOnDragEnd(result, list) {
        console.log(list);
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }

    return (
        <div className="droppable-container">
            <DragDropContext
                onDragEnd={(event) => handleOnDragEnd(event, characters)}
            >
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul
                            className="characters"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {characters.map(({ id, name, html }, index) => {
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
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters2">
                    {(provided) => (
                        <ul
                            className="characters"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {characters2.map(({ id, name, html }, index) => {
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
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters3">
                    {(provided) => (
                        <ul
                            className="characters3"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {characters3.map(({ id, name, html }, index) => {
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
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default DroppableSlide;
