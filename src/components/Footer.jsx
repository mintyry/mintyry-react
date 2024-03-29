import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../styles/Footer.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

// made a custom mui theme for primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#b9ffda',
    }

  },
});

export default function Footer() {
  return (
    // Component brought in from React
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
      {/* nav links, NavLink is styled to show active link */}
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="text" aria-label="text button group" color="primary" className="links">
          <NavLink to="/contact" className="noTextDec">
            <Button><p>Reach <span className="extra">out to me</span></p></Button>
          </NavLink>
          <NavLink to="/about" className="noTextDec">
            <Button><p>&nbsp;Read <span className="extra">about me</span></p></Button>
          </NavLink>
          <NavLink to="/work" className="noTextDec">
            <Button><p>&nbsp;Revere <span className="extra">my work</span></p></Button>
          </NavLink>
          <NavLink to="/resume" className="noTextDec">
            <Button><p>Résumé <span className="extra">&nbsp;&nbsp;Review</span></p></Button>
          </NavLink>
        </ButtonGroup>
      </ThemeProvider>
    </Box>
  );
}