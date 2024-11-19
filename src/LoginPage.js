import React from 'react';
import './LoginPage.css'; // Add your custom styles or use a CSS framework.

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Instagram</h1>
        <form className="login-form">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="facebook-login">Log in with Facebook</button>
        <a href="/forgot-password" className="forgot-link">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
