import React from "react";
import batsy from "../Stuffs/Batsy.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import res from '../Stuffs/Resume_samp.pdf';
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className ="text-4xl sm:text-7xl font-bold text-white"> I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am a software developer. My tech stack includes React for the front-end and Spring Boot for the back-end
          </p>
          <div >
          <a href={res} download  rel="noopener" > 
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-emerald-500 cursor-pointer ">
             Resume
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowAltCircleDown  size={22} className="ml-1"/>
              </span>
            </button></a>
          </div>
        </div>
        <div >
            <img src={batsy} alt="profile" className="rounded-2xl mx-auto w-2/4 md:w-2/3 "/>
        </div>
      </div>
    </div>
  );
};

export default Home;
