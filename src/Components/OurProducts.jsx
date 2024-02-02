import React from "react";
import { IoStorefrontOutline } from "react-icons/io5";
import { GiMedicines, GiParkBench } from "react-icons/gi";
import { FaBusAlt } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
const OurProducts = () => {
  const products = [
    {
      name: "retail stores and recreation",
      icon: <IoStorefrontOutline className='w-full h-full p-2 text-white' />,
    },
    {
      name: "supermarkets and pharmacies",
      icon: <GiMedicines className='w-full h-full p-2 text-white' />,
    },
    {
      name: "parks",
      icon: <GiParkBench className='w-full h-full p-2 text-white' />,
    },
    {
      name: "public transport",
      icon: <FaBusAlt className='w-full h-full p-2 text-white' />,
    },
    {
      name: "work",
      icon: <HiMiniBuildingOffice2 className='w-full h-full p-2 text-white' />,
    },
  ];
  return (
    <div className='flex flex-col bg-gradient-to-r from-slate-500 to-slate-800'>
      <h1 className='text-5xl p-8 text-white font-semibold'>
        Our Product: Road Mobility
      </h1>
      <p className='text-white text-xl pl-8 pr-24 font-medium '>
        Road Mobility is a community-based method for estimating both weekly and
        monthly distances traveled by cars in the U.S. By tapping into online
        social media, Road Mobility is able to track five different motives for
        travelling.
        <br />
        When combined, their sum roughly equals total vehicle miles traveled
        (VMT) as reported by the U.S. Department of Transportation.
      </p>
      <div className='flex flex-wrap justify-center items-center gap-3 py-20'>
        {products.map((product, i) => (
          <div
            key={i}
            className='flex flex-col justify-center items-center gap-2 shadow-sm border-2 border-neutral-500-400 p-5 rounded w-96'
          >
            <div className='w-20 h-20 rounded-full'>{product.icon}</div>
            <h1 className='text-xl text-white font-medium capitalize'>
              {product.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
