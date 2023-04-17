import React, { useContext } from "react";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { UseGlobalContext } from "../context/CustomContext";

const Sidebar = () => {
  const { isSideBarActive, setIsSideBarActive } = UseGlobalContext();

  const activeLink =
    "flex gap-3 items-center capitalize mt-4 bg-red text-white py-2 px-4 rounded";
  const normalLink =
    "flex gap-3 items-center capitalize mt-4 text-gray-800 hover:bg-gray-100 py-2 px-4 rounded";

  return (
    isSideBarActive && (
      <aside className="relative w-72 bg-white h-screen overflow-scroll drop-shadow-xl">
        <span
          onClick={() =>
            setIsSideBarActive((prevSidebarActive) => !prevSidebarActive)
          }
          className="absolute right-5 top-5 text-lg text-red md:hidden">
          <MdOutlineCancel />
        </span>
        <Link
          to="/"
          onClick={() => setIsSideBarActive(false)}
          className="m-4 ml-5 flex items-center gap-3 text-xl font-bold">
          <SiShopware />
          <span>Shoppy</span>
        </Link>
        <div className="mt-6 px-3 pb-14">
          {links.map((item) => (
            <div key={item.title}>
              <p className="ml-2 mt-8 uppercase text-gray-400">{item.title}</p>
              <div>
                {item.links.map((link) => {
                  return (
                    <NavLink
                      to={link.name}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                      key={link.name}>
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    )
  );
};

export default Sidebar;
