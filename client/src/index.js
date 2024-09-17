import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import UserProvider from './context/UserContext';
import { ThemeProvider } from '@mui/material';
import theme from './theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ThemeProvider theme={theme}>

    <App />
    </ThemeProvider>
  </UserProvider>
);
