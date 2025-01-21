


import { useParams, Link, useNavigate } from 'react-router-dom';
import eventDetails from '../data/eventDetails_new.json'

const EventDetail = () => {

  const { eventName } = useParams();
  const event = eventDetails[eventName.toLowerCase()];
  const navigate = useNavigate();

  const handleBackToEvents = () => {
    navigate('/'); // Navigate to the main events page
    setTimeout(() => {
      const eventsSection = document.getElementById('events');
      if (eventsSection) {
        window.scrollTo({
          top: eventsSection.offsetTop,
        });
      }
    }, 100); // Delay ensures the page and section are rendered
  };
  
  
  
  if (!event) {
    return (
      <div className="text-center text-white">
        <h1 className="text-2xl lg:text-4xl font-bold text-red-600">Event Not Found</h1>
        <Link to="/#events" className="text-blue-500 underline">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="px-7 md:px-12 lg:px-20 xl:px-24 pt-20 pb-12 bg-gradient-to-r from-[#310e27] via-[#000000] to-[#28071c] text-white">
      <h1 className="text-2xl lg:text-4xl font-bold text-pink-700 uppercase py-4">{event.name_theme}</h1>

      {/* Event Details */}
      <div>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Description */}
          <div className="bg-black bg-opacity-80 py-2 px-6 border-2 border-pink-600 w-full md:w-[550px]">
            <h3 className="font-semibold text-xl text-pink-500">Description</h3>
            <ul className="list-disc pl-3 md:pl-6">
              {event.description.map((point, idx) => (
                <li key={idx} className="text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px]">{point}</li>
              ))}
            </ul>
          </div>

          {/* Rules */}
          <div className="bg-black bg-opacity-80 py-2 px-6 border-2 border-pink-600 w-full md:w-[550px]">
            <h3 className="font-semibold text-xl text-pink-500">Rules and Guidelines</h3>
            <ul className="list-disc pl-3 md:pl-6">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px]">{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Details */}
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          {/* Prizes */}
          <div className="bg-black bg-opacity-80 px-6 border-2 border-pink-600 w-full md:w-[550px]">
            <h3 className="font-semibold text-xl text-pink-500">Prizes</h3>
            <ul className="list-disc pl-3 md:pl-6">
              {event.prizes.map((prize, idx) => (
                <li key={idx} className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-[17px]">{prize}</li>
              ))}
            </ul>
          </div>

          {/* Timing and Venue */}
          <div className="bg-black bg-opacity-80 px-6 border-2 border-pink-600 w-full md:w-[550px]">
            <p className="text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px]"><span className=' text-sm font-bold text-pink-500'>Date </span>: {event.date}</p>
            <p className="text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px]"><span className=' text-sm font-bold text-pink-500'>Time </span>: {event.timing}</p>
            <p className="text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px]"><span className=' text-sm font-bold text-pink-500'>Venue </span>: {event.venue}</p>
          </div>

          
        </div>

        {/* entry Fees: */}
        <div className="bg-black bg-opacity-80 px-6 border-2 border-pink-600 w-full md:w-[550px] mt-10">
            <p className="text-[12px] md:text-[11px] lg:text-[12px] xl:text-[16px] py-2"><span className=' text-sm font-bold text-pink-500'>Entry Fees </span>: {event.entryfee}</p> 
        </div>





        {/* Register Button */}
        <div className="mt-10">
          <Link to={`/event/${eventName}/register`} onClick={()=> window.to(0,0)}  className="brochureBlock  shadow-sm shadow-pink-500 text-white py-2">
            <button className=' bg-gray-200 font-semibold text-black py-[6px] px-4'>Register Now</button>
          </Link>
        </div>


 




        

        {/* Event Heads */}
       
        <div className="flex flex-col justify-center items-center md:items-start py-12">
                <div>
                  <h1 className="font-bold text-[18px] md:text-2xl mb-4 text-pink-800">Event Head and In-charge</h1>
                  <div className="">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-7 lg:gap-10 xl:gap-20">
                      {event.heads.map((head, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center h-[180px] w-[120px] md:h-[240px] md:w-[160px] xl:h-[300px] xl:w-[220px]">
                            <img
                              src={head.image}
                              alt={`${head.name}'s image`}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <h3 className="text-[13px] md:text-xl text-center mt-2">{head.name}</h3>
                          <h3 className="text-[13px] md:text-[17px] font-bold text-center">{head.contact}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>


        

        {/* Back to Events Link */}
        <div className="mt-2">
        <button
        onClick={handleBackToEvents}
        className="text-blue-500 underline"
      >
        Back to Events
      </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
