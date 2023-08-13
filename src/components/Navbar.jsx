import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Login from '../pages/Login.jsx';
import Sign from '../pages/Sign.jsx';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <nav className='navbar'>
      <img src="../images/Untitled design.png" />
      <div className='link'>
        <button className='link--button' onClick={() => setShowLoginModal(true)}>
          <h1 className='login--text'>LOGIN</h1>
        </button>
        {showLoginModal && createPortal(
          <Login onClose={() => setShowLoginModal(false)} />,
          document.body
        )}

        <button className='link--button' onClick={() => setShowSignUpModal(true)}>
          <h1 className='sign--text'>SIGN UP</h1>
        </button>
        {showSignUpModal && createPortal(
          <Sign onClose={() => setShowSignUpModal(false)} />,
          document.body
        )}
      </div>
    </nav>
  );
}