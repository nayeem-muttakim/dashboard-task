import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import DashLayout from "./DashLayout";
import DashEcom from "./Content/DashEcom/DashEcom";
import Charts from "./Content/Charts/Charts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DashLayout />,
    children: [
      {
        path: "dash-ecom",
        element: <DashEcom />,
      },
      {
        path: "widgets",
        element: <div></div>,
      },
      {
        path: "widgets/1",
        element: <div></div>,
      },
      {
        path: "charts",
        element: <Charts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
