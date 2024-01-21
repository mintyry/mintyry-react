import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Welcome.css';
// material ui components
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
    <div className="app">
      {/* HEADER */}
      {/* short circuit to hide header if at root path (Welcome), literally reads: no hiding header and display header component */}
      {!hideHeader && <Header />}

      {/* OUTLET */}
      {/* outlet injects page here */}
      <Container className='content' style={{ paddingBottom: '3rem' }}>
        <Outlet />
      </Container>

      {/* FOOTER/NAV */}
      {/* short circuit to hide header if at root path (Welcome) */}
      {!hideFooterNav &&
        <Box sx={{ position: 'sticky', bottom: 0, left: 0, right: 0 }} elevation={3} marginBottom={5}>
          <BottomNavigation showLabels className='transparent'>
            <Footer />
          </BottomNavigation>
        </Box>
      }
    </div>
  )
}

export default App
