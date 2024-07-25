import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle user login logic here
    try {
      const res = await fetch("http://localhost:5555/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data);
      } else if (data.access_token) {
        console.log(data.access_token)
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form>
        <h2>Login</h2>
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
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
