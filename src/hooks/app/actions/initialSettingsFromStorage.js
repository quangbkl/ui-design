import getSettingsStorage from './getSettingsStorage';

export default async ({locale, setLocale, i18n, setI18n}) => {
    const settings = await getSettingsStorage();

    const {locale: localeFromStorage} = Object.assign({locale}, settings);

    console.log(localeFromStorage);

    i18n.locale = localeFromStorage;
    setLocale(localeFromStorage);
    setI18n(i18n);
};
