import setLocaleFromStorage from './setLocaleFromStorage';

export default (i18n, setI18n, setLocale) => async (language) => {
    await setLocaleFromStorage(language);
    i18n.locale = language;
    setLocale(language);
    setI18n(i18n);
}
