import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Events = () => {
  // State to toggle between Day 1 and Day 2 events
  const [selectedDay, setSelectedDay] = useState('Day 1');

  // Event data
  const eventsDay1 = [
    { name: 'BGMI', image: '/images/events/bgmi_new.png', path: '/event/bgmi' },
    { name: 'M2M', image: '/images/events/m2m_new.png', path: '/event/m2m' },
    { name: 'Hackathon', image: '/images/events/hackathon.png', path: '/event/hackathon' },
    { name: 'Blind Coding', image: '/images/events/blind_coding_new.png', path: '/event/blind_coding' },
    { name: 'Prompt Engineering', image: '/images/events/prompt_new.png', path: '/event/prompt' }, 
    { name: 'Code Hunt', image: '/images/events/code_hunt_new.png', path: '/event/code_hunt' },
    { name: 'Valorant', image: '/images/events/valorant.jpg', path: '/event/valorant' },
  ];

  const eventsDay2 = [
    { name: 'Research', image: '/images/events/research.jpg', path: '/event/research' },
    { name: 'Stand Up', image: '/images/events/stand_up.png', path: '/event/standup' },
    { name: 'Track Race', image: '/images/events/track_race.jpg', path: '/event/track_race' },
    { name: 'UiUx', image: '/images/events/uiux.png', path: '/event/uiux' },
    { name: 'Treasure Hunt', image: '/images/events/treasure_hunt.jpg', path: '/event/treasure_hunt' },
    { name: 'Bug Bounty', image: '/images/events/bug_bounty.jpg', path: '/event/bug_bounty' },
  ];
 

  // Function to toggle between Day 1 and Day 2
  const toggleDay = (day) => {
    setSelectedDay(day);
  };

  // Determine which events to show based on selected day
  const eventsToDisplay = selectedDay === 'Day 1' ? eventsDay1 : eventsDay2;

  return (
    <div id='events' className="bg-gradient-to-tr from-[#310e27] 0% via-[#000000] 50% to-[#000000] 100%  py-10 px-3 sm:px-20 md:px-20 lg:px-16 xl:px-28 -z-10 bg-cover bg-center bg-no-repeat ">
     
      <div className='flex justify-center flex-col items-center px-2'>
        <h1 className='text-[22px] text-center lg:text-4xl text-pink-500 font-bold'>Events of TechVista 2025</h1>
        <p className='text-center text-xs md:text-[15px] py-2 text-white'>Step into the spotlight and showcase your talents at TechVista 2025</p>
        <hr className='border-2  border-white w-[25%] mt-2' />
      </div>

      {/* Day toggle buttons */}
      <div className="flex justify-center mt-4">
        <button 
          className={` border-2 border-pink-600 rounded-tl-2xl rounded-bl-2xl text-white px-6 py-1 ${selectedDay === 'Day 1' ? 'bg-pink-600 ' : ''}`} 
          onClick={() => toggleDay('Day 1')}
        >
          Day 1
        </button>
        <button 
          className={` border-2 border-pink-600 rounded-tr-2xl rounded-br-2xl text-white px-6 py-1 ${selectedDay === 'Day 2' ? 'bg-pink-600' : ''}`} 
          onClick={() => toggleDay('Day 2')}
        >
          Day 2
        </button>
      </div>

     


      {/* trial */}
      <div className="  flex flex-col items-center justify-center py-12 -z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-10 xl:gap-20 gap-4">
        {eventsToDisplay.map((event) => (
          <div className='relative shadow-md shadow-pink-600'>
              <div key={event.name}
                 className="bg-white rounded-md shadow-lg overflow-hidden flex flex-col items-center h-[300px] w-[240px] md:h-[310px] md:w-[260px] xl:h-[360px] xl:w-[310px]">
                <div className=' bg-black w-full h-full opacity-85'>
                   <img
                      src={event.image}
                      alt={event.name}
                      className=" h-full w-full object-cover "
                    />
                   </div>
              </div>
              <div className='absolute bottom-0 left-0 right-0 m-2 py-2 md:py-3 xl:py-4 flex flex-col gap-2 xl:gap-3 justify-center items-center bg-gray-900 bg-opacity-90 rounded-md text-white'>
                  <h3 className=" text-[20px] md:text-xl xl:text-2xl font-semibold  text-center">{event.name}</h3>
                 <div className=' flex w-[90%] mx-auto gap-6 '>
                    <Link to={`${event.path}`} onClick={()=> window.to(0,0)} className=" shadow-sm shadow-pink-300 text-pink-500 py-1 bg-black w-full">
                      <div className=' flex items-center justify-center gap-1'>
                        <p className='text-[12px] md:text-[15px] xl:text-[18px]'>Explore</p>
                        <MdOutlineArrowOutward size={20}/>
                      </div>
                    </Link>
                    
                    <Link to={`${event.path}/register`} onClick={()=> window.to(0,0)}  className="shadow-sm shadow-pink-300 bg-pink-600 py-1 text-white w-full">
                    <div className=' flex items-center justify-center gap-1'>
                        <p className='text-[12px] md:text-[15px] xl:text-[18px]'>Register</p>
                      </div>
                    </Link>
                 </div>
              </div>

          </div>
        ))}
      </div>
     </div>




    </div>
  );
}

export default Events;


// { name: 'Hackathon', image: '/images/hackathon.jpg', path: '/event/hackathon' },
//     { name: 'Robotics', image: '/images/robotics.jpg', path: '/event/robotics' },

