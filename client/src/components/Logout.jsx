import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function Logout() {
  const { isLogin, setIsLogin } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the authentication token or any user session data
    localStorage.removeItem('user'); // Assuming you stored the auth token here
    setIsLogin(false); // Update the user context
    // Redirect to login or home page after logout
    navigate('/login'); // Redirect to login page
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
