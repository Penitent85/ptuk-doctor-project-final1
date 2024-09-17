import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../context/UserContext';
 
function Login() {
  const navigate = useNavigate();
  const { setIsDoctor, setUserName, setIsLogin, setIsAdmin, setUser } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    const user_ = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      
      setIsAdmin(user_.isAdmin);
      setIsDoctor(user_.isDoctor);
      setIsLogin(true);
      setUserName(user_.username);
      navigate('/');
    }
  }, [navigate]);

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       
      const response = await axios.post(
        'http://localhost:8080/login',
        formData
      );
      const userDetails = response.data.user;
      setUser(userDetails);
      // If successful, handle the response accordingly
      localStorage.setItem('user', JSON.stringify(userDetails));
      setIsLogin(true);
      setIsDoctor(userDetails.isDoctor);

      setIsAdmin(userDetails.isAdmin);
      toast.success('Login successful!');
      navigate('/');
    } catch (error) {
      
      toast.error(error.response.data.message);
      
    }
  };

  return (
    <div className='login-container'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
              gap: '10px',
              margin: '20px',
            }}
          >
            <p>Don't have account?</p>
            <Link style={{ color: 'blue' }} to='/signup'>
              Sign Up
            </Link>
          </div>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
