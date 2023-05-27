const KeyBenefits = () => {
  return (
    <div className='p-8 bg-[#f3f3f3]'>
      <h1 className='text-5xl text-center font-semibold mb-6 text-[#575F69]'>
        Key Benefits{" "}
      </h1>
      <div className='container'>
        <div className='flex flex-col md:grid grid-cols-12 text-gray-50'>
          <div className='flex md:contents'>
            <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
              <div className='h-full w-6 flex items-center justify-center'>
                <div className='h-full w-1 bg-green-500 pointer-events-none'></div>
              </div>
              <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center'>
                <i className='fas fa-check-circle text-white'></i>
              </div>
            </div>
            <div className='bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
              <h3 className='font-semibold text-lg mb-1'>
                Gain a Competitive Edge
              </h3>
              <p className='leading-tight text-justify w-full'>
                Access exclusive and reliable data to gain a competitive edge in
                the dynamic world of oil economics.{" "}
              </p>
            </div>
          </div>

          <div className='flex md:contents'>
            <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
              <div className='h-full w-6 flex items-center justify-center'>
                <div className='h-full w-1 bg-green-500 pointer-events-none'></div>
              </div>
              <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center'>
                <i className='fas fa-check-circle text-white'></i>
              </div>
            </div>
            <div className='bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
              <h3 className='font-semibold text-lg mb-1'>
                Make Informed Decisions
              </h3>
              <p className='leading-tight text-justify'>
                Leverage our comprehensive data sets to make strategic decisions
                based on accurate and up-to-date information.{" "}
              </p>
            </div>
          </div>

          <div className='flex md:contents'>
            <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
              <div className='h-full w-6 flex items-center justify-center'>
                <div className='h-full w-1 bg-green-500 pointer-events-none'></div>
              </div>
              <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center'>
                <i className='fas fa-times-circle text-white'></i>
              </div>
            </div>
            <div className='bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
              <h3 className='font-semibold text-lg mb-1 text-gray-50'>
                Save Time and Effort
              </h3>
              <p className='leading-tight text-justify'>
                Avoid spending hours collecting and analyzing data - our
                ready-to-use data products are designed to save you time and
                effort.{" "}
              </p>
            </div>
          </div>
          {/* ......................  */}
          <div className='flex md:contents'>
            <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
              <div className='h-full w-6 flex items-center justify-center'>
                <div className='h-full w-1 bg-green-500 pointer-events-none'></div>
              </div>
              <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center'>
                <i className='fas fa-check-circle text-white'></i>
              </div>
            </div>
            <div className='bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
              <h3 className='font-semibold text-lg mb-1'>Expert Support </h3>
              <p className='leading-tight text-justify w-full'>
                Our dedicated team of oil economics experts is always available
                to provide guidance, answer your questions, and ensure you get
                the most out of our data.
              </p>
            </div>
          </div>
          <div className='flex md:contents'>
            <div className='col-start-2 col-end-4 mr-10 md:mx-auto relative'>
              <div className='h-full w-6 flex items-center justify-center'>
                <div className='h-full w-1 bg-green-500 pointer-events-none'></div>
              </div>
              <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center'>
                <i className='fas fa-check-circle text-white'></i>
              </div>
            </div>
            <div className='bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full'>
              <h3 className='font-semibold text-lg mb-1'>
                Drive Efficiency and Profitability{" "}
              </h3>
              <p className='leading-tight text-justify w-full'>
                Optimize your operations, improve profitability, and achieve
                your business goals with our powerful insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;
