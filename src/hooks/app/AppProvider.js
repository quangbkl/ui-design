import React, {useEffect, useState} from 'react';
import AppContext from './AppContext';
import I18n from 'i18n/i18n';
import initialSettingsFromStorage from './actions/initialSettingsFromStorage';
import changeLanguage from './actions/changeLanguage';
import changeTheme from './actions/changeTheme';
import changeThemeMode from './actions/changeThemeMode';
import {BaseColor, ThemeColor, ThemeModeColor} from 'config/color';
import {ThemeModeConstant} from 'config/constant';

const initialState = {
    locale: 'en',
    i18n: I18n,
    theme: 'orange',
    themeMode: ThemeModeConstant.THEME_MODE_LIGHT
};

const AppProvider = ({children, ...props}) => {
    const [locale, setLocale] = useState(initialState.locale);
    const [i18n, setI18n] = useState(initialState.i18n);
    const [theme, setTheme] = useState(initialState.theme);
    const [themeMode, setThemeMode] = useState(initialState.themeMode);

    useEffect(() => {
        initialSettingsFromStorage({
            locale,
            setLocale,
            i18n,
            setI18n,
            theme,
            setTheme,
            themeMode,
            setThemeMode
        }).catch(console.log);
    }, []);

    const value = {
        state: {
            locale,
            i18n,
            theme,
            themeMode,
            color: {
                ...BaseColor,
                ...ThemeColor[theme],
                ...ThemeModeColor[themeMode]
            }
        },
        actions: {
            changeLanguage: changeLanguage({locale, setLocale, i18n, setI18n}),
            changeTheme: changeTheme({theme, setTheme}),
            changeThemeMode: changeThemeMode({themeMode, setThemeMode})
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
