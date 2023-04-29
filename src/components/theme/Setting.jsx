import React, { useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { UseGlobalContext } from "../../context/CustomContext";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const ThemeButton = ({ name, bgColor }) => {
  const { setThemeColor } = UseGlobalContext();

  return (
    <TooltipComponent position="TopCenter" content={`${name}-theme`}>
      <button
        className="w-10 mt-4 h-10 rounded-full"
        onClick={() => setThemeColor(bgColor)}
        style={{ backgroundColor: bgColor }}></button>
    </TooltipComponent>
  );
};

const Setting = () => {
  const { currentTheme, setCurrentTheme, setIsSettingActive } =
    UseGlobalContext();

  useEffect(() => {
    if (currentTheme === "light") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, [currentTheme]);

  const handleThemeChange = (event) => {
    setCurrentTheme(event.target.value);
  };

  return (
    <div className="z-[25] w-[400px] bg-white dark:bg-[#484b52] dark:text-white min-h-screen fixed top-0 right-0 p-8">
      <div className="flex justify-between items-center border-b border-b-gray-200 dark:border-b-gray-700 pb-4">
        <h3 className="font-semibold text-lg">Settings</h3>
        <span
          className="cursor-pointer text-2xl p-3 hover:drop-shadow-xl hover:bg-milkyWhite text-gray-400 rounded-full"
          onClick={() => setIsSettingActive((prevState) => !prevState)}>
          <MdOutlineCancel />
        </span>
      </div>
      <div className="border-b border-b-gray-200 dark:border-b-gray-700 py-5">
        <h3 className="font-semibold text-xl mb-3">Theme Option</h3>
        <form>
          <input
            type="radio"
            id="lightBtn"
            className="cursor-pointer scale-110"
            name="theme"
            checked={currentTheme === "light"}
            value="light"
            onChange={handleThemeChange}
          />
          <label
            htmlFor="lightBtn"
            className="ml-3 text-base leading-10 cursor-pointer">
            Light
          </label>
          <br></br>
          <input
            type="radio"
            id="darkBtn"
            name="theme"
            value="dark"
            className="cursor-pointer scale-110"
            checked={currentTheme === "dark"}
            onChange={handleThemeChange}
          />
          <label htmlFor="darkBtn" className="ml-3 text-base cursor-pointer">
            Dark
          </label>
        </form>
      </div>

      <h3 className="font-semibold mt-5 text-xl ">Theme Colors</h3>

      <div className="flex gap-3 items-center">
        <ThemeButton name="blue" bgColor="#59BEE7" />
        <ThemeButton name="green" bgColor="#03C9D7" />
        <ThemeButton name="purple" bgColor="#7352FF" />
        <ThemeButton name="red" bgColor="#FF5C8E" />
        <ThemeButton name="indigo" bgColor="#1E4DB7" />
        <ThemeButton name="orange" bgColor="#FB9678" />
      </div>
    </div>
  );
};

export default Setting;
