import React from "react";
import logo from "../../assets/logo.png";
import { AiOutlineCopyright } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <main className="w-full h-screen bg-gradient-to-b from-[#0DB1F5] to-[#FFFF] flex flex-col items-center">
        <h1 className="text-[30px] text-white pt-[20%] lg:pt-10">Assalamualaikum</h1>
        <p className="text-[10px] text-white">
          silahkan bergabung atau masuk kembali
        </p>
        <div className="w-[40%] lg:w-full lg:flex lg:justify-center mt-[15%] lg:mt-10">
          <img src={logo} alt="" className="w-[200px]"/>
        </div>
        <NavLink to={'/login'}>
        <button
          type="submit"
          className="w-[242px] h-[35px] bg-[#068DEF] rounded-md text-white mt-[30%] mb-[3%] hover:bg-blue-500 cursor-pointer"
        >
          Log In
        </button>
        </NavLink>
        <div className="w-[242px] h-[35px] border-dotted border-[2px] border-[#3861F2] rounded-md text-black text-[11px] flex justify-center items-center gap-1">
          Belum punya akun?
          <NavLink to={'/signup'}>
          <span className="text-[#1364DD]">Daftar</span>
          </NavLink>
        </div>
        <div className="w-full h-10 flex justify-center items-center gap-[2px] mt-[20%] lg:mt-[13%]">
          <AiOutlineCopyright/>
          <p className="text-[10px]">2023 DryPIT from PIT</p>
        </div>
      </main>
    </>
  );
};

export default Landing;
