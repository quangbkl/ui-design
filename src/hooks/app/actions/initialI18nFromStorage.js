import getLocaleFromStorage from './getLocaleFromStorage';

export default async ({locale, setLocale, i18n, setI18n}) => {
    const value = await getLocaleFromStorage();
    const language = value && typeof value === 'string' ? value : locale;

    i18n.locale = language;
    setLocale(language);
    setI18n(i18n);
};
