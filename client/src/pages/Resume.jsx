import '../styles/About.css';
import resume from '../assets/RyanEclarin_resume24.pdf';
import Box from "@mui/material/Box";

function Resume() {
    return (
        <a href={resume} download>
            <Box sx={{
                display: "flex",
                margin: "auto",
                height: "55vh",
                width: { xs: "55vw" }
            }}>
                <embed
                    src={resume}
                    type="application/pdf"
                    frameBorder="0"
                    scrolling="auto"
                    height="100%%"
                    width="100%"
                 
                ></embed>
            </Box>
        </a>
    );
}

export default Resume;