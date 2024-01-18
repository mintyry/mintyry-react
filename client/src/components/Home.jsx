
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


function Home() {
    // changes body bg color
    document.body.style = 'background: teal;';


    return (
        <>
            <Header />
            <section>
                <h1>This worked!</h1>
            </section>
            <Footer />
        </>
    );
}

export default Home;