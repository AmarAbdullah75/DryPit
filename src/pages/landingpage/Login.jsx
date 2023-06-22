import React, { useState } from "react";
import logo from "../../assets/logo.png";
import {
  AiFillEye,
  AiOutlineCopyright,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  let navigate = useNavigate();

  return (
    <>
      <main className="w-full h-screen flex flex-col items-center">
        <div className="w-full h-[90%] flex flex-col lg:flex-row justify-center lg:justify-evenly items-center">
          <div className="w-[40%] lg:w-[250px] lg:h-[500px] mt-[10%] lg:flex lg:flex-col lg:items-center">
            <img src={logo} alt="" className="lg:w-[150px]" />
            <h1 className="text-[20px] lg:text-[80px] text-[#0DB1F5] font-bold text-center">
              DryPIT
            </h1>
            <p className="hidden lg:flex lg:text-[40px] italic text-[#0DB1F5]">
              it’s up to you
            </p>
          </div>
          <article className="w-[240px] lg:w-[337px] h-[320px] lg:h-[431px] rounded-2xl bg-gradient-to-b from-[#0DB1F5] to-white shadow-[0_0_5px_1px] shadow-gray-500 flex flex-col lg:justify-start items-center gap-5 mt-[5%]">
            <h1 className="text-[32px] text-white font-bold mt-1 lg:pt-5">
              Log In
            </h1>
            <form
              action=""
              className="w-full h-40 flex flex-col items-center gap-3 pt-2 lg:pt-10"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Phone number or email"
                className="w-[164px] lg:w-[231px] placeholder:text-[10px] bg-inherit border-b-2 border-[#068DEF] outline-none"
              />
              <label
                htmlFor=""
                className="w-[164px] lg:w-[231px] flex items-end border-b-2 border-[#068DEF]"
              >
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-[140px] lg:w-[231px] placeholder:text-[10px] bg-inherit outline-none"
                />
                <label onClick={handleShow}>
                  {show ? (
                    <AiFillEyeInvisible className="text-[#0038FF]" />
                  ) : (
                    <AiFillEye className="text-[#0038FF]" />
                  )}
                </label>
              </label>
              <button
                onClick={() => navigate("/")}
                type="button"
                className="w-[100px] h-[26px] bg-[#068DEF] rounded-md text-[10px] text-white lg:mt-5"
              >
                Log in
              </button>
            </form>
            <div className="w-full mt-[5%] lg:mt-32 text-[12px] flex justify-between px-3">
              <span>Forget password?</span>
              <NavLink to={"/signup"}>
                <span className="cursor-pointer">Sign Up</span>
              </NavLink>
            </div>
          </article>
        </div>
        <div className="w-full h-10 flex justify-center items-center gap-[2px] mt-10">
          <AiOutlineCopyright />
          <p className="text-[10px]">2023 DryPIT from PIT</p>
        </div>
      </main>
    </>
  );
};

export default Login;
