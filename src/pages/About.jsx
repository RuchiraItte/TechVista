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
    { id: 1, image: "images/hackathon.jpg", title: "In-Charge",name:"Umesh Koyande" },
    { id: 2, image: "/images/robotics.jpg", title: "Organizer",name:"Yashraj Nalage" },
    { id: 3, image: "images/hackathon.jpg", title: "Organizer",name:"Kalyani Pillamari" },
    { id: 4, image: "/images/robotics.jpg", title: "Organizer",name:"Siddhesh Mane" },
 
  ];
  const cardsCoordinaters = [
    { id: 1, image: "images/hackathon.jpg", name: "Unnnown" },
    { id: 2, image: "/images/robotics.jpg", name: "Unknown" },
  
 
  ];

  return (
    <div className='  '>
      <div id='about' className='' style={backgroundStyle}>

          <div className=' bg-black bg-opacity-65 py-10'>
            {/* top */}
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 w-[85%] mx-auto'>
            <div className=' text-white flex flex-col gap-4 '>
              <h1 className=' text-[25px] lg:text-[35px] font-bold'>About the Event</h1>
              <p className=' text-[12px] lg:text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.</p>
              <div className=' flex lg:flex-col lg:gap-5 gap-10'>         
              <div>
                <p className=' font-bold text-[15px] lg:text-[18px]'>WHEN</p>
                <div className='text-[12px] lg:text-[14px]'>
                  <p>Monday to Wednesday</p>
                  <p>26-28 Febraury</p>
                </div>
              </div>
              {/* <div>
                <p className=' font-bold text-[15px] lg:text-[18px]'>WHERE</p>
                <p className=' text-[12px] lg:text-[14px]'>VSIT,College</p>
              </div> */}
              </div>

            </div>
          
            <div className='grid justify-center md:justify-end items-center'>
              <div>
                <img src='/images/hackathon.jpg' className=' w-52 h-52 rounded-full shadow-xl'/>
                <p className=' text-white text-center text-[20px] font-bold'>Principle: Rohini Kelkar</p>
              </div>
            </div>
  
</div>


</div>
     </div>  

     <div className='bg-gradient-to-b from-white to-pink-300 '>

      {/* In-charge and Organizers */}
     <div className="  flex flex-col items-center justify-center py-12 ">
      <h1 className=' font-bold text-[18px] text-center md:text-2xl mb-4 text-pink-800'>In-Charge and Organizers of TechVista</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:gap-4 lg:gap-10 xl:gap-20 gap-4">
        {cardsOrganizers.map((card) => (
          <div>
          <div key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center h-[160px] w-[120px] md:h-[210px] md:w-[160px] xl:h-[260px] xl:w-[200px]">
            <img
              src={card.image}
              alt={card.title}
              className=" h-full w-full object-cover"
            />
          </div>
              <h3 className=" text-[13px] md:text-xl text-center">{card.title}</h3>
              <h3 className=" text-[13px] md:text-[17px] font-bold text-center">{card.name}</h3>
          </div>
        ))}
      </div>
     </div>

     {/* coordinaters */}
     <div className="  flex flex-col items-center justify-center pb-12 w-full mx-auto">
     <h1 className=' font-bold text-[18px] md:text-2xl mb-4 text-pink-800'>Coordinaters of TechVista</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 md:gap-10 xl:gap-20 gap-4  ">
        {cardsCoordinaters.map((card) => (
          <div>
          <div key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center h-[160px] w-[120px] md:h-[210px] md:w-[160px] xl:h-[260px] xl:w-[200px]">
            <img
              src={card.image}
              alt={card.title}
              className=" h-full w-full object-cover"
            />
          </div>
              <h3 className=" text-[13px] md:text-[17px] font-bold text-center">{card.name}</h3>
          </div>
        ))}
      </div>
     </div>

     </div>  


    </div>
  )
}

export default About
