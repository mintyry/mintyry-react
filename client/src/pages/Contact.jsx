
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';
import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <ContactForm />
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