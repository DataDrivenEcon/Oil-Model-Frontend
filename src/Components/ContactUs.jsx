import { IoMdPaperPlane } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const ContactUs = () => {
  return (
    <div className="hero min-h-[85vh] bg-[url('./images/contact-bg.jpg')] w-full bg-no-repeat bg-center">
      {/* <h1 className='text-5xl text-[#ffa500] underline-'>Contact Us!</h1> */}
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='card flex-shrink-0 w-full max-w-xl '>
          <div className='card-body'>
            <div className='form-control border-b-2 border-[#ffa500] '>
              <input
                type='text'
                placeholder='Full Name'
                className='input text-white p-0 focus:border-none focus:outline-none placeholder:text-[#ffa500] bg-transparent border-none'
              />
            </div>
            <div className='form-control border-b-2 border-[#ffa500] my-11'>
              <input
                type='text'
                placeholder='Email'
                className='input text-white p-0 focus:border-none focus:outline-none placeholder:text-[#ffa500] bg-transparent border-none'
              />
            </div>
            <div className='form-control border-b-2 border-[#ffa500]'>
              <textarea
                placeholder='Your Message'
                className='border-none text-white outline-none bg-transparent placeholder:text-[#ffa500]'
              ></textarea>
            </div>
            <div className=' mt-10'>
              <button className='bg-transparent border-2 border-[#ffa500] hover:bg-white hover:text-[#ffa500] hover:border-none border:outline-none btn py-2 px-4 text-white font-inter'>
                SEND
                <IoMdPaperPlane className='ml-1' />
              </button>
            </div>
          </div>
        </div>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl text-[#f5f5f5] font-bold'>Contact Us</h1>
          <div className='w-[650px]'></div>
          <div className='flex items-center mt-10'>
            <FaMapMarkerAlt className='text-3xl pr-2 text-[#ffa500]'></FaMapMarkerAlt>

            <div className='flex flex-col pl-4'>
              <h4 className='text-xl font-semibold text-[#fff]'>Address</h4>
              <p className='text-[#ffffff96] mt-[3px] font-semibold'>
                369 Annadale St. Crofton, MD 21114
              </p>
            </div>
          </div>
          <div className='flex items-center mt-10'>
            <BsTelephoneFill className='text-3xl pr-2 text-[#ffa500]'></BsTelephoneFill>

            <div className='flex flex-col pl-4'>
              <h4 className='text-xl font-semibold text-[#fff]'>Phone</h4>
              <p className='text-[#ffffff96] mt-[3px] font-semibold'>
                +1202-555-0114
              </p>
            </div>
          </div>
          <div className='flex items-center mt-10'>
            <HiOutlineMail className='text-3xl pr-2 text-[#ffa500]'></HiOutlineMail>

            <div className='flex flex-col pl-4'>
              <h4 className='text-xl font-semibold text-[#fff]'>Email</h4>
              <p className='text-[#ffffff96] mt-[3px] font-semibold'>
                jhoneDoe@me.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
