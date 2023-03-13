import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

import brand from "@assets/brand.png";
import { IconDashboard } from "@components";

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
  const [activeItem, setActiveItem] = useState("");
  // handle events
  const handleClickItem = (item) => {
    setActiveItem(item !== activeItem ? item : "");
  };
  return (
    <aside className="sidebar">
      {menuItems.map((menuItem) => (
        <>
          {!menuItem.items && (
            <SidebarItem
              key={menuItem.name}
              onClick={handleClickItem}
              name={menuItem.name}
              icon={menuItem.icon}
              isActive={activeItem === menuItem.name}
              hasSubNav={!!menuItem.items}
              path={menuItem.path}
            />
          )}
          {menuItem.items && (
            <>
              <SidebarItem
                key={menuItem.name}
                onClick={handleClickItem}
                name={menuItem.name}
                icon={menuItem.icon}
                isActive={activeItem === menuItem.name}
                hasSubNav={!!menuItem.items}
                path={menuItem.path}
              />
              <SubMenu
                activeItem={activeItem}
                handleClick={handleClickItem}
                item={menuItem.name}
              />
            </>
          )}
        </>
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
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => {
          <SidebarItem
            onClick={handleClick}
            name={subItem.name}
            isActive={activeItem === subItem.name}
          />;
        })}
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
