import setLocaleFromStorage from './setLocaleFromStorage';

export default ({locale, setLocale, i18n, setI18n}) => async (language) => {
    if (locale !== language) {
        await setLocaleFromStorage(language);
        i18n.locale = language;
        setLocale(language);
        setI18n(i18n);
    }
}
