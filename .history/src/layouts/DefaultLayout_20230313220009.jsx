import React from "react";
import PropTypes from "prop-types";

import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@components";

import { Topbar, Sidebar } from "@layouts";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <section className="p-10 bg-icon-color">
        <Topbar />
        <main className="flex relative gap-x-8">
          <Sidebar />
          <section className="flex-1 p-5 bg-white">{children}</section>
        </main>
      </section>
    </>
  );
};

DefaultLayout.propTypes = { children: PropTypes.node };

export default withErrorBoundary(DefaultLayout, {
  FallbackComponent: <ErrorComponent />,
});
