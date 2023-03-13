import React from "react";
import PropTypes from "prop-types";

import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@components";

import { Topbar, Sidebar } from "@layouts";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <section className="flex w-[full] h-full flex-grow-0 p-10 bg-lite">
        <Topbar />
        <main className="h-[100vh] w-full relative">
          <Sidebar />
          <div className="relative top-[64px]">{children}</div>
        </main>
      </section>
    </>
  );
};

DefaultLayout.propTypes = { children: PropTypes.node };

export default withErrorBoundary(DefaultLayout, {
  FallbackComponent: <ErrorComponent />,
});
