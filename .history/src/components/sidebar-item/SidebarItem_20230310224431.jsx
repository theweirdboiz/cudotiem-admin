import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const SidebarItem = ({ onClick, name, icon, isActive, hasSubNav }) => {
  return (
    <div
      onClick={() => onClick(name)}
      className={classNames(isActive ? "active" : "")}
    >
      <NavLink
        to={menuItem.path}
        key={menuItem.title}
        className={classNames(
          "flex items-center gap-x-5 text-icon-color h-12 p-3 mb-8"
        )}
      >
        <span>{icon && menuItem.icon}</span>
        <span>{menuItem.title}</span>
      </NavLink>
    </div>
  );
};

SidebarItem.propTypes = {};

export default SidebarItem;
