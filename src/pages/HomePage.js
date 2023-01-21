import React from "react";
import CoursesList from "../components/CoursesList/CoursesList";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <div className="holder">
      <Hero />
      <CoursesList />
      {/* <CategoriesList /> */}
    </div>
  );
};

export default HomePage;
