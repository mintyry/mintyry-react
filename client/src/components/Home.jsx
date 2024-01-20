
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Home.scss';
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";


function Home() {
    // changes body bg color
    // document.body.style = 'background: teal; ';


    return (
        <>
            <Header />
            <section>
                <p>hiiiii</p>
            </section>

            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3} className="transparent">
                <BottomNavigation showLabels className='transparent'>
                    <Footer />
                </BottomNavigation>
            </Box>

        </>
    );
}

export default Home;