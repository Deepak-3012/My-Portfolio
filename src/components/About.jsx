import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full lg:h-screen md:h-screen sm:h-fit  bg-gradient-to-b from-gray-800  to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-500">
            About
          </p>
        </div>
        <p className=" text-xl mt-20 leading-relaxed transition duration-300 hover:text-sky-500 ">
          Hello, I'm Deepak, a passionate Computer Science Engineering student
          with a focus on Web Development and Java Full Stack Development. I
          have experience in front-end development using React.js and am
          familiar with back-end development using Spring Boot.
        </p>
        <br />
        <p className="text-xl leading-relaxed transition duration-300 hover:text-green-500">
          Additionally, I have hands-on experience with databases like MySQL for
          efficient database operations. I design websites that are both
          aesthetically pleasing and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default About;
