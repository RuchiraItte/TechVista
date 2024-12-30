import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
// import { Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventDetail from './components/EventDetail'
import HackathonRegistration from './forms/HackathonRegistration'
import BgmiRegister from './forms/BgmiRegister';
import BlindCodingRegister from './forms/BlindCodingRegister';
import BugBountyRegister from './forms/BugBountyRegister';
import CodeHuntRegister from './forms/CodeHuntRegister';
import MTwoMRegister from './forms/MTwoMRegister';
import PromptRegister from './forms/PromptRegister';
import ResearchRegister from './forms/ResearchRegister';
import StandupRegister from './forms/StandupRegister';
import TrackRaceRegister from './forms/TrackRaceRegister';
import TreasureHuntRegister from './forms/TreasureHuntRegister';
import UiuxRegister from './forms/UiuxRegister';
import ValorantRegister from './forms/ValorantRegister';

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
        <Route path="/event/bgmi/register" element={<BgmiRegister />} />
        <Route path="/event/blind_coding/register" element={<BlindCodingRegister />} />
        <Route path="/event/bug_bounty/register" element={<BugBountyRegister />} />
        <Route path="/event/code_hunt/register" element={<CodeHuntRegister />} />
        <Route path="/event/m2m/register" element={<MTwoMRegister />} />

        <Route path="/event/prompt/register" element={<PromptRegister />} />
        <Route path="/event/research/register" element={<ResearchRegister />} />
        <Route path="/event/standup/register" element={<StandupRegister />} />
        <Route path="/event/track_race/register" element={<TrackRaceRegister />} />
        <Route path="/event/treasure_hunt/register" element={<TreasureHuntRegister />} />
        <Route path="/event/uiux/register" element={<UiuxRegister />} />
        <Route path="/event/valorant/register" element={<ValorantRegister />} />

        {/* Add routes for other event registration pages */}
      </Routes>
      </Router>

      <Footer/>

    </div>
  )
}

export default App



// font- Audiowide