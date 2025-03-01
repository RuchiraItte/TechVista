import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {

  const backgroundStyle = {
    backgroundImage: "url('/images/about_bg_img.png')",
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents tiling
   
  };

  const cardsOrganizers = [
    { id: 1, image: "images/about_o_img.jpg", title: "In-Charge",name:"Umesh Koyande" },
    { id: 2, image: "images/about_o_img.jpg", title: "In-Charge",name:"Ketaki Ghawali" },
    { id: 3, image: "images/about_o_img.jpg", title: "Coordinator",name:"Unknown" },
    { id: 4, image: "images/about_o_img.jpg", title: "Coordinator",name:"Unknown" },
 
  ];
  // const cardsCoordinaters = [
  //   { id: 2, image: "images/about_o_img.jpg", name: "Sahil Shah" },
  //   { id: 1, image: "images/about_o_img.jpg", name: "Unknown" },
  // ];

  return (
    <div className='  '>
      <div id='about' className=" bg-black" >

          <div className=' bg-pink-900 bg-opacity-35 py-10'>
            {/* top */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 w-[85%] mx-auto'>
            <div className=' text-white flex flex-col gap-4 '>
              <h1 className=' text-[25px] lg:text-[35px] xl:text-[40px] font-bold'>About the Event</h1>
              <hr className=' -mt-5 w-[50%] border-[1px] border-pink-400'/>
              <p className=' text-[12px] lg:text-[14px] text-gray-300 font-semibold'>Tech-VISTA provides students with a unique opportunity to enhance their technical expertise, foster innovation, and develop teamwork skills. Beyond being a mere tech festival, it serves as a dynamic platform for students to exhibit their technical prowess, creativity, and leadership abilities.
              Featuring a diverse array of events designed to challenge and inspire, Tech-VISTA empowers participants to broaden their horizons, expand their knowledge, and refine their skills. It's not just an event; it's a pathway for students to shine and grow in the realms of technology, creativity, and leadership.</p>
              <div className=' flex lg:flex-col lg:gap-5 gap-10'>         
              <div>
                <p className=' font-bold text-[15px] lg:text-[18px]'>WHEN</p>
                <div className='text-[12px] lg:text-[14px] text-gray-300'>
                  <p>28th February & 1st March </p>
                  <p>Friday & Saturday</p>
                </div>
              </div>
             
              </div>

            </div>
          
            <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-end items-center'>
              <div className=' flex flex-col justify-center items-center'>
                <img src='/images/rohini_mam.png' className=' w-52 h-52 rounded-full shadow-xl'/>
                <p className=' text-white text-center text-[15px] font-bold'>Principal: <br/>Dr. Rohini Kelkar</p>
              </div>
              <div className=' flex flex-col justify-center items-center'>
                <img src='/images/landing/vice-principle.JPG' className=' w-52 h-52 rounded-full shadow-xl'/>
                <p className=' text-white text-center text-[15px] font-bold'>Vice-Principal:<br/> Asif Rampurawala</p>
              </div>
            </div>
  
          </div>


           </div>
     </div>  

     <div className=' bg-gradient-to-r from-[#310e27] 0% via-[#000000] 50% to-[#28071c] 100%' >

      {/* In-charge and Coordinaters */}
     <div className="  flex flex-col items-center justify-center py-12 ">
      <h1 className=' font-bold text-[18px] text-center md:text-2xl mb-4 text-pink-600'>In-Charge and Coordinators of TechVista</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:gap-4 lg:gap-10 xl:gap-20 gap-4">
        {cardsOrganizers.map((card) => (
          <div>
          <div data-aos="zoom-y-out" data-aos-duration="1000" data-aos-delay="100" key={card.id}
            className="bg-white rounded-lg border-2 border-white shadow-custom overflow-hidden flex flex-col items-center h-[160px] w-[120px] md:h-[210px] md:w-[160px] xl:h-[260px] xl:w-[200px]">
            <img
              src={card.image}
              alt={card.title}
              className=" h-full w-full object-cover"
            />
          </div>
              <h3  className="mt-2 text-white text-[13px] md:text-xl text-center">{card.title}</h3>
              <h3 className=" text-white text-[13px] md:text-[17px] font-bold text-center">{card.name}</h3>
          </div>
        ))}
      </div>
     </div>

     {/* coordinaters */}
     {/* <div className="  flex flex-col items-center justify-center pb-12 w-full mx-auto">
     <h1 className=' font-bold text-[18px] md:text-2xl mb-4 text-pink-600'>Coordinaters of TechVista</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 md:gap-10 xl:gap-20 gap-4  ">
        {cardsCoordinaters.map((card) => (
          <div>
          <div data-aos="zoom-y-out" data-aos-duration="600" data-aos-delay="50" key={card.id}
            className="bg-white rounded-lg border-2 border-white shadow-custom overflow-hidden flex flex-col items-center h-[160px] w-[120px] md:h-[210px] md:w-[160px] xl:h-[260px] xl:w-[200px]">
            <img
              src={card.image}
              alt={card.title}
              className=" h-full w-full object-cover"
            />
          </div>
              <h3 className="mt-2 text-white text-[13px] md:text-[17px] font-bold text-center">{card.name}</h3>
          </div>
        ))}
      </div>
     </div> */}

     </div>  


    </div>
  )
}

export default About
