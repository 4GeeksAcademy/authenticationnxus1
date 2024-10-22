import React, { useEffect } from 'react';

const Private = () => {
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (!token) {
      window.location.href = '/login'; // Redirect to login if not authenticated
    }
  }, []);

  return <h1>Welcome to the Private Page!</h1>;
};

export default Private;
