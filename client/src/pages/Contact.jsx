

// import ContactForm from "../components/ContactForm"; 
import { useForm, ValidationError } from '@formspree/react';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/Contact.css';
import Icon from '@mui/material/Icon';
import "@fortawesome/fontawesome-free/css/all.css";
import { motion } from 'framer-motion';

function Contact() {
    const [state, handleSubmit] = useForm("myyrkwyy");
    // when email submitted, still render links, otherwise they all go away
    if (state.succeeded) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={9}>
                        <p>Thanks for the email! I'll get back to you ASAP.<br />
                            Please continue to explore my portfolio via MINTY.RY at the to or the navigation at the bottom.</p>
                    </Grid>
                    <Grid container item xs={3} bgcolor='primary' sx={{ paddingLeft: '0px !important', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} className="flexCenter">
                            {/* LinkedIn */}
                            <a className="noTextDec" href="https://www.linkedin.com/in/ryaneclarin/">
                                <div className='circle'>
                                    <Icon className="fa-brands fa-linkedin-in" />
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} className="flexCenter">
                            {/* Github */}
                            <a className="noTextDec" href="https://github.com/mintyry">
                                <div className='circle'>
                                    <Icon style={{ fontSize: '2em' }} className="fa-brands fa-github" />
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} className="flexCenter">
                            {/* IG */}
                            <a className="noTextDec" href="https://www.instagram.com/minty.ry/">
                                <div className='circle'>
                                    <Icon style={{ fontSize: '2em' }} className="fa-brands fa-instagram" />
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} className="flexCenter">
                            {/* Twitter? */}
                            <a className="noTextDec" href="http://tinyurl.com/trkm7az9">
                                <div className='circle'>
                                    <Icon className="fa-brands fa-twitter" />
                                </div>
                            </a>
                        </Grid>
                        <Grid item xs={12} className="flexCenter">
                            {/* Voicemail */}
                            <a className="noTextDec" href="tel:818-970-2838">
                                <div className='circle'>
                                    <Icon baseClassName="fas" className="fa-phone-volume" />
                                </div>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </motion.div>
        )
    }

    // de-facto page pre-contact form submission
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* left side form, right side links to other platforms */}
            <Grid container spacing={1}>
                <Grid item xs={9} sx={{
                    background: 'linear-gradient(to bottom, rgba(120, 255, 219, 0.8), rgba(255, 255, 255, 0.4))',
                    borderRadius: '16px'
                }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{ p: '2em' }}>
                            <Grid item xs={6}>
                                <TextField
                                    id="name"
                                    type="input"
                                    name="name"
                                    label="Name"
                                    fullWidth
                                    color="success"
                                    className="transparent"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="email"
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    fullWidth
                                    color="success"
                                    className="transparent"
                                    required
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="filled-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    defaultValue="Send me an email me here!"
                                    variant="filled"
                                    fullWidth
                                    name="message"
                                    color="success"
                                    className="transparent"
                                    required
                                />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    disabled={state.submitting}
                                    variant="contained"
                                    sx={{ backgroundColor: '#00bfa5' }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>

                {/* links to other platforms */}
                <Grid container item xs={3} bgcolor='primary' sx={{ paddingLeft: '0px !important', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} className="flexCenter">
                        {/* LinkedIn */}
                        <a className="noTextDec" href="https://www.linkedin.com/in/ryaneclarin/">
                            <div className='circle'>
                                <Icon className="fa-brands fa-linkedin-in" />
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} className="flexCenter">
                        {/* Github */}
                        <a className="noTextDec" href="https://github.com/mintyry">
                            <div className='circle'>
                                <Icon style={{ fontSize: '2em' }} className="fa-brands fa-github" />
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} className="flexCenter">
                        {/* IG */}
                        <a className="noTextDec" href="https://www.instagram.com/minty.ry/">
                            <div className='circle'>
                                <Icon style={{ fontSize: '2em' }} className="fa-brands fa-instagram" />
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} className="flexCenter">
                        {/* Twitter? */}
                        <a className="noTextDec" href="http://tinyurl.com/trkm7az9">
                            <div className='circle'>
                                <Icon className="fa-brands fa-twitter" />
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} className="flexCenter">
                        {/* Voicemail */}
                        <a className="noTextDec" href="tel:818-970-2838">
                            <div className='circle'>
                                <Icon baseClassName="fas" className="fa-phone-volume" />
                            </div>
                        </a>
                    </Grid>
                </Grid>
            </Grid >
        </ motion.div>
    );
}

export default Contact;