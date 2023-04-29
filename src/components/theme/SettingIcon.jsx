import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { UseGlobalContext } from "../../context/CustomContext";

const SettingIcon = () => {
  const { setIsSettingActive, themeColor } = UseGlobalContext();

  return (
    <div
      className="p-3 rounded-full fixed bottom-5 right-5 cursor-pointer"
      style={{ backgroundColor: themeColor }}>
      <TooltipComponent content="setting" position="LeftTop">
        <span
          onClick={() => setIsSettingActive((prevState) => !prevState)}
          className="text-3xl font-bold  text-white">
          <FiSettings />
        </span>
      </TooltipComponent>
    </div>
  );
};

export default SettingIcon;
