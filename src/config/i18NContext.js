import {useState, useContext, createContext} from 'react';
import {getQueryStringParam} from '../util/LocationUtil.js';

const defaultLocale = getQueryStringParam('locale') || 'en_us';
const defaultState = {currentLocale: defaultLocale};

export const I18NContext = createContext(defaultState);