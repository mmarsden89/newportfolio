import "./AboutMe.scss";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const AboutMe = () => {
    const finalSpaceCharacters = [
        {
            id: "scifi",
            name: "Science Fiction",
            image: (
                <div className="science-fiction-image">
                    <div className="text-container">
                        <h1>Science Fiction</h1>
                    </div>
                </div>
            ),
            html: (
                <div>
                    <p>Science Fiction</p>
                </div>
            ),
        },
        {
            id: "cato",
            name: "Little Cato",
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
            html: (
                <div className="icon sass-icon">
                    <p>SCSS</p>
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
        <div className="aboutme-container">
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
                            {characters.map(
                                ({ id, name, html, image }, index) => {
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
                                                    {image}
                                                    {html}
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                }
                            )}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default AboutMe;
