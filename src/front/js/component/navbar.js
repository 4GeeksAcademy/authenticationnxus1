import React from 'react';



const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    window.location.href = '/login'; // Redirect to login after logout
  };

  return (
    <nav>
      <a href="/signup">Signup</a>
      <a href="/login">Login</a>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
