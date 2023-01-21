import React from "react";

import { MdMenu, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { setSliderOpen } from "../../store/sliderSlice";

import { useSelector, useDispatch } from "react-redux";
import { NavbarWrapper } from "./NavbarStyled";
import { useCartContext } from "../../store/cart_context";
// import { useSidebarContext } from "../context/sidebar_context";

const Navbar = () => {
  const { total_items } = useCartContext();
  const dispatch = useDispatch();

  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
            <span>c</span>ourses
          </Link>

          <div className="navbar-btns flex">
            <Link to="/cart" className="cart-btn">
              <MdShoppingCart />
              <span className="item-count-badge">{total_items}</span>
            </Link>
            <button
              type="button"
              className="sidebar-open-btn"
              onClick={() => dispatch(setSliderOpen(true))}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
