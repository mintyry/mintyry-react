import Welcome from './pages/Welcome';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Home.scss';
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

function App() {
  const location = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [hideFooterNav, setHideFooterNav] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setHideHeader(true);
      setHideFooterNav(true);
    } else {
      setHideHeader(false);
      setHideFooterNav(false);
    }
  }, [location])

  return (
    <>
      {/* short circuit to hide header if at root path (Welcome) */}
      {!hideHeader && <Header />}

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
