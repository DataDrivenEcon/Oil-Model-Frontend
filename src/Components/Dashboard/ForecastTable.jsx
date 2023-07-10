import React from "react";

const ForecastTable = ({ getCategory, getAllForecast, getDataType }) => {
  const renderCellValue = (item) => {
    if (getDataType === "Mobility") {
      return item.Value || 0;
    } else if (getDataType === "VMT") {
      return item.SumOfValue || 0;
    } else {
      return "";
    }
  };

  return (
    getAllForecast.length > 0 && (
      <div className='w-full shadow-lg py-2'>
        <p className='pb-2 pl-2 font-semibold text-[#5e676293]'>
          {getDataType === "Mobility"
            ? `${getCategory} % change from baseline-Forecast`
            : "Total % Vehicle Miles Traveled-Forecast"}
        </p>
        <div className='overflow-x-auto overflow-y-auto max-h-[250px]'>
          <table className='table w-full'>
            <thead className='sticky top-0 z-50'>
              <tr>
                <th>Date</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {getAllForecast.map((item, i) => (
                <tr key={i}>
                  <td>
                    {new Date(item.Date).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td>
                    {renderCellValue(item) !== 0 && (
                      <span className='text-blue-600 p-1 rounded'>
                        {renderCellValue(item)}
                      </span>
                    )}
                  </td>
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
