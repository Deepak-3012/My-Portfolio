import React from "react";
import htmlImg from "../Stuffs/htmlImg.png";
import cssImg from "../Stuffs/cssImg.png";
import javaScript from "../Stuffs/javaScript.png";
import reactImg from "../Stuffs/reactImage.png";
import javaImg from "../Stuffs/javaImg.png";
import SBimg from "../Stuffs/SBimg.png";
import gitImg from "../Stuffs/gitImg.png";
import mysql from "../Stuffs/mysql.png";
import python from "../Stuffs/python.png";

const Skills = () => {

const tech = [
    {
        id:1,
        src:htmlImg,
        title: 'HTML',
        style: 'shadow-orange-500',
    },
    {
        id:2,
        src: cssImg,
        title: 'CSS',
        style: 'shadow-blue-500',
    },
    {
        id:3,
        src:javaScript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
    },
    {
        id:4,
        src: reactImg,
        title: 'React JS',
        style: 'shadow-sky-600',
    },
    {
        id:5,
        src: javaImg,
        title: 'Java',
        style: 'shadow-red-500',
    },
    {
        id:6,
        src:python,
        title: 'Python',
        style: 'shadow-yellow-500',
    },
    {
        id:7,
        src:SBimg,
        title: 'Spring Boot',
        style: 'shadow-green-300',
    },
    
    {
        id:8,
        src: mysql,
        title: 'MySQL',
        style: 'shadow-blue-600',
    },
    {
        id:9,
        src:gitImg,
        title: 'Git',
        style: 'shadow-orange-500',
    },
   
    
  
];

  return (
   
    <div name='Skills' className="bg-gradient-to-b from-gray-800 to-black w-full  lg:h-screen md:h-screen sm:h-fit">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className ="text-4xl font-bold border-b-4 border-sky-500 p-2 inline"> Skills </p>
          <p className="py-6"> Technologies that i use</p>
        </div>
        <div className="w-full grid grid-col-2  sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

      { 
       tech.map(({id,src,title,style}) => (
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} alt="" className="w-20 mx-auto"/>
        <p className="mt-4">{title}</p>
    </div>

       ))
    }
       
       
        </div>
      </div>
    </div>
    
  );
};

export default Skills;
