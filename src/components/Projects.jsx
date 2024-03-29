import React from 'react'
import weatherApp from '../Stuffs/weatherApp.JPG'
import SpringB from '../Stuffs/SpringB.jpg'
import ComingSoon from '../Stuffs/ComingS.png'


const Projects =() =>{
const proj =[
   {
      id: 1,
      src: weatherApp,
      demourl:'https://comforting-melba-f4d871.netlify.app/',
      codeurl:'https://github.com/Deepak-3012/Weather-App-SkySnap',
   },

   {
      id: 2,
      src:SpringB,
      demourl:'https://github.com/Deepak-3012',
      codeurl:'https://github.com/Deepak-3012',
   },
   {
      id: 3,
      src: ComingSoon,

      demourl:'https://github.com/Deepak-3012',
      codeurl:'https://github.com/Deepak-3012/My-Portfolio',

   
   },


];

  return (  
  <div name="Projects" className=" bg-gradient-to-b from from-black to-gray-800 w-full text-white lg:h-screen md:h-screen sm:h-fit">
     <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full ">
     <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-sky-500">Projects</p>
        <p className="py-6">Some of my Recent Works</p>

     </div>


     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

     {
   proj.map(({id,src,demourl,codeurl}) =>(
      <div key={id} className=" shadow-md  shadow-gray-500 rounded-lg">
      <img src={src} alt="" className="  rounded-md duration-200 hover:scale-105"/>
      <div className="flex items-center justify-center">
         <a href={demourl} target="_blank" rel ="nopener noreferrer">
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button></a>
          <a href={codeurl} target="_blank" rel ="opener noreferrer">
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button></a>
          
      </div>
   </div>
      
   ))
}

   
     </div>
     </div>
  </div>
  );
};

export default Projects;
