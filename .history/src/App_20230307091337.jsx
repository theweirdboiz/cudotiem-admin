import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "@routes";
import { DefaultLayout } from "@layouts";

function App() {
  return (
    <Router>
      <Routes>
        {/* {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout === null ? Fragment : DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}*/}
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout === null) {
            Layout = Fragment;
          } else {
            Layout = route.layout;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
