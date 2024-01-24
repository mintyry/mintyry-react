// mui
import Grid from '@mui/material/Grid';
import '../styles/Home.css';
import Icon from '@mui/material/Icon';
import "@fortawesome/fontawesome-free/css/all.css";
// avatar
import ry from '../assets/selfport.png';
import { motion } from 'framer-motion';

function Home() {
    return (
        // animate page render
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 2, ease: 'easeOut'}}
        >
            <Grid container spacing={1} mt={2}>
                {/* github link */}
                <Grid item id="ghlink" className='floatlink ' xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <a className="noTextDec floatgh" href="https://github.com/mintyry">
                        <div className='circle'>
                            <Icon style={{ fontSize: '2em' }} className="fa-brands fa-github" />
                        </div>
                    </a>
                </Grid>
                {/* minty ry */}
                <Grid item id="homepic" className='ol-b' xs={4}>
                    {/* <img id="logo" src={logo} /> */}
                    <img id="logo" className="logoanimation" src={ry} alt="minty.ry" />
                </Grid>
                {/* linked in */}
                <Grid item id="inlink" className='floatlink2 ' xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <a className="noTextDec" href="https://www.linkedin.com/in/ryaneclarin/">
                        <div className='circle'>
                            <Icon className="fa-brands fa-linkedin-in" />
                        </div>
                    </a>
                </Grid>
                {/* based */}
                <Grid item xs={12} ml={25} mt={5}>
                    <p id="loc">Based: Los Angeles, CA</p>
                </Grid>
            </Grid>
        </motion.div>
    );
}

export default Home;

