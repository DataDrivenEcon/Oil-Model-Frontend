import React from "react";

const ActualTable = ({ getCategory, getActualData, getDataType }) => {
  const dates = Array.from(
    new Set(
      getActualData.map((item) =>
        new Date(item.Date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      )
    )
  );

  return (
    <div className='w-full shadow-lg py-2 overflow-hidden'>
      <p className='pb-2 pl-2 font-semibold text-[#5e676293]'>
        {getDataType === "Mobility"
          ? `${getCategory} % change from baseline-Actuals`
          : "Total % Vehicle Miles Traveled-Actuals"}
      </p>
      <div className='overflow-x-auto overflow-y-auto max-h-[250px]'>
        <table className='w-full border-collapse'>
          <thead className='sticky top-0 z-50'>
            <tr>
              <th className='sticky left-0 bg-gray-200 px-4 py-2'>Date</th>
              <th className='bg-gray-200 px-4 py-2'>Value</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr key={index}>
                <td className='sticky left-0 bg-gray-100 px-4 py-2'>{date}</td>
                <td className='px-4 py-2 text-blue-600'>
                  {getActualData.find(
                    (item) =>
                      new Date(item.Date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }) === date
                  )?.Value || 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActualTable;
