import React from "react";
import { UseGlobalContext } from "../../context/CustomContext";
import { MdOutlineCancel } from "react-icons/md";
import avatar from "../../data/avatar.jpg";
import { BsWindowSplit, BsCurrencyDollar, BsShield } from "react-icons/bs";
import { ButtonExtend } from "../Button";

const ProfileComponent = ({ icon, bgColor, iconColor, title, desc }) => {
  return (
    <div className="flex gap-3 px-3 py-4 items-center border-b border-gray-300">
      <button
        className="p-3 text-xl rounded-lg"
        style={{ backgroundColor: bgColor, color: iconColor }}>
        {icon}
      </button>
      <div>
        <h3 className="font-semibold leading-8">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-thin">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Profile = () => {
  const { dispatch } = UseGlobalContext();

  return (
    <div className="fixed w-96 p-8 top-20 bg-white dark:bg-flatBlack dark:text-white drop-shadow-md right-10 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">User Profile</h3>
        <span
          className="cursor-pointer text-2xl p-3 hover:drop-shadow-xl hover:bg-milkyWhite text-gray-400 rounded-full"
          onClick={() => dispatch({ type: "profile" })}>
          <MdOutlineCancel />
        </span>
      </div>

      <div className="flex gap-5 py-6 items-center border-b border-gray-300">
        <img
          className="w-24 object-cover rounded-full h-24"
          src={avatar}
          alt=""
        />
        <div>
          <h3 className="font-semibold leading-8 text-xl">Michael Roberts</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-thin">
            Administrator
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
            info@shop.com
          </p>
        </div>
      </div>

      <ProfileComponent
        icon={<BsCurrencyDollar />}
        title="My Profile"
        desc="account settings"
        bgColor="#E5FAFB"
        iconColor="#4AD9E2"
      />
      <ProfileComponent
        icon={<BsShield />}
        title="My Inbox"
        desc="Messages & Emails"
        bgColor="rgb(235, 250, 242)"
        iconColor="rgb(0, 194, 146)"
      />
      <ProfileComponent
        icon={<BsWindowSplit />}
        title="My Tasks"
        desc="To-do and Daily Tasks"
        bgColor="rgb(253, 185, 95)"
        iconColor="rgb(235, 250, 242)"
      />

      <ButtonExtend
        content="Log Out"
        func={() => dispatch({ type: "profile" })}
      />
    </div>
  );
};

export default Profile;
