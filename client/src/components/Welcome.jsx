import '../styles/Welcome.css';
import { useState, useEffect } from 'react';
import Home from './Home';


function Welcome() {
    // initially setting states to false (dont show)
    const [showMessage, setMessage] = useState(false);
    const [showHome, setShowHome] = useState(false);

    // useEffect: renders content conditionally
    // This one will progress welcome message when app is clicked anywhere.
    useEffect(() => {
        // when this function runs, setMessage state is changed to true, and will display corresponding message.
        function clickWelcome() {
            setMessage(true);
        };
        // event listener on page; when page is clicked, runs clickWelcome()
        document.addEventListener('click', clickWelcome);

        // in case user doesn't click, message still changes after some time
        if (showMessage === false) {
            setTimeout(clickWelcome, 9000);
        }

        // cleanup function; removes event listener to run clickWelcome()
        return () => {
            document.removeEventListener('click', clickWelcome);
        };

    }, []);//ends useEffect


    // This useEffect is for leading to the next component (Home);
    //showmessage is in useEffect, so locally scoped, so if useEffect doesnt run, code cant evaluate 35, 43 allows useEffect to run
    useEffect(() => {
        // function changes setShowFunction state to true

        function openHome() {
            setShowHome(true);
        };

        // if showMessage is truthy, it will add an event listener
        if (showMessage) {
            document.addEventListener('click', openHome);
            // open Home regardless if no click in time
            if (showHome === false) {
                setTimeout(openHome, 12000);
            }
            // cleanup fn to remove event listener when component is dismounted
            return () => {
                document.removeEventListener('click', openHome);
            }
        }
        // this dependency ensures that this useeffect runs when showMessage's value changes
    }, [showMessage]);


    const welcome = document.querySelectorAll('svg path');
    for (let i = 0; i < welcome.length; i++) {
        console.log(`letter ${i} is ${welcome[i].getTotalLength()}`);
    }

    // if it showHome is falsy, then show the welcome message...
    //if showMessage is falsy, show Welcome, otherwise, show horcrux line
    //if showHome is truthy, we show Home component.
    return (
        <>
            {
                !showHome
                    ?
                    (
                        !showMessage
                            ?
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
                            
                            <svg width="519" height="87" viewBox="0 0 519 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="two-t" d="M30.55 17.489C30.55 1.70168 34.5682 49.1506 40.4315 63.8088" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-t-cross" d="M12.6396 48.9865C-3.19998 48.9865 41.747 35.9596 54.6362 26.753" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-o" d="M65.1354 39.7225C59.7932 34.9739 53.9233 69.1769 68.7037 60.5836C75.4623 56.6542 74.592 39.7225 65.753 39.7225" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-m" d="M123.807 39.1049C123.807 35.2996 130.943 78.3595 131.218 63.1912C131.375 54.5656 134.827 47.2195 136.914 39.1049C138.648 32.3609 139.249 45.8605 140.139 48.4032C146.646 66.9947 146.834 63.8194 154.961 46.8249C158.738 38.9292 160.05 70.3764 162.716 65.044" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-y" d="M170.745 47.7513C164.47 47.7513 178.675 60.1033 184.949 60.1033" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-y-cross" d="M189.89 25.5178C190.336 25.0158 189.113 37.9822 188.655 41.3008C187.66 48.517 187.852 56.1146 186.322 63.1912C184.879 69.8629 184.332 90.3978 184.332 83.5719" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-h" d="M241.313 7.40399C239.263 25.8611 249.715 81.0497 249.715 62.479C249.715 57.6755 258.116 41.8373 258.116 44.8363C258.116 49.4815 264.733 64.0029 268.197 53.611" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-o-second" d="M287.52 39.3288C287.091 35.8926 275.322 47.7969 279.959 58.2317C284.723 68.95 297.299 40.1689 286.68 40.1689" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-r" d="M308.524 42.6893C307.882 37.5573 306.805 53.0964 307.73 58.185C309.142 65.9523 308.524 56.3479 308.524 53.6576C308.524 44.6751 315.728 41.0091 323.646 41.0091" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-c" d="M345.679 38.5636C339.494 44.0609 333.689 53.3639 338.048 62.0825C341.412 68.8096 366.841 54.5564 359.32 54.5564" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-r-second" d="M372.961 41.3859C372.961 46.3141 371.813 57.3808 375.678 61.2462C377.53 63.0976 374.372 53.7845 374.372 50.7934C374.372 42.6287 384.697 42.3266 390.835 42.3266" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-u" d="M401.183 43.2674C401.183 36.6564 403.274 61.0895 409.885 61.0895C415.313 61.0895 416.706 45.2012 416.706 41.6211C416.706 36.8025 415.495 51.5186 417.071 56.0721C419.722 63.7291 425.421 58.6657 429.876 56.4379" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-x" d="M436.932 38.0932C436.932 36.0812 439.6 45.3208 440.799 47.3963C445.67 55.8262 453.965 64.1268 463.273 66.7863" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-x-cross" d="M452.454 33.8598C452.454 25.3498 448.725 50.4929 446.078 58.5808C445.313 60.9177 441.303 71.4214 443.047 70.5493" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-dot-first" d="M472.681 63.964C477.029 64.5851 472.491 64.9047 474.092 64.9047" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-dot-second" d="M485.851 64.4344C487.954 62.0684 484.818 69.1777 488.177 65.8194C488.723 65.2736 485.976 65.1246 486.321 64.4344" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                                <path id="two-dot-third" d="M499.492 64.4344C499.431 63.9424 498.541 65.7252 499.022 65.8455" stroke="#A7FFCA" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                    )
                    :
                    (
                        <Home />
                    )
            }
        </>
    );
}

export default Welcome;