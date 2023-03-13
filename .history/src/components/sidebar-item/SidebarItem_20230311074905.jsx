import React from "react";
import PropTypes from "prop-types";

import classNames from "@ultis/classNames";

const SidebarItem = ({ onClick, name, icon, isActive, hasSubNav, path }) => {
  return (
    <div
      onClick={() => onClick(name)}
      className={classNames(isActive ? "active" : "")}
    >
      <button
        to={path}
        key={name}
        className={classNames(
          "flex items-center gap-x-5 text-icon-color h-12 p-3 mb-8"
        )}
      >
        <span>{icon && icon}</span>
        <span>{name}</span>
        {hasSubNav && (
          <span>
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </span>
        )}
      </button>
    </div>
  );
};

SidebarItem.propTypes = {};

export default SidebarItem;
