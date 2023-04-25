import React from "react";
import { UseGlobalContext } from "../../context/CustomContext";
import { MdOutlineCancel } from "react-icons/md";
import { messageData } from "../../data/dummy";
import { ButtonExtend } from "../Button";

const EachPerson = ({ image, title, description, time }) => {
  return (
    <div className="flex gap-3 p-3 items-center border-b border-gray-300">
      <img className="w-10 object-cover rounded-full h-10" src={image} alt="" />
      <div>
        <h3 className="font-semibold leading-8">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-thin">
          {description}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-thin">
          {time}
        </p>
      </div>
    </div>
  );
};

const Message = () => {
  const { dispatch } = UseGlobalContext();

  return (
    <div className="fixed w-96 p-8 top-20 bg-white dark:bg-flatBlack dark:text-white drop-shadow-md right-5 md:right-64 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Messages</h3>
        <span
          className="cursor-pointer text-2xl p-3 hover:drop-shadow-xl hover:bg-milkyWhite text-gray-400 rounded-full"
          onClick={() => dispatch({ type: "message" })}>
          <MdOutlineCancel />
        </span>
      </div>
      {messageData.map((eachMsg) => {
        return (
          <EachPerson
            key={eachMsg.title}
            image={eachMsg.image}
            title={eachMsg.title}
            time={eachMsg.time}
            description={eachMsg.description}
          />
        );
      })}
      <ButtonExtend
        content="see all messages"
        func={() => dispatch({ type: "message" })}
      />
    </div>
  );
};

export default Message;
