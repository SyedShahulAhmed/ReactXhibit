import React from 'react'
import js from '../assets/react.png'
import Uarrow from '../assets/UpArrow.png'
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Reacty = () => {
  return (
    <div className=" max-w-[1240px] mx-auto ">
      <div className="grid lg:grid-cols-2 place-content-center mb-7">
      <div
          className=" flex justify-center p-8 
        "
        >
          <img
            src={js}
            alt="Hero Image"
            className="w-full sm:w-[50%] lg:w-[100%]  drop-shadow-2xl rounded-lg  transition-transform transform hover:scale-105 hover:rotate-2"
          />
        </div>
        <div className=" flex flex-col justify-center items-start px-7 m text-white py-7 ">
      <div className="max-w-[500px]">
      <h1 className="text-3xl  md:text-4xl lg:text-5xl py-6 font-bold text-[#80ffe8]">
      Why React?
        </h1>
        <p className="text-lg text-gray-400 pb-6 text-justify">
        React is the heart of modern web development. It's a powerful JavaScript library that enables developers to build fast, dynamic, and interactive user interfaces with ease.
        <br/>
        React simplifies the process of creating seamless user experiences. With its component-based architecture, React powers everything from responsive UIs and real-time updates to complex web applications, ensuring performance and scalability
        </p>
        <a href="https://legacy.reactjs.org/docs/getting-started.html">
        <button className="text-white flex justify-center gap-2 hover:bg-[#00bd91] py-3 px-6 rounded-lg bg-[#00bd9d] items-center">
            Learn more
           <HiMiniArrowUpRight size={20}/>
        </button>
        </a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Reacty

