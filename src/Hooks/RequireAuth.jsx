import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Components/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [approveUser, setApproveUser] = useState("");
  useEffect(() => {
    const fetchApproveUsers = async () => {
      if (user) {
        try {
          const token = localStorage.getItem("token"); // Get the token from local storage
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
            setApproveUser(data.data[0].membership_status);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchApproveUsers();
  }, [user]);
  if (approveUser === "closed") {
    return <h1>your not allow to use this website</h1>;
  } else if (approveUser === "pending") {
    return (
      <h1>
        your account is pending. please wait few hour. support team will be
        approve you as soon as possible
      </h1>
    );
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
