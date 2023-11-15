const handleRowSelection = (email) => {
  // Check if the email is already selected, if yes, remove it; if not, add it
  setSelectedRows((prevSelectedRows) =>
    prevSelectedRows.includes(email)
      ? prevSelectedRows.filter((row) => row !== email)
      : [...prevSelectedRows, email]
  );
};

const handleHeaderCheckboxChange = (e) => {
  // Select or deselect all rows based on the state of the header checkbox
  if (e.target.checked) {
    // Select all rows
    setSelectedRows(user.map((user) => user.email));
  } else {
    // Deselect all rows
    setSelectedRows([]);
  }
};

module.exports = { handleRowSelection, handleHeaderCheckboxChange };
