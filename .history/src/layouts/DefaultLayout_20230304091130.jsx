import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";
import { Sidebar } from "@layouts/components";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <section className="flex w-full -h-full flex-grow-0">
        <Sidebar />
        <main className="mx-[35px] h-[100vh] w-full">
          <Header />
          <div className="relative top-[64px]">{children}</div>
        </main>
      </section>
    </>
  );
};

DefaultLayout.propTypes = {};

export default DefaultLayout;
