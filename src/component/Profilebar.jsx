import React from "react";
import { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiMapAlt } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import user from "../assets/user.png";
import { Drawer } from "antd";

const Profilebar = () => {
  let menu = [
    {name:'Edit Profile', icon: <AiOutlineEdit/>, to:'/update'},
    {name: 'Alamat', icon: <TfiMapAlt/>},
    {name: 'Pengaturan', icon: <IoSettingsOutline/>},
    {name: 'Masuk', icon: <FiLogIn/>, to:'/landing'},
    {name: 'Keluar', icon: <FiLogOut/>, nav:() => setTampil(true)}
  ]
  const [tampil, setTampil] = useState(false);
  let navigate = useNavigate();
  const [gambar, setGambar] = useState(null);
  const [photo, setPhoto] = useState(null);

  let fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setGambar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div  className="hidden lg:flex flex-col w-[200px] bg-white h-screen fixed left-0 top-0 shadow-gray-500 shadow-[3px_0_4px_0]">
        <aside className="w-full h-[25%] p-[10%] flex flex-col justify-center items-center gap-3">
          <div className="w-[84px] h-[84px] bg-white rounded-full">
            <img src={gambar ? gambar : photo === null ? user : photo} alt="" />
            <Drawer></Drawer>
          </div>
          <p className="font-semibold text-[12px]">Andaru Danuarta</p>
        </aside>
        <aside className="w-full h-[75%] flex flex-col  items-center pt-[10%] gap-[5%]">
          {menu.map((val,index) =>{
            return(
              <NavLink key={index} to={val.to}>
            <div onClick={val.nav} className="w-[150px] h-[40px] text-[20px] flex items-center gap-3 hover:text-white hover:bg-[#0DB1F5] pl-2 rounded-md">
              {val.icon}
              <p className="text-[14px] font-semibold">{val.name}</p>
            </div>
          </NavLink>
            )
          })}
        </aside>
      </div>
      {tampil ? (
        <main className="w-full h-screen bg-black bg-opacity-75 flex justify-center items-center fixed top-0 lg:left-0">
          <article className="w-[270px] h-[200px] bg-white rounded-md">
            <div className="w-full h-[30%] flex justify-end pr-2 pt-2">
              <AiOutlineCloseCircle
                onClick={() => setTampil(false)}
                className="text-[#FF0000]"
              />
            </div>
            <div className="w-full h-[30%]">
              <h3 className="text-center font-medium">
                DO YOU WANT TO LOGOUT?
              </h3>
            </div>
            <div className="w-full h-[30%] flex justify-evenly items-center">
              <button
                onClick={() => navigate("/login")}
                className="w-[100px] h-[23px] text-[12px] border-black border"
              >
                YES I'M SURE
              </button>
              <button
                onClick={() => setTampil(false)}
                className="w-[100px] h-[23px] text-[12px] text-white bg-[#0DB1F5]"
              >
                NO WAY
              </button>
            </div>
          </article>
        </main>
      ) : null}
    </>
  );
};

export default Profilebar;
