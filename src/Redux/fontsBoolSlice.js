import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fontsBool: false,
};

export const fontsBoolSlice = createSlice({
    name: "fontsBool",
    initialState,
    reducers: {
        setFontsBool: (state, action) => {
            state.fontsBool = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setFontsBool } = fontsBoolSlice.actions;

export default fontsBoolSlice.reducer;
