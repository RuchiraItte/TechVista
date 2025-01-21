import React, { useState } from 'react'
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import { BiMinus } from "react-icons/bi";

const Accordion = ({ tit, ans }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className=' border-2 shadow-sm my-5 rounded-md '>
      <button 
        onClick={() => setOpen(!open)} 
        className='flex justify-between items-center w-full pl-2 py-2 transition-colors duration-200 rounded-md hover:bg-pink-700'
      >
        <span className='font-semibold capitalize text-white text-[12px] sm:text-[12px] md:text-[14px] xl:text-[16px] text-left w-[90%]'>
          {tit}
        </span>
        {open ? (
          <MdKeyboardArrowUp className='text-slate-200 w-[10%] h-6' />
        ) : (
          <MdKeyboardArrowDown className='text-slate-200  h-6 w-[10%]' />
        )}
      </button>


      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out text-white ${
          open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 py-2 text-sm sm:text-base text-gray-200 transparent rounded-md'>
          {ans}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
