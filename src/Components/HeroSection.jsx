import React from "react";
import { useEffect } from "react";
import Navbar from "./Navbar.jsx";

const HeroSection = () => {
  useEffect(() => {
    const fadeUpText = document.getElementById("fadeUpText");
    fadeUpText.classList.add("animate-fadeUp");
  }, []);
  return (
    <div
      id='heroSection'
      data-testid='heroSection'
      className="bg-[url('/images/Home2.png')] w-full bg-no-repeat bg-cover"
    >
      <Navbar />

      <div className='mx-[7.5%]'>
        <div className='hero min-h-[92vh] justify-start'>
          <div className='hero-content flex-col lg:flex-row-reverse'>
            <div>
              <h1 className='text-5xl font-bold text-white'>
                Elevate Your Online Insights: Introducing <br />
                <span id='fadeUpText' className='text-[#ffa500]'>
                  Road Mobility
                </span>
                - Your Real-Time Data Solution
                <br />
              </h1>
              <p className='py-4 text-white text-[18px]'>
                We are a newly formed company. As former analysts of gasoline
                demand, <br /> our traditional tools for analyzing market
                conditions during Covid proved <br /> to be unsuitable to market
                conditions at that time. Traditional analysis <br /> uses
                historical data to model future developments. Analytic tools
                like econometric <br /> models, time series analysis and even AI
                were totally inadequate to the major and <br /> unprecedented
                changes that Covid wrought on U.S. society. Only real time data
                would prove to be useful. <br /> In that spirit, we have created
                a data set of mobility using real time data that is independent
                of history.
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
