import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navdesktop = () => {
  return (
    <div className="hidden lg:w-full lg:h-[50px] lg:bg-[#525255] lg:bg-opacity-[0.36] lg:flex justify-between lg:fixed lg:top-0">
      <ul className="w-[90%] flex justify-start items-center gap-[5%] pl-[30%]">
        <li className="hover:text-[#0047FF] cursor-pointer">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            HOME
          </Link>
        </li>
        <li className="hover:text-[#0047FF] cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
        </li>
        <li className="hover:text-[#0047FF] cursor-pointer">
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            duration={500}
          >
            SERVICE
          </Link>
        </li>
        <li className="hover:text-[#0047FF] cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </li>
        <li className="hover:text-[#0047FF] cursor-pointer">ORDER</li>
        <li className="hover:text-[#0047FF] cursor-pointer">NOTIFICATION</li>
      </ul>
      <div className="w-[10%] text-[30px] flex justify-end items-center pr-3">
        <NavLink to={'/update'}>
        <HiOutlineUserCircle />
        </NavLink>
      </div>
    </div>
  );
};

export default Navdesktop;
