import {i18n} from '../../../config/i18n.js';
import {useContext} from 'react';
import {I18NContext} from '../../../config/i18NContext.js'

export const NavMenu = ({translationKeys}) => {
    const {currentLocale, changeLocale} = useContext(I18NContext);

    return (
        <ul>
            <li><img src="./logo.png" style={{width: '80px'}} /></li>
            {translationKeys.map( item=> <li>{i18n[currentLocale][item]}</li>)}
        </ul>
    );
};