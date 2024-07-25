import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister =async () => {
    try {
      const res = await fetch("http://localhost:5000")
    } catch (error) {
      
    }
    // Handle user registration logic here
    console.log('Register', { email, password });
  };

  return (
    <div className="container">
      <form>
        <h2>Register</h2>
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
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Register;
