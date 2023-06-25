import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    slideArray: ["", "", "", "", ""],
};

export const slideArraySlice = createSlice({
    name: "slideArray",
    initialState,
    reducers: {
        replace: (state, action) => {
            state.slideArray = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { replace } = slideArraySlice.actions;

export default slideArraySlice.reducer;
