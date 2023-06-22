import React, { useState } from "react";
import Bottombar from "../../component/Bottombar";
import Secondnav from "../../component/Secondnav";
import { AiOutlineEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { TfiMapAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";

const Profile = () => {
  const [tampil, setTampil] = useState(false);
  let navigate = useNavigate()

  return (
    <>
      <main className="w-full h-screen">
        <Navbar />/
        <aside className="w-full h-[200px] p-0 flex flex-col justify-center items-center gap-3">
          <div className="w-[84px] h-[84px] bg-orange-400 rounded-full">
            <img src="" alt="" />
          </div>
          <p className="font-semibold">Andaru Danuarta</p>
        </aside>
        <aside className="w-full flex flex-col items-center pt-[5%]">
          <NavLink to={'/update'}>
          <div className="w-[280px] h-[60px] border-b-2 flex items-center gap-3 hover:text-[#B5B5B5]">
            <AiOutlineEdit className="text-[20px]" />
            <p className="text-[14px] font-semibold">Edit Profile</p>
          </div>
          </NavLink>
          <div className="w-[280px] h-[60px] border-b-2 flex items-center gap-3 hover:text-[#B5B5B5]">
            <TfiMapAlt className="text-[20px]" />
            <p className="text-[14px] font-semibold">Address</p>
          </div>
          <div className="w-[280px] h-[60px] border-b-2 flex items-center gap-3 hover:text-[#B5B5B5]">
            <IoSettingsOutline className="text-[20px]" />
            <p className="text-[14px] font-semibold">Setting</p>
          </div>
          <NavLink to="/landing">
            <div className="w-[280px] h-[60px] border-b-2 flex items-center gap-3 hover:text-[#B5B5B5]">
              <FiLogIn className="text-[20px]" />
              <p className="text-[14px] font-semibold">Login</p>
            </div>
          </NavLink>
          <div
            onClick={() => setTampil(true)}
            className="w-[280px] h-[60px] border-b-2 flex items-center gap-3 hover:text-[#B5B5B5]"
          >
            <FiLogOut className="text-[20px]" />
            <p className="text-[14px] font-semibold">Logout</p>
          </div>
        </aside>
        {/* <Bottombar /> */}
      </main>
      {tampil ? (
        <main className="w-full h-screen bg-black bg-opacity-75 flex justify-center items-center fixed top-0">
          <article className="w-[270px] h-[200px] bg-white rounded-md">
            <div className="w-full h-[30%] flex justify-end pr-2 pt-2">
              <AiOutlineCloseCircle onClick={() => setTampil(false)} className="text-[#FF0000]"/>
            </div>
            <div className="w-full h-[30%]">
            <h3 className="text-center font-medium">DO YOU WANT TO LOGOUT?</h3>
            </div>
            <div className="w-full h-[30%] flex justify-evenly items-center">
              <button onClick={() => navigate('/login')} className="w-[100px] h-[23px] text-[12px] border-black border">YES I'M SURE</button>
              <button onClick={() => setTampil(false)} className="w-[100px] h-[23px] text-[12px] text-white bg-[#0DB1F5]">NO WAY</button>
            </div>
          </article>
        </main>
      ) : null}
    </>
  );
};

export default Profile;
