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
  const [itemShow, setItemShow] = useState({});
  // handle events
  const handleClickItem = (item) => {
    setItemActived(item);
  };
  const handleClickShowMore = (id) => {
    if (itemShow?.isShow && itemShow.id !== id) {
      setItemShow({ id: id, isShow: false });
    } else {
      setItemShow({ id: id, isShow: true });
    }
  };
  return (
    <aside className="w-[240px] h-[100vh] flex-shrink-0 sidebar">
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
            className={`text-gray hover:text-primary-color capitalize group rounded-lg transition-all ${
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
              <span>Posts</span>
            </Link>
            <button
              onClick={() => handleClickShowMore(2)}
              className=" absolute right-3 top-1/2 -translate-y-1/2 text-xl"
            >
              <BiChevronDown />
            </button>
            {itemShow.isShow && itemShow.id === 2 && <>show more</>}
          </li>
          <li
            onClick={() => handleClickItem("order")}
            className={`relative text-gray hover:text-primary-color ${
              itemActived === "order" &&
              "text-primary-color bg-primary-color bg-opacity-10"
            } capitalize group rounded-lg transition-all`}
          >
            <Link
              to={"/order"}
              className={`flex items-center gap-x-3 px-3 py-2 group-hover:bg-opacity-10 w-full font-semibold `}
            >
              <HiSquares2X2 />
              <span>Orders</span>
            </Link>
            <button
              onClick={() => handleClickShowMore(3)}
              className=" absolute right-3 top-1/2 -translate-y-1/2 text-xl"
            >
              <BiChevronDown />
            </button>
            {itemShow.isShow && itemShow.id === 3 && <>show more</>}
          </li>
          <li
            onClick={() => handleClickItem("user")}
            className={`relative text-gray hover:text-primary-color ${
              itemActived === "user" &&
              "text-primary-color bg-primary-color bg-opacity-10"
            } capitalize group rounded-lg transition-all`}
          >
            <Link
              to={"/user"}
              className={`flex items-center gap-x-3 px-3 py-2 group-hover:bg-opacity-10 w-full font-semibold `}
            >
              <HiSquares2X2 />
              <span>Users</span>
            </Link>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xl hover:bg-border-color rounded-full"
              onClick={() => handleClickShowMore(4)}
            >
              <BiChevronDown />
            </button>
            {itemShow.isShow && itemShow.id === 4 && <>show more</>}
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
