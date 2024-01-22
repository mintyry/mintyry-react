
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';
// import ContactForm from "../components/ContactForm"; 
import { useForm, ValidationError } from '@formspree/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {

    const [state, handleSubmit] = useForm("xkndonev");
    if (state.succeeded) {
        return <p>Thanks for the email! I'll get back to you ASAP.</p>;
    }

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={9} sx={{
                    background: 'linear-gradient(to bottom, rgba(120, 255, 219, 0.8), rgba(255, 255, 255, 0.4))',
                    borderRadius: '16px'
                    }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} sx={{p:'2em'}}>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    fullWidth
                                    color="success"
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
                                    sx={{backgroundColor: '#00bfa5'}}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={3}>
                    <Grid item xs={12}>
                        {/* Phone */}
                    </Grid>
                    <Grid item xs={12}>
                        {/* Email */}
                    </Grid>
                    <Grid item xs={12}>
                        {/* LinkedIn */}
                    </Grid>
                    <Grid item xs={12}>
                        {/* Github */}
                    </Grid>
                    <Grid item xs={12}>
                        {/* Insta */}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Contact;