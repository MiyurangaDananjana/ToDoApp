
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../../assets/lock_img.gif'
import LoginService from '../../services/LoginService';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage('Please fill in all fields.');
    } else {
      try {
        // Simulating a backend call
        const result = await LoginService.login(username, password);
        if (result.success) {
          navigate('/admin');
        } else {
          setErrorMessage(result.error);
        }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div>
          <img className='logo' src={logo} alt="login-img" />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
