import React from "react";
import { useParams } from "react-router-dom";
import Projects from "../constants/Projects.js";
import { Link } from "react-router-dom";
import Arrow from "../assets/Arrow.png";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = Projects.find((proj) => proj.id === parseInt(id));
  return (
    <div className="text-white max-w-[1240px] mx-auto py-6">
      <Link to="/">
        <img
          src={Arrow}
          alt=""
          className="w-[50px] h-[50px] mx-4 hover:scale-105"
        />
      </Link>
      <div className="flex flex-col justify-center text-center items-center ">
        <h1 className="text-xl text-[#fdb833] font-bold tracking-wider sm:xl md:text-2xl lg:text-4xl">
          {project.title}
        </h1>
        <p className="text-md text-gray-300 sm:lg md:text-xl lg:text-2xl my-4 mx-4 text-justify md:text-center leading-relaxed">
          {project.bigDescription}
        </p>
        <div>
          <h1 className="text-xl font-bold tracking-wider sm:xl md:text-2xl lg:text-4xl mt-6">
            <span className="text-[#78d5d7]">Video </span>Preview
          </h1>
          <video
            controls
            className="w-full max-w-3xl mx-auto px-2 md:px-0 rounded-lg shadow-lg border-2 border-gray-700 m-4"
            autoPlay loop muted
            style={{
              height: "auto",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            <source src={project.video} type="video/mp4 " />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 place-content-center">
        <div className="col-span-2 flex flex-col justify-centeritems center mx-6 lg:block">
            <h1 className="text-xl  sm:xl md:text-2xl lg:text-3xl  font-bold text-gray-300 tracking-wider my-6 text-center"><span className="text-[#78d5d7]">Desktop </span>Preview</h1>
            <img src={project.img} alt="" className="rounded-lg hover:scale-105 transition-all duration-300" />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 justify-center items center mx-6 ">
            <h1 className="text-xl  sm:xl md:text-2xl lg:text-3xl  font-bold text-gray-300 tracking-wider my-6 text-center"><span className="text-[#78d5d7]">Mobile </span>Preview</h1>
            <img src={project.Mimg} alt="" className="rounded-lg h-[600px] hover:scale-105 transition-all duration-300"/>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
  <a 
    href="https://github.com/SyedShahulAhmed" 
    target="_blank"
    rel="noopener noreferrer"
    className="py-2 text-white mx-3 bg-[#8a84e2] px-4 rounded-lg my-6 flex items-center"
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
      alt="GitHub Logo" 
      className="w-5 h-5 mr-2"
    />
    View More Projects
  </a>
</div>

    </div>
  );
};

export default ProjectDetails;
