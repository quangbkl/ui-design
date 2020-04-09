import setSettingsStorage from './setSettingsStorage';

export default ({locale, setLocale, i18n, setI18n}) => async language => {
    if (locale !== language) {
        await setSettingsStorage({locale: language});
        i18n.locale = language;
        setLocale(language);
        setI18n(i18n);
    }
};
