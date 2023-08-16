import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Styled from 'styled-components';
import { NavMenu } from './components/core/nav';
import { I18NContext } from './config/i18NContext';

const Banner = Styled.div `
    display: flex;
    width: 100vw;
    height: 30rem;
    background: url('./racing.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Nav = Styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
    ul {
      li {
        list-style: none;
        display: inline;
        margin-left: 10rem;
      }
    }
`;


const I18NProvider = ({children}) => {
  const [currentLocale, setCurrentLocale] = useState('en_us');
  const handleLocaleChange = (newLocale) => {
    setCurrentLocale(newLocale);
  }

  return(
    <I18NContext.Provider value={{currentLocale: currentLocale, changeLocale: handleLocaleChange}}>{children}</I18NContext.Provider>
  )
}

function App() {
  
  return (
    <div className="App">
      <header>
        
        <Nav>
        <NavMenu translationKeys={['home','fixtures','podcasts', 'players', 'about']} />
        </Nav>
        <Banner/>
        </header>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
