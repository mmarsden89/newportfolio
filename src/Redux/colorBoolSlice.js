import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorBool: false,
};

export const colorBoolSlice = createSlice({
    name: "colorBool",
    initialState,
    reducers: {
        setColorBool: (state, action) => {
            state.colorBool = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setColorBool } = colorBoolSlice.actions;

export default colorBoolSlice.reducer;
