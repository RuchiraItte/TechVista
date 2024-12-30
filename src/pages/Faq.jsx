import React from 'react'
import Accordion from '../components/Accordion'
import faqdata from '../data/FaqData.json'
import { NavLink } from 'react-router-dom'

const Faq = () => {
  return (
    <div id='faq' className='pt-20'>
      <div className='max-w-6xl mx-auto min-h-[80vh] px-4'>
        {/* main content */}
        <div className='flex flex-col lg:flex-row w-full gap-5 mt-10 xl:px-4 lg:px-16'>

          {/* left */}
          <div className='lg:w-[45%] md:flex flex-col justify-center gap-7 hidden'>
            <div className='leading-9 text-center lg:text-left'>
              <h1 className='text-base font-bold'>Do you have any</h1>
              <h1 className='text-[2rem] lg:text-[3rem] font-bold text-slate-800'>Question?</h1>
            </div>

            <p className='text-[0.9rem] text-justify lg:pr-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className='flex flex-wrap gap-3 justify-center lg:justify-start'>
              <button className='border-slate-800 border-2 font-bold text-slate-800 py-2 px-4 rounded-lg'>Call Us</button>
              <NavLink to='/contactus'>
                <button className='bg-slate-800 font-bold text-white py-2 px-4 rounded-lg'>Send Message</button>
              </NavLink>
            </div>
          </div>

          {/* right */}
          <div className='w-full lg:w-[55%]'>
            <div className='md:text-center font-bold text-2xl  lg:text-3xl pb-4 text-slate-800'>
              Frequently Asked Questions
            </div>
            <div>
              {faqdata.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Accordion tit={item.title} ans={item.answer} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;
