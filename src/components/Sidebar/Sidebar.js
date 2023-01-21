import React, { useEffect } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

import { setSliderOpen } from "../../store/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, getCategory } from "../../store/categorySlice";
import { SidebarWrapper } from "./SlidbarStyled";

// import { useCoursesContext } from '../context/courses_context';

const Sidebar = () => {
  //   const {categories} = useCoursesContext();
  //   const {closeSidebar, isSidebarOpen} = useSidebarContext();
  const { isSidebarOpen } = useSelector((state) => state.slider);
  const { categories } = useSelector((state) => state.courses);
  //   const { category } = course.category;

  console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <SidebarWrapper
      className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}
    >
      <button
        type="button"
        className="sidebar-close-btn"
        onClick={() => dispatch(setSliderOpen(false))}
      >
        <MdClose />
      </button>
      <div className="sidebar-content">
        <h6 className="fs-18">Top Categories</h6>
        <ul className="sidebar-category">
          {categories.length >= 1 ? (
            categories.map((item, idx) => {
              return (
                <li className="sidebar-link-item fw-5" key={idx}>
                  <Link to={`category/${item}`}>{item.toUpperCase()}</Link>
                </li>
              );
            })
          ) : (
            <div>there is no data</div>
          )}
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
