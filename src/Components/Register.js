import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5006/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data)

    if (!data.error) {
      // Navigate to the next screen with a welcome message
      navigate("/login")
    } else {
      setError(data.messages);
    }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        height: '90vh',

        borderRadius: '10px',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
            style={{
              padding: '5px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
        </div>
        <button
          type='submit'
          style={{
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
