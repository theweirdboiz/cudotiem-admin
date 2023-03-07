import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import brand from "../assets/react.svg";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-lite p-10">
      <Link to="">
        <img src={brand} alt="" className="w-10 h-10" />
      </Link>
      <div className="w-full bg-white max-w-[556px] rounded-xl px-5 py-8 lg:px-16 lg:py-12 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
        nostrum fugiat ratione similique corrupti id iste, quisquam aliquid sint
        numquam nihil dicta. Ex eos, numquam nemo facilis soluta rerum sit?
      </div>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {};

export default AuthLayout;
