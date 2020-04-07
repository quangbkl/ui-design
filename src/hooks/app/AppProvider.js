import React, {useEffect, useState} from 'react';
import AppContext from './AppContext';
import I18n from 'i18n/i18n';
import initialSettingsFromStorage from './actions/initialSettingsFromStorage';
import changeLanguage from './actions/changeLanguage';
import {BaseColor, ThemeColor, ThemeModeColor} from 'config/color';

const initialState = {
    locale: 'en',
    i18n: I18n,
    theme: 'orange',
    themeMode: 'light'
};

const AppProvider = ({children, ...props}) => {
    const [locale, setLocale] = useState(initialState.locale);
    const [i18n, setI18n] = useState(initialState.i18n);
    const [theme, setTheme] = useState(initialState.theme);
    const [themeMode, setThemeMode] = useState(initialState.themeMode);

    useEffect(() => {
        initialSettingsFromStorage({locale, setLocale, i18n, setI18n}).catch(console.log);
    }, []);

    const value = {
        state: {
            locale,
            i18n,
            theme,
            color: {
                ...BaseColor,
                ...ThemeColor[theme],
                ...ThemeModeColor[themeMode]
            }
        },
        actions: {
            changeLanguage: changeLanguage({locale, setLocale, i18n, setI18n})
        }
    };

    return (
        <AppContext.Provider value={value}>
            {
                React.Children.map(children, child =>
                    React.cloneElement(child, {...props})
                )
            }
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {};

export default AppProvider;