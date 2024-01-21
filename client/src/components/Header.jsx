import '../styles/Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ paddingTop: "1em" }}>

      {/* <div className="scanlines"></div> */}
      <Link to="/home" className="noTextDec">
        <div className="glitch" data-text="MINTY.RY">MINTY.RY</div>
        <div className="glow">MINTY.RY</div>
      </Link>
      <p style={{ paddingBottom: "1em" }} className="subtitle">BY RYAN ECLARIN</p>

    </header>
  );
}


export default Header;