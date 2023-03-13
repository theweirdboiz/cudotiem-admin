import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import brand from "@assets/brand.png";

const Sidebar = (props) => {
  // data
  const sidebarLinks = [
    {
      icon: "",
      title: "Dashboard",
      path: "/",
    },
  ];
  // handle events
  const handleClickItem = (item) => {};
  return (
    <aside className="w-[240px] h-[100vh] flex-shrink-0 sidebar">
      {sidebarLinks.map((sidebarLink) => (
        <NavLink
          to={sidebarLink.path}
          key={sidebarLink.title}
          className="flex items-center gap-x-5"
        >
          {sidebarLink.icon}
          {sidebarLink.title}
        </NavLink>
      ))}
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
