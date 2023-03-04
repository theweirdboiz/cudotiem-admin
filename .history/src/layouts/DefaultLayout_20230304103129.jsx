import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";
import { Sidebar } from "@layouts/components";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <section className="flex w-[1440px] mx-auto h-full flex-grow-0">
        <Sidebar />
        <main className="h-[100vh] w-full relative">
          <Header />
          <div className="relative top-[64px]">{children}</div>
        </main>
      </section>
    </>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
