import React, { useState } from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";
import { Link } from "react-router-dom";

import { FaToggleOn } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";

import brand from "@assets/brand.png";

const Sidebar = (props) => {
  const [itemActived, setItemActived] = useState("dashboard");

  // handle events
  const handleClickItem = (item) => {
    setItemActived(item);
  };
  return (
    <aside className="w-[240px] h-[100vh] flex-shrink-0">
      <div className="border-r h-full border-r-border-color">
        <div className="flex justify-between items-center px-3 py-5">
          <div className="w-10 h-10">
            <img src={brand} alt="" />
          </div>
          <button className="text-primary-color text-xl">
            <FaToggleOn />
          </button>
        </div>
        <ul className="mt-2 px-3">
          <li
            onClick={() => handleClickItem("dashboard")}
            className={`text-gray hover:text-primary-color capitalize group rounded-lg ${
              itemActived === "dashboard" &&
              "text-primary-color bg-primary-color bg-opacity-10"
            }`}
          >
            <Link
              to={"/"}
              className={`flex items-center gap-x-3 px-3 py-2  group-hover:bg-opacity-10 w-full font-semibold `}
            >
              <HiSquares2X2 />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            onClick={() => handleClickItem("post")}
            className={`relative text-gray hover:text-primary-color ${
              itemActived === "post" &&
              "text-primary-color bg-primary-color bg-opacity-10"
            } capitalize group rounded-lg transition-all`}
          >
            <Link
              to={"/post"}
              className={`flex items-center gap-x-3 px-3 py-2 group-hover:bg-opacity-10 w-full font-semibold `}
            >
              <HiSquares2X2 />
              <span>Post</span>
            </Link>
            <button className=" absolute right-3 top-1/2 -translate-y-1/2 text-xl">
              <BiChevronDown />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ handleClickItem, itemActived, children, path }) => {
  return (
    <li
      onClick={() => handleClickItem(route.text)}
      className={`flex text-black hover:text-primary-color capitalize group`}
    >
      <Link
        to={path}
        className={`flex gap-x-3 px-3 py-2 group-hover:bg-primary-color group-hover:bg-opacity-10 rounded-lg w-full font-semibold ${
          itemActived === route.text &&
          "text-primary-color bg-primary-color bg-opacity-10"
        }`}
      >
        {children}
        <span>{route.text}</span>
      </Link>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
