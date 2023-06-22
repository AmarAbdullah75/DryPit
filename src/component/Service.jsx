import React from "react";
import {
  GiBearFace,
  GiHanger,
  GiPoloShirt,
  GiConverseShoe,
  GiDelicatePerfume,
  GiUnderwear,
  GiFlatbedCovered,
  GiPillow,
  GiLaptop,
} from "react-icons/gi";
import { TbIroning3 } from "react-icons/tb";
import { Link } from "react-router-dom";
const Service = () => {
  let service = [
    { name: "Laundry Kiloan", icon: <GiPoloShirt /> },
    { name: "Dry Cleaning", icon: <GiHanger /> },
    { name: "Shoe & Bag Care", icon: <GiConverseShoe /> },
    { name: "Setrika", icon: <TbIroning3 /> },
    { name: "Boneka", icon: <GiBearFace /> },
    { name: "Self Service", icon: <GiLaptop />, to: `${(<Link />)}` },
    { name: "Karpet dll", icon: <GiPillow /> },
    { name: "Sedia Parfum", icon: <GiDelicatePerfume /> },
    { name: "Pakaian dalam Wanita", icon: <GiUnderwear /> },
    { name: "Antar Jemput", icon: <GiFlatbedCovered /> },
  ];

  return (
    <section className="w-full h-screen pt-[10%] lg:pt-0 px-0 flex flex-col justify-start lg:justify-center items-center">
      <h1 className="hidden lg:flex lg:text-[40px] font-medium">
        Layanan Kami
      </h1>
      <h2 className="hidden lg:flex lg:text-[24px]">
        Silahkan pakai sepuasnya
      </h2>
      <div className="w-[350px] lg:w-[940px] h-[260px] lg:h-[425px] rounded-md border-[1px] lg:border-none border-[#D5D0D0] flex flex-wrap justify-start items-center gap-2 lg:gap-5">
        {service.map((val, index) => {
          return (
            <div
              key={index}
              className="w-20 lg:w-[150px] h-20 lg:h-[200px] flex flex-col justify-start items-center text-center"
            >
              <div className="w-14 lg:w-[150px] h-14 lg:h-[150px] text-[40px] lg:text-[55px] flex justify-center items-center hover:bg-[#0DB1F5] hover:text-white rounded-md lg:border-[#0DB1F5] lg:border-[2px]">
                {val.icon}
              </div>
              <h6 className="text-[10px] lg:text-[15px] font-medium">
                {val.name}
              </h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
