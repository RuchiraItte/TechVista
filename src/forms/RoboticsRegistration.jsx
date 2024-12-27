const RoboticsRegistration = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Robotics Registration</h1>
      <form className="mt-4">
        <div>
          <label htmlFor="name" className="block text-sm">Full Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
};

export default RoboticsRegistration;
