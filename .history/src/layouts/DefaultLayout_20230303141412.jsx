import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
