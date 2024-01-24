import '../styles/Header.css';
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";

function Header() {
  return (
    // header containing glitchy name that is linked to home
    <header style={{ paddingTop: "1em" }}>
      <Grid container>
        <Grid item xs={12} sx={{display:'flex', justifyContent:'center'}}>
          {/* links to homepage */}
          <Link to="/home" className="noTextDec">
            <p className="glitch" style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>
              <span style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}} aria-hidden="true">MINTY.RY</span>
              MINTY.RY
              <span style={{ fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}  aria-hidden="true">MINTY.RY</span>
            </p>
          </Link>
        </Grid>
        {/* name */}
        <Grid item xs={12}>
          <p style={{ paddingBottom: "1em" }} className="subtitle">BY RYAN ECLARIN</p>
        </Grid>
      </Grid>

    </header>
  );
}


export default Header;