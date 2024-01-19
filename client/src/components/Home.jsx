
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
// import '../styles/Home.scss';


function Home() {
    // changes body bg color
    // document.body.style = 'background: teal; ';


    return (
        <>
            <Header />
            <section className="ripple-background">
        <h1>This worked!</h1>
        <div className="circle xxlarge shade1"></div>
        <div className="circle xlarge shade2"></div>
        <div className="circle large shade3"></div>
        <div className="circle medium shade4"></div>
        <div className="circle small shade5"></div>
      </section>
            <Footer />
        </>
    );
}

export default Home;