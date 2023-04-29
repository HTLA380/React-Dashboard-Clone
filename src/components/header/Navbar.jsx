import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../../data/avatar.jpg";
import { UseGlobalContext } from "../../context/CustomContext";
import { TooltipComponent } from "@syncfusion/ej2-react-popups/src";
import Cart from "./Cart";
import Notification from "./Notification";
import Message from "./Message";
import Profile from "./Profile";

const NavIcon = ({ icon, color, dotColor, name }) => {
  const dotStyles = `absolute top-[0.5rem] left-[1.6rem] z-20 w-2 h-2 rounded-full`;

  const { dispatch } = UseGlobalContext();

  return (
    <TooltipComponent position="BottomCenter" content={name}>
      <span
        style={{ color }}
        onClick={() => {
          dispatch({ type: name });
        }}
        className="cursor-pointer hover:bg-gray-100 drop-shadow-xl flex p-3 items-center justify-center rounded-full text-lg relative">
        <div className={dotStyles} style={{ backgroundColor: dotColor }}></div>
        {icon}
      </span>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const { setIsSideBarActive, initialState, dispatch, themeColor } =
    UseGlobalContext();
  return (
    <header className="relative flex items-center justify-between px-6 py-4 w-full">
      <TooltipComponent content="menu" position="BottomCenter">
        <span onClick={() => setIsSideBarActive((prevSidebar) => !prevSidebar)}>
          <AiOutlineMenu
            className="cursor-pointer hover:bg-gray-100 drop-shadow-xl rounded-full w-auto h-auto p-3 text-lg"
            style={{ color: themeColor }}
          />
        </span>
      </TooltipComponent>
      <div className="flex items-center gap-1 text-xl">
        <NavIcon color={themeColor} icon={<FiShoppingCart />} name="cart" />
        <NavIcon
          color={themeColor}
          icon={<BsChatLeft />}
          name="message"
          dotColor="#03c9d7"
        />
        <NavIcon
          color={themeColor}
          icon={<RiNotification3Line />}
          name="notification"
          dotColor="#fec90f"
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => dispatch({ type: "profile" })}>
            <img className=" w-8 h-8 rounded-full" src={avatar} alt="Micheal" />
            <p className="ml-4 text-sm text-gray-400">
              Hi, <strong>Micheal</strong>
            </p>
            <MdKeyboardArrowDown className="ml-2 text-gray-400 text-sm" />
          </div>
        </TooltipComponent>
      </div>
      {initialState.cart && (
        <>
          <div className="fixed z-20 inset-0 bg-black opacity-50 dark:opacity-60"></div>
          <Cart />
        </>
      )}
      {initialState.message && <Message />}
      {initialState.notification && <Notification />}
      {initialState.profile && <Profile />}
    </header>
  );
};

export default Navbar;
