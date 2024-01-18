import '../styles/App.css';
import { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Section() {
    return (
        <>
            <Nav />
            <section>
                <h1>This worked!</h1>
            </section>
            <Footer />
        </>
    );
}

export default Section;