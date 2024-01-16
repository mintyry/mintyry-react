import '../styles/Welcome.css';
import { useState, useEffect } from 'react';
import Section from './Section'
import anime from 'animejs';

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

                            <svg width="335" height="124" viewBox="0 0 335 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="333.312" height="119.956" transform="translate(0.272461 4.05212) rotate(-0.687487)" fill="transparent" />
                                <path id="one" d="M25.3776 33.3125C15.5062 12.6515 39.8403 76.7859 48.1667 98.1164C53.234 111.098 44.9706 43.48 50.2795 56.3643C53.6845 64.6277 69.0299 113.227 77.3747 112.432C80.1934 112.163 72.7673 76.776 72.4993 75.0815C69.1134 53.67 66.8026 32.7322 65.904 11.1183" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square"/>
                                <path id="two" d="M85.0787 61.8098C85.0736 55.13 85.1101 75.184 85.6644 81.8407C86.6488 93.6615 95.4969 84.4207 102.61 83.3115" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(10,0)" />
                                <path d="M87.8992 74.4572C86.6942 72.7073 99.9316 70.5927 102.599 69.2566" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(10,0)" />
                                <path d="M86.9162 61.1598C86.6156 60.1692 100.379 57.4861 102.373 56.9316" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(10,0)" />

                                <path d="M114.156 54.0036C118.114 55.0057 116.44 82.8327 116.259 86.9591C116.209 88.1061 132.468 84.626 135.91 83.9351" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(20,0)" />
                                <path d="M152.108 59.5969C150.363 62.0759 146.153 53.6891 144.337 60.0953C140.562 73.4109 144.617 92.5665 160.452 84.349" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(30,0)" />
                                <path d="M168.758 59.9087C170.098 58.7136 167.618 64.1192 167.369 65.5918C166.594 70.1871 169.276 89.9469 177.754 80.9844C191.273 66.6923 161.181 57.2024 167.249 64.9913" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(40,0)" />
                                <path d="M187.681 63.1379C185.212 59.9689 192.433 88.1678 191.953 80.6013C191.527 73.9004 182.514 50.295 193.797 64.9712C203.99 78.2298 204.425 88.3112 204.644 64.8549C204.851 42.7518 211.224 83.3305 214.512 87.5517" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(50,0)" />
                                <path d="M219.788 59.2215C219.89 51.3874 221.301 74.8566 222.995 82.5059C224.594 89.7237 234.2 80.8541 238.399 79.1006" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(50,0)" />
                                <path d="M222.394 73.5989C218.329 70.5977 234.484 69.5536 237.094 68.3982" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(50,0)" />
                                <path d="M223.141 60.5164C220.24 58.6649 237.611 53.4914 240.865 52.1781" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(48,0)" />
                                <path d="M257.644 79.7348C256.604 79.6057 256.172 81.2428 255.592 82.1149" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(49,0)" />
                                <path d="M279.484 80.6914C278.186 80.6923 279.123 80.8192 277.647 81.3414" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(40,0)" />
                                <path d="M300.674 79.8104C297.627 79.8127 303.172 80.1208 298.944 79.5955" stroke="#78FFDB" strokeWidth="2" strokeLinecap="square" transform="translate(30,0)" />
                            </svg>


                            // <svg id="text" width="226" height="142" viewBox="0 0 226 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                            //     <rect width="226" height="142" fill="transparent" />
                            //     <path class="one" d="M37 29.3708C37 40.1064 34.8459 87.7937 46 93.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            //     <path class="two" d="M20 29.3708C20 34.3991 27.6326 22.1882 32.5 20.9263C38.2244 19.4422 45.8607 19.0922 48.7778 24.9263C55.5004 38.3716 37.6623 53.8947 26.6111 58.3152C21.9146 60.1938 37.0673 55.972 41.7778 57.8152C49.4205 60.8059 56.863 71.6157 61.5556 77.9263C68.8805 87.7771 79.8053 98.9549 85 83.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            //     <path class="three" d="M86 52.3708C86 57.5841 92.2971 62.5061 97 59.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            //     <path class="four" d="M97 43.3708C97 54.8077 99.9275 122.371 94 122.371" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            //     <path class="five" d="M131 50.3708C119.897 53.1466 145 85.3517 145 63.3708C145 54.7629 135.745 50.3708 128 50.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            //     <path class="six" d="M142 53.3708C142 59.6343 154.67 69.3708 161 69.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            //     <path class="seven" d="M174 54.3708C171.052 54.7393 173.808 66.3725 173.944 65.7597C175.305 59.6363 176.931 50.6133 183.778 48.1486C201.753 41.6775 200.092 65.5089 206 74.3708" stroke="#78ffdb" strokeWidth="3" strokeLinecap="round" />
                            // </svg>
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