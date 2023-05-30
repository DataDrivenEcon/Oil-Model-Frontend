import { useEffect } from "react";
import Navbar from "./Navbar.jsx";
import "../style/heroSection.css";
const HeroSection = () => {
  useEffect(() => {
    const fadeUpText = document.getElementById("fadeUpText");
    fadeUpText.classList.add("animate-fadeUp");
  }, []);
  return (
    <div className="bg-[url('/images/Home.png')] w-full bg-no-repeat bg-center bg-cover">
      <Navbar />

      <div className='mx-[7.5%]'>
        <div className='hero min-h-[92vh] justify-start'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div>
              <h1 className='text-7xl font-bold text-white'>
                Leverage Your Expertise with Premium <br />
                <span id='fadeUpText' className='text-[#ffa500]'>
                  Oil Economics
                </span>{" "}
                Data.
              </h1>
              <p className='py-4 text-white text-[18px]'>
                Welcome to OilData Solutions, the premier platform for unlocking
                the full potential of oil economics data. <br /> Whether you're
                an experienced oil economist, a research institution, <br /> or
                an industry professional, our comprehensive data sets will
                empower you to <br /> make informed decisions, gain valuable
                insights, and stay ahead of the competition.
              </p>
              <button className='bg-[#ffa500] py-2 px-4 text-white font-inter'>
                More Info
              </button>
              <button className='bg-transparent py-2 px-4 text-white border-2 border-[#ffa500] hover:bg-[#ffa500] ml-3 font-inter'>
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
