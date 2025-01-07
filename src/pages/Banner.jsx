// import React from 'react'
// import { FaPlay, FaPlayCircle } from 'react-icons/fa';
// import { HiDownload } from 'react-icons/hi';

// const Banner = () => {
//   // const handleDownload = () => {
//   //   const link = document.createElement("a");
//   //   const uniqueUrl = `/images/landing/Hackathon-Techvista.pdf?timestamp=${new Date().getTime()}`; // Append a timestamp to avoid caching
//   //   link.href = uniqueUrl;
//   //   link.download = "sample.pdf";
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   document.body.removeChild(link);
//   // };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/images/landing/Hackathon-Techvista.pdf"; // Use the correct path to your file
//     link.download = "samplee.pdf"; // File name for the download
//     document.body.appendChild(link); // Append to DOM
//     link.click(); // Trigger the download
//     document.body.removeChild(link); // Remove link from DOM
//   };


//   return (
//     <div id='home' className=" h-full  bg-gradient-to-tr from-[#310e27] 0% via-[#000000] 50% to-[#000000] 100% " >
//     {/* // <div id='home' className=" h-[600px] lg:h-[600px] xl:h-[720px]  bg-cover bg-center bg-no-repeat bg-[url('/images/landing/landing_bg_small.png')]  md:bg-[url('/images/landing/new_landing_bg.png')] " > */}

//             <div className=' flex justify-center items-center absolute top-20 right-5 md:right-12 lg:right-16 xl:right-24'>     
//                   <button onClick={handleDownload} className=' text-white bg-cyan-600 px-1 md:px-3 py-1 flex items-center gap-1 md:gap-2 text-xs md:text-[12px]'>Brochure<HiDownload /></button>
//             </div>
      
//         <div className='  grid md:grid-cols-2 grid-cols-1 or w-[85%] mx-auto gap-5 md:gap-10 xl:gap-56 h-[600px] lg:h-[600px] xl:h-[720px] '>

//           <div className=' order-2 md:order-1 text-white flex flex-col gap-5 xl:gap-8 pb-12 md:pb-0 justify-end md:justify-center items-center md:items-start h-[90%]  '>
//           <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" className=' flex gap-2 md:gap-4'>

//             <div className='w-[42px] h-[42px] md:w-[40px] lg:w-[52px] xl:w-[62px] md:h-[40px] lg:h-[52px] xl:h-[62px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 rounded-full'></div>
//             <div className="w-0 h-0 border-l-[20px] md:border-l-[20px] lg:border-l-[25px] xl:border-l-[30px] border-l-transparent border-r-[20px]  md:border-r-[20px] lg:border-r-[25px] xl:border-r-[30px] border-r-transparent border-b-[40px] md:border-b-[40px] lg:border-b-[52px] xl:border-b-[59px] border-pink-600"></div>
//             <div className='w-[40px] h-[40px] md:w-[38px] lg:w-[50px] xl:w-[60px] md:h-[38px] lg:h-[50px] xl:h-[60px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 '></div>
            
//           </div>
//           <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" >
//              <h1 className=' text-[50px] md:text-[63px] lg:text-[80px] xl:text-[110px] font-bold tracking-wide leading-[60px] lg:leading-[80px]'>TECH<span className=' text-pink-600'>VISTA</span></h1>
//              <p className=' text-[30px] md:text-[38px] lg:text-[40px] xl:text-[70px] font-bold'>2025</p>
//           </div>

//           <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" className=' flex justify-center md:justify-start items-center gap-3'>
//              <FaPlayCircle fill='#DC35C0' className=' text-white' size={40}/>
//              <p className='text-[14px] md:text-[14px] lg:text-[17px] xl:text-[20px] w-[70%] md:w-[60%] lg:w-[70%] tracking-widest'>"Join the Ultimate Tech Survival Games"</p>
//           </div>

//           </div>

//           <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className=' flex order-1 md:order-2  items-center justify-center md:justify-end mt-14 md:mt-0 xl:pr-20'>
//             <div>

//             <div className='landingBlock glow border-[6px] md:border-[8px] border-white rounded-full w-[180px] h-[180px] md:w-[240px] md:h-[240px]  lg:w-[300px] lg:h-[300px] xl:w-[390px] xl:h-[390px]  justify-center items-center flex'>
//                <img src='/images/landing/landing_tech_logo.png' className='w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] justify-center items-center flex'/>
//             </div>
//             </div>
//             {/* <img src='/images/landing/landing_tech_logo.png' className=' '/> */}
//           </div>

//        </div>
//     </div>
//   )
// }

// export default Banner



import React, { useEffect, useState } from 'react'
import { FaPlay, FaPlayCircle } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { IoMdUmbrella } from "react-icons/io";
import { TiStarOutline } from "react-icons/ti";
import { AiOutlineAim } from "react-icons/ai";
import { LuCircle } from "react-icons/lu";
import { IoTriangleOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";


const Banner = () => {

  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);  // Set to true when the video finishes playing
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/landing/Hackathon-Techvista.pdf"; // Use the correct path to your file
    link.download = "samplee.pdf"; // File name for the download
    document.body.appendChild(link); // Append to DOM
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove link from DOM
  };


  return (
    <div id='home' className=" h-[700px] md:h-[550px] lg:h-full  bg-gradient-to-tr from-[#000000] 0% via-[#000000] 50% to-[#310e27] 100% " >
     {/* <div id='home' className=" h-[600px] lg:h-[600px] xl:h-[720px]  bg-cover bg-center bg-no-repeat bg-[url('/images/landing/landing_bg_small.png')]  md:bg-[url('/images/landing/new_landing_bg.png')] " >  */}

     <div className="flex absolute top-[95%] right-[5%] md:top-[80%] md:right-[40%] opacity-45 floating-container">
        <LuCircle className="text-pink-500" size={25} />
        <IoTriangleOutline className="text-pink-500" size={25} />
        <FaRegSquare className="text-pink-500" size={25} />
    </div>

        <div className=' absolute top-[50%] right-[4%] md:top-[75%] md:right-[10%] opacity-45 floating-container'>
          <TiStarOutline className=' text-pink-500 ' size={40}/>
        </div>

        <div className=' absolute top-[15%] right-[80%] md:top-[25%] md:right-[50%]  opacity-45 floating-container-umbrella'>
          <IoMdUmbrella className=' text-pink-500 ' size={35}/>
        </div>


        <div className=' absolute top-[40%] md:top-[15%] md:right-[80%] opacity-45 floating-container-umbrella'>
          <AiOutlineAim className=' text-white ' size={40}/>
        </div>

        <div className=' absolute top-[90%] right-[60%] md:top-[60%] md:right-[60%] floating-container-umbrella opacity-45'>
          <AiOutlineAim className=' text-white ' size={40}/>
        </div>

        <div className='brochureBlock shadow-md shadow-pink-400 flex justify-center items-center absolute top-20 right-5 md:right-12 lg:right-16 xl:right-24'>     
              <button onClick={handleDownload} className=' text-white bg-cyan-600 px-1 md:px-3 py-1 flex items-center gap-1 md:gap-2 text-xs md:text-[12px]'>Brochure<HiDownload /></button>
        </div>


      
        <div className='  grid md:grid-cols-2 grid-cols-1 or w-[85%] mx-auto gap-5 md:gap-10 xl:gap-56 h-[600px] lg:h-[600px] xl:h-[720px] '>

          <div className=' order-2 md:order-1 text-white flex flex-col  pb-12 md:pb-0 justify-end md:justify-center items-center md:items-start h-[90%]  '>

          {/* <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" className=' hidden md:flex gap-2 md:gap-4'>
            <div className='w-[42px] h-[42px] md:w-[40px] lg:w-[52px] xl:w-[62px] md:h-[40px] lg:h-[52px] xl:h-[62px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 rounded-full'></div>
            <div className="w-0 h-0 border-l-[20px] md:border-l-[20px] lg:border-l-[25px] xl:border-l-[30px] border-l-transparent border-r-[20px]  md:border-r-[20px] lg:border-r-[25px] xl:border-r-[30px] border-r-transparent border-b-[40px] md:border-b-[40px] lg:border-b-[52px] xl:border-b-[59px] border-pink-600"></div>
            <div className='w-[40px] h-[40px] md:w-[38px] lg:w-[50px] xl:w-[60px] md:h-[38px] lg:h-[50px] xl:h-[60px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 '></div>
            
          </div>

          <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" >
             <h1 className=' text-[50px] md:text-[63px] lg:text-[80px] xl:text-[110px] font-bold tracking-wide leading-[60px] lg:leading-[80px]'>TECH<span className=' text-pink-600'>VISTA</span></h1>
             <p className=' text-[30px] md:text-[38px] lg:text-[40px] xl:text-[70px] text-center md:text-left font-bold'>2025</p>
          </div> */}

         
          <div className="w-[325px] md:w-[300px] lg:w-[400px] xl:w-[600px] mt-10 mb-2 md:mt-0 md:mb-0">
      {!isVideoEnded ? (
        <video
          src="/images/landing/theme_reveal_video.mp4"
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
          className="w-full h-[170px] md:h-[200px] lg:h-[250px] xl:h-[350px]"
        />
      ) : (
        <img
          src="/images/landing/theme_reveal_static.png"
          alt="Static Image"
          className="w-full h-[170px] md:h-[200px] lg:h-[250px] xl:h-[350px]"
        />
      )}
        </div>







          <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" className=' flex justify-center md:justify-start items-center gap-3'>
             <FaPlayCircle fill='#DC35C0' className=' text-white' size={40}/>
             <p className='text-[14px] md:text-[14px] lg:text-[17px] xl:text-[20px] w-[80%] md:w-[60%] lg:w-[70%] tracking-widest'>"Join the Ultimate Tech Survival Games"</p>
          </div>

          </div>


          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className=' flex order-1 md:order-2  items-center justify-center md:justify-end mt-28 md:mt-0 xl:pr-20'>
            <div>

            <div className='landingBlock glow w-[250px] h-[250px] md:w-[260px] md:h-[260px]  lg:w-[330px] lg:h-[330px] xl:w-[420px] xl:h-[420px]  justify-center items-center flex'>
               <img src='/images/landing/landing_tech_logo.png' className='w-[195px] h-[195px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] xl:w-[335px] xl:h-[340px] justify-center items-center flex'/>
            </div>
            </div>
            {/* <img src='/images/landing/landing_tech_logo.png' className=' '/> */}
          </div>

       </div>
    </div>
  )
}

export default Banner