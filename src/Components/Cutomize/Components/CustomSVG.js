import React from "react";

const CustomSVG = (props) => {
    const { secondaryColor } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-device-desktop-code"
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
            <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8"></path>
            <path d="M7 20h4"></path>
            <path d="M9 16v4"></path>
            <path d="M20 21l2 -2l-2 -2"></path>
            <path d="M17 17l-2 2l2 2"></path>
        </svg>
    );
};

export default CustomSVG;
