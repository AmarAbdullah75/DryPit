import { Drawer, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { BiBell, BiHomeAlt, BiListCheck, BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [tampil, setTampil] = useState(false);
  let navigate = useNavigate();
  let activeLink = ({ isActive }) => {
    return isActive ? "hover:text-white" : "hover:text-white";
  };

  return (
    <>
      {tampil ? (
        <main
          key="lgout"
          className="w-full h-screen bg-black bg-opacity-75 flex justify-center items-center fixed top-0"
        >
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
      <nav className="w-full h-[50px] flex lg:hidden items-center">
        <div className="w-2/4 flex items-center pl-[2%] gap-2">
          <div className="w-10 h-10 bg-orange-200 rounded-full"></div>
          <h3 className="text-[20px] font-semibold text-black">User</h3>
        </div>
        <div className=" w-2/4 flex justify-end text-[30px] pr-[3%] border-l">
          <HiOutlineBars3
            onClick={() => {
              setVisible(true);
            }}
          />
        </div>
      </nav>
      <Drawer
        visible={visible}
        title="close"
        onClose={() => {
          setVisible(false);
        }}
        onClick={() => {
          setTampil(false);
        }}
        className="relative"
        size={'200px'}
      >
        <Menu
          mode="inline"
          onClick={({ key }) => {
            if (key === "Logout") {
              setTampil(true); // Menampilkan notifikasi saat Logout diklik
            } else {
              navigate(key);
            }
          }}
          defaultOpenKeys={["session"]}
          items={[
            { label: "Home", key: "/", icon: <BiHomeAlt /> },
            { label: "Profile", key: "/profile", icon: <BiUserCircle /> },
            { label: "Notifikasi", key: "/notification", icon: <BiBell /> },
            { label: "Pesanan", icon: <BiListCheck /> },
            { label: "Pengaturan", icon: <IoSettingsOutline /> },
            {
              label: "Session",
              key: "session",
              children: [
                { label: "Login", key: "/landing", icon: <FiLogIn /> },
                {
                  label: "Logout",
                  key: "Logout",
                  icon: <FiLogOut />,
                  danger: true,
                },
              ],
            },
          ]}
        ></Menu>
      </Drawer>

      {tampil && (
        <div className="w-full h-screen bg-black bg-opacity-75 flex justify-center items-center fixed top-0">
          <div className="w-[270px] h-[200px] bg-white rounded-md">
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
                onClick={() => {
                  alert("Logout Confirmed"); // Alert yang ditampilkan ketika Logout dikonfirmasi
                  setTampil(false);
                }}
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
