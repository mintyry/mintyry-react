import '../styles/Header.scss';

function Header() {
  return (
    <header style={{paddingTop:"1em"}}>

      <div className="glitch" data-text="MINTY.RY">MINTY.RY</div>
      <div className="glow">MINTY.RY</div>
      <p style={{paddingBottom:"1em"}} className="subtitle">BY RYAN ECLARIN</p>

      <div className="scanlines"></div>
    </header>
  );
}


export default Header;