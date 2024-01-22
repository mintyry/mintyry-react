import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Footer from './components/Footer';
import Welcome from './pages/Welcome';
import './styles/Welcome.css';
// material ui components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Container from "@mui/material/Container";

function App() {
  // using location to read what path/page we are on; states are for hiding header and footer
  const location = useLocation();
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowPortfolio(false)
    } else {
      setShowPortfolio(true)
    }
    // runs when url path changes
  }, [location])

  // if location is / only render <Welcome />
  return (
    <>
      {
        !showPortfolio ?
          <Welcome />
          :
          <>
            {/* HEADER  */}
            <Header />
            <Grid container>


              {/* UTILITY BELT */}
              <Grid item my={3} sx={{ width: '100vw' }}>
                <Container id="manual-pad-left">
                  <Ticker />
                </Container>
              </Grid>

              {/* OUTLET */}
              <Grid item sx={{ width: '100%' }} mb={5}>
                <Container >
                  {/* outlet injects page here */}
                  <Outlet />
                </Container>
              </Grid>

              <Grid item sx={{ width: '100%' }}>
                {/* FOOTER/NAV */}
                <Box mb={5}>
                  <BottomNavigation showLabels className="transparent">
                    <Footer />
                  </BottomNavigation>
                </Box>
              </Grid>

            </Grid>
          </>
      }
    </>
  )
}

export default App;
