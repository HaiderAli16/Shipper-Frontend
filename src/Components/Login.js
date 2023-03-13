import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUrl } from '../Contants/Constants';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    const response = await fetch(LoginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data)

    if (!data.error) {
      // Navigate to the next screen with a welcome message
      navigate("/get-shippers")
    } else {
      setError(data.messages);
    }
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  const handleRegisterClose = () => {
    setShowRegister(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '5px',
          padding: '2rem',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Login</h2>
        {error && (
          <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
        )}
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor='email'
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Email:
          </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            style={{
              padding: '0.5rem',
              borderRadius: '3px',
              border: 'none',
              width: '100%',
              backgroundColor: '#f7f7f7',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label
            htmlFor='password'
            style={{ display: 'block', marginBottom: '0.5rem' }}
          >
            Password:
          </label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            style={{
              padding: '0.5rem',
              borderRadius: '3px',
              border: 'none',
              width: '100%',
              backgroundColor: '#f7f7f7',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem',
          }}
        >
          <button
            onClick={handleLoginClick}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '3px',
              border: 'none',
              backgroundColor: '#0080ff',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
          <Link
            onClick={handleRegisterClick}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '3px',
              border: 'none',
              backgroundColor: '#f7f7f7',
              color: '#333',
              cursor: 'pointer',
            }}
            to='/register'
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
