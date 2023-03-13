import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import brand from "@assets/brand.png";
import { IconDashboard } from "@components";

import classNames from "@ultis/classNames";

const Sidebar = (props) => {
  // data
  const menuItems = [
    {
      icon: <IconDashboard />,
      title: "Dashboard",
      path: "/",
    },
    {
      icon: <IconDashboard />,
      title: "Posts",
      path: "/posts",
      items: [
        {
          name: "Add post",
        },
        {
          name: "Post list",
        },
        {
          name: "Categories",
        },
      ],
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
    <aside className="w-[240px] h-[100vh] flex-shrink-0 sidebar px-[14px] py-10 rounded-lg shadow-sd-primary flex flex-col">
      {menuItems.map((menuItem) => (
        <NavLink
          to={menuItem.path}
          key={menuItem.title}
          className={classNames(
            "flex items-center gap-x-5 text-icon-color h-12 p-3 mb-8"
          )}
        >
          <span>{menuItem.icon}</span>
          <span>{menuItem.title}</span>
        </NavLink>
      ))}
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
