import React from "react";
import { BiBell, BiHomeAlt, BiListCheck, BiUserCircle } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";

const Bottombar = () => {
  //   let navigate = useNavigate();
  let activeLink = ({ isActive }) => {
    return isActive ? "text-black" : "text-white";
  };
  return (
    <div className="w-full h-[46px] bg-[#0DB1F5] text-white flex lg:hidden justify-between text-[28px] items-center px-[8%] fixed bottom-0">
      <NavLink className={activeLink} to="/">
        <BiHomeAlt />
      </NavLink>
      <NavLink>
        <NavLink className={activeLink} to="/notification">
          <div className="w-7 h-9 flex justify-end items-center relative">
            <BiBell className="text-[25px] absolute" />
            <div className="w-[13px] h-[13px] bg-[#FF0000] text-[5px] text-white font-bold flex justify-center items-center border-[1pt] rounded-full absolute top-[10%] left-[45%]">
              10
            </div>
          </div>
        </NavLink>
      </NavLink>
      <NavLink>
        <BiListCheck />
      </NavLink>
      <NavLink className={activeLink} to="/profile">
        <BiUserCircle />
      </NavLink>
    </div>
  );
};

export default Bottombar;
