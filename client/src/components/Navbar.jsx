import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import { useUser } from '../context/UserContext';

function Navbar() {
  const { isLogin, isAdmin, userName, isDoctor   } = useUser();

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to={'/'}>
          <img src='/logo.svg' alt='logo' style={{ height: '30px' }} />
        </Link>
      </div>
      <ul className='navbar-links'>
        {isLogin ? (
          <li>
            <Link to='/'>Home</Link>
          </li>
        ) : null}
        {isLogin && isAdmin ? (
          <li>
            <Link to='/dashboard'>{isAdmin ? 'Admin-' : null}Dashboard</Link>
          </li>
        ) : isLogin && isDoctor ? (
          <li>
            <Link to='/dashboard'>{isDoctor ? 'Doctor-' : null}Dashboard</Link>
          </li>
        ) : null}

        {isLogin && isDoctor ? (
          <li>
            <Link to='/dashboard'>{isDoctor ? 'Doctor-' : null}Dashboard</Link>
          </li>
        ) : null}

        {!isLogin ? (
          <>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              {' '}
              <Link to='/signup'>signup</Link>{' '}
            </li>
          </>
        ) : null}
        {isLogin ? (
          <li>
            <Link to='/logout'>logout</Link>
          </li>
        ) : null}

        {isLogin ? (
          <li>
            <Link className='upper'>{userName} </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
