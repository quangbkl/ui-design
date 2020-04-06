import setSettingsStorage from './setSettingsStorage';
import getSettingsStorage from './getSettingsStorage';

export default ({locale, setLocale, i18n, setI18n}) => async (language) => {
    if (locale !== language) {
        const storageSettings = await getSettingsStorage();
        await setSettingsStorage({...storageSettings, locale: language});
        i18n.locale = language;
        setLocale(language);
        setI18n(i18n);
    }
}
