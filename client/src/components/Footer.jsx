// import { useState } from 'react';

// function Footer() {
//   return (
//     <footer>
//       <ButtonGroup variant="text" aria-label="text button group">
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//     </footer>
//   );
// }

// export default Footer;

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../styles/Footer.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b9ffda',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
 
  },
});

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="text" aria-label="text button group" color="primary" className="links">
          <Button><p>Reach <span className="extra">out to me</span></p></Button>
          <Button><p>Read <span className="extra">all about me</span></p></Button>
          <Button><p>Revere <span className="extra">my work</span></p></Button>
        </ButtonGroup>
      </ThemeProvider>
    </Box>
  );
}