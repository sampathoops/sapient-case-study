import {useState, useContext, createContext} from 'react';
import {getQueryStringParam} from '../util/LocationUtil.js';
import {i18n} from './i18n.js';

export const defaultLocale = getQueryStringParam('locale') || 'en_us';
export const defaultState = {currentLocale: defaultLocale, i18nConfig: i18n};
export const I18NContext = createContext(defaultState);
