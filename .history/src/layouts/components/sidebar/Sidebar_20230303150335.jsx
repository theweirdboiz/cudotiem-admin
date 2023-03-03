import React from "react";
import PropTypes from "prop-types";

const Sidebar = (props) => {
  return (
    <aside className="w-[240px]">
      <div className="fixed h-full">
        <ul>
          <SidebarItem text="Dashboard" />
        </ul>
      </div>
    </aside>
  );
};
const SidebarItem = ({ icon, text, link }) => {
  return (
    <li className="flex">
      {icon}
      <a href="">{text}</a>
    </li>
  );
};
Sidebar.propTypes = {};

export default Sidebar;
