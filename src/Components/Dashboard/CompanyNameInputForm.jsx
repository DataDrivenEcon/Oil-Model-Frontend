import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading";
import { useFetchApproveUser } from "../../Hooks/AdminDashboardHook";
const CompanyNameInputForm = () => {
  const [user, loading] = useAuthState(auth);
  const [approveUser, setApproveUser] = useState(null);
  const [loading2, setLoading2] = useState(false);
  useEffect(() => {
    const fetchApproveUsers = async () => {
      const status = await useFetchApproveUser(user?.email);
      setApproveUser(status);
    };
    fetchApproveUsers();
  }, []);
  if (!approveUser || loading || loading2) {
    return <Loading />;
  }
  const handleSubmit = async (e) => {
    setLoading2(true);
    e.preventDefault();
    const companyName = e.target.companyName.value;
    const token = localStorage.getItem("token"); // Get the token from local storage
    const response = await fetch(
      "https://gary-eisen-project-backend.vercel.app/user/updateUserStatus",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify({ companyName, id: approveUser.id }), // Include any required data
      }
    );
    const data = await response.json();
    if (data.status === "success") {
      window.location.reload();
    }
    setLoading2(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='w-screen h-screen flex flex-col justify-center items-center gap-8'
    >
      <div className='flex gap-2'>
        <input
          className='input input-bordered w-full max-w-xs'
          name='companyName'
          type='text'
          placeholder='Enter Company Name'
          required
        />
        <button className='btn btn-success'>Submit</button>
      </div>
      <div className='bg-success flex gap-3 items-center font-medium p-5 rounded text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-current shrink-0 w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>

        <p>
          "Please enter your company name once, and you'll be ready to proceed."
        </p>
      </div>
    </form>
  );
};

export default CompanyNameInputForm;
