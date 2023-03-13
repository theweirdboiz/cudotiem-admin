import React, { useState } from "react";
import PropTypes from "prop-types";
import { publicRoutes } from "@routes";
import { Link } from "react-router-dom";

import { FaToggleOn } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { BiChevronDown } from "react-icons/bi";

import brand from "@assets/brand.png";

const Sidebar = (props) => {
  // handle events
  const handleClickItem = (item) => {};
  return <aside className="w-[240px] h-[100vh] flex-shrink-0 sidebar"></aside>;
};

Sidebar.propTypes = {};

export default Sidebar;
