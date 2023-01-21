import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    isSidebarOpen: false,
  },
  reducers: {
    setSliderOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSliderOpen } = sliderSlice.actions;
export default sliderSlice.reducer;
