import { configureStore } from "@reduxjs/toolkit";
import currentSlideSlice from "./currentSlideSlice";
import slideArraySlice from "./slideArraySlice";
import colorValueSlice from "./colorValueSlice";
import colorRangeBoolSlice from "./colorRangeBoolSlice";
import zipcodeSlice from "./zipcodeSlice";
import daySlice from "./daySlice";
import displayMessageSlice from "./displayMessageSlice";
import showMessageSlice from "./showMessageSlice";
import msgBoolSlice from "./msgBoolSlice";
import toolbarSlice from "./toolbarSlice";
import primaryFontSlice from "./primaryFontSlice";
import secondaryFontSlice from "./secondaryFontSlice";
import fontsBoolSlice from "./fontsBoolSlice";
import colorBoolSlice from "./colorBoolSlice";

export default configureStore({
    reducer: {
        currentSlide: currentSlideSlice,
        slideArray: slideArraySlice,
        colorValue: colorValueSlice,
        colorRangeBool: colorRangeBoolSlice,
        zipcode: zipcodeSlice,
        day: daySlice,
        displayMessage: displayMessageSlice,
        showMessage: showMessageSlice,
        msgBool: msgBoolSlice,
        toolbar: toolbarSlice,
        primaryFont: primaryFontSlice,
        secondaryFont: secondaryFontSlice,
        fontsBool: fontsBoolSlice,
        colorBool: colorBoolSlice,
    },
});
