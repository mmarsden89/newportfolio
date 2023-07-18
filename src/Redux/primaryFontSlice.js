import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    primaryFont: "Augillion",
};

export const primaryFontSlice = createSlice({
    name: "primaryFont",
    initialState,
    reducers: {
        setPrimaryFont: (state, action) => {
            state.primaryFont = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setPrimaryFont } = primaryFontSlice.actions;

export default primaryFontSlice.reducer;
