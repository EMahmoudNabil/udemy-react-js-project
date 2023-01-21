import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchCourses, getCourses } from "../../store/categorySlice";
import Tabs from "./Tabs";
// import Tabs from "./Tabs";

const CourseList = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.courses);
  console.log(course);
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>A broad selection of courses</h2>
          <p>
            Choose from 204,000 online video courses with new additions
            publihsed every month
          </p>
        </div>

        <Tabs courses={course} />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
