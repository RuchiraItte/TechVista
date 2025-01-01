

import {motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { IoMdMenu } from 'react-icons/io'

const Navbar = () => {
  const [open,setOpen]=useState(false)
  const [activePage, setActivePage] = useState(window.location.pathname); 
  const [menuVisible, setMenuVisible] = useState(true)

  

  const handleLinkClick = (href) => {
    setActivePage(href);
    setMenuVisible(false); // Hide menu after clicking
  };

  const navLinks = [
    {id:1, name: "Home", href: "/" },
    {id:2, name: "About", href: "#about" },
    {id:3, name: "Events", href: "#events" },
    {id:4, name: "Sponsors", href: "#sponsors" },
    {id:5, name: "FAQ", href: "#faq" },
    {id:6, name: "Gallery", href: "#gallery" },
  ];

  return (
    <>
      <nav className=' z-10'>
        <div className='px-6 md:px-12 lg:px-20 xl:px-24 shadow-sm shadow-pink-700 bg-black flex justify-between items-center py-1 lg:py-1 xl:py-3 fixed top-0 left-0 w-full z-50 '>
          {/* logo section */}
          <div className=' text-2xl font-bold '>
            <img src='/images/landing/landing_tech_logo.png' className='w-14 h-12'/>
          </div>

          {/* menu section */}
            <div className=' hidden lg:block'>
               <ul className=' flex items-center gap-6 text-white'>
                {
                  navLinks.map((item)=>{
                    return(
                      <li key={item.id}>
                        <a href={item.href} 
                         
                        className={`inline-block py-1 px-3 text-pink-600 hover:text-pink-300 hover:underline font-semibold  ${activePage === item.href ? "underline text-pink-200" : ""}`} 
                        onClick={() => setActivePage(item.href)}>{item.name}</a>
                      </li>
                    )
                  })
                }
               </ul>
            </div>

          {/* mobile hamburger section */}
          <div className=' lg:hidden ' onClick={()=>setOpen(!open)}>
            <IoMdMenu className='text-4xl text-pink-600'/>
          </div>

        </div>
    </nav>

    {/* Mobile sidebar section */}
     <AnimatePresence mode='wait'>
        {
          open && (
            <motion.div
              initial={{opacity:0,y:-100}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-100}}
              transition={{duration:0.3}}
              className='absolute top-16 left-0 w-full h-screen bg-black/60 z-50 text-white'
              
            >
             <div className=' text-xl font-semibold bg-pink-700 py-8 m-6 rounded-md'>
                <ul className=' flex flex-col justify-center items-center gap-4' >
                  {
                    navLinks.map((item)=>{
                      return(
                        <li  key={item.id}>
                          <a href={item.href} 
                            className={`inline-block py-1 px-3 text-white hover:text-black hover:underline font-semibold  ${activePage === item.href ? "underline text-black" : ""}`}  
                            >{item.name}</a>
                        </li>
                      )
                    })
                  }
                </ul>
             </div>

            </motion.div>
          )
        }
     </AnimatePresence>
    </>
  )
}

export default Navbar