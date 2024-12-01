import React,{useState} from "react";
import Projects from '../constants/Projects.js'
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";

const Project = () => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const loadMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  }
  const allLoaded = visibleCount >= Projects.length;
  return (
    <div className="max-w-[1240px] mx-auto mb-7 " id="project">
      <h1 className='uppercase tracking-wider font-bold text-3xl  md:text-4xl lg:text-5xl text-[#1cfeba] py-0 lg:py-7 text-center mb-7'>
        Projects
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 place-content-center">
       {Projects.slice(0, visibleCount).map((item,key) => (
         <div key={key} className="max-w-[350px]  flex justify-center flex-col items-center  border-2 border-[#426d60] shadow-md shadow-[#90ffdc] rounded-lg hover:scale-105 p-5 transition-all duration-500 mb-5">
         <img src={item.img} alt="" className="w-full mx-auto object-cover rounded-lg " />
         <h2 className="text-[#35ff69] text-3xl   w-full text-center pt-5">
           {item.title}
         </h2>
         <p className="text-gray-200 py-2 text-center ">{item.miniDescription}</p>
         <div className="flex justify-center items-center">
           <Link to={item.github}>
           <button className="py-2 text-black font-semibold text-center mx bg-[#69d1c5]  hover:bg-[#4c9f98] px-4 rounded-lg my-2 flex justify-center items-center gap-1">
            <FaGithub/>
           Github
           </button>
           </Link>
           <Link
                to={`/project/${item.id}`}
                className="py-2 text-black font-semibold mx-3 bg-[#69d1c5]  hover:bg-[#4c9f98] px-4 rounded-lg my-2
                flex justify-center items-center gap-1"
              >
                <TbListDetails/>
                Details
              </Link>
         </div>
       </div>
       ))}
        <button className="mx-auto  sm:col-span-2 lg:col-span-3 mt- rounded-lg h-[50px] w-[100px] bg-[#00607a] text-white" onClick={loadMoreProjects}
        disabled={allLoaded}
        >Load more</button>
      </div>
      
    </div>
  );
};

export default Project;
