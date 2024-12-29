import React, { useState } from 'react';

const HackathonRegistration = () => {
  // State for handling form errors
  const [phoneError, setPhoneError] = useState('');

  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    // Phone number validation
    const phone = formData.get('Phone');
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return; // Stop form submission if validation fails
    }

    setPhoneError(''); // Clear error if phone number is valid

    fetch("https://script.google.com/macros/s/AKfycbxrgStc2LRpEocv6l7MsXMsu-Z-9pBOSw6OrnMqHGRtTLxc_ISEVcUVraj4MY_OCWWqzw/exec", {
      method: "POST",
      body: formData
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Your Data is Submitted Successfully!");
      window.location.href="/"

    })
    .catch((error) => {
      console.log(error);
      alert("Your Data is Submitted Successfully!");
      window.location.href="/"
    });
  }

  return (
    <div className="p-4 pt-20">

      <div className=' lg:w-[85%] xl:w-[80%] mx-auto flex md:bg-slate-50 shadow-xl'>
        <div className=' w-[35%] hidden lg:block'>
          <img src='/images/robotics.jpg' className=' w-full h-full'/>
        </div>
        <div className=' w-full lg:w-[65%]'>
              <h1 className="text-2xl font-bold text-center">Hackathon Registration</h1>
            <div className='  bg-white shadow-xl m-0 sm:m-5 md:m-10 py-5 px-5 lg:px-5 xl:px-10'>
            <form className="form " onSubmit={(e) => Submit(e)}>
              <div>
                <label htmlFor="name" className="block text-sm">Full Name</label>
                <input name="Name" type="text" id="name" className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm">Email</label>
                <input name="Email" type="email" id="email" className="w-full p-2 border rounded" required />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm">Phone</label>
                <input name="Phone" type="number" id="phone" className="w-full p-2 border rounded" required />
                {phoneError && <p className="text-red-500 text-sm mt-2">{phoneError}</p>} {/* Display phone error message */}
              </div>

{/* extra */}
              {/* <div className="mt-4">
                <label htmlFor="email" className="block text-sm">Email</label>
                <input name="Email" type="email" id="email" className="w-full p-2 border rounded" required />
              </div> <div className="mt-4">
                <label htmlFor="email" className="block text-sm">Email</label>
                <input name="Email" type="email" id="email" className="w-full p-2 border rounded" required />
              </div> <div className="mt-4">
                <label htmlFor="email" className="block text-sm">Email</label>
                <input name="Email" type="email" id="email" className="w-full p-2 border rounded" required />
              </div> */}
{/* extra */}

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
            </form>
            </div>
        </div>
      </div>

    </div>
  );
};

export default HackathonRegistration;
