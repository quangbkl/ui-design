import React, {useEffect, useState} from 'react';
import AppContext from './AppContext';
import I18n from 'i18n/i18n';
import initialI18nFromStorage from './actions/initialI18nFromStorage';
import changeLanguage from './actions/changeLanguage';

const initialState = {
    locale: 'en',
    i18n: I18n
};

const AppProvider = ({children, ...props}) => {
    const [locale, setLocale] = useState(initialState.locale);
    const [i18n, setI18n] = useState(initialState.i18n);

    useEffect(async () => {
        // TODO: update func
        await initialI18nFromStorage(setLocale);
    }, []);

    const value = {
        state: {
            locale,
            i18n
        },
        actions: {
            changeLanguage: changeLanguage(i18n, setI18n)
        }
    };

    console.log(i18n);

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
