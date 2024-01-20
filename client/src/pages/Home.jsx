
// import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import '../styles/Home.scss';
// import Box from "@mui/material/Box";
// import BottomNavigation from "@mui/material/BottomNavigation";


// function Home() {
//     // changes body bg color
//     // document.body.style = 'background: teal; ';

//     return (
//         <>
//         {/* header and bottom nav will always be here, outlet will render page */}
//             <Header />

//             <Outlet />

//             <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3} marginBottom={5}>
//                 <BottomNavigation showLabels className='transparent'>
//                     <Footer />
//                 </BottomNavigation>
//             </Box>
//         </>
//     );
// }

// export default Home;