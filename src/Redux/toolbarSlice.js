import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toolbar: false,
};

export const toolbarSlice = createSlice({
    name: "toolbar",
    initialState,
    reducers: {
        setToolbar: (state, action) => {
            state.toolbar = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setToolbar } = toolbarSlice.actions;

export default toolbarSlice.reducer;
