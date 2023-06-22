import React, { useRef } from "react";
import Navbar from "../../component/Navbar";
import gmbrhome from "../../assets/23803707_6874251.jpg";
import Service from "../../component/Service";
import Navdesktop from "../../component/Navdesktop";
import { BsArrowDown } from "react-icons/bs";
import About from "../../component/About";
import { Element, Link } from "react-scroll";
import Contact from "../../component/Contact";
import '../../index.css'

const Home = () => {
  return (
    <>
      <main  className="w-full ">
        <Navbar />
        <section id="sectionhome" className="lg:w-full lg:h-screen lg:flex">
          <Element name="home" className="element">
            <img src={gmbrhome} alt="" className="w-full lg:hidden" />
          </Element>
        <div className="hidden lg:scroll-smooth lg:w-[60px] lg:h-[60px] lg:bg-white lg:flex lg:justify-center lg:items-center lg:rounded-full lg:absolute lg:top-[85%] lg:right-[47%] shadow-black shadow-[0_0_5px_0] animate-bounce hover:animate-none hover:transition hover:delay-150 hover:duration-1000 hover:ease">
          <Link to="about" smooth={true} duration={500}>
            <BsArrowDown className="lg:relative lg:text-[30px]" />
          </Link>
        </div>
        </section>
        <Element name="about" className="element">
          <About id="about" />
        </Element>
        <Element name="service" className="element">
          <Service />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
        {/* <Bottombar /> */}
        <Navdesktop />
      </main>
    </>
  );
};

export default Home;
