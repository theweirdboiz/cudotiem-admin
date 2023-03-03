import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";
import { Sidebar } from "@layouts/components";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </div>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
