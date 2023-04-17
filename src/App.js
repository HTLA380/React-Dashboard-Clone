import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Ecommerce from "./Pages/Ecommerce";

const App = () => {
  return (
    <div className="flex relative bg-milkyWhite">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Ecommerce />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
