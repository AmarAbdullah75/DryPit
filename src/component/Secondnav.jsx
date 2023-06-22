import React from "react";
import logo from "../assets/logo.png";
import { BiBell } from "react-icons/bi";

const Secondnav = () => {
  return (
    <nav className="w-full h-14 p-[4%] flex justify-center items-center relative top-0">
      <div className="w-2/4 flex items-center gap-2">
        <h2 className="text-[16px] font-bold text-[#0DB1F5]">DryPIT</h2>
      </div>
      <div className="w-2/4 relative flex justify-end items-center">
        <div className="w-7 h-9 flex justify-end items-center relative">
          <BiBell className="text-[25px] absolute" />
          <div className="w-[13px] h-[13px] bg-[#FF0000] text-[5px] text-white font-bold flex justify-center items-center border-[1pt] rounded-full absolute top-[10%] left-[45%]">
            10
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Secondnav;
