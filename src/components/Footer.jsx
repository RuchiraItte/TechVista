import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegClock,
} from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const footerItems = [
    {
      id: 1,
      title: "Contact Info",
      content: (
        <>
          <p className="flex gap-2 items-center">
            <IoMdMail size={18} />
            contact@techvista.com
          </p>
          <p className="flex gap-2 items-center">
            <IoCall size={18} />
            9876543212
          </p>
          <p className="flex gap-2 items-center">
            <FaLocationDot size={18} />
            Vidyalankar School of Information Technology
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Timing",
      content: (
        <>
          <p>Mon-Wed: 26-18 February 2025</p>
          <p>09:00 AM Onwards</p>
        </>
      ),
    },
    {
      id: 3,
      title: "Follow Us",
      content: (
        <div className="flex gap-5">
          <a href="https://www.instagram.com/techvista_vsit">
            <FaInstagram size={20} />
          </a>
          <FaLinkedin size={20} />
        </div>
      ),
    },
  ];

  return (
    <div
      id="contactus"
      className="bg-[#140009] text-white px-8 pt-10 pb-3 flex flex-col items-center"
    >
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 md:gap-20 lg:gap-48 xl:gap-56 w-full max-w-6xl">
        {footerItems.map((item) => (
          <div key={item.id} className="text-left">
            <h1 className="font-bold text-[#EF428C] text-left">
              {item.title}
            </h1>
            <div className="text-sm mt-2 text-left">
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl mt-10">
        <hr className="border-[#EF428C]" />
      </div>
      <div className="text-center mt-3">
        <p className="text-sm">
          © 2025, All Rights Reserved By Vidyalankar School of Information Technology
        </p>
      </div>
    </div>
  );
};

export default Footer;
