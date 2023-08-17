import {useContext} from 'react';
import {I18NContext} from '../../../config/i18NContext.js';
import Styled from 'styled-components';

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

export const NavMenu = ({translationKeys}) => {
    const {currentLocale, changeLocale, i18nConfig} = useContext(I18NContext);

    return (
        <Nav>
            <ul>
                <li><img src="./logo.png" style={{width: '80px'}} /></li>
                {translationKeys.map( item=> <li>{i18nConfig[currentLocale][item]}</li>)}
            </ul>
        </Nav>
    );
};