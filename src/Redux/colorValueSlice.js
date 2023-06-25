import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorValue: 0,
};

export const colorValueSlice = createSlice({
    name: "colorValue",
    initialState,
    reducers: {
        replaceColorValue: (state, action) => {
            state.colorValue = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { replaceColorValue } = colorValueSlice.actions;

export default colorValueSlice.reducer;
