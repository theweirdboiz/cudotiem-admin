import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import brand from "@assets/brand.png";
import { IconDashboard } from "@components";

const Sidebar = (props) => {
  // data
  const sidebarLinks = [
    {
      icon: <IconDashboard />,
      title: "Dashboard",
      path: "/",
    },
    {
      icon: <IconDashboard />,
      title: "Posts",
      path: "/posts",
    },
    {
      icon: <IconDashboard />,
      title: "Orders",
      path: "/orders",
    },
    {
      icon: <IconDashboard />,
      title: "Users",
      path: "/users",
    },
    {
      icon: <IconDashboard />,
      title: "Profile",
      path: "/profile",
    },
    {
      icon: <IconDashboard />,
      title: "Logout",
      path: "/#",
      onClick: () => {},
    },
  ];
  // handle events
  const handleClickItem = (item) => {};
  return (
    <aside className="w-[240px] h-[100vh] flex-shrink-0 sidebar px-[14px] py-10 rounded-3xl shadow-sd-primary flex flex-col">
      {sidebarLinks.map((sidebarLink) => (
        <NavLink
          to={sidebarLink.path}
          key={sidebarLink.title}
          className="flex items-center gap-x-5 text-icon-color h-12 p-3 mb-8"
        >
          <span>{sidebarLink.icon}</span>
          <span>{sidebarLink.title}</span>
        </NavLink>
      ))}
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
