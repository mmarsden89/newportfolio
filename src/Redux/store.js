import { configureStore } from "@reduxjs/toolkit";
import currentSlideSlice from "./currentSlideSlice";
import slideArraySlice from "./slideArraySlice";
import colorValueSlice from "./colorValueSlice";
import colorRangeBoolSlice from "./colorRangeBoolSlice";
import zipcodeSlice from "./zipcodeSlice";

export default configureStore({
    reducer: {
        currentSlide: currentSlideSlice,
        slideArray: slideArraySlice,
        colorValue: colorValueSlice,
        colorRangeBool: colorRangeBoolSlice,
        zipcode: zipcodeSlice,
    },
});
