

import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import '../styles/Home.scss';
import Icon from '@mui/material/Icon';
import "@fortawesome/fontawesome-free/css/all.css";
import logo from '../assets/MINTY.RY.png';


function Home() {

    return (
        <>
            <Grid container spacing={1}>
                {/* github link */}
                <Grid item id="ghlink" className='ol-a float' xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a className="noTextDec" href="https://github.com/mintyry">
                        <div className='circle'>
                            <Icon style={{ fontSize: '2em' }} className="fa-brands fa-github" />
                        </div>
                    </a>
                </Grid>
                {/* minty ry */}
                <Grid item id="homepic" className='ol-b' xs={4}>
                    <img id="logo" src={logo} />
                </Grid>
                {/* linked in */}
                <Grid item id="inlink" className='ol-c float' xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a className="noTextDec" href="https://www.linkedin.com/in/ryaneclarin/">
                        <div className='circle'>
                            <Icon className="fa-brands fa-linkedin-in" />
                        </div>
                    </a>
                </Grid>
                {/* based */}
                <Grid item className='ol-d' xs={12} ml={30}>
                    <p id="loc">Based: Los Angeles, CA</p>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

