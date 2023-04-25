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

  return (
    <GlobalContext.Provider
      value={{ isSideBarActive, setIsSideBarActive, initialState, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(GlobalContext);
