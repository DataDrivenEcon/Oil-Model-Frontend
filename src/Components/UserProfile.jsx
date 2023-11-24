import React, { useEffect, useState } from "react";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const fetchApproveUsers = async () => {
      if (user) {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            `https://gary-eisen-project-backend.vercel.app/user?email=${user.email}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
            }
          );
          const data = await response.json();
          if (data.data.length > 0) {
            setAdmin(data.data[0].membership_status === "Admin" ? true : false);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchApproveUsers();
  }, [user]);
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
      >
        <li>
          <Link to={"/mobility-data"}>Mobility Data</Link>
        </li>
        {!user.emailVerified && (
          <li>
            <Link to={"/verify-email"}>Verify email</Link>
          </li>
        )}
        {admin && (
          <li>
            <Link to={"/adminDashboard"}>Admin Dashboard</Link>
          </li>
        )}
        <li onClick={() => signOut(auth)}>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
