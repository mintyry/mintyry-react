import '../styles/Welcome.css';
import { useState, useEffect } from 'react';
import Section from './Section'


function Welcome() {
    // initially setting states to false (dont show)
    const [showMessage, setMessage] = useState(false);
    const [showSection, setShowSection] = useState(false);

    // useEffect: renders content conditionally
    // This one will progress welcome message when app is clicked anywhere.
    useEffect(() => {
        // when this function runs, setMessage state is changed to true, and will display corresponding message.
        function clickWelcome() {
            setMessage(true);
        };
        // event listener on page; when page is clicked, runs clickWelcome()
        document.addEventListener('click', clickWelcome);
        // cleanup function; removes event listener to run clickWelcome()
        return () => {
            document.removeEventListener('click', clickWelcome);
        };
    }, []);//ends useEffect


    // This useEffect is for leading to the next component (Section);
    useEffect(() => {
        // function changes setShowFunction state to true
        function openSection() {
            setShowSection(true);
        };
        // if showMessage is truthy, it will add an event listener
        if (showMessage) {
            document.addEventListener('click', openSection);
            // cleanup fn to remove event listener when component is dismounted
            return () => {
                document.removeEventListener('click', openSection);
            }
        }
        // this dependency ensures that this useeffect runs when showMessage's value changes
    }, [showMessage]);


    const welcome = document.querySelectorAll('svg path');
    for (let i = 0; i < welcome.length; i++) {
        console.log(`letter ${i} is ${welcome[i].getTotalLength()}`);
    }

    // if it showSection is falsy, then show the welcome message...
    //if showMessage is falsy, show Welcome, otherwise, show horcrux line
    //if showSection is truthy, we show Section component.
    return (
        <>
            {
                !showSection
                    ?
                    (
                        !showMessage ?


                            <svg width="470" height="165" viewBox="0 0 470 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="470" height="165" fill="transparent" />
                                <path id="one-w" d="M94.8047 79.1686C94.8047 68.3018 99.7616 103.111 109.261 108.388C122.192 115.572 99.4549 76.9872 115.241 98.2384C120.453 105.254 143.986 118.884 141.556 100.665C140.212 90.5799 135.062 59.7796 123.102 55.7927" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-e" d="M159.396 94.5474C158.895 94.5474 165.07 93.2019 167.12 90.2414C169.677 86.5467 168.559 84.6405 165.855 81.9368C160.421 76.5031 155.217 86.2768 155.09 90.8565C154.864 99.0036 153.541 104.718 159.088 111.498C163.48 116.866 173.469 113.23 175.39 107.466" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-l" d="M185.232 60.714C184.029 51.0846 187.02 80.0762 188.923 89.592C190.439 97.1716 192.233 118.685 195.69 111.772" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-c" d="M217.22 84.0898C217.196 84.2574 213.685 83.9771 212.914 84.705C211.04 86.4756 210.293 89.0877 208.95 91.1983C206.451 95.1256 206.737 100.757 207.344 105.005C209.17 117.787 229.259 106.677 231.369 98.2384" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-o" d="M250.439 84.0898C243.066 84.0898 240.867 98.9889 247.363 102.408C258.448 108.242 256.989 80.1332 251.054 84.0898" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-m" d="M267.663 82.8595C267.663 73.2437 270.274 119.095 275.045 110.747C278.865 104.061 276.171 78.2365 283.384 93.6931C293.103 114.52 293.353 109.312 298.763 90.3781C299.932 86.2835 302.66 108.833 309.494 110.541" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-e-second" d="M323.642 93.9323C345.553 91.4977 320.576 70.8286 319.951 93.3171C319.729 101.314 320.067 107.376 328.427 110.063C332.629 111.414 341.074 111.764 342.712 106.851" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-dot-first" d="M352.554 109.311C352.532 109.515 352.463 110.11 352.554 109.926" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-dot-second" d="M366.703 108.696C361.829 108.696 370.954 109.311 366.088 109.311" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="one-dot-third" d="M379.006 108.696C378.977 108.493 379.098 109.128 379.006 109.311" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            :
                            <h1>to my <strong>horcrux...</strong></h1>
                    )
                    :
                    (
                        <Section />
                    )
            }
        </>
    );
}

export default Welcome;