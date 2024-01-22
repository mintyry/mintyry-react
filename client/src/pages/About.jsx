import '../styles/About.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';


function About() {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12} md={3} className="selfport" sx={{display:'flex', alignItems:'flex-end'}}>
                    {/* <img src={selfPortrait} /> */}
                    <p style={{backgroundColor: 'black', width: '100%', paddingLeft: '1em'}}> "INWARD" - minty.ry, 7/25/22 </p>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Grid item xs={12}>
                        <h1 style={{ fontFamily: 'Reenie Beanie' }}>H E L L O,</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{
                            display: 'flex',
                            background: 'linear-gradient(to right bottom, rgba(120, 255, 219, 0.4), rgba(255, 168, 229, 0.4))',
                            width: '100%',
                            // height: '55vh',
                            // opacity: '30%',
                            borderRadius: '16px'
                        }}>
                            <p style={{ paddingLeft: "1em", paddingRight: "1em", lineHeight: "2" }} className="whitefont">
                                My name is Ryan, and I also go by Minty.Ry, but you can call me tonight. 😇 I concocted the minty alias when I made my Instagram art account (<a className="noTextDec" href="https://www.instagram.com/minty.ry/">@minty.ry</a>). I enjoy drawing and making art in my free time, but when I really discovered coding, I realized I found a new avenue to make the most minute of thoughts come to life, and I <span className="italic whitefont">love</span> it. I sincerely would say I am a passionate software developer, but how many times have you read that? But lend me your ear, and I'll sing you song <span className="strikeout whitefont">and I'll try not to sing out of key</span> about how much I enjoy developing projects. Really. <Link to="/contact" className="noTextDec">Take me up on the offer</Link>. You might regret it.<br />
                                <br />
                                I graduated from UCLA with a degree in Linguistics Engineering and Analytics (AKA: English), and after quite some time utilizing my education in various fields, I happily fell down the Matrix rabbit hole of software development. I'll have earned my certificate in Full Stack Software Development from UCLA Extension, and am poised to build great applications with a goal of immersion as well as efficiency. This industry has undoubtedly bolstered my nature of being a perpetual learner; there is always more to discover!
                                <br />
                                <br />
                                This portfolio is one of multiple passion-projects of mine that will surely continue to grow. In making this, I devoted hours and hours learning new things that I could implement to try and make something I could be proud of. I would love to say a lot of blood, sweat, and tears went into making this, but if I'm being real, it was only stress, anxiety, and lack of sleep. But this is all to say that I put 110% of myself into this. This is more than just my passion. I put my soul into this.  What you see here is my <a className="noTextDec" style={{ fontFamily: 'Reenie Beanie', fontSize: '1.7rem' }} href="https://en.wikipedia.org/wiki/Magical_objects_in_Harry_Potter#Horcruxes">horcrux</a>.
                            </p>
                        </Box >
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default About;