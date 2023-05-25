import React from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
const AboutUs = () => {
  return (
    <div className='mx-[7.5%]'>
      <div className='min-h-[88vh] hero'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img src='/images/team5-2.jpg' className='max-w-full' />
          <div>
            <h1 className='text-6xl font-bold text-[#ffa500] mb-7'>About Us</h1>
            <h1 className='text-3xl font-bold capitalize text-[#737270]'>
              Jhon Doe
            </h1>
            <p className='py-4 pr-28 font-inter '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
              obcaecati reprehenderit eos quas rerum sapiente a ratione deserunt
              harum inventore minus adipisci voluptatibus eaque sed quidem qui
              blanditiis nesciunt quo repellendus veniam perferendis ab debitis
              eligendi enim quis eum, tempore, praesentium magni ad autem harum
              sed tenetur. Molestiae ut qua
            </p>
            <button className='btn'>Read More</button>
            <div className='flex items-center gap-4 md:place-self-center md:justify-self-end mt-5'>
              <FaTwitter className='text-[25px] text-[#54545464] hover:text-[#548bca] cursor-pointer'></FaTwitter>
              <BsYoutube className='text-[25px] text-[#54545464] cursor-pointer hover:text-[#65171e]'></BsYoutube>
              <IoLogoFacebook className='text-[25px] text-[#54545464] rounded-lg hover:text-[#2469b8] cursor-pointer'></IoLogoFacebook>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
