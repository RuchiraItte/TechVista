import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegClock,
  FaWhatsapp,
} from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiCopyrightLine } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const gridItems = [
    {
      id: 1,
      title: "Quick Links",
      content: (
        <>
          <a href="#about">
            <p className="pt-2">About Event</p>
          </a>
          <a href="#events">
            <p className="pt-2">Schedule</p>
          </a>
          <a href="#events">
            <p className="pt-2">Register</p>
          </a>
        </>
      ),
    },
    {
      id: 2,
      icon: <LuPhone size={20} />,
      title: "Contact Info",
      content: (
        <>
          <p className="pt-2 flex gap-1 items-center">
            <IoMdMail size={18} />
            contact@techvista.com
          </p>
          <p className="pt-2 flex gap-1 items-center">
            <IoCall size={18} />
            9876543212
          </p>
          <p className="pt-2 flex gap-1 items-center">
            <FaLocationDot size={18} />
            Vidyalankar School of Information Technology
          </p>
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
      title: "Follow Us",
      content: (
        <div className="flex gap-5 pt-2">
          {/* <FaWhatsapp size={20} /> */}
          <a href="https://www.instagram.com/techvista_vsit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <FaInstagram size={20} />
          </a>

          {/* <FaFacebook size={20} /> */}
          <FaLinkedin size={20} />
        </div>
      ),
    },
  ];

  return (
    <div id="contactus" className=" bg-[#140009] text-white px-6 lg:px-0">
      <div className="xl:px-10 px-1 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1">
        {gridItems.map((item) => (
          <div key={item.id} className="flex lg:justify-center">
            <div>
              <h1 className="font-bold text-[#EF428C]">{item.title}</h1>
              <p className=" text-[10px] md:text-[12px] lg:text-[14px] ">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" md:px-20 xl:px-40">
        <hr className=" border-[#EF428C]" />
      </div>
      <div className=" text-center py-8 px-5">
        <p className=" text-sm">
          © 2025, All Rights Reserved By Vidyalankar School of Information
          Technology
        </p>
      </div>
    </div>
  );
};

export default Footer;
