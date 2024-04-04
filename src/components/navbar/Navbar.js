import React, { memo } from "react";
import logo from "../../assets/images/logo.png";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to={"/"}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="search">
        <input placeholder="Search" type="text" />
        <button>
          <IoIosSearch />
        </button>
      </div>
      <div className="menu">
        <button>
          <RiMenu2Fill className="menuIcon" />
        </button>
        <h2>Menu</h2>
      </div>
      <div className="nav__icons">
        <FaRegHeart className="icon" />
        <IoCartOutline className="icon" />
        <NavLink to={`/admin`}>
          <RiAccountCircleFill className="icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default memo(Navbar);
