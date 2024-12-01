import React from "react";

const footer = () => {
  return (
    <div className="bg-[#003f91] text-white w-full lg:px-36 md:px-24 sm:px-12 px-6">
      <div className="flex justify-between items-center flex-col lg:flex-row py-3 ">
        <h1>Designed and Developed by <span className="text-pink-600">Shahul Ahmed</span></h1>
        <p>Copyright © {new Date().getFullYear()} SA.</p>{" "}
      </div>
    </div>
  );
};

export default footer;
