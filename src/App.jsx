import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
// import { Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventDetail from './components/EventDetail'
import HackathonRegistration from './forms/HackathonRegistration'
import RoboticsRegistration from './forms/RoboticsRegistration'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Home/> */}

      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventName" element={<EventDetail />} />
        <Route path="/event/hackathon/register" element={<HackathonRegistration />} />
        <Route path="/event/robotics/register" element={<RoboticsRegistration />} />
        {/* Add routes for other event registration pages */}
      </Routes>
    </Router>

      <Footer/>

    </div>
  )
}

export default App