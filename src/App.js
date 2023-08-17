import './App.css';
import {useState} from 'react';
import Styled from 'styled-components';
import { NavMenu } from './components/core/nav';
import { defaultState, I18NContext } from './config/i18NContext';

const Banner = Styled.div `
    display: flex;
    width: 100vw;
    height: 30rem;
    margin-bottom: 10rem;
    background: url('./racing.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;


const I18NProvider = ({children}) => {
  const [currentLocale, setCurrentLocale] = useState(defaultState.currentLocale);
  const [i18nConfig] = useState(defaultState.i18nConfig);
  const handleLocaleChange = (newLocale) => {
    setCurrentLocale(newLocale);
  }

  return(
    <I18NContext.Provider value={{currentLocale: currentLocale, changeLocale: handleLocaleChange, i18nConfig: i18nConfig}}>{children}</I18NContext.Provider>
  )
}

function App() {
  
  return (
    <div className="App">
      <I18NProvider>
        <header>
          <NavMenu translationKeys={['home','fixtures','podcasts', 'players', 'about']} />
          <Banner/>
        </header>
      </I18NProvider>
    </div>
  );
}

export default App;
