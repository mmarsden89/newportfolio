import React from "react";

const CaretLeft = (props) => {
    const { handlePreviousSlide } = props;
    return (
        <div onClick={handlePreviousSlide} className="left">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-caret-left"
                width="75"
                height="75"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 6l-6 6l6 6v-12"></path>
            </svg>
        </div>
    );
};

export default CaretLeft;
