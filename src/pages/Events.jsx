import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  // State to toggle between Day 1 and Day 2 events
  const [selectedDay, setSelectedDay] = useState('Day 1');

  // Event data
  const eventsDay1 = [
    { name: 'Hackathon', image: '/images/hackathon.jpg', path: '/event/hackathon' },
    { name: 'Robotics', image: '/images/robotics.jpg', path: '/event/robotics' },
    { name: 'Blind Coding', image: '/images/blindcoding.jpg', path: '/event/blindcoding' },
    { name: 'Event4', image: '/images/blindcoding.jpg', path: '/event/blindcoding' }
  ];

  const eventsDay2 = [
    { name: 'BGMI', image: '/images/bgmi.jpg', path: '/event/bgmi' },
    { name: 'Bug Bash', image: '/images/hackathon.jpg', path: '/event/hackathon' },
    { name: 'Treasure hunt', image: '/images/robotics.jpg', path: '/event/robotics' },
    { name: 'Event4', image: '/images/robotics.jpg', path: '/event/robotics' }
  ];

  // Function to toggle between Day 1 and Day 2
  const toggleDay = (day) => {
    setSelectedDay(day);
  };

  // Determine which events to show based on selected day
  const eventsToDisplay = selectedDay === 'Day 1' ? eventsDay1 : eventsDay2;

  return (
    <div id='events' className='bg-pink-100 py-10 px-3 sm:px-20 md:px-20 lg:px-16 xl:px-28'>
      <div className='flex justify-center flex-col items-center px-2'>
        <h1 className='text-2xl font-bold'>Events of TechVista 2025</h1>
        <p className='text-center'>Step into the spotlight and showcase your talents at TechVista 2025</p>
        <hr className='border-2 border-black w-[20%] mt-2' />
      </div>

      {/* Day toggle buttons */}
      <div className="flex justify-center mt-4">
        <button 
          className={`bg-blue-500 text-white px-6 py-1 ${selectedDay === 'Day 1' ? 'bg-yellow-500' : ''}`} 
          onClick={() => toggleDay('Day 1')}
        >
          Day 1
        </button>
        <button 
          className={` bg-blue-500 text-white px-6 py-1 ${selectedDay === 'Day 2' ? 'bg-yellow-500' : ''}`} 
          onClick={() => toggleDay('Day 2')}
        >
          Day 2
        </button>
      </div>

      {/* Event cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {eventsToDisplay.map(event => (
          <div key={event.name} className="bg-white p-1 rounded-sm shadow-md">
            <img src={event.image} alt={event.name} className="w-full h-20 md:h-40 lg:h-52 xl:h-60 object-cover rounded-sm" />
            <h2 className="text-xl font-semibold mt-2 text-center">{event.name}</h2>
            <div className="mt-1 flex flex-col md:flex-row justify-center md:gap-5 items-center w-full">
              <Link to={`${event.path}`} className="text-blue-500 text-center underline text-sm md:text-[15px] md:bg-slate-200 py-1 lg:py-2 md:w-[40%] w-full">Read More</Link>
              <Link to={`${event.path}/register`} className="bg-blue-500 text-center text-white text-sm md:text-[15px] rounded py-1 lg:py-2 md:w-[40%] w-full">Register</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;


// { name: 'Hackathon', image: '/images/hackathon.jpg', path: '/event/hackathon' },
//     { name: 'Robotics', image: '/images/robotics.jpg', path: '/event/robotics' },

