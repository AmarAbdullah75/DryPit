import React from "react";
import Inputsign from "../../component/Inputsign";
import Signpw from "../../component/Signpw";
import { AiOutlineCopyright } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="lg:w-full lg:h-screen lg:flex lg:justify-evenly lg:p-[10%]">
        <div className="hidden h-[519px] lg:flex justify-center items-center">
          <p className="text-[32px] font-medium">
            Laundry antar jemput
            <br /> Hemat waktu dan simpel buat
            <br /> kamu yang <span className="text-[#068DEF]">#mager</span>
          </p>
        </div>
        <div className="w-full lg:w-[415px] h-screen lg:h-[519px] bg-gradient-to-b from-[#0DB1F5] to-white flex flex-col items-center lg:rounded-md lg:shadow-gray-500 lg:shadow-[0_0_5px_3px]">
          <h1 className="text-[32px] text-white font-bold my-16 lg:my-5">
            Sign Up
          </h1>
          <form className="flex flex-col items-center gap-3">
            <Inputsign type="email" placeholder="Your email" />
            <Inputsign type="text" placeholder="Your phone number" />
            <Inputsign type="text" placeholder="Your username" />
            <Signpw placeholder="Create password" />
            <Signpw placeholder="Confirm password" />
            <button
              onClick={() => navigate("/login")}
              className="w-[100px] h-[26px] bg-[#068DEF] rounded-md text-white text-[12px] mt-5"
            >
              Sign Up
            </button>
          </form>
          <p className="text-[12px] mt-5">
            Have an account?
            <NavLink to={"/login"}>
              <span className="text-[#068DEF] cursor-pointer"> Log in</span>
            </NavLink>
          </p>
          <div className="w-full h-10 flex lg:hidden justify-center items-center gap-[2px] mt-[30%] lg:mt-[15%]">
            <AiOutlineCopyright />
            <p className="text-[10px]">2023 DryPIT from PIT</p>
          </div>
        </div>
      </div>
      <div className="w-full h-10 lg:flex hidden justify-center fixed bottom-0">
        <AiOutlineCopyright />
        <p className="text-[10px]">2023 DryPIT from PIT</p>
      </div>
    </>
  );
};

export default Signup;
