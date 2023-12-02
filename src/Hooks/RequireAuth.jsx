// import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Components/Loading";
import { useFetchApproveUser } from "./AdminDashboardHook";
import { useEffect, useState } from "react";
import CompanyNameInputForm from "../Components/Dashboard/CompanyNameInputForm";

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
  }, [user]);

  if (
    approveUser &&
    approveUser !== "Admin" &&
    approveUser?.["Company Name"] === null
  ) {
    return <CompanyNameInputForm />;
  }

  if (approveUser) {
    if (approveUser?.membership_status === "closed") {
      return <h1>your not allow to use this website</h1>;
    } else if (approveUser?.membership_status === "pending") {
      return (
        <h1>
          your account is pending. please wait few hour. support team will be
          approve you as soon as possible
        </h1>
      );
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
