import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    secondaryFont: "Sans-serif",
};

export const secondaryFontSlice = createSlice({
    name: "secondaryFont",
    initialState,
    reducers: {
        setSecondaryFont: (state, action) => {
            state.secondaryFont = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSecondaryFont } = secondaryFontSlice.actions;

export default secondaryFontSlice.reducer;
