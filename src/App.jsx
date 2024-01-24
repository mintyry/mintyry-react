import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Footer from './components/Footer';
import AnimCursor from './components/AnimatedCursor';
import Welcome from './pages/Welcome';
import './styles/Welcome.css';
// material ui components
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import Container from "@mui/material/Container";
// framermotion to animate page transitions & custom cursor
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


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
    <AnimCursor />
      {
        !showPortfolio
          ?
          <>
            
            <Welcome />
          </>
          :
          <>
           
            {/* HEADER  */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <Header />
            </motion.div>
            <Grid container>


              {/* UTILITY BELT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <Grid item my={3} sx={{ width: '100vw' }}>
                  <Container id="manual-pad-left">
                    <Ticker />
                  </Container>
                </Grid>
              </motion.div>

              {/* OUTLET */}
              <Grid item sx={{ width: '100%' }} mb={5}>
                <Container >
                  {/* outlet injects page here */}
                  <AnimatePresence location={location} key={location.pathname} mode={'wait'}>
                    <Outlet />
                  </AnimatePresence>
                </Container>
              </Grid>

              <Grid item sx={{ width: '100%' }}>
                {/* FOOTER/NAV */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <Box mb={5}>
                    <BottomNavigation showLabels className="transparent">
                      <Footer id="footer" />
                    </BottomNavigation>
                  </Box>
                </motion.div>
              </Grid>

            </Grid>
          </>
      }
    </>
  )
}

export default App;
