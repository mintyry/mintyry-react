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

      <ButtonGroup variant="text" aria-label="text button group" id="linkColor">
        <Button>Reach</Button>
        <Button>Read</Button>
        <Button>Relish</Button>
      </ButtonGroup>
    </Box>
  );
}