import React from "react";
import { UseGlobalContext } from "../context/CustomContext";

const Button = ({ content }) => {
  return (
    <button className="bg-red text-white rounded-lg hover:drop-shadow-lg capitalize">
      {content}
    </button>
  );
};

export const ButtonExtend = ({ content, func }) => {
  const { themeColor } = UseGlobalContext();

  return (
    <button
      onClick={func}
      className="w-full py-3 mt-5  text-white rounded-lg hover:drop-shadow-xl capitalize"
      style={{ backgroundColor: themeColor }}>
      {content}
    </button>
  );
};

export default Button;
