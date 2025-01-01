import React from 'react'
import { FaPlay, FaPlayCircle } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Banner = () => {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   const uniqueUrl = `/images/landing/Hackathon-Techvista.pdf?timestamp=${new Date().getTime()}`; // Append a timestamp to avoid caching
  //   link.href = uniqueUrl;
  //   link.download = "sample.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/images/landing/Hackathon-Techvista.pdf"; // Use the correct path to your file
    link.download = "samplee.pdf"; // File name for the download
    document.body.appendChild(link); // Append to DOM
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove link from DOM
  };


  return (
    <div id='home' className=" h-full  bg-gradient-to-tr from-[#310e27] 0% via-[#000000] 50% to-[#000000] 100% " >
    {/* // <div id='home' className=" h-[600px] lg:h-[600px] xl:h-[720px]  bg-cover bg-center bg-no-repeat bg-[url('/images/landing/landing_bg_small.png')]  md:bg-[url('/images/landing/new_landing_bg.png')] " > */}
      
        <div className='  grid md:grid-cols-2 grid-cols-1 or w-[85%] mx-auto gap-5 md:gap-10 xl:gap-56 h-[600px] lg:h-[600px] xl:h-[720px] '>

          <div className=' order-2 md:order-1 text-white flex flex-col gap-5 xl:gap-8 pb-12 md:pb-0 justify-end md:justify-center items-center md:items-start h-[90%]  '>
          <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="100" className=' flex gap-2 md:gap-4'>

            <div className='w-[42px] h-[42px] md:w-[40px] lg:w-[52px] xl:w-[62px] md:h-[40px] lg:h-[52px] xl:h-[62px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 rounded-full'></div>
            <div className="w-0 h-0 border-l-[20px] md:border-l-[20px] lg:border-l-[25px] xl:border-l-[30px] border-l-transparent border-r-[20px]  md:border-r-[20px] lg:border-r-[25px] xl:border-r-[30px] border-r-transparent border-b-[40px] md:border-b-[40px] lg:border-b-[52px] xl:border-b-[59px] border-pink-600"></div>
            <div className='w-[40px] h-[40px] md:w-[38px] lg:w-[50px] xl:w-[60px] md:h-[38px] lg:h-[50px] xl:h-[60px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 '></div>
            
          </div>
          <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" >
             <h1 className=' text-[50px] md:text-[63px] lg:text-[80px] xl:text-[110px] font-bold tracking-wide leading-[60px] lg:leading-[80px]'>TECH<span className=' text-pink-600'>VISTA</span></h1>
             <p className=' text-[30px] md:text-[38px] lg:text-[40px] xl:text-[70px] font-bold'>2025</p>
          </div>

          <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="200" className=' flex justify-center md:justify-start items-center gap-3'>
             <FaPlayCircle fill='#DC35C0' className=' text-white' size={40}/>
             <p className='text-[14px] md:text-[14px] lg:text-[17px] xl:text-[20px] w-[70%] md:w-[60%] lg:w-[70%] tracking-widest'>"Join the Ultimate Tech Survival Games"</p>
          </div>

          </div>

          <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200" className=' flex order-1 md:order-2  items-center justify-center md:justify-end mt-10 md:mt-0 xl:pr-20'>
            <div>
            {/* <div className=' flex justify-center items-center absolute top-32'>
             
                  <button onClick={handleDownload} className=' text-white bg-cyan-600 px-3 py-1 flex items-center gap-2'>Brochure<HiDownload /></button>

            </div> */}
            <div className=' border-[6px] md:border-[8px] border-white rounded-full w-[180px] h-[180px] md:w-[240px] md:h-[240px]  lg:w-[300px] lg:h-[300px] xl:w-[390px] xl:h-[390px] shadow-landing justify-center items-center flex'>
               <img src='/images/landing/landing_tech_logo.png' className='w-[140px] h-[140px] md:w-[180px] md:h-[180px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] justify-center items-center flex'/>
            </div>
            </div>
            {/* <img src='/images/landing/landing_tech_logo.png' className=' '/> */}
          </div>

       </div>
    </div>
  )
}

export default Banner