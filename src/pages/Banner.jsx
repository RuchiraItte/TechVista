import React from 'react'
import { FaPlay, FaPlayCircle } from 'react-icons/fa';

const Banner = () => {
  const backgroundStyle = {
    backgroundImage: "url('/images/banner_img.png')",
  };
  const backgroundStyleSmall = {
    backgroundImage: "url('/images/banner_img_small.png')",
  };

  return (
    <div id='home' className="bg-yellow-300 h-[600px] lg:h-[600px] xl:h-[720px] bg-cover bg-center bg-no-repeat bg-[url('/images/banner_img_small.png')]  md:bg-[url('/images/banner_img.png')]" >
        <div className=' bg-black bg-opacity-70 md:bg-opacity-35 h-[600px] lg:h-[600px] xl:h-[720px] shadow-inner shadow-pink-600'>

          <div className=' text-white flex flex-col gap-5 xl:gap-8 justify-center items-center md:items-start h-[90%]  md:px-12 lg:px-20 xl:px-24'>
          <div className=' flex gap-2 md:gap-4'>
            <div className='w-[42px] h-[42px] md:w-[40px] lg:w-[52px] xl:w-[62px] md:h-[40px] lg:h-[52px] xl:h-[62px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 rounded-full'></div>
            <div className="w-0 h-0 border-l-[20px] md:border-l-[20px] lg:border-l-[25px] xl:border-l-[30px] border-l-transparent border-r-[20px]  md:border-r-[20px] lg:border-r-[25px] xl:border-r-[30px] border-r-transparent border-b-[40px] md:border-b-[40px] lg:border-b-[52px] xl:border-b-[59px] border-pink-600"></div>
            <div className='w-[40px] h-[40px] md:w-[38px] lg:w-[50px] xl:w-[60px] md:h-[38px] lg:h-[50px] xl:h-[60px] border-[5px] md:border-[6px] lg:border-8 border-pink-600 '></div>
            
          </div>
          <div>
             <h1 className=' text-[50px] md:text-[63px] lg:text-[80px] xl:text-[110px] font-bold tracking-wide leading-[60px] lg:leading-[80px]'>TECH<span className=' text-pink-600'>VISTA</span></h1>
             <p className=' text-[30px] md:text-[38px] lg:text-[40px] xl:text-[70px] font-bold'>2025</p>
          </div>

          <div className=' flex justify-center md:justify-start items-center gap-3'>
             <FaPlayCircle fill='#DC35C0' className=' text-white' size={40}/>
             <p className='md:text-[14px] lg:text-[17px] xl:text-[20px] w-[70%] md:w-[60%] lg:w-[70%] tracking-widest'>"Join the Ultimate Tech Survival Games"</p>
          </div>

          </div>

       </div>
    </div>
  )
}

export default Banner