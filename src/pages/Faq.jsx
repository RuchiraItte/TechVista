import React from "react";
import Accordion from "../components/Accordion";
import faqdata from "../data/FaqData.json";
import { NavLink } from "react-router-dom";

const Faq = () => {
  return (
    <div id="faq" className="pt-1 bg-cover bg-center bg-no-repeat bg-gradient-to-tr from-[#310e27] 0% via-[#000000] 50% to-[#000000] 100%">
      <div className="max-w-7xl mx-auto min-h-[80vh] px-4">
        {/* main content */}
        <div className="flex flex-col lg:flex-row w-full gap-10 mt-10 xl:px-4 lg:px-16 ">
          {/* left */}
          <div className="lg:w-[45%] md:flex flex-col  gap-5 px-3 ">
            <div className="text-center font-bold text-2xl  lg:text-3xl pb-4 text-pink-800">
              Locate Us
            </div>

            <div className="h-[300px] md:h-[360px] w-full rounded-lg overflow-hidden shadow-lg ">
              <iframe
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Vidyalankar%20Educational%20Campus,%20Vidyalankar%20College%20Rd,%20Wadala%20East,%20Deen%20Bandhu%20Nagar,%20Antop%20Hill,%20Mumbai,%20Maharashtra%20400037+(Vidyalankar%20School%20of%20Information%20Technology)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
            </div>
          </div>

          {/* right */}
          <div className="w-full lg:w-[55%]">
            <div className="text-center font-bold text-2xl  lg:text-3xl pb-4 text-pink-800">
              Frequently Asked Questions
            </div>
            <div className="px-3">
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
  );
};

export default Faq;
