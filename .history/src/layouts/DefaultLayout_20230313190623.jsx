import React from "react";
import PropTypes from "prop-types";

import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@components";

import { Topbar, Sidebar } from "@layouts";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <section className="p-10 bg-lite">
        <Topbar />
        <main className="flex relative">
          <Sidebar />
          {children}
        </main>
      </section>
    </>
  );
};

DefaultLayout.propTypes = { children: PropTypes.node };

export default withErrorBoundary(DefaultLayout, {
  FallbackComponent: <ErrorComponent />,
});
