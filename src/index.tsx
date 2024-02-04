import React from "react";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { theme } from "./utils/ThemeProvider";
import Home from "./container/Home";
import { ThemeProvider } from "styled-components";
import { Menu } from "./utils/constants/menu";
import Navbar from "./component/Navbar";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Detail from "./container/Detail";
import Work from "./container/Work";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    element: <NavbarWrapper />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/work",
        element: <Work />,
      },
    ],
  },
]);

function NavbarWrapper() {
  return (
    <div>
      <Navbar item={Menu} />
      <Outlet />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
