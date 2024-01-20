import { useState } from 'react';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="glitch" data-text="MINTY.RY">MINTY.RY</div>
        <div className="glow">MINTY.RY</div>
        <p className="subtitle">BY RYAN ECLARIN</p>
      </div>
      <div className="scanlines"></div>
    </header>
  );
}


export default Header;