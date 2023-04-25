import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CartItems } from "../../data/dummy";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { UseGlobalContext } from "../../context/CustomContext";
import { ButtonExtend } from "../Button";

const Cart = () => {
  const { dispatch } = UseGlobalContext();

  return (
    <div className="z-[25] w-[400px] bg-white dark:bg-flatBlack dark:text-white min-h-screen fixed top-0 right-0 p-8">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Shopping Cart</h3>
        <span
          className="cursor-pointer text-2xl p-3 hover:drop-shadow-xl hover:bg-milkyWhite text-gray-400 rounded-full"
          onClick={() => dispatch({ type: "cart" })}>
          <MdOutlineCancel />
        </span>
      </div>
      {CartItems.map((eachItem) => {
        return (
          <div
            key={eachItem.name}
            className="flex p-4 items-center border-b border-b-gray-200 leading-9">
            <img
              src={eachItem.image}
              className="w-24 h-20 object-cover rounded-lg"
              alt={eachItem.name}
            />
            <div className="ml-3 capitalize font-semibold">
              <h4 className="">{eachItem.name}</h4>
              <p className="text-gray-400 text-sm ">{eachItem.category}</p>
              <div className="mt-2 flex items-center gap-2">
                <h3 className="text-lg">${eachItem.price}</h3>
                <div className="flex items-center border border-gray-200 dark:border-gray-500">
                  <span className="border-r border-gray-200 dark:border-gray-500 h-12 w-8 flex items-center justify-center text-red">
                    <AiOutlineMinus />
                  </span>
                  <span className="h-12 w-8 flex items-center justify-center text-green-600">
                    0
                  </span>
                  <span className="border-l border-gray-200 dark:border-gray-500 h-12 w-8 flex items-center justify-center text-green-600">
                    <AiOutlinePlus />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-400">Sub Total</p>
          <h4 className="font-semibold">$890</h4>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-400">Total</p>
          <h4 className="font-semibold">$890</h4>
        </div>
        <ButtonExtend
          func={() => dispatch({ type: "cart" })}
          content="place order"
        />
      </div>
    </div>
  );
};

export default Cart;
