import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)

  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact Us", href: "#contactus" },
  ];

  return (
    <div className=' bg-blue-500 lg:py-4 py-2 md:px-6 lg:px-20 px-4 fixed top-0 left-0 right-0'>
        <div className=' flex items-center justify-between'>
            {/* logo */}
            <div className=' text-white text-2xl font-bold'>TechVista Logo</div>

            <div className=' lg:hidden '>
                <button className=' text-white' onClick={toggleMenu}>
                   <IoMdMenu size={40}/>
                </button>
            </div>

            {/* navitems */}
              <ul className=' hidden lg:flex space-x-8'>
              {
                navLinks.map((link, index) => (
                    <li key={index} className='hover:bg-slate-300 hover:px-2'>
                         <a href={link.href} className="text-white hover:underline">{link.name}</a>
                   </li>
               ))}
              </ul>

            
            
        </div>

        {/* mobile menu */}
        {
                isMenuOpen?(
                  <ul className=' flex-col lg:hidden'>
                    {  
                      navLinks.map((link, index) => (
                      <li key={index} className=' py-2 hover:underline hover:bg-slate-300'>
                           <a href={link.href} className="text-white hover:underline px-2 py-1 ">{link.name}</a>
                     </li>
                    ))}
                  </ul>
                ):null
              }
    </div>
  )
}

export default Navbar