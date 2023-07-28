import React from "react";

const ForecastTable = ({ getCategory, getAllForecast, getDataType }) => {
  const renderCellValue = (month, year) => {
    const forecastItem = getAllForecast.find((item) => {
      const itemDate = new Date(item.Date);
      return (
        itemDate.getUTCMonth() === months.indexOf(month) &&
        itemDate.getUTCFullYear() === year
      );
    });

    if (getDataType === "Mobility") {
      return forecastItem ? forecastItem.Value || "" : "";
    } else if (getDataType === "VMT") {
      return forecastItem ? forecastItem.SumOfValue || "" : "";
    } else {
      return "";
    }
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = Array.from(
    new Set(getAllForecast.map((item) => new Date(item.Date).getUTCFullYear()))
  );

  return (
    getAllForecast.length > 0 && (
      <div className='w-full shadow-lg py-2'>
        <p className='pb-2 pl-2 font-semibold text-[#5e676293]'>
          {getDataType === "Mobility"
            ? `${getCategory} % change from baseline-Forecast`
            : `${getCategory} % Vehicle Miles Traveled-Forecast`}
        </p>
        <div className='overflow-x-auto overflow-y-auto max-h-[500px]'>
          <table className='table w-full'>
            <thead className='sticky top-0 z-50'>
              <tr className='rounded-none'>
                <th className='rounded-none'>Month</th>
                {years.map((year, i) => (
                  <th className='rounded-none' key={i}>
                    {year}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {months.map((month, i) => (
                <tr key={i}>
                  <td className='bg-gray-100'>{month}</td>
                  {years.map((year, j) => {
                    const cellValue = renderCellValue(month, year);
                    return <td key={j}>{cellValue}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
};

export default ForecastTable;
