import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Welcome.css';
// material ui components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Container from "@mui/material/Container";

function App() {
  // using location to read what path/page we are on; states are for hiding header and footer
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooterNav, setHideFooterNav] = useState(false);

  useEffect(() => {
    // if we are on root path (welcome message), hide header and footer
    if (location.pathname === "/") {
      setHideHeader(true);
      setHideFooterNav(true);
    } else {
      setHideHeader(false);
      setHideFooterNav(false);
    }
    // runs when url path changes
  }, [location])

  return (
    <>
      <Grid container>
        {/* HEADER */}
        {/* short circuit to hide header if at root path (Welcome), literally reads: no hiding header and display header component */}
        <Grid item pt={5}>
          {!hideHeader && <Header />}
        </Grid>

        {/* OUTLET */}
        {/* outlet injects page here */}
        <Grid item sx={{width: '100%'}} mb={5}>
          <Container >
            <Outlet />
          </Container>
        </Grid>

        <Grid item sx={{width: '100%'}}>
          {/* FOOTER/NAV */}
          {/* short circuit to hide header if at root path (Welcome) */}
          {!hideFooterNav &&
            <Box >
              <BottomNavigation showLabels className="transparent">
                <Footer />
              </BottomNavigation>
            </Box>
          }
        </Grid>
      </Grid>
    </>
  )
}

export default App
