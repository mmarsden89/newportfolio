import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSlide: 0,
};

export const currentSlideSlice = createSlice({
    name: "currentSlice",
    initialState,
    reducers: {
        increment: (state) => {
            state.currentSlide += 1;
        },
        decrement: (state) => {
            state.currentSlide -= 1;
        },
        incrementByAmount: (state, action) => {
            state.currentSlide += action.payload;
        },
        makeZero: (state) => {
            state.currentSlide = 0;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, makeZero } =
    currentSlideSlice.actions;

export default currentSlideSlice.reducer;
