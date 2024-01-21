import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../styles/Footer.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b9ffda',
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
          <Link to="/contact" className="noTextDec">
            <Button><p>Reach <span className="extra">out to me</span></p></Button>
          </Link>
          <Link to="/about" className="noTextDec">
            <Button><p>&nbsp;Read <span className="extra">about me</span></p></Button>
          </Link>
          <Link to="/work" className="noTextDec">
            <Button><p>&nbsp;Revere <span className="extra">my work</span></p></Button>
          </Link>
          <Link to="/resume" className="noTextDec">
            <Button><p>Résumé <span className="extra">&nbsp;&nbsp;Review</span></p></Button>
          </Link>
        </ButtonGroup>
      </ThemeProvider>
    </Box>
  );
}