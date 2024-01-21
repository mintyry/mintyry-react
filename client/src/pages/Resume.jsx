import '../styles/About.css';
import resume from '../assets/RyanEclarin_resume24.pdf';
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <a href={resume} download>
            <Box sx={{
                display: "flex",
                margin: "auto",
                height: { xs: "100vw", md: "70vw", lg: "40vw" },
                width: { xs: "55vw" }
            }}>
                <embed
                    src={resume}
                    type="application/pdf"
                    frameBorder="0"
                    scrolling="auto"
                    height="80%%"
                    width="100%"
                 
                ></embed>
            </Box>
        </a>
    );
}

export default Resume;