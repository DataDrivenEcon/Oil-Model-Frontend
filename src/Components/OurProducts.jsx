import React from "react";
import PieChartComponents from "./Chart/PieChartComponents";
const OurProducts = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-r from-slate-500 to-slate-800 py-10'>
      <h1 className='text-5xl text-white font-semibold'>
        Our Product: Road Mobility
      </h1>
      <p className='text-white text-center text-xl pt-5 px-28'>
        {" "}
        Road Mobility is a community-based method for estimating both weekly and
        monthly distances traveled by cars in the U.S. By tapping into online
        social media, Road Mobility is able to track five different motives for
        travelling: 1) driving to retail stores and recreation 2) driving to
        supermarkets and pharmacies 3) driving to parks 4) driving to public
        transport and 5) driving to work.
        <ul className='flex gap-10 justify-center items-center pt-3 capitalize'>
          <li className='list-disc marker:text-[#0088FE]'>Work</li>
          <li className='list-disc marker:text-[#00C49F]'>
            retail and recreation
          </li>
          <li className='list-disc marker:text-[#FFBB28]'>
            supermarkets and pharmacies
          </li>
          <li className='list-disc marker:text-[#FF8042]'>others</li>
        </ul>
      </p>
      <PieChartComponents />
      <p className='text-white text-xl text-center px-28'>
        When combined, their sum roughly equals total vehicle miles traveled
        (VMT) as reported by the U.S. Department of Transportation. This is a
        significant finding because the published numbers are themselves
        estimates. In addition, our methodology allows us to analyze driving
        trends by end-use at a state/regional and national level. In addition,
        Road Mobility’s data are more current. As shown in the following chart,
        these motivations for driving have varied since 2020 with the latest
        readings indicating that driving to work constitutes 19% of total VMT
        followed by driving to retail stores and recreation at 34% and driving
        to supermarkets and pharmacies at 37%.
      </p>
    </div>
  );
};

export default OurProducts;
