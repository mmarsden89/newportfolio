import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function CardContainer({ weather, children }) {
    const withProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { weather })
    );
    return (
        <Droppable droppableId="characters" className="icon-container">
            {(provided) => (
                <ul
                    className="characters"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    lassName="icon-container"
                >
                    {withProps}
                </ul>
            )}
        </Droppable>
    );
}
export default CardContainer;
