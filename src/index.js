import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { UseContextProvider } from "./context/CustomContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>
);
