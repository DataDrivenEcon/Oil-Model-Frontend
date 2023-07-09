import React from "react";

const AcutalTable = ({ getCategory, getActualData }) => {
  // Extract unique years from the data
  const years = Array.from(
    new Set(getActualData.map((item) => new Date(item.Date).getFullYear()))
  );

  return (
    <div className='w-full shadow-lg py-2'>
      <p className='pb-2 pl-2 font-semibold text-[#5e676293] '>
        {getCategory} selected % change from baseline-Actuals
      </p>
      <div className='overflow-x-auto overflow-y-auto max-h-[250px]'>
        <table className='table w-full'>
          <thead className='sticky z-30 top-0'>
            <tr>
              <th>Month</th>
              {years.map((year, i) => (
                <th key={i}>{year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getActualData.map((item, i) => (
              <tr key={i}>
                <td>
                  {new Date(item.Date).toLocaleString("default", {
                    month: "long",
                  })}
                </td>
                {years.map((year) => (
                  <td key={year}>{item.Value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcutalTable;
