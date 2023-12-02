// import { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../firebase.init";
// const [user] = useAuthState(auth);

// useEffect(() => {
//   const fetchApproveUsers = async () => {
//     if (user) {
//       try {
//         const token = localStorage.getItem("token"); // Get the token from local storage
//         const response = await fetch(
//           `https://gary-eisen-project-backend.vercel.app/user?email=${user.email}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`, // Include the token in the headers
//             },
//           }
//         );
//         const data = await response.json();
//         if (data.data.length > 0) {
//           setApproveUser(data.data[0].membership_status);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     }
//   };
//   fetchApproveUsers();
// }, [user]);

const useFetchApproveUser = async (email) => {
  if (email) {
    try {
      const token = localStorage.getItem("token"); // Get the token from local storage
      const response = await fetch(
        `https://gary-eisen-project-backend.vercel.app/user?email=${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the headers
          },
        }
      );
      const data = await response.json();
      return data.data[0];
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
};

export { useFetchApproveUser };
