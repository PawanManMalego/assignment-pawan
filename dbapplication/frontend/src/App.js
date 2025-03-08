import React, { useState, useEffect } from "react"; 
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); // State to store users
  const [user, setUser] = useState({ name: "", email: "" }); // State to store new user input

  // Fetch users when the component loads
  useEffect(() => {
    axios
      .get("http://localhost:3000/users") // Fetch users from the backend
      .then((res) => setUsers(res.data.users)) // Update state with fetched users
      .catch((err) => console.log(err)); // Log errors
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); // Update user state on input change
  };

  // Add a new user
  const addUser = () => {
    axios
      .post("http://localhost:3000/add-user", user) // Send POST request to add user
      .then(() => {
        alert("User Added"); // Alert user on success
        setUser({ name: "", email: "" }); // Clear input fields
        window.location.reload(); // Reload page to update the list
      })
      .catch((err) => console.log(err)); // Log errors
  };

  return (
    <div className="container mt-5">
      <h2>User Management</h2>

      {/* User input form */}
      <div className="mb-3">
        <input
          name="name"
          value={user.name}
          placeholder="Name"
          className="form-control"
          onChange={handleChange}
        />
        <input
          name="email"
          value={user.email}
          placeholder="Email"
          className="form-control mt-2"
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2" onClick={addUser}>
          Add User
        </button>
      </div>

      {/* List of users */}
      <h3>Users</h3>
      <ul className="list-group">
        {users.map((u, index) => (
          <li key={index} className="list-group-item">
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
