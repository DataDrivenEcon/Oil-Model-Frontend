import React, { useEffect, useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import Row from "../Components/Dashboard/Row";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  const [selectedOption, setSelectedOption] = useState("ascending");
  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  const [user, setUser] = useState([]);
  const [status, setStatus] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearch(e.target.email.value);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/user?filter=${selectedOption}&email=${search}`
        );
        const data = await response.json();
        setUser(data.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [status, selectedOption, search]);

  const handleRowSelection = (email) => {
    // Check if the email is already selected, if yes, remove it; if not, add it
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(email)
        ? prevSelectedRows.filter((row) => row !== email)
        : [...prevSelectedRows, email]
    );
  };

  const handleHeaderCheckboxChange = (e) => {
    // Select or deselect all rows based on the state of the header checkbox
    if (e.target.checked) {
      // Select all rows
      setSelectedRows(user.map((user) => user.email));
    } else {
      // Deselect all rows
      setSelectedRows([]);
    }
  };

  const handleUpdateButtonClick = async (e) => {
    e.preventDefault();

    const updateStatus = async () => {
      try {
        setLoading(true);
        const status = e.target.status.value;
        const response = await fetch(
          "http://localhost:3000/user/updateUserStatus/bulk",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status, selectedRows }),
          }
        );

        const data = await response.json();

        if (data.status) {
          setStatus(status);
        }
      } catch (error) {
        console.error("Error updating status:", error);
      } finally {
        setLoading(false);
      }
    };

    await updateStatus(); // Wait for the updateStatus function to complete
  };
  return (
    <>
      <div className='pt-4 pb-9 px-9 w-full'>
        <Link to={"/"} className='text-[28px] font-medium '>
          VMT&Mobility Website User's
        </Link>
        <form onSubmit={handleSearch} className='flex gap-6 mt-9'>
          <input
            onChange={(e) =>
              e.target.value.length < 1 && setSearch(e.target.value)
            }
            type='email'
            name='email'
            placeholder='Search by email'
            className='input input-bordered w-full max-w-xs'
            required
          />
          <button type='submit' className='btn btn-success capitalize'>
            search
          </button>
        </form>
        <form onSubmit={handleUpdateButtonClick} className='pt-9'>
          <div className='flex justify-between items-center'>
            <div>
              <label htmlFor=''> Bulk Update:</label>
              <div className='flex gap-2 items-center'>
                <select
                  name='status'
                  className='select select-bordered w-full max-w-xs'
                >
                  <option>Pending</option>
                  <option>Verified</option>
                  <option>Closed</option>
                </select>
                <button
                  disabled={selectedRows.length < 2}
                  type='submit'
                  className='btn btn-success'
                >
                  save
                </button>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              {showFilters && (
                <div className='flex gap-2'>
                  <div
                    className={`flex items-center ${
                      selectedOption === "ascending"
                        ? "bg-sky-200"
                        : "bg-slate-300"
                    } py-1 px-5 rounded cursor-pointer font-medium`}
                    onClick={() => handleOptionClick("ascending")}
                  >
                    Ascending
                  </div>
                  <div
                    className={`flex items-center ${
                      selectedOption === "descending"
                        ? "bg-sky-200"
                        : "bg-slate-300"
                    } py-1 px-5 rounded cursor-pointer font-medium`}
                    onClick={() => handleOptionClick("descending")}
                  >
                    Descending
                  </div>
                  <div
                    className={`flex items-center ${
                      selectedOption === "verified"
                        ? "bg-sky-200"
                        : "bg-slate-300"
                    } py-1 px-5 rounded cursor-pointer font-medium`}
                    onClick={() => handleOptionClick("verified")}
                  >
                    Verified
                  </div>
                  <div
                    className={`flex items-center ${
                      selectedOption === "pending"
                        ? "bg-sky-200"
                        : "bg-slate-300"
                    } py-1 px-5 rounded cursor-pointer font-medium`}
                    onClick={() => handleOptionClick("pending")}
                  >
                    Pending
                  </div>
                  <div
                    className={`flex items-center ${
                      selectedOption === "closed"
                        ? "bg-sky-200"
                        : "bg-slate-300"
                    } py-1 px-5 rounded cursor-pointer font-medium`}
                    onClick={() => handleOptionClick("closed")}
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
          {user?.length > 0 ? (
            <div className='overflow-x-auto mt-4'>
              {loading ? (
                <Loading />
              ) : (
                <table className='table w-full'>
                  {/* head */}
                  <thead>
                    <tr className='text-[14px] font-normal text-[#464646]'>
                      <th>
                        <input
                          onChange={handleHeaderCheckboxChange}
                          type='checkbox'
                          className='checkbox'
                        />
                      </th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Update Status</th>
                      <th>Membership Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((user) => {
                      return (
                        <Row
                          key={user.id}
                          user={user}
                          setStatus={setStatus}
                          selectedRows={selectedRows}
                          handleRowSelection={handleRowSelection}
                        />
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          ) : (
            <img
              className='w-full h-[550px]'
              src='../../public/images/no-data-found.jpg'
              alt='no data found'
            />
          )}
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
