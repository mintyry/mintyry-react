import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Home.scss';
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

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
      {/* short circuit to hide header if at root path (Welcome), literally reads: no hiding header and display header component */}
      {!hideHeader && <Header />}

      {/* outlet injects page here */}
      <Outlet />

      {/* short circuit to hide header if at root path (Welcome) */}
      {!hideFooterNav &&
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} marginBottom={5}>
          <BottomNavigation showLabels className='transparent'>
            <Footer />
          </BottomNavigation>
        </Box>
      }
    </>
  )
}

export default App
