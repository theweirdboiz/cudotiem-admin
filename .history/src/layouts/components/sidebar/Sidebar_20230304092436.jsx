import React, { useState } from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";
import { Link } from "react-router-dom";

import { FaToggleOn } from "react-icons/fa";

import brand from "@assets/brand.png";

console.log(brand);

const Sidebar = (props) => {
  const [itemActived, setItemActived] = useState("dashboard");

  // handle events
  const handleClickItem = (item) => {
    setItemActived(item);
  };
  return (
    <aside className="w-[240px] flex-shrink-0">
      <div className="fixed h-full border-r border-r-border-color">
        <div className="flex justify-between items-center px-3 py-5">
          <div className="w-10 h-10">
            <img src={brand} alt="" />
          </div>
          <button className="text-primary-color text-xl">
            <FaToggleOn />
          </button>
        </div>
        <ul className="mt-2 px-3">
          {publicRoutes.map((route) => {
            return (
              <SidebarItem
                key={route.path}
                route={route}
                icon="icon"
                itemActived={itemActived}
                handleClickItem={handleClickItem}
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ icon, route, handleClickItem, itemActived }) => {
  return (
    <li
      onClick={() => handleClickItem(route.text)}
      className={`flex text-gray  hover:text-black capitalize group`}
    >
      <Link
        to={route.path}
        className={`flex gap-x-10 py-3 group-hover:bg-primary-color group-hover:bg-opacity-10 w-full ${
          itemActived === route.text &&
          "text-black bg-primary-color bg-opacity-10"
        }`}
      >
        {icon}
        <span>{route.text}</span>
      </Link>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
