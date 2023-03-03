import React, { useState } from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";

const Sidebar = (props) => {
  const [itemActived, setItemActived] = useState("order");

  // handle events
  const handleClickItem = (item) => {
    setItemActived(item);
  };
  return (
    <aside className="w-[240px]">
      <div className="fixed h-full border-r border-r-border-color top-[64px]">
        <ul className="mt-2 py-2">
          {publicRoutes.map((route) => {
            return (
              <SidebarItem
                key={route.path}
                route={route}
                icon="icon"
                handleClickItem={handleClickItem}
              />
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ icon, route, handleClickItem }) => {
  return (
    <li
      onClick={() => handleClickItem(route.text)}
      className="flex text-gray hover:text-black capitalize group"
    >
      <a
        href={route.path}
        className="flex gap-x-10 px-10 py-3 group-hover:bg-primary-color group-hover:bg-opacity-10 w-full"
      >
        {icon}
        <span>{route.text}</span>
      </a>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
