import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://probable-giggle-v6pxg47j75qvcxpgw-5000.app.github.dev/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Registro exitoso');
        navigate('/login');
      } else {
        const errorData = await response.json();
        console.log('Error al registrarse:', errorData.message);
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema con la solicitud. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className='container-fluid p-3 d-flex flex-column align-items-center justify-content-center border'>
      <h2>Sign Up</h2>
      <form className="container-fluid p-3 d-flex flex-column align-items-center justify-content-center border" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='btn-danger' type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
