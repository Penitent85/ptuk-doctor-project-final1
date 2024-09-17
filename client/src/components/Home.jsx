import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useUser } from '../context/UserContext';
import Dashboard from './Dashboard';
import DoctorDashboard from './DoctorDashboard';
import { ImageSlider } from './ImageSlider';
import Doctors from './doctorcard/Doctors';
import { Paper, Typography } from '@mui/material';

const Home = () => {
  const {
    isLogin,
    isDoctor,
    isAdmin,
    setUserName,
    setIsAdmin,
    setIsLogin,
    user,
  } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const user_ = JSON.parse(localStorage.getItem('user'));
    if (user_) {
      console.log(user_);
      if (user_.isAdmin) setIsAdmin(true);
      setUserName(user_.username);
      setIsLogin(true);

      navigate('/');
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
        <>
    <div>
      {isAdmin ? (
        <Dashboard />
      ) : isDoctor ? (
        <DoctorDashboard />
      ) : (
        <h1>
          Welcome
          {isAdmin ? 'Admin' : isDoctor ? 'Doctor' : 'User'}{' '}
        </h1>
      )}
    </div>
    <ImageSlider />
    <Doctors />

    
    </>
  );
};

export default Home;
