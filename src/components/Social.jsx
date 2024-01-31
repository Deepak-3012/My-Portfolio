import React from 'react'
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'


const Social = () => {
    const links = [
{
    id:1,
    child: (
        
              <>
                Github<FaGithub size={29}/>
            </>
       
    ),
    href: 'https://github.com/Deepak-3012',
    style: 'rounded-tr-md',

},

    


{
id:2,
child: (
    
          <>
            Whatsapp<FaWhatsapp  size={29}/>
        </>
   
),
href: 'https://wa.me/919344242990',
},

{
    id:3,
    child: (
        
              <>
                Mail<HiOutlineMail size={29}/>
            </>
       
    ),
    href: 'mailto:deepak.20021230@gmail.com',


},
{
    id:4,
    child: (
        
              <>
                LinkedIn<FaLinkedin size={29}/>
            </>
       
    ),
    href: 'https://linkedin.com/in/deepak-s-linked3012',
    style: 'rounded-br-md',

},


    ];
  return (
    <div className="hidden lg:flex first-letter:flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id,child,href,style}) =>(

    <li key={id}className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"}>
    <a href={href} target="_blank" rel="noreferrer" className="flex justify-between items-center w-full text-white">{child}

</a></li>

            ))}
        
        </ul>
    </div>
  )

}

export default Social;