import React from "react";

const Randomize = (props) => {
    const { randomize } = props;
    return (
        <div className="dice-roll tooltip" onClick={randomize}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-dice"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <circle cx="8.5" cy="8.5" r=".5" fill="currentColor"></circle>
                <circle cx="15.5" cy="8.5" r=".5" fill="currentColor"></circle>
                <circle cx="15.5" cy="15.5" r=".5" fill="currentColor"></circle>
                <circle cx="8.5" cy="15.5" r=".5" fill="currentColor"></circle>
            </svg>
            <span className="span-text">Randomize</span>
        </div>
    );
};

export default Randomize;
