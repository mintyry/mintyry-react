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
                            <h1>Welcome...</h1> :
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