import { useParams, Link } from 'react-router-dom';

const EventDetail = () => {
  const { eventName } = useParams();

  const eventDetails = {
    hackathon: {
      description: 'Hackathon is a 48-hour coding challenge.',
      rules: 'Code all night, no plagiarism.',
      timing: '9 AM - 9 PM',
      venue: 'Tech Auditorium',
      images: ['/images/hackathon.jpg', '/images/robotics.jpg', '/images/robotics.jpg']
    },
    robotics: {
      description: 'Build robots and showcase them.',
      rules: 'Teams of 4, bring your own robot.',
      timing: '10 AM - 5 PM',
      venue: 'Robotics Lab',
      images: ['robotics1.jpg', 'robotics2.jpg']
    },
    // Add details for other events...
  };

  const event = eventDetails[eventName.toLowerCase()];

  return (
    <div className="p-4 mt-20">
      <h1 className="text-2xl font-bold">{eventName}</h1>
      <p className="mt-2">{event.description}</p>
      <h3 className="mt-4">Rules and Guidelines</h3>
      <p>{event.rules}</p>
      <h3 className="mt-4">Timing and Venue</h3>
      <p>{event.timing} at {event.venue}</p>
       <h2 className=' mt-10 text-center'>Events Heads and In-Charge</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 md:w-[90%] lg:w-[80%] md:mx-auto ">
        {event.images.map((image, idx) => (
          <img key={idx} src={image} alt={`${eventName} image ${idx+1}`} className="w-48 mx-auto h-48 sm:h-52 md:h-64 xl:w-52 xl:h-72 object-cover rounded-md " />
        ))}
      </div>
      <div className=' mt-4'>
      <Link to={`/event/${eventName}/register`} className="bg-blue-500 text-white px-4 py-2 ">Register Now</Link>
      
      </div>
      <div className=' mt-2'>
      <Link to="/#events">Back to Events</Link>
      </div>
    </div>
  );
};

export default EventDetail;

