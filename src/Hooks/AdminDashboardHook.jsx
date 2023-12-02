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
