import './DoctorDashboard.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'; // Importing styles for Dashboard
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';

function DoctorDashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  const { isDoctor } = user;
  if (user && isDoctor) {
    return (
      <div className='dashboard-container'>
        <nav className='sidebar'>
          <ul>
            <li>
              <Link to=''>Doctor Dashboard</Link>
            </li>
            <li>
              <Link to='login'>Login</Link>
            </li>
            <li>
              <Link to='signup'>Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className='dashboard-content'>
          <Outlet />
        </div>
      </div>
    );
  }
  return <h1>Not Authorized</h1>;
}

export default DoctorDashboard;
