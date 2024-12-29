import React from 'react'

import Slider from 'react-slick'

const Gallery = () => {
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true, 
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToScroll:1,
          slidesToShow:3,
          infinite:true
        }
      },
      {
        breakpoint:1020,
        settings:{
          slidesToScroll:1,
          slidesToShow:2,
          initialSlide:2
        }
      },
      {
        breakpoint:640,
        settings:{
          slidesToScroll:1,
          slidesToShow:1,
          // infinite:true
        }
      },
    ]
  };

  const navLinks = [
    {img: "/images/hackathon.jpg"},
    {img: "/images/robotics.jpg"},
    {img: "/images/hackathon.jpg"},
    {img: "/images/robotics.jpg"},
    {img: "/images/hackathon.jpg"},
    {img: "/images/hackathon.jpg"},
    {img: "/images/robotics.jpg"},
    
  ];
  return (
    <div id='gallery' className=' bg-gray-200 pb-10 pt-5 '>

      {/* top */}
      <div className='flex justify-center flex-col items-center px-2'>
        <h1 className='text-2xl font-bold'>Gallery</h1>
        {/* <p className='text-center'>Step into the spotlight and showcase your talents at TechVista 2025</p> */}
        <hr className='border-2 border-black w-[20%] mt-2' />
      </div>

        {/* bottom */}
        <div className='lg:w-[80%] md:w-[90%] mx-auto '>
         <Slider {...settings}>
           {
            navLinks.map((data)=>(          
              <div key={data.id} className='pt-10 px-4 '>
              
                <div className=' ' >
                  <img src={data.img} className='  ' />
                </div>
    
              </div>
            ))
           }
          </Slider> 
        </div>
    </div>
  )
}

export default Gallery