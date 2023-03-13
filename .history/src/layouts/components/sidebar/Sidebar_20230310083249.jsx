import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    <aside className="w-[240px] h-[100vh] flex-shrink-0 sidebar">sidebar</aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
