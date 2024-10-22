import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    window.location.href = '/login'; // Redirect to login after logout
  };

  return (
    <nav>
      <Link to="/Signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/private">Private</Link> {/* Agrega un enlace a la página privada */}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
