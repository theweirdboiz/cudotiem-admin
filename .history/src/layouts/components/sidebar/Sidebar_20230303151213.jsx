import React from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";

const Sidebar = (props) => {
  return (
    <aside className="w-[240px]">
      <div className="fixed h-full border-r border-r-border-color">
        <ul>
          {publicRoutes.map((route) => {
            return <SidebarItem route={route} icon="icon" />;
          })}
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ icon, route }) => {
  return (
    <li key={route.path}>
      {icon}
      <a href={route.path}>{route.text}</a>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
