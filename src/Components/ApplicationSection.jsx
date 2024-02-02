import React from "react";

const ApplicationsSection = () => {
  return (
    <section className='bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Applications</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>
              Gasoline Prices Forecasting
            </h3>
            <p className='text-gray-700 mb-4'>
              The U.S. Energy Information Administration (EIA) issues weekly
              estimates of gasoline demand in the preceding week. Gasoline
              demand is an important determinant of gasoline prices. Forecasts
              of gasoline prices are traded on national exchanges like the New
              York Mercantile Exchange.
            </p>
            <p className='text-gray-700 mb-4'>
              Road Mobility provides an up-to-date estimate of weekly VMT. When
              combined with car fuel efficiency, Road Mobility becomes a
              valuable tool that traders, oil companies, and hedge funds can use
              to anticipate gasoline price trends.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>
              Market Analysis & Trading
            </h3>
            <p className='text-gray-700 mb-4'>
              Road Mobility offers features for forecasting U.S. gasoline demand
              and gasoline price spreads. It also helps investors and traders
              analyze changing competitive trends and make informed decisions in
              the stock market.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>
              Corporate Planning & Marketing
            </h3>
            <p className='text-gray-700 mb-4'>
              Road Mobility's detailed data enables marketing professionals and
              corporate planners to analyze changing competitive trends in
              real-time. It also provides valuable insights for companies
              servicing activities related to retail, transit, and work.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>
              Real Estate Development
            </h3>
            <p className='text-gray-700 mb-4'>
              Road Mobility helps real estate developers optimize their
              decisions by identifying trends in consumer buying habits. It
              provides data to decide where and what to build based on real-time
              consumer behavior.
            </p>
          </div>
          <div className='col-span-2 bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Government & Media</h3>
            <p className='text-gray-700 mb-4'>
              Road Mobility's detailed description of current economic and
              travel trends is valuable for federal, state, and local
              governments, trade associations, and news media. It provides
              insights into economic and travel patterns.
            </p>
          </div>
          <div className='col-span-2 bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Tailored Solutions</h3>
            <p className='text-gray-700 mb-4'>
              Developers and companies can collaborate with us to tailor our
              data and methodology to their specific needs. Our detailed data
              can be customized for various applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
