import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showMessage: false,
};

export const showMessageSlice = createSlice({
    name: "showMessage",
    initialState,
    reducers: {
        setShowMessage: (state, action) => {
            state.showMessage = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setShowMessage } = showMessageSlice.actions;

export default showMessageSlice.reducer;
