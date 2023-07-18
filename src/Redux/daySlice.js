import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    day: false,
};

export const daySlice = createSlice({
    name: "day",
    initialState,
    reducers: {
        setDay: (state, action) => {
            state.day = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDay } = daySlice.actions;

export default daySlice.reducer;
