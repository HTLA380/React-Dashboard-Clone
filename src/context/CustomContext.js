import React, { useContext, useState } from "react";

export const GlobalContext = React.createContext();

export const UseContextProvider = ({ children }) => {
  const [isSideBarActive, setIsSideBarActive] = useState(true);

  return (
    <GlobalContext.Provider value={{ isSideBarActive, setIsSideBarActive }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(GlobalContext);
