

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../styles/Work.css'


function Work() {
    return (

        <Grid container spacing={1}>
            <Grid item xs={12} md={4}  >
                <Box p={2} className='pics'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequatur expedita officiis. Sit neque ducimus omnis error harum, beatae reiciendis quo consequuntur aliquam unde ab nemo quis sequi, dolor facilis.
                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={8} >
                <Box p={2} className='description' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas provident dicta, eveniet excepturi modi atque. Quia odit nihil iusto labore consectetur quisquam, suscipit, nobis, quaerat ducimus fugiat laborum hic.</p>
                </Box>

            </Grid>

        </Grid>

    );
};

export default Work;