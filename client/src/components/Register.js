import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserame] = useState(null);
  const [tocken,setTocken]=useState(null)

  const handleRegister = async (e) => {
    // Handle user registration logic here
    e.preventDefault();
    // Handle user login logic here
    try {
      const res = await fetch("http://localhost:5555/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username,email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUserame(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
