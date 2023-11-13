import React, { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
const AdminDashboard = () => {
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  return (
    <div className='pt-4 pb-9 px-9 w-screen'>
      <h1 className='text-[28px] font-medium '>User's</h1>
      <form className='flex gap-6 mt-9'>
        <input
          type='text'
          placeholder='Search by email'
          className='input input-bordered w-full max-w-xs'
        />
        <button type='submit' className='btn btn-success capitalize'>
          search
        </button>
      </form>
      <form action='' className='pt-9'>
        <div className='flex justify-between items-center'>
          <div>
            <label htmlFor=''> Bulk Update:</label>
            <div className='flex gap-2 items-center'>
              <select className='select select-bordered w-full max-w-xs'>
                <option>Pending</option>
                <option>Verified</option>
                <option>Closed</option>
              </select>
              <button className='btn btn-success'>save</button>
            </div>
          </div>
          <div className='flex gap-4 items-center'>
            {showFilters && (
              <div className='flex gap-2'>
                <div
                  className={`flex items-center ${
                    selectedOption === 0 ? "bg-sky-200" : "bg-slate-300"
                  } py-1 px-5 rounded cursor-pointer font-medium`}
                  onClick={() => handleOptionClick(0)}
                >
                  Ascending
                </div>
                <div
                  className={`flex items-center ${
                    selectedOption === 1 ? "bg-sky-200" : "bg-slate-300"
                  } py-1 px-5 rounded cursor-pointer font-medium`}
                  onClick={() => handleOptionClick(1)}
                >
                  Descending
                </div>
                <div
                  className={`flex items-center ${
                    selectedOption === 2 ? "bg-sky-200" : "bg-slate-300"
                  } py-1 px-5 rounded cursor-pointer font-medium`}
                  onClick={() => handleOptionClick(2)}
                >
                  Verifired
                </div>
                <div
                  className={`flex items-center ${
                    selectedOption === 3 ? "bg-sky-200" : "bg-slate-300"
                  } py-1 px-5 rounded cursor-pointer font-medium`}
                  onClick={() => handleOptionClick(3)}
                >
                  Pending
                </div>
                <div
                  className={`flex items-center ${
                    selectedOption === 4 ? "bg-sky-200" : "bg-slate-300"
                  } py-1 px-5 rounded cursor-pointer font-medium`}
                  onClick={() => handleOptionClick(4)}
                >
                  Closed
                </div>
              </div>
            )}
            <div
              onClick={toggleFilters}
              className='cursor-pointer w-9 h-9 rounded-full bg-black flex justify-center items-center'
            >
              <BiFilterAlt className='text-white w-5 h-5' />
            </div>
          </div>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table w-full'>
            {/* head */}
            <thead>
              <tr className='text-[14px] font-normal text-[#464646]'>
                <th>
                  <input type='checkbox' className='checkbox' />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Update Status</th>
                <th>Membership Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className='bg-base-200'>
                <th>
                  <input type='checkbox' className='checkbox' />
                </th>
                <td>khalid</td>
                <td>khalid100umar@gmail.com</td>
                <td>
                  <select className='select select-bordered '>
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Closed</option>
                  </select>
                </td>
                <td>
                  <p className='bg-[#D4F8D3] rounded-full px-3 py-1 w-fit '>
                    verified
                  </p>
                </td>
                <td>12 March, 2023 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default AdminDashboard;
