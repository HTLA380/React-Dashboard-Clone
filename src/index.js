import App from "./App";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { UseContextProvider } from "./context/CustomContext";

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UseContextProvider>
    <App />
  </UseContextProvider>
);
