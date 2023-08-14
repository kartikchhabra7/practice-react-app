import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import createRouterPath from "./routes/createRouter";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {createRouterPath.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
