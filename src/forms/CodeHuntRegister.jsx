

import React, { useState } from 'react';

const CodeHuntRegister = () => {
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
    <div className="p-4 pt-20 bg-gradient-to-r from-[#300a2b] 0% via-[#000000] 50% to-[#370c33] 100%">

      <div className=' lg:w-[85%] xl:w-[80%] mx-auto flex lg:bg-black shadow-xl'>
        <div className=' w-[35%] hidden lg:block'>
          <img src='/images/register_img.jpg' className=' w-full h-full'/>
        </div>
        <div className=' w-full lg:w-[65%]'>
              <h1 className="text-2xl font-bold text-center text-pink-600 py-3">Register for Code Hunt </h1>
            <div className='  text-white bg-black shadow-xl m-0 sm:m-5  py-5 px-3 lg:px-5 xl:px-10'>
            <form className="form " onSubmit={(e) => Submit(e)}>
              <div className=' flex flex-col gap-6 py-6 lg:py-0 md:px-5 lg:px-2'>
              <div>
                {/* <label htmlFor="name" className="block text-sm text-pink-500">Full Name *</label> */}
                <input name="Name" type="text" id="name" placeholder='Full Name' className="w-full text-white bg-[#1E1E1E] px-2 py-1 xl:py-2 border-none rounded" required />
              </div>
              <div className="">
                {/* <label htmlFor="email" className="block text-sm text-pink-500">Email *</label> */}
                <input name="Email" type="email" id="email" placeholder='Email' className="w-full text-white bg-[#1E1E1E] px-2 py-1 xl:py-2 border-none rounded" required />
              </div>
              <div className="">
                {/* <label htmlFor="phone" className="block text-sm text-pink-500">Phone *</label> */}
                <input name="Phone" type="number" id="phone" placeholder='Contact No' className="w-full text-white bg-[#1E1E1E] px-2 py-1 xl:py-2 border-none rounded" required />
                {phoneError && <p className="text-red-500 text-sm mt-2">{phoneError}</p>} {/* Display phone error message */}
              </div>

{/* extra */}
              {/* <div className="">
                <input name="Email" type="email" id="email" placeholder='Email' className="w-full text-white bg-[#1E1E1E] px-2 py-1 xl:py-2 border-none rounded" required />
              </div>
              <div className="">
                <input name="Email" type="email" id="email" placeholder='Email' className="w-full text-white bg-[#1E1E1E] px-2 py-1 xl:py-2 border-none rounded" required />
              </div>
              <div className="">
                <input name="Email" type="email" id="email" placeholder='Email' className="w-full text-white bg-[#1E1E1E] px-2 py-1 xl:py-2 border-none rounded" required />
              </div> */}
{/* extra */}

              <button type="submit" className="bg-pink-700 w-full text-white px-4 py-1 xl:py-2  rounded ">Submit</button>
              </div>
            </form>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CodeHuntRegister;
