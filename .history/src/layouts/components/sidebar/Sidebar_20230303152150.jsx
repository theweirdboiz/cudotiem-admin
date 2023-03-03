import React from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";

const Sidebar = (props) => {
  return (
    <aside className="w-[240px]">
      <div className="fixed h-full border-r border-r-border-color top-[64px]">
        <ul className="mt-2 py-4">
          {publicRoutes.map((route) => {
            return <SidebarItem key={route.path} route={route} icon="icon" />;
          })}
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ icon, route }) => {
  return (
    <li className="flextext-gray hover:text-black capitalize group">
      <a
        href={route.path}
        className="flex gap-x-10 py-10 px-2 group-hover:bg-primary-color group-hover:bg-opacity-30"
      >
        {icon}
        <span>{route.text}</span>
      </a>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;