import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import xcom from "../assets/X.png";
import { toast } from "react-toastify";
import img from '../assets/Contact.png'
const Contact = () => {
  const AccessKey = import.meta.env.VITE_API_URL
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", AccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div className="max-w-[1240px] bg-transparent mx-auto mb-7">
      <h1 className="text-center uppercase tracking-wider font-bold text-3xl  md:text-4xl lg:text-5xl text-[#1cfeba] py-0 lg:py-7">
        Contact form
      </h1>
      <div
        className="grid lg:grid-cols-2 place-content-center 
      border-gray-500
      lg:border-2 rounded-xl lg:shadow-lg shadow-slate-900"
      >
        <div className="flex flex-col justify-center lg:py-12 px-12">
          <img src={img} alt="" className="w-20 h-20 object-cover mt-8 mx-auto"/>
          <p className="text-xl leading-relaxed py-6 text-gray-400">
            I’d love to hear from you! Whether you have feedback on my projects,
            want to collaborate, or just want to say hello, feel free to reach
            out using the form. I’ll get back to you as soon as I can
          </p>
          <div className="flex lg:py-6 space-x-8 justify-center items-center text-white">
            <a
              href="https://x.com/ShahulAhmed17?t=fc_t7cu32MB3FFu8ggr-Bg&s=08"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FaTwitter className="text-2xl hover:text-[#1DA1F2] transition-colors duration-300" /> */}
              <img src={xcom} alt="" className="w-6 h-6 invert hover:invert-0 transition-all duration-300" />
            </a>
            <a
              href="https://github.com/SyedShahulAhmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl  hover:text-[#333] transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahul-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl  hover:text-[#0077B5] transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/vincenzo_773/profilecard/?igsh=cDBsMWVzMGg0YzU3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl  hover:text-[#E1306C] transition-colors duration-300" />
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col justify-center px-20 gap-5 border-l-2 border-gray-700 py-5">
          <input
            type="text"
            name="Name"
            id=""
            required
            className="p-2 px-5 rounded-lg text-lg bg-transparent border-2 border-[#76e5fc] text-white"
            placeholder="Enter name"
          />
          <input
            type="email"
            name="Email"
            id=""
            required
            className="p-2 px-5 rounded-lg text-lg bg-transparent border-2 border-[#76e5fc] text-white"
            placeholder="Enter email"
          />
          <textarea
            name="Message"
            id=""
            rows="5"
            required
            className="p-2 px-5 text-lg rounded-lg bg-transparent resize-none border-2 border-[#76e5fc] text-white"
            placeholder="Enter message"
          ></textarea>
          <button
            type="submit"
            className="bg-[#4bc0d9] text-white w-[30%] mx-auto py-2 rounded-xl"
          >
            {result ? result : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
