import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    zipcode: "02144",
};

export const zipcodeSlice = createSlice({
    name: "zipcode",
    initialState,
    reducers: {
        setZipcode: (state, action) => {
            state.zipcode = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setZipcode } = zipcodeSlice.actions;

export default zipcodeSlice.reducer;
