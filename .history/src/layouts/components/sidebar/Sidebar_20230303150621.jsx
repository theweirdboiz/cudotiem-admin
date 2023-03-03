import React from "react";
import PropTypes from "prop-types";
import { RoutesConfig } from "@config";

const Sidebar = (props) => {
  return (
    <aside className="w-[240px]">
      <div className="fixed h-full border-r border-r-border-color">
        <ul>
          <SidebarItem text="Dashboard" />
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ icon, text, link }) => {
  return RoutesConfig.map((route) => {
    return (
      <li className="flex">
        {icon}
        <a href="">{text}</a>
      </li>
    );
  });
};
Sidebar.propTypes = {};

export default Sidebar;
