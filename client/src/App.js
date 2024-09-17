import Login from './components/Login';
import SignUp from './components/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import VerifyEmail from './components/VerifyEmail';
import { ToastContainer } from 'react-toastify';
import Logout from './components/Logout';
import { useUser } from './context/UserContext';

const App = () => {
  const { isLogin, isAdmin } = useUser();

  return (
    <div  className='cont'>
      <Router>
        <Navbar />
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />

        <Routes>
          {isLogin ? (
            <Route path='/' element={<Home />} />
          ) : (
            <Route path='*' element={<Navigate to='/login' replace />} />
          )}

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/VerifyEmail' element={<VerifyEmail />} />
          <Route path='/logout' element={<Logout />} />

          {isAdmin ? (
            <Route path='/Dashboard' element={<Dashboard />} />
          ) : (
            <Route path='*' element={<Navigate to='/' replace />} />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
