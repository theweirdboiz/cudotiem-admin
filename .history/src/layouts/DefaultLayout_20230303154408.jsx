import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";
import { Sidebar } from "@layouts/components";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="flex w-full -h-full">
        <Sidebar />
        <main className="mx-[35px] bg-black h-[100vh] w-full">{children}</main>
      </section>
    </>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
