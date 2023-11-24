// import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { useFetchApproveUser } from "./AdminDashboardHook";
import { useEffect, useState } from "react";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [approveUser, setApproveUser] = useState(null);
  useEffect(() => {
    const fetchApproveUsers = async () => {
      const status = await useFetchApproveUser(user?.email);
      setApproveUser(status);
    };
    fetchApproveUsers();
  }, [approveUser, user]);

  if (!approveUser || approveUser) {
    if (approveUser === "closed") {
      return <h1>your not allow to use this website</h1>;
    } else if (approveUser === "pending") {
      return (
        <h1>
          your account is pending. please wait few hour. support team will be
          approve you as soon as possible
        </h1>
      );
    } else if (!approveUser) {
      return <Loading />;
    }
  }

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  if (!user.emailVerified) {
    return (
      <Navigate
        to={"/verify-email"}
        state={{ from: location }}
        replace
      ></Navigate>
    );
  }
  return children;
};

export default RequireAuth;
