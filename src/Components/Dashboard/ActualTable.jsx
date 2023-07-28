import React from "react";

const ActualTable = ({ getCategory, getActualData, getDataType }) => {
  const renderCellValue = (item) => {
    if (getDataType === "Mobility") {
      return item.Value || 0;
    } else if (getDataType === "VMT") {
      return item.Value || item.SumOfValue || 0;
    } else {
      return "";
    }
  };

  // Extract unique years from the data
  const years = Array.from(
    new Set(getActualData.map((item) => item.Date.split("-")[0]))
  );

  return (
    <div className='w-full shadow-lg py-2 overflow-hidden'>
      <p className='pb-2 pl-2 font-semibold text-[#5e676293]'>
        {getDataType === "Mobility"
          ? `${getCategory} % change from baseline-Actuals`
          : `${getCategory} % Vehicle Miles Traveled-Actuals`}
      </p>
      <div className='overflow-x-auto overflow-y-auto max-h-[500px]'>
        <table className='w-full border-collapse'>
          <thead className='sticky top-0 z-50'>
            <tr>
              <th className='sticky left-0 bg-gray-200 px-4 py-2'>Month</th>
              {years.map((year) => (
                <th key={year} className='bg-gray-200 px-4 py-2'>
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }, (_, monthIndex) => {
              const month = new Date(2000, monthIndex, 1).toLocaleDateString(
                "en-US",
                {
                  month: "short",
                }
              );
              return (
                <tr key={month}>
                  <td className='sticky left-0 bg-gray-100 px-4 py-2'>
                    {month}
                  </td>
                  {years.map((year) => {
                    const actualItem = getActualData.find(
                      (item) =>
                        item.Date ===
                        `${year}-${(monthIndex + 1)
                          .toString()
                          .padStart(2, "0")}-01`
                    );
                    const cellValue = actualItem
                      ? renderCellValue(actualItem)
                      : "";

                    return (
                      <td key={`${year}-${monthIndex}`} className='px-4 py-2'>
                        {cellValue}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActualTable;
