import React from 'react'
import About from './About'
import Events from './Events'
import Sponsers from './Sponsers'
import Gallery from './Gallery'
import Faq from './Faq'
import Banner from './Banner'

const Home = () => {
  return (
    <div className='mt-12'>
      <Banner/>
      <About/>
      <Events/>
      <Gallery/>
      <Sponsers/>
      <Faq/>
    </div>
  )
}

export default Home