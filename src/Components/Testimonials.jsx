const Testimonials = () => {
  return (
    <div className='mx-[7.5%] '>
      <h1 className='text-5xl py-6 text-center text-[#ffa500]'>Testimonials</h1>
      <div className='flex gap-10 mt-8 '>
        {/* card start */}
        <div className='shadow-lg p-5'>
          <p className='text-[#7e7e7e]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut
            ipsam magnam distinctio necessitatibus sequi rem placeat doloremque
            omnis impedit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed aut ipsam magnam distinctio necessitatibus sequi rem
            placeat doloremque omnis impedit!
          </p>
          <div className='flex items-center gap-5 py-5'>
            <div className='avatar'>
              <div className='w-24 rounded-full'>
                <img src='/images/team5-2.jpg' />
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-[#525252]'>
                Robert Henry
              </h1>
              <p className='text-[#7e7e7e]'>USA</p>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className='shadow-lg p-5'>
          <p className='text-[#7e7e7e]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut
            ipsam magnam distinctio necessitatibus sequi rem placeat doloremque
            omnis impedit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed aut ipsam magnam distinctio necessitatibus sequi rem
            placeat doloremque omnis impedit!
          </p>
          <div className='flex items-center gap-5 py-5'>
            <div className='avatar'>
              <div className='w-24 rounded-full'>
                <img src='/images/team5-2.jpg' />
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-[#525252]'>
                Robert Henry
              </h1>
              <p className='text-[#7e7e7e]'>USA</p>
            </div>
          </div>
        </div>
        {/* card end */}
        {/* card start */}
        <div className='shadow-lg p-5'>
          <p className='text-[#7e7e7e]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut
            ipsam magnam distinctio necessitatibus sequi rem placeat doloremque
            omnis impedit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sed aut ipsam magnam distinctio necessitatibus sequi rem
            placeat doloremque omnis impedit!
          </p>
          <div className='flex items-center gap-5 py-5'>
            <div className='avatar'>
              <div className='w-24 rounded-full'>
                <img src='/images/team5-2.jpg' />
              </div>
            </div>
            <div>
              <h1 className='text-2xl font-semibold text-[#525252]'>
                Robert Henry
              </h1>
              <p className='text-[#7e7e7e]'>USA</p>
            </div>
          </div>
        </div>
        {/* card end */}
      </div>
      <div className='flex justify-center items-center p-3 gap-5 my-8'>
        <div className='w-5 h-5 rounded-2xl bg-[#696969] cursor-pointer'></div>
        <div className='w-5 h-5 rounded-2xl bg-[#ffa500] cursor-pointer'></div>
        <div className='w-5 h-5 rounded-2xl bg-[#696969] cursor-pointer'></div>
      </div>
    </div>
  );
};

export default Testimonials;
