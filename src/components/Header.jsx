import { useState } from "react";
import { Navbar } from "./Navigation";
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  // const imageData = getImage();
  // const generalData = getGenericContent();

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center z-40 bg-black shadow-md shadow-pink-600"> {/* bg-gradient-to-b from-pink-600 to-transparent */}
      <div className="  max-w-screen-2xl w-full mx-auto px-7 flex items-center justify-between xl:px-24 lg:px-16 md:px-12 md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="/" className="logo text-white">
            <img
                            src='./images/landing/landing_tech_logo.png'
                            width={40}
                            height={40}
                            // alt={generalData.name}
                        />
            
          </a>
        </h1>

        <div className="relative md:justify-self-center">
        
          <button
            className="menu-btn md:hidden"
             onClick={() => setNavOpen((prev) => !prev)}
            >
           <span className="material-symbols-rounded">
               {navOpen ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white"/>}
            </span>
           </button>
         <Navbar navOpen={navOpen} />

        </div>

      </div>
    </header>
  );
};
