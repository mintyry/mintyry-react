import '../styles/About.css';
import Box from "@mui/material/Box";

function About() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                background: 'linear-gradient(to right bottom, #78ffdb, #ffa8e5)',
                padding: 'auto',
                width: '100%',
                height: '55vh',
                opacity: '30%',
                borderRadius: '16px'
            }}>

                <p className="test">Hi!</p>

            </Box>

        </>
    );
}

export default About;