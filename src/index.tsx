import React from "react";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { theme } from "./utils/ThemeProvider";
import Home from "./container/Home";
import { ThemeProvider } from "styled-components";
import { Menu } from "./utils/constants/menu";
import Navbar from "./component/Navbar";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./container/Detail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/detail",
    element: <Detail />,
  },
]);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Navbar item={Menu} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
