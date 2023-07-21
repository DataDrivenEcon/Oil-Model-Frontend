import React, { useState } from "react";

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 35;
  const totalItems = getActualData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = getActualData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const dates = Array.from(
    new Set(
      paginatedData.map((item) =>
        new Date(item.Date).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
      )
    )
  );

  const years = Array.from(
    new Set(paginatedData.map((item) => new Date(item.Date).getFullYear()))
  );

  const shouldRenderPrevButton = currentPage > 1;
  const shouldRenderNextButton = currentPage < totalPages;

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
              {years.map((year, i) => (
                <th key={i} className='bg-gray-200 px-4 py-2'>
                  {year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr key={index}>
                <td className='sticky left-0 bg-gray-100 px-4 py-2'>
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </td>
                {years.map((year, i) => {
                  const actualItem = paginatedData.find(
                    (item) =>
                      new Date(item.Date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      }) === date && new Date(item.Date).getFullYear() === year
                  );
                  const cellValue = actualItem
                    ? renderCellValue(actualItem)
                    : 0;

                  return (
                    <td key={i} className='px-4 py-2'>
                      {cellValue}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={years.length + 1}>
                <div className='flex justify-center mt-4'>
                  {shouldRenderPrevButton && (
                    <button
                      className='bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded mr-2'
                      onClick={handlePrevPage}
                    >
                      Previous
                    </button>
                  )}
                  {shouldRenderNextButton && (
                    <button
                      className='bg-gray-200 hover:bg-gray-300 font-bold py-2 px-4 rounded'
                      onClick={handleNextPage}
                    >
                      Next
                    </button>
                  )}
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ActualTable;
