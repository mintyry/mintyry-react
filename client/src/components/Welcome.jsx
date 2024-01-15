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

                            <svg id="text" width="226" height="142" viewBox="0 0 226 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="226" height="142" fill="transparent" />
                                <path class="one" d="M37 29.3708C37 40.1064 34.8459 87.7937 46 93.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                                <path class="two" d="M20 29.3708C20 34.3991 27.6326 22.1882 32.5 20.9263C38.2244 19.4422 45.8607 19.0922 48.7778 24.9263C55.5004 38.3716 37.6623 53.8947 26.6111 58.3152C21.9146 60.1938 37.0673 55.972 41.7778 57.8152C49.4205 60.8059 56.863 71.6157 61.5556 77.9263C68.8805 87.7771 79.8053 98.9549 85 83.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                                {/* <path class="three" d="M86 52.3708C86 57.5841 92.2971 62.5061 97 59.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                                <path class="four" d="M97 43.3708C97 54.8077 99.9275 122.371 94 122.371" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                                <path class="five" d="M131 50.3708C119.897 53.1466 145 85.3517 145 63.3708C145 54.7629 135.745 50.3708 128 50.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                                <path class="six" d="M142 53.3708C142 59.6343 154.67 69.3708 161 69.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                                <path class="seven" d="M174 54.3708C171.052 54.7393 173.808 66.3725 173.944 65.7597C175.305 59.6363 176.931 50.6133 183.778 48.1486C201.753 41.6775 200.092 65.5089 206 74.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" /> */}
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