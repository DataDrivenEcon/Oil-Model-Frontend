import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import React from "react";

const Navbar = () => {
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
    <header className='bg-transparent pt-5'>
      <nav className='mx-[7.5%]'>
        <div className='navbar'>
          <div className='flex-1'>
            <a className='normal-case font-semibold text-white text-xl cursor-pointer'>
              Brand Name
            </a>
          </div>
          <div className='flex-none'>
            <ul className='gap-10 items-center menu-horizontal px-1'>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#heroSection'>Home</a>
              </li>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#KeyBenefits'>Key Benefits</a>
              </li>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#about'>About</a>
              </li>

              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#contact'>Contact</a>
              </li>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#Testimonials'>Testimonials</a>
              </li>
              {user ? (
                <UserProfile />
              ) : (
                <li className='border-1 border-[#ffa500] font-inter font-semibold text-white capitalize cursor-pointer btn btn-outline hover:bg-[#ffa500]'>
                  <Link to='/login'>Log in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
