import { createSlice } from "@reduxjs/toolkit";
import courses from "../utils/data";

const categorySlice = createSlice({
  name: "slider",
  initialState: {
    course: [],
    singleCourse: [],
    categories: [],
  },
  reducers: {
    getCategory(state, action) {
      state.categories = action.payload;
    },
    getCourses(state, action) {
      state.course = action.payload;
    },
    getSingleCourses(state, action) {
      state.singleCourse = action.payload;
    },
  },
});
export const { getCourses, getCategory, getSingleCourses } =
  categorySlice.actions;
export default categorySlice.reducer;

export const fetchCategories = () => {
  const categories = [...new Set(courses.map((item) => item.category))];
  return getCategory(categories);
};
export const fetchCourses = () => {
  return getCourses(courses);
};

export const fetchSingleCourse = (id) => {
  const singleCourse = courses.find((course) => course.id === id);
  return getSingleCourses(singleCourse);
};
