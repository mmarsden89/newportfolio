import React from "react";

const FrontEndSVG = (props) => {
    const { secondaryColor } = props;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-devices-code"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke={secondaryColor}
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M13 15.5v-6.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4m0 6a1 1 0 0 1 -1 1"></path>
                <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h7"></path>
                <path d="M20 21l2 -2l-2 -2"></path>
                <path d="M17 17l-2 2l2 2"></path>
                <path d="M16 9h2"></path>
            </svg>
        </>
    );
};

export default FrontEndSVG;
