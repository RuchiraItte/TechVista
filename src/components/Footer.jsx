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
      icon: <LuPhone size={20} />,
      title: "Contact Info",
      content: (
        <>
          <p className="flex gap-2 items-center py-1 cursor-pointer">
            <IoMdMail size={18} />
            <a href="mailto:techvista@vsit.edu.in?subject=TechVista Inquiry&body=Hello, I would like to know more about...">techvista@vsit.edu.in</a>
          </p>
          <p className="flex gap-2 items-center py-1 cursor-pointer">
            <IoCall size={18} />
             <a href="tel:+919082249947">9082249947</a>
          </p>
          <p className="flex gap-2 items-center py-1 cursor-pointer">
            <FaLocationDot size={18} />
            
            <a target="_blank" href="https://www.google.com/maps/place/Vidyalankar+School+of+Information+Technology/@19.0212323,72.8679978,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf394b345bdd:0x8d44ea4f85af3ceb!8m2!3d19.0212323!4d72.8705727!16s%2Fg%2F1hg4vql33?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D">Vidyalankar School of Information Technology</a>
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Timing",
      content: (
        <>
          <p className=" py-1">28th February & 1st March </p>
          <p className=" py-1">Friday & Saturday </p>
          <p className=" py-1">09:00 AM Onwards</p>
        </>
      ),
    },
    {
      id: 3,
      title: "Follow Us",
      content: (
        <div className="flex gap-5">
          <a target="_blank" href="https://www.instagram.com/techvista_vsit">
            <FaInstagram size={20} />
          </a>
          {/* <FaLinkedin size={20} /> */}
        </div>
      ),
    },
  ];

  return (
    <div
      id="contactus"
      className="bg-gradient-to-tr from-[#2c1726] 0% via-[#1a0714] 50% to-[#000000] 100%  text-white px-8 pt-8 pb-3 flex flex-col items-center"
    >
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center gap-10 md:gap-16 lg:gap-32 xl:gap-64 w-full max-w-6xl">
        {footerItems.map((item) => (
          <div key={item.id} className="text-left">
            <h1 className="font-bold text-[#EF428C] text-left">
              {item.title}
            </h1>
            <div className="text-sm mt-2 text-left">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl mt-7">
        <hr className="border-[#EF428C]" />
      </div>
      <div className="text-center mt-3">
        <p className="text-sm">
          © TechVista 2025, All Rights Reserved By Vidyalankar School of Information Technology
        </p>
      </div>
    </div>
  );
};

export default Footer;
