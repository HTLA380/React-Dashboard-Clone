import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Ecommerce from "./Pages/Ecommerce";
import Navbar from "./components/header/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="overflow-scroll flex relative bg-milkyWhite dark:bg-black">
      <BrowserRouter>
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Ecommerce />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
