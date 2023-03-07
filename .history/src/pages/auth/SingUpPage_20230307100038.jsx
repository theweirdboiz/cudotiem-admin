import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import iconGoogle from "@assets/icon-google.svg";
const SideUpPage = (props) => {
  return (
    <>
      <h3 className="font-semibold text-3xl text-center mb-5">Sign Up</h3>
      <p className="text-center lg:text-sm text-xs font-normal text-text-3 lg:mb-8">
        Already have an acccount?{" "}
        <Link className="text-primary font-medium underline" to="/auth/sign-in">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center py-3 gap-x-2 w-full border border-strock rounded-xl">
        <img src={iconGoogle} alt="" />
        <span>Sign up with google</span>
      </button>
    </>
  );
};

SideUpPage.propTypes = {};

export default SideUpPage;
