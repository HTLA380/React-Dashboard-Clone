import React from "react";

const Button = ({ content }) => {
  return (
    <button className="bg-red text-white rounded-lg hover:drop-shadow-lg capitalize">
      {content}
    </button>
  );
};

export const ButtonExtend = ({ content, func }) => {
  return (
    <button
      onClick={func}
      className="w-full py-3 mt-5 bg-red text-white rounded-lg hover:drop-shadow-xl capitalize">
      {content}
    </button>
  );
};

export default Button;
