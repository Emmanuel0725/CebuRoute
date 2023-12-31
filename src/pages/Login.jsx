import React, { useState } from 'react';


export default function Login({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="modal--overlay">
      <div className="modal--login">
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className='modal-login-sign-text'>Login</h2>
        <form className='modal-login-sign-form'>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>
            Password:
            <div className="password-input">
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className={`toggle-password-button ${showPassword ? 'visible' : ''}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️‍🗨️" : "👁"}
                </button>
              </div>
            </div>
          </label>

          <div className="forgot-password">
            <a href="#">Forgot your Password?</a>
          </div>

          <button className='button-login-sign' type="submit">Login</button>
        </form>
        <div className="login-sign-link">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}