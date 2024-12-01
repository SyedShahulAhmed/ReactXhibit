import React from "react";
import hero from "../assets/hero.png";
import RArrow from '../assets/RightArrow.png'
const SectionReact = () => {
  return (
    <div className=" max-w-[1240px] mx-auto  lg:mb-0 ">
      <div className="grid lg:grid-cols-2 place-content-center ">
        <div className=" flex flex-col justify-center items-start px-7 m text-white py-7 ">
      <div className="max-w-[500px]">
      <h1 className="text-3xl  md:text-4xl lg:text-5xl py-6 font-bold">
      Empower Your Imagination with <span className="text-[#80ffe8]">React.js</span>  <br/>
      <span className="text-xl  md:text-2xl lg:text-3xl py-6 font-bold">Build, Innovate, Repeat!</span>
        </h1>
        <p className="text-lg text-gray-400 pb-6 ">
        Step into a World of Dynamic, Inspiring, and Innovative React.js Creations. Explore My Journey of Code and Components!
        </p>
        <a href="#project">
        <button className="text-white flex justify-center gap-2 hover:bg-[#00bd9d]  py-3 px-6 rounded-lg bg-[#00bd9d]">
            Explore Projects
              <img src={RArrow} alt="" className="w-6 h-6"/>
        </button>
        </a>
      </div>
        </div>
        <div
          className=" flex justify-center p-8 
        "
        >
          <img
            src={hero}
            alt="Hero Image"
            className="w-full   drop-shadow-2xl rounded-lg  transition-transform transform hover:scale-105 hover:rotate-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionReact;
