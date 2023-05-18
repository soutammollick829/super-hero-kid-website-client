import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./RouterProvider/Router.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-4xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
