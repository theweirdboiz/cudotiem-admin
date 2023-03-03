import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@routes";
import { Dashboard } from "@pages";

function App() {
  return (
    <Router>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Router>
  );
}

export default App;
