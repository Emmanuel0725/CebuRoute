import React, { useState } from 'react';

export default function Sign({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <div className="modal--overlay">
      <div className="modal--sign">
      <button className="close-button" onClick={onClose}>X</button>
        <h2 className='modal-login-sign-text'>Sign Up</h2>
        <form className='modal-login-sign-form'>
          <div className="name-inputs">
            <div className="name-input">
              <label>First Name:</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="name-input">
              <label>Last Name:</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
          </div>

          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />

          <label>
            Password:
            <div className="password-input">
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
          </label>

          <label>
            Confirm Password:
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className={`toggle-password-button ${showPassword ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁️‍🗨️" : "👁"}
              </button>
            </div>
          </label>

          <button className='button-login-sign' type="submit">Sign Up</button>
        </form>
        <div className="login-sign-link">
          Already have an account? <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
}