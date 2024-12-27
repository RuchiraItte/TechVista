const HackathonRegistration = () => {

  function Submit(e){
    const formEle=document.querySelector("form")
    e.preventDefault()
    console.log("Submitted")
    const formData=new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbw0bqgxdYcovkM0CgMABTSKjfzV0JRo3dy4pB2VEst6MVlwE6k0Kg_vR8W5FIegFKPv5w/exec",{
      method:"POST",
      body: formData
    }).then((res)=>res.json()).then((data)=>{
      console.log(data)
      // alert("Data is Submiited")
    }).catch((error)=>console.log(error))

  }

  return (
    <div className="p-4 mt-20">
      <h1 className="text-2xl font-bold">Hackathon Registration</h1>
      <form className=' form mt-4' onSubmit={(e)=>Submit(e)}>
        <div>
          <label htmlFor="name" className="block text-sm">Full Name</label>
          <input name="Name" type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input name="Email" type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="block text-sm">Phone No</label>
          <input name="Phone" type="number" id="phone" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
};

export default HackathonRegistration;
