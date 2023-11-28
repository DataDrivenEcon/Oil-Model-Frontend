import React, { useEffect, useState } from "react";
import { useFetchApproveUser } from "./AdminDashboardHook";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const AdminAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const userStatus = await useFetchApproveUser(user?.email);
        if (userStatus === "Admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error fetching admin status:", error);
      } finally {
        setLoading(false);
      }
    };
// comments for multiline
    if (user) {
      fetchAdmin();
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!isAdmin && !loading) {
    return (
      <h1 className='text-2xl font-bold'>
        status:409, message: 'unauthorized access!'
      </h1>
    );
  }

  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default AdminAuth;
