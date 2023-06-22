import React, { useState } from "react";
import Inputupdate from "../../component/Inputupdate";
import { RxUpdate } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import user from "../../assets/user.png";
import { BsFillCameraFill } from "react-icons/bs";
import Profilebar from "../../component/Profilebar";

const Editprofile = () => {
  const [gambar, setGambar] = useState(null);
  const [photo, setPhoto] = useState(null);

  let fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setGambar(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <main className="w-full h-screen lg:flex lg:flex-col lg:justify-start lg:items-center lg:gap-[10%] lg:pl-[10%]">
          <div className="w-full text-right p-3 font-semibold">
        <NavLink to={"/profile"}>
            <p>Cancel</p>
        </NavLink>
          </div>
        <div className="w-full h-[200px] flex justify-center items-center lg:relative">
          <label className=" relative">
            <div className="w-[84px] lg:w-[150px] h-[84px] lg:h-[150px] bg-white flex justify-center items-center rounded-full relative">
              <img
                src={gambar ? gambar : photo === null ? user : photo}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div
              onClick={() => {
                document.querySelector("#input-file").click();
              }}
              className="w-[35px] h-[35px] flex justify-center items-center border-[3px] rounded-full bg-black absolute top-[80%] lg:top-[90%] left-[30%] lg:left-[40%]"
            >
              <BsFillCameraFill className="text-white text-[20px]" />
            </div>
            <input
              type="file"
              name=""
              id="input-file"
              onChange={fileChangeHandler}
              className="hidden"
            />
          </label>
        </div>
        <form action="" className="flex flex-col items-center pt-[5%] lg:pt-0">
          <Inputupdate type="text" value="Your name" />
          <Inputupdate type="text" value="Your number" />
          <Inputupdate type="email" value="Your email" />
        </form>
        <button className="w-[200px] h-[43px] border-[2px] border-[#5D89F9] text-[#5D89F9] flex justify-center items-center gap-1 rounded-xl mt-[25%] lg:mt-0 ml-[25%] lg:ml-0">
          <RxUpdate /> Update
        </button>
        <Profilebar/>
      </main>
    </>
  );
};

export default Editprofile;
