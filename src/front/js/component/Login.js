import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      sessionStorage.setItem('authToken', token);
      window.location.href = '/private'; // Redirect to private dashboard
    } else {
      console.error('Login failed');
    }
  };

  return (

    <form className="container-fluid p-3 d-flex flex-column align-items-center justify-content-center border " onSubmit={handleSubmit}>
      <h2 className="col-1 text-center ">Login</h2>

      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button className="btn-danger  " type="submit">Login</button>
    </form>



  );
};

export default Login;
