import React from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";

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
const SidebarItem = ({ icon, link }) => {
  return publicRoutes.map((route) => {
    return <li>{route.text}</li>;
  });
};
Sidebar.propTypes = {};

export default Sidebar;
