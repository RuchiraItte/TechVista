import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaRegClock, FaWhatsapp } from 'react-icons/fa6'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiCopyrightLine } from 'react-icons/ri'

const Footer = () => {

  const gridItems = [
    {
      id: 1,
      icon: <MdOutlineLocationOn size={30} />,
      title: "Address",
      content: (
        <>
          <p className="pt-2">Vidyalankar College Full Address,</p>
        </>
      ),
    },
    {
      id: 2,
      icon: <LuPhone size={20} />,
      title: "Contact",
      content: (
        <>
          <p className="pt-2">Phone: 9876543212</p>
          <p>Email: techvista@gmail.com</p>
        </>
      ),
    },
    {
      id: 3,
      icon: <FaRegClock size={20} />,
      title: "Timing",
      content: (
        <>
          <p className="pt-2">Mon-Wed: 26-18 February 2025</p>
          <p>09:00 AM Onwards</p>
        </>
      ),
    },
    {
      id: 4,
      icon: null, // No icon for Join Us
      title: "Join Us",
      content: (
        <div className="flex gap-5 pt-2">
          <FaWhatsapp size={20} />
          <FaInstagram size={20} />
          <FaFacebook size={20} />
          <FaLinkedin size={20} />
        </div>
      ),
    },
  ];

  return (
    <div id='contactus' className=' bg-black opacity-80 text-white '>

      <div className="xl:px-10 px-1 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1 ">
      {gridItems.map((item) => (
        <div key={item.id} className="flex lg:justify-center">
          {item.icon && <div className="px-2">{item.icon}</div>}
          <div>
            <h1 className="font-bold">{item.title}</h1>
            <p className=' text-[10px] md:text-[12px] lg:text-[14px] '>{item.content}</p>
          </div>
        </div>
      ))}
    </div>

      <hr/>
      <div className=' text-center py-2 px-5'>
        <p className=' text-sm'>© 2025 Copyright <span className=' font-bold'>TechVista</span>. All pages Reserved</p>
      </div>

    </div>
  )
}

export default Footer