import React, { useEffect, useState } from 'react';
import './VerifyEmail.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const { state } = useLocation();
  const navigator = useNavigate();


  useEffect(() => {

    if (state?.email) {
      setEmail(state.email);
    }
  }, []);

    const handleClick = async () => {

        try{
            const data = await axios.get('http://localhost:8081/verifyEmail', {email});
            toast.success('Email Sent');
            toast('Redirecting to Home');
            navigator('/');
        }
        catch(error){
            toast.error('Email not sent');
        }



       
        
    }
  return (
    <>
      <h1
        style={{
          fontSize: '30px',
          color: '#d3d3d3',
          textAlign: 'center',
          padding: 20,
          margin: 20,
        }}
      >
        Verify your Email
      </h1>
      <div className='verify'>
        <input  style={{padding:20 , fontSize:'24px' , width:'900px'}} type='text' placeholder='Enter your Mail' value={email} />
        <button onClick={handleClick}>click </button>
      </div>
    </>
  );
};

export default VerifyEmail;
