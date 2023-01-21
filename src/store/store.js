import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";

import sliderSlice from "./sliderSlice";

const store = configureStore({
  reducer: {
    slider: sliderSlice,
    courses: categorySlice,
  },
});

export default store;
