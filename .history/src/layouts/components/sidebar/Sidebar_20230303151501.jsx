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
    <li>
      <div className="mr-3">{icon}</div>
      <a href={route.path}>{route.text}</a>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
