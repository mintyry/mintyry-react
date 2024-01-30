import '../styles/About.css';
import resume from '../assets/RyanEclarin_resume24.pdf';
import Box from "@mui/material/Box";
import { motion } from 'framer-motion';

function Resume() {
    return (
        // animate fade-in for page
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 1, ease: 'easeOut'}}
        >
            {/* linked resume to pdf tab as another option to download. works on mobile, which doesnt have pdf controls */}
            <a href={resume} download>
                <Box sx={{
                    display: "flex",
                    margin: "auto",
                    height: { xs: "100%", md:"55vh" },
                    width: { xs: "100%", md: "55vw" }
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
        </motion.div>
    );
}

export default Resume;