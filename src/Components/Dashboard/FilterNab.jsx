import { useEffect, useState } from "react";

const FilterNab = ({
  setGetDate,
  setGetCategory,
  setGetRegion,
  getRegion,
  setSubRegion,
}) => {
  const [allRegion, setAllRegion] = useState([]);
  const [allSubRegion, setAllSubRegion] = useState([]);
  useEffect(() => {
    const allRegion = async () => {
      fetch(
        "https://gary-eisen-project-backend.vercel.app/region-subregion/region"
      )
        .then((res) => res.json())
        .then((data) => setAllRegion(data));
    };
    const allSubRegion = async () => {
      fetch(
        "https://gary-eisen-project-backend.vercel.app/region-subregion/sub-region"
      )
        .then((res) => res.json())
        .then((data) => {
          const filteredData = data.filter(
            (item) => item.CountryName === getRegion
          );

          setAllSubRegion(filteredData);
        });
    };
    allRegion();
    allSubRegion();
  }, [getRegion]);
  return (
    <div className='w-full mt-2'>
      <div className='flex mx-[2%] justify-between items-center'>
        <div className='flex gap-4'>
          <div className='relative inline-flex'>
            <svg
              className='w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 412 232'
            >
              <path
                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                fill='#648299'
                fillRule='nonzero'
              />
            </svg>
            <select
              onChange={(e) => setGetRegion(e.target.value)}
              className='border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
            >
              <option disabled>Select region</option>

              {allRegion?.map((r, i) => (
                <option key={i}>{r.LocationName}</option>
              ))}
            </select>
          </div>
          {/* 2222 */}
          <div className='relative inline-flex'>
            <svg
              className='w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 412 232'
            >
              <path
                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                fill='#648299'
                fillRule='nonzero'
              />
            </svg>
            <select
              onChange={(e) => setSubRegion(e.target.value)}
              disabled={allRegion ? false : true}
              className='border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
            >
              <option disabled>Select subregion</option>
              {allSubRegion?.map((r, i) => (
                <option key={i}>{r.LocationName}</option>
              ))}
            </select>
          </div>
          <div className='relative inline-flex'>
            <svg
              className='w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 412 232'
            >
              <path
                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                fill='#648299'
                fillRule='nonzero'
              />
            </svg>
            <select
              onChange={(e) => setGetDate(e.target.value)}
              className='border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
            >
              <option selected disabled>
                Monthly/Weekly
              </option>
              <option value={"M"}>Monthly</option>
              <option value={"W"}>Weekly</option>
            </select>
          </div>
        </div>

        <div className='flex gap-4'>
          <div className='relative inline-flex'>
            <svg
              className='w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 412 232'
            >
              <path
                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                fill='#648299'
                fillRule='nonzero'
              />
            </svg>
            <select className='border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'>
              <option disabled>VMT/Mobility</option>
              <option value={"VMT"}>VMT</option>
              <option defaultValue={"Mobility"}>Mobility</option>
            </select>
          </div>
          <div className='relative inline-flex'>
            <svg
              className='w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 412 232'
            >
              <path
                d='M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z'
                fill='#648299'
                fillRule='nonzero'
              />
            </svg>
            <select
              onChange={(e) => setGetCategory(e.target.value)}
              className='border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none'
            >
              <option disabled>Select categories</option>
              <option defaultValue={"Retail and Recreation"}>
                Retail and Recreation
              </option>
              <option>Grocery and Pharmacy</option>
              <option>Transit</option>
              <option>Parks</option>
              <option>Workplaces</option>
              <option>Total</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterNab;
