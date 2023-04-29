import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Ecommerce from "./Pages/Ecommerce";
import Navbar from "./components/header/Navbar";
import "./App.css";
import SettingIcon from "./components/theme/SettingIcon";
import Setting from "./components/theme/Setting";
import { UseGlobalContext } from "./context/CustomContext";

const App = () => {
  const { isSettingActive, setCurrentTheme } = UseGlobalContext();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setCurrentTheme(theme);
  }, []);

  return (
    <div className="flex relative bg-milkyWhite dark:bg-black">
      <BrowserRouter>
        <Sidebar />
        <div className="w-full relative">
          <Navbar />
          <SettingIcon />
          {isSettingActive && (
            <>
              <div className="fixed z-20 inset-0 bg-black opacity-50 dark:opacity-60"></div>
              <Setting />
            </>
          )}
          <Routes>
            <Route path="/" element={<Ecommerce />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
