import React from "react";
import PropTypes from "prop-types";
import { Header } from "@layouts/components";
import { Sidebar } from "@layouts/components";

import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "@components";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <section className="flex w-[full] h-full flex-grow-0">
        <Sidebar />
        <main className="h-[100vh] w-full relative">
          <Header />
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
