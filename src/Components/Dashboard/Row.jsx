const Row = ({ user, selectedRows, handleRowSelection, setStatus }) => {
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    const token = localStorage.getItem("token");
    const response = await fetch(
      `https://gary-eisen-project-backend.vercel.app/user/updateUserStatus`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
        body: JSON.stringify({ status: newStatus, id: user.id }),
      }
    );
    const data = await response.json();
    if (data.status) {
      setStatus(newStatus);
    } else {
      console.error("Server responded with an error:", data.error);
    }
  };

  return (
    <tr className='bg-base-200'>
      <th>
        {user.membership_status !== "Admin" && (
          <input
            type='checkbox'
            className='checkbox'
            checked={selectedRows.includes(user.email)}
            onChange={() => handleRowSelection(user.email)}
          />
        )}
      </th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <select
          onChange={handleStatusChange}
          className='select select-bordered '
          disabled={user.membership_status === "Admin"}
        >
          {user.membership_status === "Admin" && (
            <option defaultValue={"Admin"}>Admin</option>
          )}
          <option>Pending</option>
          <option>Verified</option>
          <option>Closed</option>
        </select>
      </td>
      <td>
        <p
          className={`${
            user.membership_status === "pending" &&
            "bg-[#F8F4D3] rounded-full px-3 py-1 w-fit flex justify-center items-center"
          } ${
            user.membership_status === "verified" &&
            "bg-[#D4F8D3] rounded-full px-3 py-1 w-fit flex justify-center items-center"
          } ${
            user.membership_status === "closed" &&
            "bg-[#EDE7FB] rounded-full px-3 py-1 w-fit flex justify-center items-center"
          } ${
            user.membership_status === "Admin" &&
            "bg-success rounded-full px-3 py-1 w-fit flex justify-center items-center"
          }`}
        >
          {user.membership_status}
        </p>
      </td>
      <td>
        {(() => {
          const dateString = user.date;
          const date = new Date(dateString);

          const options = {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
          };

          const formattedDate = date.toLocaleDateString("en-US", options);

          return formattedDate;
        })()}
      </td>
    </tr>
  );
};

export default Row;
