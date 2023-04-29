import React, { useContext, useReducer, useState } from "react";

export const GlobalContext = React.createContext();

const navIconInitialState = {
  cart: false,
  message: false,
  notification: false,
  profile: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "cart":
      return { ...navIconInitialState, cart: !state.cart };
    case "message":
      return { ...navIconInitialState, message: !state.message };
    case "notification":
      return { ...navIconInitialState, notification: !state.notification };
    case "profile":
      return { ...navIconInitialState, profile: !state.profile };
    default:
      return state;
  }
};

export const UseContextProvider = ({ children }) => {
  const [isSideBarActive, setIsSideBarActive] = useState(true);
  const [initialState, dispatch] = useReducer(reducer, navIconInitialState);
  const [isSettingActive, setIsSettingActive] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const [themeColor, setThemeColor] = useState("#7352FF");

  return (
    <GlobalContext.Provider
      value={{
        isSideBarActive,
        setIsSideBarActive,
        initialState,
        dispatch,
        isSettingActive,
        setIsSettingActive,
        currentTheme,
        setCurrentTheme,
        themeColor,
        setThemeColor,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(GlobalContext);
