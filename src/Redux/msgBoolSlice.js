import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    msgBool: false,
};

export const msgBoolSlice = createSlice({
    name: "msgBool",
    initialState,
    reducers: {
        setMsgBool: (state, action) => {
            state.msgBool = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setMsgBool } = msgBoolSlice.actions;

export default msgBoolSlice.reducer;
