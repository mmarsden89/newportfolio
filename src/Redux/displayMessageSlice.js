import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayMessage: "",
};

export const displayMessageSlice = createSlice({
    name: "displayMessage",
    initialState,
    reducers: {
        setDisplayMessage: (state, action) => {
            state.displayMessage = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setDisplayMessage } = displayMessageSlice.actions;

export default displayMessageSlice.reducer;
