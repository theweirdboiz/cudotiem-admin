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
    <li className="flex px-5 text-gray">
      <div className="mr-3">{icon}</div>
      <a href={route.path} className="px-10">
        {route.text}
      </a>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
