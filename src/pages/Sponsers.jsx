import React from "react";
import Slider from "react-slick";
const Sponsers = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          // infinite:true
        },
      },
    ],
  };

  const navLinks = [
    { img: "/images/hackathon.jpg" },
    { img: "/images/robotics.jpg" },
    { img: "/images/hackathon.jpg" },
    { img: "/images/robotics.jpg" },
  ];
  return (
    <div
      id="sponsors"
      className=" bg-gradient-to-tr from-[#310e27] 0% via-[#000000] 50% to-[#000000] 100% pb-10 pt-5 "
    >
      {/* top */}
      <div className="flex justify-center flex-col items-center px-2">
        <h1 className="text-[22px] text-center lg:text-4xl text-pink-500 font-bold">
          Sponsors
        </h1>
        {/* <p className='text-center'>Step into the spotlight and showcase your talents at TechVista 2025</p> */}
      </div>

      {/* bottom */}
      <div className="lg:w-[80%] md:w-[90%] mx-auto px-5 md:px-0">
        <Slider {...settings}>
          {navLinks.map((data) => (
            <div key={data.id} className="pt-10 px-4 ">
              <div className="shadow-left-pink">
                <img className="h-20 w-full rounded-sm p-[2px] border-none" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sponsers;
