import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import brand from "@assets/brand.png";
import { IconDashboard } from "@components";

import classNames from "@ultis/classNames";

import { SidebarItem } from "@components";

const Sidebar = (props) => {
  // data
  const menuItems = [
    {
      icon: <IconDashboard />,
      name: "Dashboard",
      path: "/",
    },
    {
      icon: <IconDashboard />,
      name: "Posts",
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
      name: "Orders",
      path: "/orders",
    },
    {
      icon: <IconDashboard />,
      name: "Users",
      path: "/users",
    },
    {
      icon: <IconDashboard />,
      name: "Profile",
      path: "/profile",
    },
    {
      icon: <IconDashboard />,
      name: "Logout",
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
          key={menuItem.name}
          className={classNames(
            "flex items-center gap-x-5 text-icon-color h-12 p-3 mb-8"
          )}
        >
          <span>{menuItem.icon}</span>
          <span>{menuItem.name}</span>
        </NavLink>
      ))}
    </aside>
  );
};

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef();

  const isSubNavOpen = (item, items) => {
    items.some((i) => i === activeItem) || item === activeItem;
  };

  return (
    <div
      className={isSubNavOpen(item.name, item.items) ? "open" : ""}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => {
          <SidebarItem onClick={handleClick} name={subItem.name}></SidebarItem>;
        })}
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
