import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white  lg:h-screen md:h-screen sm:h-fit">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-sky-500">Contact</p>
            <p className="py-6">You can contact me through the below form</p>
        </div>
        <div class="flex justify-center items-center">
            <form action="https://getform.io/f/8d11ad40-5bd2-4e47-9849-1db8cb3c1c16" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input type="text" name="email" placeholder="Enter your email" className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <textarea name="message" placeholder="Enter your message" rows="11" className="p-2  bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                <button className="text-white bg-gradient-to-b  from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
                </form>
        </div>
        </div>
    </div>
  );
};

export default Contact;