// import React from 'react'

// import Slider from 'react-slick'

// const Gallery = () => {
//   var settings = {
//     dots: true,
//     arrows:false,
//     infinite: true,
//     speed: 500,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed:2000,
//     cssEase:"linear",
//     pauseOnHover:true,
//     pauseOnFocus:true, 
//     responsive:[
//       {
//         breakpoint:10000,
//         settings:{
//           slidesToScroll:1,
//           slidesToShow:3,
//           infinite:true
//         }
//       },
//       {
//         breakpoint:1020,
//         settings:{
//           slidesToScroll:1,
//           slidesToShow:2,
//           initialSlide:2
//         }
//       },
//       {
//         breakpoint:640,
//         settings:{
//           slidesToScroll:1,
//           slidesToShow:1,
//           // infinite:true
//         }
//       },
//     ]
//   };

//   const navLinks = [
//     {img: "/images/hackathon.jpg"},
//     {img: "/images/robotics.jpg"},
//     {img: "/images/hackathon.jpg"},
//     {img: "/images/robotics.jpg"},
//     {img: "/images/hackathon.jpg"},
//     {img: "/images/hackathon.jpg"},
//     {img: "/images/robotics.jpg"},
    
//   ];
//   return (
//     // <div id='gallery' className=" bg-cover bg-center bg-no-repeat bg-[url('/images/gallery_img_bg.jpg')]  " >
//     <div id='gallery' className="  bg-gradient-to-r from-[#310e27] 0% via-[#000000] 50% to-[#28071c] 100% " >

//       {/* <div className=' bg-black bg-opacity-45 pb-10 pt-5'> */}
//       <div className='  pb-10 pt-5'>
//         {/* top */}
//       <div className='flex justify-center flex-col items-center px-2'>
//         <h1 className='text-2xl font-bold text-pink-600'>Gallery</h1>
//         {/* <p className='text-center'>Step into the spotlight and showcase your talents at TechVista 2025</p> */}
//         <hr className='border-2 border-pink-600 w-[20%] mt-2' />
//       </div>

//         {/* bottom */}
//         <div className=' flex'>
//         {/* <div className=' bg-pink-600'>
//             1
//         </div> */}
//         <div className='lg:w-[80%] md:w-[90%] mx-auto '>
//          <Slider {...settings}>
//            {
//             navLinks.map((data)=>(          
//               <div key={data.id} className='pt-10 px-4 '>
              
//                 <div className=' ' >
//                   <img src={data.img} className='  ' />
//                 </div>
    
//               </div>
//             ))
//            }
//           </Slider> 
//         </div>
//         </div>


//       </div>
//     </div>
//   )
// }

// export default Gallery


import React from 'react'
import Slider from 'react-slick'


const Gallery = () => {

      var settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true, 
    // slidesToShow:1,
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToScroll:1,
          slidesToShow:1,
          infinite:true
        }
      },
      {
        breakpoint:1020,
        settings:{
          slidesToScroll:1,
          slidesToShow:1,
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
    <div id='gallery' className='bg-gradient-to-r from-[#310e27] 0% via-[#000000] 50% to-[#28071c] 100% py-10'>

         <div className='flex justify-center flex-col items-center px-2 pb-10'>
           <h1 className='text-2xl font-bold text-pink-600'>Gallery</h1>
           <hr className='border-2 border-pink-600 w-[20%] mt-2' />
         </div>

        <div className='flex md:flex-row flex-col justify-center items-center gap-10 bg-gradient-to-r from-[#310e27] 0% via-[#000000] 50% to-[#28071c] 100% w-[85%] mx-auto'>
          <div className='md:w-[50%] w-full md:h-[170px] lg:h-[250px] xl:h-[330px]  justify-center items-center flex shadow-lg shadow-pink-600 '>
             <video
                
                src="/images/gallery/gallery_video.mp4"
                loop
                autoPlay
                muted
             />
          </div>
          <div className='md:w-[50%]  md:h-[167px] lg:h-[250px] xl:h-[340px] w-full shadow-lg shadow-pink-600 lg:py-3 '>        
           <Slider {...settings}>
             {
              navLinks.map((data)=>(          
                <div key={data.id} className='  '>             
                  <div className=' flex justify-center items-center' >
                    <img src={data.img} className='w-full xl:h-[320px] md:h-[163px] lg:h-[240px] '/>
                  </div>   
                </div>
              ))
             }
            </Slider> 

          </div>
        </div>

    </div>
  )
}

export default Gallery