import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CheckBox } from '@mui/icons-material';

function SignUp() {
  const navigate = useNavigate();
  const [isDoctor, setIsDoctor] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleCheckBox = () => {
    setIsDoctor(!isDoctor);
  };
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation for password matching
    if (formData.password !== formData.confirmPassword) {
    toast.error('Passwords do not match');
    
      return;
    }

    // If validation is successful
    try {
      console.log(formData);
      // Here, you would typically send a POST request to the server
      const response = await axios.post(
        'http://localhost:8081/signup',
        formData
      );
      setMessage('Sign up successful!');
      setError('');
      toast.success('Sign up successful!');

      navigate('/verifyEmail', { state: { email: formData.email } });
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error('Sign up failed. Please try again.');
    }
  };

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Are you a Doctor?:</label>
          <input
            type='checkbox'
            onChange={handleCheckBox}
           
          />
        </div>
        {
          isDoctor && <div className='form-group'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        }
        <div className='form-group'>
          <label>Username:</label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
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
        </div>
        <div className='form-group'>
          <label>Confirm Password:</label>
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: '10px',
            margin: '20px',
          }}
        >
          <p> Have an account?</p>
          <Link style={{ color: 'blue' }} to='/login'>
            Sign In
          </Link>
        </div>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
