import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorRangeBool: false,
};

export const colorRangeBoolSlice = createSlice({
    name: "colorRangeBool",
    initialState,
    reducers: {
        setColorRangeBool: (state, action) => {
            state.colorRangeBool = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setColorRangeBool } = colorRangeBoolSlice.actions;

export default colorRangeBoolSlice.reducer;
