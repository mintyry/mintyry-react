import { useState, useEffect } from 'react'
import './styles/App.css'
import Welcome from './components/Welcome';
import Section from './components/Section';

function App() {

  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    // runs code when state changes
    // function for event
    const clickWelcome = () => {
      setShowPortfolio(true);
    };

    // event listener when user clicks on welcome page
    document.addEventListener('click', clickWelcome);

    return () => {
      document.removeEventListener('click', clickWelcome);
    };

  }, []);//ends useEffect

// display welcome page if showPortfolio is false, when clicked (true), shows Section
  return (
    <>
    {
      !showPortfolio ? ( <Welcome /> ) : (<Section />)
    }
    </>
  )
}

export default App
