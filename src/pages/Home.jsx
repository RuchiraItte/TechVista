import React from 'react'
import About from './About'
import Events from './Events'
import Sponsers from './Sponsers'
import Gallery from './Gallery'
import Faq from './Faq'

const Home = () => {
  return (
    <div className='mt-16'>
      <div id='home' className='bg-yellow-300 mt-16 py-64'>Home</div>
      <About/>
      <Events/>
      <Sponsers/>
      <Gallery/>
      <Faq/>
    </div>
  )
}

export default Home