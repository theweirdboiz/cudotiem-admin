import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";
import { Sidebar } from "@layouts/components";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
