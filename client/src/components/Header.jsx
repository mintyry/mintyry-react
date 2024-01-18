import { useState } from 'react';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div class="container">
        <div class="glitch" data-text="MINTY.RY">MINTY.RY</div>
        <div class="glow">MINTY.RY</div>
        <p class="subtitle">BY RYAN ECLARIN</p>
      </div>
      <div class="scanlines"></div>
    </header>
  );
}


export default Header;